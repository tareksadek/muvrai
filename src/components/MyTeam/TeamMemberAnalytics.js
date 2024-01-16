import React from 'react'
import PropTypes from 'prop-types'

import FullScreenDialog from '../../layout/FullScreenDialog'
import Report from '../Analytics/Report'

import { useLanguage } from '../../hooks/useLang'

const TeamMemberAnalytics = ({
  open, onClose, memberName, memberAnalytics,
}) => {
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.myTeam

  return (
    <>
      {memberAnalytics && (
        <FullScreenDialog
          open={open}
          onClose={onClose}
          title={`${memberName} ${pageStatics.data.titles.memberAnalyticsDialog}`}
          loading={false}
        >
          <Report
            clickedNo={memberAnalytics.addedToContacts}
            connectionsNo={memberAnalytics.connections ? memberAnalytics.connections.length : 0}
            followersNo={memberAnalytics.followers ? memberAnalytics.followers.length : 0}
            followingNo={memberAnalytics.following ? memberAnalytics.following.length : 0}
            onMenuItemClicked={() => true}
            links={memberAnalytics.links}
            socialLinksOrder={memberAnalytics.socialLinksOrder}
            teamAnalytics={memberAnalytics.isTeamReport}
            teamMemberAnalytics
            teamMemberId={memberAnalytics.userId}
            withoutMenus
          />
        </FullScreenDialog>
      )}
    </>
  )
}

TeamMemberAnalytics.defaultProps = {
  open: false,
  memberName: null,
  memberAnalytics: null,
}

TeamMemberAnalytics.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  memberName: PropTypes.string,
  memberAnalytics: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
}

export default TeamMemberAnalytics
