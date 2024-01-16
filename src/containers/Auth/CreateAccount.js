import React, {
  useEffect, useState,
} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import firebase from 'firebase/app'
import 'firebase/auth'

import { useHistory } from 'react-router-dom'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import HomeIcon from '@material-ui/icons/Home'
// import FilterNoneIcon from '@material-ui/icons/FilterNone'
import { Logo } from '../../layout/CustomIcons'

import LoadingBackdrop from '../../components/Loading/LoadingBackdrop'

import {
  createUserCard, disableChildInvitationInParent,
} from '../../API/cards'
import {
  updateLoginDates, updateUserSettings, deleteUserById,
} from '../../API/users'
import { getInvitationByCode, disableInvitation, disableChildInvitation } from '../../API/invitations'

import { useAuth } from '../../hooks/use-auth'
import { useLanguage } from '../../hooks/useLang'

import { breakName } from '../../utilities/utils'
import { settings } from '../../utilities/appVars'

import * as actions from '../../store/actions'
import * as vars from '../../utilities/appVars'

import { buttonStyles } from '../../theme/buttons'
import { layoutStyles } from '../../theme/layout'
import { authStyles } from './styles'

const CreateAccount = ({
  onSetNotification, status, store, onCheckInvitation, code, isInvitationUsed, invitationType, parentInvitation, childInvitations, masterId,
}) => {
  const auth = useAuth()
  const history = useHistory()
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.auth

  const layoutClasses = layoutStyles()
  const buttonClasses = buttonStyles()
  const authClasses = authStyles()

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        fullLabel: pageStatics.buttons.createAccountWithEmail,
      },
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        fullLabel: pageStatics.buttons.createAccountWithGoogle,
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  }

  const [loading, setLoading] = useState(false)
  const invitationCode = window.localStorage.getItem('invitationCode')

  useEffect(() => {
    let mounted = true
    if (mounted) {
      (async () => {
        try {
          let currentStatus = status
          let invitationStore = store
          if (settings.onlyInvitations) {
            if (!invitationCode) {
              history.push('/')
            }
            let storageStatus = null
            if (!currentStatus && invitationCode) {
              storageStatus = await onCheckInvitation(invitationCode.trim())
              invitationStore = storageStatus.store
              currentStatus = storageStatus.invitationStatus
              if (currentStatus === 'invalid') {
                history.push('/')
              }
            }

            if ((auth.authStatus === 'loggedin' || auth.authStatus === 'blocked') && auth.user && !auth.userExist && currentStatus !== 'valid') {
              setLoading(true)
              if (auth.user) {
                await deleteUserById(auth.user.uid)
                await auth.user.delete()
                window.localStorage.removeItem('package')
                window.localStorage.removeItem('accountType')
                window.localStorage.removeItem('invitationCode')
                window.localStorage.removeItem('patch')
                window.localStorage.removeItem('defaultForm')
              }
              setLoading(false)
            }
          }

          const invitationCheck = settings.onlyInvitations ? currentStatus === 'valid' : true

          if (auth.authStatus === 'loggedin' && auth.user && !auth.userExist && invitationCheck) {
            setLoading(true)
            const userNameObj = breakName(auth.user.displayName)

            const profileData = {
              firstName: userNameObj.firstName,
              lastName: userNameObj.lastName,
              userId: auth.user.uid,
              defaultId: auth.user.uid,
              email: auth.user.email,
              urlSuffix: auth.userUrlSuffix,
              organization: null,
              logo: null,
              career: null,
              settings: null,
              defaultLinksToTheme: false,
              links: null,
              socialLinksOrder: null,
              store: invitationStore || null,
            }
            const invitationData = {
              method: 'invitation',
              code,
              parentInvitation,
              childInvitations,
              masterId,
            }
            await createUserCard(
              profileData,
              settings.onlyInvitations ? invitationData : null,
              auth.accountSecret,
              null,
            )
            await updateUserSettings(auth.user.uid, 'ONE', null)
            await updateLoginDates(auth.user.uid)

            if (settings.onlyInvitations) {
              await disableInvitation(code, auth.user.uid)

              if (invitationType === 'child') {
                const parentInvitationData = await getInvitationByCode(parentInvitation)
                const parentCardId = parentInvitationData.usedBy
                await disableChildInvitationInParent(parentCardId, code, auth.user.uid)
                await disableChildInvitation(parentInvitation, code, auth.user.uid)
              }
            }

            setLoading(false)
            if ((!auth.isSubscriber || auth.subscriberStatus !== 'active') && !settings.onlyInvitations) {
              history.push(vars.SUBSCRIBE_PAGE)
            } else if (auth.userExist && (settings.onlyInvitations ? true : auth.isSubscriber)) {
              history.push(`/${auth.userUrlSuffix}`)
            }
          }

          if (auth.authStatus === 'loggedin' && auth.user && auth.userExist) {
            // setLoading(true)
            if (!auth.isSubscriber && !settings.onlyInvitations) {
              history.push(vars.SUBSCRIBE_PAGE)
            }
            if (auth.isSubscriber) {
              history.push(`/${auth.userUrlSuffix}`)
            }
            if (settings.onlyInvitations) {
              history.push(`/${auth.userUrlSuffix}`)
            }
          }

          if (auth.authStatus === 'loggedin' && auth.user && !auth.userExist) {
            window.localStorage.removeItem('package')
            window.localStorage.removeItem('accountType')
            window.localStorage.removeItem('invitationCode')
            window.localStorage.removeItem('patch')

            history.push(vars.ONBOARDING_PAGE)
          }
        } catch (err) {
          onSetNotification({
            message: pageStatics.messages.notifications.CreateAccountFail,
            type: 'error',
          })
        }

        // if (auth.authStatus === 'loggedin' && auth.user && auth.userExist) {
        //   setLoading(true)
        //   await updateLoginDates(auth.user.uid)
        //   if (!auth.isSubscriber || auth.subscriberStatus !== 'active') {
        //     history.push('/subscribe')
        //   }
        //   if (auth.userExist && auth.isSubscriber) {
        //     history.push(`/profile/${auth.userUrlSuffix}`)
        //   }
        //   if (!auth.userExist) {
        //     history.push('/welcome')
        //   }
        // }
      })()
    }

    return () => { mounted = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    auth.user, auth.authStatus,
    auth.userExist, auth.emailVerified,
    auth.userUrlSuffix,
    auth.accountSecret,
    auth.checkMemberStatus,
    history,
    language.languageVars.appAppr,
    language.languageVars.appAdmin,
    language.languageVars.appDomain,
    language.languageVars.appEditProfileURL,
    language.languageVars.learnFeatures,
    language.languageVars.appNameCAPS,
    auth.welcomeEmailSent,
  ])

  const goToLanding = () => {
    history.push('/')
  }

  const goToLogin = () => {
    history.push(vars.LOGIN_PAGE)
  }

  // const goToConnectCard = () => {
  //   history.push(vars.CONNECT_ACCOUNT_PAGE)
  // }

  if (loading) {
    return <LoadingBackdrop loadingText={pageStatics.messages.loading.authenticating} boxed />
  }

  return (
    <Box className={layoutClasses.pageContainer}>
      <Box className={layoutClasses.contentContainer} style={{ paddingTop: 20 }}>
        <Box className={`${layoutClasses.authContainer} ${layoutClasses.authContainerSignup}`}>
          <Box className={authClasses.landingHeader}>
            <Box className={authClasses.landingNav}>
              <Logo className={authClasses.logo} />
              <Button
                disableRipple
                onClick={() => goToLanding()}
              >
                <HomeIcon />
              </Button>
            </Box>
          </Box>
          {/* <Box className={authClasses.landingTextContainer}>
            <Typography variant="body1" component="p" align="center" className={authClasses.landingTextOne} style={{ lineHeight: '3.5rem', fontWeight: 700 }}>
              {pageStatics.data.titles.welcome.first}
            </Typography>
            <Typography variant="body1" component="p" align="center" className={authClasses.landingTextOne} style={{ lineHeight: '3.5rem' }}>
              {pageStatics.data.titles.welcome.second}
              <span>{pageStatics.data.titles.welcome.third}</span>
            </Typography>
            <Typography variant="body1" component="p" align="center" className={authClasses.landingTextFour} style={{ marginTop: 20 }}>
              {pageStatics.data.description.signupPanel}
            </Typography>
          </Box> */}
          <Box className={authClasses.landingTextContainerSlim}>
            <Typography variant="body1" component="p" align="center">
              {pageStatics.data.titles.welcomeSlim.first}
            </Typography>
            <Typography variant="body1" component="p" align="center">
              {pageStatics.data.titles.welcomeSlim.second}
            </Typography>
            <Box className={authClasses.descriptionText}>
              <Typography variant="body1" component="p" align="center">
                {pageStatics.data.description.signupPanel}
              </Typography>
            </Box>
          </Box>
          <Box mt={4}>
            <Box mb={2}>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
              {/* <Box mt={8} mb={2}><hr className={layoutClasses.separator} /></Box>
              <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
                <Button
                  className={buttonClasses.iconButton}
                  startIcon={<FilterNoneIcon />}
                  onClick={() => goToConnectCard()}
                  style={{
                    margin: '0 auto',
                  }}
                >
                  {pageStatics.buttons.connectToProfile}
                </Button>
              </Box> */}
            </Box>
            {isInvitationUsed && (
              <Box mt={6}>
                <Button
                  className={buttonClasses.textButton}
                  onClick={() => goToLogin()}
                  style={{
                    margin: '0 auto',
                  }}
                >
                  <b>
                    {pageStatics.buttons.login}
                  </b>
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

CreateAccount.defaultProps = {
  code: null,
  status: null,
  isInvitationUsed: false,
  invitationType: null,
  parentInvitation: null,
  childInvitations: null,
  masterId: null,
  store: null,
}

CreateAccount.propTypes = {
  onSetNotification: PropTypes.func.isRequired,
  code: PropTypes.string,
  status: PropTypes.string,
  isInvitationUsed: PropTypes.bool,
  invitationType: PropTypes.string,
  parentInvitation: PropTypes.string,
  childInvitations: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  store: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  onCheckInvitation: PropTypes.func.isRequired,
  masterId: PropTypes.string,
}

const mapStateToProps = state => ({
  code: state.invitations.code,
  status: state.invitations.status,
  store: state.invitations.store,
  isInvitationUsed: state.invitations.used,
  invitationType: state.invitations.type,
  parentInvitation: state.invitations.parentInvitation,
  childInvitations: state.invitations.childInvitations,
  masterId: state.invitations.masterId,
})

const mapDispatchToProps = dispatch => ({
  onSetNotification: (notification, duration) => dispatch(actions.setNotification(notification, duration)),
  onCheckInvitation: invitationCode => dispatch(actions.checkInvitation(invitationCode)),
  onClearInvitation: () => dispatch(actions.clearInvitation()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
