import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import PageTitle from '../../../layout/PageTitle'
import Alert from '../../../layout/Alert'
import ProDialog from '../../BecomePro/ProDialog'

import { customIcons } from '../../../utilities/utils'

import { useLanguage } from '../../../hooks/useLang'
import { useAuth } from '../../../hooks/use-auth'

import { layoutStyles } from '../../../theme/layout'
import { redirectProfileStyles, socialLinksStyles } from '../styles'

import { socialPlatforms, settings } from '../../../utilities/appVars'

import * as actions from '../../../store/actions'

const RedirectProfile = ({
  links, redirect, defaultLinksToTheme, color, onRedirectLink, onRedirectCardLink, onRedirect, disableActions,
}) => {
  const redirectClasses = redirectProfileStyles()
  const classes = socialLinksStyles()
  const layoutClasses = layoutStyles()

  const auth = useAuth()
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.editProfile
  const activeSocialLinks = (links && links.social) && links.social.filter(link => link.active)
  const activeCustomLinks = (links && links.custom) && links.custom.filter(link => link.active)
  const isPro = auth.isSubscriber && (auth.subscriberStatus === 'active' || auth.subscriberStatus === 'trialing')

  const [proDialogOpen, setProDialogOpen] = useState(window.location.hash === '#becomepro')

  useEffect(() => {
    const onHashChange = () => {
      setProDialogOpen(window.location.hash === '#becomepro')
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const closeProDialogHandler = () => {
    window.history.back()
  }

  const openProDialogHandler = () => {
    window.location.hash = '#becomepro'
  }

  const handleRedirect = (e, check, redirectLink) => {
    if (settings.onlyInvitations && !isPro) {
      openProDialogHandler()
    } else {
      if (disableActions) {
        return false
      }
      const confirmMessage = check ? (
        `${pageStatics.messages.notifications.enableRedirectPrompt.first} ${redirectLink}. ${pageStatics.messages.notifications.enableRedirectPrompt.second}`
      ) : (
        pageStatics.messages.notifications.disableRedirectPrompt
      )
      const confirmBox = window.confirm(confirmMessage)
      if (confirmBox === true) {
        onRedirectLink(check, redirectLink)
        onRedirectCardLink(check, redirectLink)
        onRedirect(e, redirectLink)
      }
    }
    return true
  }

  return (
    <Box className={redirectClasses.redirectProfileContainer}>
      <Box mb={2}>
        <Typography variant="body1" align="center" component="p" className={layoutClasses.panelText} style={{ textAlign: 'center' }}>
          {pageStatics.messages.info.redirect.first}
        </Typography>
      </Box>
      <Box className={layoutClasses.panel}>
        <PageTitle title={pageStatics.data.titles.socialRedirect} isPro={settings.onlyInvitations && !auth.isSubscriber} />
        {
          links && links.social && activeSocialLinks.length >= 1 && (
            <Box mb={2}>
              <Typography variant="body1" align="left" component="p" className={layoutClasses.panelText}>
                {pageStatics.messages.info.redirect.socialPanel}
              </Typography>
            </Box>
          )
        }
        <Box className={redirectClasses.redirectSocialLinksContainer}>
          {
            links && links.social && activeSocialLinks.length >= 1 ? (
              <List className={`${classes.socialLinksContainer}`} style={{ margin: 0 }}>
                {links && links.social && activeSocialLinks.map(link => {
                  const socialLinkIndex = socialPlatforms.findIndex(socialPlatfrom => socialPlatfrom.platform === link.platform)
                  const socialLinkBackground = defaultLinksToTheme ? color : socialPlatforms[socialLinkIndex].color

                  return (
                    <ListItem
                      key={link.key}
                      className={`${classes.linkItem} ${classes.linkItemNoBorder} ${link.dark && classes.linkItemDark} ${redirect === link.link}`}
                      onClick={e => handleRedirect(e, redirect !== link.link, redirect === link.link ? null : link.link)}
                      style={{ backgroundColor: redirect && redirect === link.link ? socialLinkBackground : '#bbb' }}
                    >
                      {customIcons(
                        link.platform,
                        'secondary',
                        'small',
                        null,
                        { color: `${link && link.active ? '#ffffff' : '#dddddd'}`, stroke: link.platform === 'snapchat' && link && link.active ? '#272727' : 'none' },
                      )}
                    </ListItem>
                  )
                })}
              </List>
            ) : (
              <Box mt={2} width="100%">
                <Alert
                  title={pageStatics.data.socialLinksPlaceholder.title}
                  description={pageStatics.data.socialLinksPlaceholder.description}
                  type="info"
                  noMargin
                />
              </Box>
            )
          }
        </Box>
      </Box>
      <Box className={layoutClasses.panel}>
        <PageTitle title={pageStatics.data.titles.customRedirect} isPro={settings.onlyInvitations && !auth.isSubscriber} />
        {
          links && links.custom && activeCustomLinks.length >= 1 && (
            <Box mb={2}>
              <Typography variant="body1" align="left" component="p" className={layoutClasses.panelText}>
                {pageStatics.messages.info.redirect.customPanel}
              </Typography>
            </Box>
          )
        }
        <Box>
          {
            links && links.custom && activeCustomLinks.length >= 1 ? (
              <List>
                {links && links.custom && activeCustomLinks.map(link => (
                  <ListItem
                    key={link.key}
                    className={`${classes.linkItemSquare} ${classes.cutomLinkItem} ${redirectClasses.redirectCutomLinkItem} ${redirect && redirect === link.link && redirectClasses.selectedCustomRedirect}`}
                    onClick={e => handleRedirect(e, redirect !== link.link, redirect === link.link ? null : link.link)}
                  >
                    <ListItemText
                      disableTypography
                      id={`switchListLabel_${link.platform}`}
                      primary={(
                        <Box className={classes.customLinkTitle}>
                          {link.linkTitle}
                        </Box>
                      )}
                      secondary={(
                        <Box className={classes.customLinkData}>
                          {link.link}
                        </Box>
                      )}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Box mt={2} width="100%">
                <Alert
                  title={pageStatics.data.customLinksPlaceholder.title}
                  description={pageStatics.data.customLinksPlaceholder.description}
                  type="info"
                  noMargin
                />
              </Box>
            )
          }
        </Box>
      </Box>
      {settings.onlyInvitations && !isPro && (
        <ProDialog
          open={proDialogOpen}
          onClose={closeProDialogHandler}
        />
      )}
    </Box>
  )
}

const mapDispatchToProps = dispatch => ({
  onRedirectLink: (isChecked, redirectLink) => dispatch(actions.redirectLink(isChecked, redirectLink)),
  onRedirectCardLink: (isChecked, redirectLink) => dispatch(actions.redirectCardLink(isChecked, redirectLink)),
})

RedirectProfile.defaultProps = {
  links: null,
  redirect: null,
  defaultLinksToTheme: false,
  color: null,
  disableActions: false,
}

RedirectProfile.propTypes = {
  links: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])))),
  redirect: PropTypes.string,
  defaultLinksToTheme: PropTypes.bool,
  color: PropTypes.string,
  onRedirectLink: PropTypes.func.isRequired,
  onRedirectCardLink: PropTypes.func.isRequired,
  onRedirect: PropTypes.func.isRequired,
  disableActions: PropTypes.bool,
}

export default connect(null, mapDispatchToProps)(RedirectProfile)
