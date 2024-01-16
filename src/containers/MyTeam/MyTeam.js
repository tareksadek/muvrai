import React, {
  useEffect, useState, lazy, Suspense,
} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Header from '../../layout/Header'
import LoadingBackdrop from '../../components/Loading/LoadingBackdrop'
import SkeletonContainer from '../../layout/SkeletonContainer'
import PageTitle from '../../layout/PageTitle'
import Alert from '../../layout/Alert'
import InfoBox from '../../components/Ui/InfoBox'

import { useAuth } from '../../hooks/use-auth'
import { useLanguage } from '../../hooks/useLang'
import { useColor } from '../../hooks/useDarkMode'

import { getCounterById } from '../../API/counter'
import { updateAccountActivity } from '../../API/users'
import { updateProfileActivity } from '../../API/cards'

import { layoutStyles } from '../../theme/layout'
import { buttonStyles } from '../../theme/buttons'
import { connectionsStyles } from './styles'

import { TEAM_MEMBERS_PER_PAGE } from '../../utilities/appVars'

import * as actions from '../../store/actions'

const SearchMyTeam = lazy(() => import('../../components/MyTeam/SearchMyTeam'))
const SortMyTeam = lazy(() => import('../../components/MyTeam/SortMyTeam'))
const MyTeamList = lazy(() => import('../../components/MyTeam/MyTeamList'))
const TeamMemberConnections = lazy(() => import('../../components/MyTeam/TeamMemberConnections'))
const TeamMemberFollowers = lazy(() => import('../../components/MyTeam/TeamMemberFollowers'))
const TeamMemberFollowing = lazy(() => import('../../components/MyTeam/TeamMemberFollowing'))
const TeamMemberAnalytics = lazy(() => import('../../components/MyTeam/TeamMemberAnalytics'))

