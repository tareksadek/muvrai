import React from 'react'
import PropTypes from 'prop-types'

import List from '@material-ui/core/List'

import { listStyles } from './styles'

import MyTeamCard from './MyTeamCard'
import MyTeamCardSkeleton from './MyTeamCardSkeleton'

const ConnectionsList = ({
  teamMembers, onOpenConnectionsDialog, onOpenFollowersDialog, onOpenFollowingDialog, onOpenTeamMemberAnalyticsDialog, onToggleProfileActivity,
}) => {
  const classes = listStyles()

  const createTeamList = () => {
    let connectionsList = []
    if (teamMembers) {
      connectionsList = teamMembers.map(teamMember => (
        <MyTeamCard
          key={teamMember.userId}
          teamMember={teamMember}
          onOpenConnectionsDialog={onOpenConnectionsDialog}
          onOpenFollowersDialog={onOpenFollowersDialog}
          onOpenFollowingDialog={onOpenFollowingDialog}
          onOpenTeamMemberAnalyticsDialog={onOpenTeamMemberAnalyticsDialog}
          onToggleProfileActivity={onToggleProfileActivity}
          connectionsCount={teamMember.connections && teamMember.connections.length}
          followersCount={teamMember.followers && teamMember.followers.length}
          followingCount={teamMember.following && teamMember.following.length}
        />
      ))
    } else {
      connectionsList = [...Array(12)].map(() => (
        <MyTeamCardSkeleton key={Math.floor(Math.random() * 1000000)} />
      ))
    }

    return connectionsList
  }

  return (
    <div className={classes.root}>
      <List className={classes.connectionsList}>
        {createTeamList()}
      </List>
    </div>
  )
}

ConnectionsList.defaultProps = {
  teamMembers: null,
}

ConnectionsList.propTypes = {
  teamMembers: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  onOpenConnectionsDialog: PropTypes.func.isRequired,
  onOpenFollowersDialog: PropTypes.func.isRequired,
  onOpenFollowingDialog: PropTypes.func.isRequired,
  onOpenTeamMemberAnalyticsDialog: PropTypes.func.isRequired,
  onToggleProfileActivity: PropTypes.func.isRequired,
}

export default ConnectionsList
