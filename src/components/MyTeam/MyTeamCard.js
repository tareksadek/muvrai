import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Skeleton from '@material-ui/lab/Skeleton'
import Tooltip from '@material-ui/core/Tooltip'

import MoreVertIcon from '@material-ui/icons/MoreVert'
import BlockIcon from '@material-ui/icons/Block'

import { useLanguage } from '../../hooks/useLang'

import { layoutStyles } from '../../theme/layout'
import { connectionStyles } from './styles'

const MyTeamCard = ({
  teamMember, onOpenConnectionsDialog, onOpenFollowersDialog, onOpenFollowingDialog, onOpenTeamMemberAnalyticsDialog, connectionsCount, followersCount, followingCount, onToggleProfileActivity,
}) => {
  const classes = connectionStyles()
  const layoutClasses = layoutStyles()
  const history = useHistory()
  const language = useLanguage()

  const pageStatics = language.languageVars.pages.myTeam
  const profileActive = teamMember.settings.active === undefined || teamMember.settings.active

  const [connectionMenuAnchor, setConnectionMenuAnchor] = useState(null)

  const viewTeamMemberProfile = () => {
    history.push(`/profile/${teamMember.urlSuffix}`)
  }

  const openConnectionMenu = e => {
    e.stopPropagation()
    setConnectionMenuAnchor(e.currentTarget)
  }

  const closeConnectionMenu = e => {
    e.stopPropagation()
    setConnectionMenuAnchor(null)
  }

  const openTeamMemberAnalyticsDialog = (e, member) => {
    closeConnectionMenu(e)
    onOpenTeamMemberAnalyticsDialog(member)
  }

  const viewMemberProfile = e => {
    closeConnectionMenu(e)
    viewTeamMemberProfile()
  }

  const openConnectionsDialog = (e, member) => {
    closeConnectionMenu(e)
    onOpenConnectionsDialog(member)
  }

  const openFollowersDialog = (e, member) => {
    closeConnectionMenu(e)
    onOpenFollowersDialog(member)
  }

  const openFollowingDialog = (e, member) => {
    closeConnectionMenu(e)
    onOpenFollowingDialog(member)
  }

  const toggleProfileActivity = (e, teamMemberId, profileActivity) => {
    closeConnectionMenu(e)
    onToggleProfileActivity(teamMemberId, profileActivity)
  }

  return (
    <ListItem className={classes.connectionItemContainer}>
      {!teamMember ? (
        <Box className={classes.FollowerSkeleton}>
          <Skeleton className={layoutClasses.skeleton} animation="wave" variant="circle" width={40} height={40} />
          <Skeleton className={layoutClasses.skeleton} animation="wave" height={15} width="30%" style={{ marginLeft: 8 }} />
        </Box>
      ) : (
        <>
          <ListItemAvatar className={classes.connectionItemAvatarContainer}>
            <Avatar className={classes.connectionItemAvatar} src={teamMember.base64Photo ? `data:${teamMember.base64Photo.type};base64,${teamMember.base64Photo.code}` : '/assets/images/avatar.svg'} />
          </ListItemAvatar>
          <ListItemText
            disableTypography
            className={classes.connectionItemTextContainer}
            primary={(
              <Box className={classes.connectionName}>
                <Typography component="p" variant="body1" className={classes.connectionNameText}>
                  {`${teamMember.firstName} ${teamMember.lastName}`}
                </Typography>
              </Box>
            )}
          />
          <ListItemSecondaryAction className={classes.connectionItemActionContainer}>
            {!profileActive && <Tooltip title={pageStatics.messages.info.inactiveProfile.tooltip} placement="top"><BlockIcon className={classes.inactiveIcon} /></Tooltip>}
            <IconButton aria-label="edit" className={classes.menuAnchor} aria-haspopup="true" color="secondary" onClick={e => openConnectionMenu(e)}>
              <MoreVertIcon color="secondary" fontSize="small" />
            </IconButton>
            <Menu
              id="profile-menu"
              anchorEl={connectionMenuAnchor}
              keepMounted
              open={Boolean(connectionMenuAnchor)}
              onClose={closeConnectionMenu}
              classes={{ paper: layoutClasses.menu }}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={e => openTeamMemberAnalyticsDialog(e, teamMember)} className={classes.cardMenuButton}>{pageStatics.buttons.teamMemberAnalytics}</MenuItem>
              <MenuItem onClick={e => viewMemberProfile(e)} className={classes.cardMenuButton}>{pageStatics.buttons.viewProfile}</MenuItem>
              <MenuItem onClick={e => openConnectionsDialog(e, teamMember)} className={classes.cardMenuButton}>{`${pageStatics.buttons.teamMemberConnections} (${connectionsCount})`}</MenuItem>
              <MenuItem onClick={e => openFollowersDialog(e, teamMember)} className={classes.cardMenuButton}>{`${pageStatics.buttons.teamMemberFollowers} (${followersCount})`}</MenuItem>
              <MenuItem onClick={e => openFollowingDialog(e, teamMember)} className={classes.cardMenuButton}>{`${pageStatics.buttons.teamMemberFollowing} (${followingCount})`}</MenuItem>
              <MenuItem
                onClick={e => toggleProfileActivity(e, teamMember.userId, !profileActive)}
                className={classes.cardMenuButton}
              >
                {profileActive ? pageStatics.buttons.deactivateProfile : pageStatics.buttons.activateProfile}
              </MenuItem>
            </Menu>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  )
}

MyTeamCard.defaultProps = {
  teamMember: null,
  connectionsCount: 0,
  followersCount: 0,
  followingCount: 0,
}

MyTeamCard.propTypes = {
  teamMember: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  onOpenConnectionsDialog: PropTypes.func.isRequired,
  onOpenFollowersDialog: PropTypes.func.isRequired,
  onOpenFollowingDialog: PropTypes.func.isRequired,
  onOpenTeamMemberAnalyticsDialog: PropTypes.func.isRequired,
  onToggleProfileActivity: PropTypes.func.isRequired,
  connectionsCount: PropTypes.number,
  followersCount: PropTypes.number,
  followingCount: PropTypes.number,
}

export default MyTeamCard