const MyTeam = ({
  cardData, teamMembers, onLoadTeamMembers, onSortTeamMembers, onLoadCard, switchTheme, links, onSetNotification, onToggleTeamMemberProfileActivity,
}) => {
  const layoutClasses = layoutStyles()
  const buttonClasses = buttonStyles()
  const classes = connectionsStyles()
  const auth = useAuth()
  const color = useColor()
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.myTeam

  const [loadingDone, setLoadingDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState(pageStatics.messages.loading.loadingTeamMembers)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchedTeamMembers, setSearchedTeamMembers] = useState(null)
  const [connectionsDialogOpen, setConnectionsDialogOpen] = useState(window.location.hash === '#tmconnect')
  const [followersDialogOpen, setFollowersDialogOpen] = useState(window.location.hash === '#tmfollowers')
  const [followingDialogOpen, setFollowingDialogOpen] = useState(window.location.hash === '#tmfollowing')
  const [memberName, setMemberName] = useState(null)
  const [memberConnections, setMemberConnections] = useState(null)
  const [memberFollowers, setMemberFollowers] = useState(null)
  const [memberFollowing, setMemberFollowing] = useState(null)
  const [teamMemberAnalyticsDialogOpen, setTeamMemberAnalyticsDialogOpen] = useState(window.location.hash === '#tmanalytics')
  const [teamMemberAnalytics, setTeamMemberAnalytics] = useState(null)
  const [isTeamReport, setIsTeamReport] = useState(false)

  useEffect(() => {
    let mounted = true

    if (mounted && !cardData.userId) {
      (async () => {
        setLoading(true)
        await onLoadCard(auth.user.uid)
        setLoadingDone(true)
        setTimeout(() => setLoading(false), 1000)
      })()
    }

    return () => { mounted = false }
  }, [onLoadCard, auth.user.uid, cardData.userId])

  useEffect(() => {
    let mounted = true

    if (mounted && !teamMembers) {
      (async () => {
        setLoading(true)
        await onLoadTeamMembers(auth.invitationCode)
        onSortTeamMembers('asc', 'firstName')
        setLoadingDone(true)
        setTimeout(() => setLoading(false), 1000)
      })()
    }

    return () => { mounted = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSortTeamMembers, switchTheme, auth.invitationCode, onLoadTeamMembers])

  useEffect(() => {
    if (window.localStorage.getItem('originalTheme')) {
      switchTheme(window.localStorage.getItem('originalTheme'))
    }
  }, [switchTheme])

  useEffect(() => {
    const onHashChange = () => {
      setConnectionsDialogOpen(window.location.hash === '#tmconnect')
      setFollowersDialogOpen(window.location.hash === '#tmfollowers')
      setFollowingDialogOpen(window.location.hash === '#tmfollowing')
      setTeamMemberAnalyticsDialogOpen(window.location.hash === '#tmanalytics')
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const pageMyTeam = pageNumber => {
    let teamMembersInPage

    if (searchedTeamMembers) {
      return searchedTeamMembers
    }

    if (teamMembers) {
      teamMembersInPage = teamMembers.slice(((pageNumber - 1) * (TEAM_MEMBERS_PER_PAGE)), ((pageNumber) * (TEAM_MEMBERS_PER_PAGE)))
    }

    return teamMembersInPage
  }

  const searchTeamMembersHandler = searchKeyword => {
    const searchFor = searchKeyword.toLowerCase()

    if (searchFor.length >= 3) {
      setSearchedTeamMembers(teamMembers.filter(teamMemberCard => {
        const searchName = `${teamMemberCard.firstName} ${teamMemberCard.lastName}`
        const searchEmail = teamMemberCard.email
        const searchPhone = teamMemberCard.workPhone
        if (searchName.toLowerCase().includes(searchFor) || searchEmail.toLowerCase().includes(searchFor) || searchPhone.includes(searchFor)) {
          return true
        }

        return false
      }))
    } else {
      setSearchedTeamMembers(null)
      setCurrentPage(1)
    }

    return false
  }

  const clearSearchHandler = () => {
    setSearchedTeamMembers(null)
  }

  const paginationChangeHandler = (e, page) => {
    setCurrentPage(page)
    pageMyTeam(page)
  }

  const sortMyTeam = (value, type) => {
    onSortTeamMembers(value, type)
  }

  const openConnectionsDialogHandler = teamMember => {
    setMemberConnections(teamMember.connections)
    setMemberName(`${teamMember.firstName} ${teamMember.lastName}`)
    window.location.hash = '#tmconnect'
  }

  const closeConnectionsDialogHandler = () => {
    window.history.back()
  }

  const openTeamMemberAnalyticsDialogHandler = async teamMember => {
    const teamMemberData = { ...teamMember }

    if (!loading) {
      setLoading(true)
      setLoadingMessage(pageStatics.messages.loading.loadingAnalytics)
      setLoadingDone(false)
    }

    try {
      if (!teamMember.isTeamReport) {
        const counter = await getCounterById(teamMemberData.userId)
        teamMemberData.addedToContacts = counter.clickedNo || 0
      }
      setTeamMemberAnalytics({
        ...teamMemberData,
        ...(!teamMember.isTeamReport && { links: cardData.teamData.links || null }),
      })
      setMemberName(`${teamMemberData.firstName || ''} ${teamMemberData.lastName || ''}`)
      window.location.hash = '#tmanalytics'
    } catch (err) {
      throw new Error(err)
    }

    setLoadingDone(true)
    setTimeout(() => setLoading(false), 1000)
  }

  const closeTeamMemberAnalyticsDialogHandler = () => {
    window.history.back()
  }

  const generateTeamReport = async () => {
    setLoadingDone(false)
    setLoading(true)
    setLoadingMessage(pageStatics.messages.loading.loadingAnalytics)
    setIsTeamReport(true)
    let teamReport = {}
    let totalAddedToContacts = 0
    let totalFollowers = 0
    let totalFollowing = 0
    const exisitingLinks = links.map(link => ({
      clicked: 0,
      link: link.link,
      platform: link.platform,
      active: link.active,
    }))
    for (let i = 0; i < teamMembers.length; i += 1) {
      try {
        /* eslint-disable no-await-in-loop */
        const counter = await getCounterById(teamMembers[i].userId)
        totalAddedToContacts += counter.clickedNo
        totalFollowers += teamMembers[i].followers ? teamMembers[i].followers.length : 0
        totalFollowing += teamMembers[i].following ? teamMembers[i].following.length : 0

        const memberLinks = cardData.teamData.links || null
        exisitingLinks.forEach(masterlink => {
          const masterlinkAlias = masterlink
          if (memberLinks) {
            const memberLink = memberLinks.find(l => l.link === masterlinkAlias.link)
            let clickedNu = memberLink.memberClicks.reduce((accumulator, clickObject) => accumulator + clickObject.clicked, 0)
            // let clickedNu = memberLink.memberClicks.find(c => c.link === masterlinkAlias.link)?.clicked || 0
            if (clickedNu === 'undefined') {
              clickedNu = 0
            }
            masterlinkAlias.clicked = clickedNu
          } else {
            masterlinkAlias.clicked = 0
          }
        })
      } catch (err) {
        throw new Error(err)
      }
    }

    teamReport = {
      isTeamReport: true,
      firstName: 'Team',
      lastName: '',
      addedToContacts: totalAddedToContacts,
      followers: [...Array(totalFollowers)],
      following: [...Array(totalFollowing)],
      links: exisitingLinks,
    }

    await openTeamMemberAnalyticsDialogHandler(teamReport)
  }

  const sortMemberConnections = (sortValue, sortType) => {
    let newConnections = null
    if (memberConnections) {
      newConnections = [...memberConnections].sort((a, b) => {
        const comp1 = sortType === 'date' ? a.addedOn.seconds : String(a[sortType]).toLowerCase()
        const comp2 = sortType === 'date' ? b.addedOn.seconds : String(b[sortType]).toLowerCase()
        const arg1 = sortValue === 'desc' ? comp1 > comp2 : comp1 < comp2
        const arg2 = sortValue === 'asc' ? comp2 > comp1 : comp2 < comp1
        if (arg1) {
          return 1
        }
        if (arg2) {
          return -1
        }
        return 0
      })
    }
    setMemberConnections(newConnections)
  }

  const openFollowersDialogHandler = teamMember => {
    setMemberFollowers(teamMember.followers)
    setMemberName(`${teamMember.firstName} ${teamMember.lastName}`)
    window.location.hash = '#tmfollowers'
  }

  const closeFollowersDialogHandler = () => {
    window.history.back()
  }

  const sortMemberFollowers = (sortValue, sortType) => {
    let newFollowers = null
    if (memberFollowers) {
      newFollowers = [...memberFollowers].sort((a, b) => {
        const comp1 = sortType === 'date' ? a.addedOn.seconds : String(a[sortType]).toLowerCase()
        const comp2 = sortType === 'date' ? b.addedOn.seconds : String(b[sortType]).toLowerCase()
        const arg1 = sortValue === 'desc' ? comp1 > comp2 : comp1 < comp2
        const arg2 = sortValue === 'asc' ? comp2 > comp1 : comp2 < comp1
        if (arg1) {
          return 1
        }
        if (arg2) {
          return -1
        }
        return 0
      })
    }
    setMemberFollowers(newFollowers)
  }

  const openFollowingDialogHandler = teamMember => {
    setMemberFollowing(teamMember.following)
    setMemberName(`${teamMember.firstName} ${teamMember.lastName}`)
    window.location.hash = '#tmfollowing'
  }

  const closeFollowingDialogHandler = () => {
    window.history.back()
  }

  const sortMemberFollowing = (sortValue, sortType) => {
    let newFollowing = null
    if (memberFollowing) {
      newFollowing = [...memberFollowing].sort((a, b) => {
        const comp1 = sortType === 'date' ? a.addedOn.seconds : String(a[sortType]).toLowerCase()
        const comp2 = sortType === 'date' ? b.addedOn.seconds : String(b[sortType]).toLowerCase()
        const arg1 = sortValue === 'desc' ? comp1 > comp2 : comp1 < comp2
        const arg2 = sortValue === 'asc' ? comp2 > comp1 : comp2 < comp1
        if (arg1) {
          return 1
        }
        if (arg2) {
          return -1
        }
        return 0
      })
    }
    setMemberFollowing(newFollowing)
  }

  const toggleProfileActivityHandler = async (profileId, activeState) => {
    const confirmBox = !activeState ? window.confirm(pageStatics.messages.notifications.confirmDeactivate) : true
    if (confirmBox) {
      setLoadingDone(false)
      setLoading(true)
      setLoadingMessage(pageStatics.messages.loading.processing)
      try {
        await updateAccountActivity(profileId, activeState)
        await updateProfileActivity(profileId, activeState)
        onToggleTeamMemberProfileActivity(profileId, activeState)
        onSetNotification({
          message: activeState ? pageStatics.messages.notifications.activateProfileSuccess : pageStatics.messages.notifications.deactivateProfileSuccess,
          type: 'success',
        })
      } catch (err) {
        onSetNotification({
          message: activeState ? pageStatics.messages.notifications.activateProfileError : pageStatics.messages.notifications.deactivateProfileError,
          type: 'error',
        })
      }
      setLoadingDone(true)
      setTimeout(() => setLoading(false), 1000)
      setLoadingMessage(pageStatics.messages.loading.loadingTeamMembers)
    }
  }

  if (loading) {
    return <LoadingBackdrop done={loadingDone} loadingText={loadingMessage} />
  }

  return (
    <Box className={layoutClasses.pageContainer}>
      <Header title={pageStatics.data.titles.page}>
        <Box>
          <InfoBox infoList={[pageStatics.messages.info.general.title]} />
        </Box>
      </Header>
      <Box className={layoutClasses.contentContainer}>
        <Box className={layoutClasses.formContainer}>
          {(teamMembers && teamMembers.length > 0) ? (
            <Box className={`${layoutClasses.panel}`}>
              <PageTitle
                title={pageStatics.data.titles.panel}
              />
              <Box mb={2}>
                <Typography variant="body1" align="left" component="p" className={layoutClasses.panelText}>
                  {pageStatics.messages.info.general.first}
                </Typography>
              </Box>
              <Suspense fallback={(
                <SkeletonContainer list={[
                  { variant: 'rect', fullWidth: true },
                ]}
                />
              )}
              >
                <SearchMyTeam onSearch={searchTeamMembersHandler} onClear={clearSearchHandler} />
              </Suspense>
              <Suspense fallback={(
                <SkeletonContainer list={[
                  { variant: 'rect', width: '20%' },
                  { variant: 'rect', width: '20%' },
                  { variant: 'rect', width: '20%' },
                  { variant: 'rect', width: '20%' },
                ]}
                />
              )}
              >
                <SortMyTeam onSort={sortMyTeam} />
              </Suspense>
              <Suspense fallback={(
                <SkeletonContainer list={[
                  { variant: 'circle', width: 50, height: 50 },
                  { variant: 'rect', fullWidth: true, height: 150 },
                  { variant: 'circle', width: 50, height: 50 },
                  { variant: 'rect', fullWidth: true, height: 150 },
                  { variant: 'circle', width: 50, height: 50 },
                  { variant: 'rect', fullWidth: true, height: 150 },
                ]}
                />
              )}
              >
                <MyTeamList
                  teamMembers={pageMyTeam(currentPage)}
                  onOpenConnectionsDialog={openConnectionsDialogHandler}
                  onOpenFollowersDialog={openFollowersDialogHandler}
                  onOpenFollowingDialog={openFollowingDialogHandler}
                  onOpenTeamMemberAnalyticsDialog={openTeamMemberAnalyticsDialogHandler}
                  onToggleProfileActivity={toggleProfileActivityHandler}
                  connectionsCount={memberConnections ? memberConnections.length : 0}
                  followersCount={memberFollowers ? memberFollowers.length : 0}
                  followingCount={memberFollowing ? memberFollowing.length : 0}
                />
              </Suspense>
              {(teamMembers && teamMembers.length > 0 && !searchedTeamMembers) && (
                <Box mt={1} mb={2}><Pagination count={Math.ceil(teamMembers.length / TEAM_MEMBERS_PER_PAGE)} variant="outlined" onChange={paginationChangeHandler} /></Box>
              )}
            </Box>
          ) : (
            <Alert
              title={pageStatics.messages.info.noTeamMembers.title}
              description={pageStatics.messages.info.noTeamMembers.first}
              type="warning"
            />
          )}
          <Box className={classes.editButtonContainer}>
            <Button
              color="secondary"
              onClick={() => generateTeamReport()}
              className={buttonClasses.defaultButton}
              style={{
                backgroundColor: color.color.code,
                minWidth: '250px',
                width: '100%',
              }}
            >
              {pageStatics.buttons.teamReport}
            </Button>
          </Box>
        </Box>
        <Suspense fallback={(
          <SkeletonContainer list={[
            { variant: 'rect', fullWidth: true, height: 150 },
          ]}
          />
        )}
        >
          <TeamMemberAnalytics
            open={teamMemberAnalyticsDialogOpen}
            onClose={closeTeamMemberAnalyticsDialogHandler}
            memberName={memberName}
            memberAnalytics={teamMemberAnalytics}
            isTeamReport={isTeamReport}
          />
        </Suspense>
        <Suspense fallback={(
          <SkeletonContainer list={[
            { variant: 'rect', fullWidth: true, height: 150 },
          ]}
          />
        )}
        >
          <TeamMemberConnections
            open={connectionsDialogOpen}
            onClose={closeConnectionsDialogHandler}
            connections={memberConnections}
            memberName={memberName}
            onSortConnections={sortMemberConnections}
          />
        </Suspense>
        <Suspense fallback={(
          <SkeletonContainer list={[
            { variant: 'rect', fullWidth: true, height: 150 },
          ]}
          />
        )}
        >
          <TeamMemberFollowers
            open={followersDialogOpen}
            onClose={closeFollowersDialogHandler}
            followers={memberFollowers}
            memberName={memberName}
            onSortFollowers={sortMemberFollowers}
          />
        </Suspense>
        <Suspense fallback={(
          <SkeletonContainer list={[
            { variant: 'rect', fullWidth: true, height: 150 },
          ]}
          />
        )}
        >
          <TeamMemberFollowing
            open={followingDialogOpen}
            onClose={closeFollowingDialogHandler}
            following={memberFollowing}
            memberName={memberName}
            onSortFollowing={sortMemberFollowing}
          />
        </Suspense>
      </Box>
    </Box>
  )
}

const mapStateToProps = state => ({
  cardData: state.cards,
  teamMembers: state.teamMembers.teamMembers,
  links: state.cards.links,
})

const mapDispatchToProps = dispatch => ({
  onLoadCard: userId => dispatch(actions.loadCardByUserId(userId)),
  onLoadTeamMembers: masterId => dispatch(actions.loadTeamMembers(masterId)),
  onSortTeamMembers: (value, type) => dispatch(actions.sortTeamMembers(value, type)),
  onSetNotification: notification => dispatch(actions.setNotification(notification)),
  onToggleTeamMemberProfileActivity: (profileId, active) => dispatch(actions.toggleTeamMemberProfileActivity(profileId, active)),
})

MyTeam.defaultProps = {
  cardData: null,
  teamMembers: null,
  links: null,
}

MyTeam.propTypes = {
  onLoadCard: PropTypes.func.isRequired,
  switchTheme: PropTypes.func.isRequired,
  onSortTeamMembers: PropTypes.func.isRequired,
  onLoadTeamMembers: PropTypes.func.isRequired,
  onSetNotification: PropTypes.func.isRequired,
  onToggleTeamMemberProfileActivity: PropTypes.func.isRequired,
  teamMembers: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  cardData: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTeam)
