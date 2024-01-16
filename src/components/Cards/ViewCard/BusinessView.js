import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import EditIcon from '@material-ui/icons/Edit'

import ActionButtons from './ActionButtons'
import SocialLinks from './SocialLinks'
import CustomLinks from './CustomLinks'
import InfoButton from './InfoButton'
import InfoDrawer from './InfoDrawer'
import ProfilePlaceholder from '../../Ui/ProfilePlaceholder'
import Alert from '../../../layout/Alert'

import { useLanguage } from '../../../hooks/useLang'
import { useDisplayMode } from '../../../hooks/useDisplayMode'

import { businessViewStyles } from '../styles'
import { buttonStyles } from '../../../theme/buttons'

const BusinessView = ({
  colorCode, firstName, userName, authUser, vCardFile, cardClickedHandler, clickedNo, email, links, socialLinksOrder,
  lastName, organization, title, workPhone, workFax, homePhone, homeFax, note,
  connectDialogOpen, openConnectDialog, closeConnectDialog, connectionsCount, countClicks, bioVideo, closeInfoDialog,
  infoDialogOpen, openInfoDialog, passwordProtected, isTheLoggedinUser, canFollow, isFollowed, followingInProgress, logo,
  activeForm, connectionSettings, redirect, isEmbedForm, defaultLinksToTheme, address, marker, connectionTags,
}) => {
  const classes = businessViewStyles()
  const buttonClasses = buttonStyles()
  const history = useHistory()
  const mode = useDisplayMode()
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.viewProfile
  const showDrawer = authUser
  || (!authUser && note)
  || (!authUser && bioVideo)
  || (!authUser && workPhone)
  || (!authUser && workFax)
  || (!authUser && homeFax)
  || (!authUser && homePhone)
  || (!authUser && address)

  const goToInfo = () => {
    history.push('/info')
  }

  const goToContact = () => {
    history.push('/contact')
  }

  const goToLinks = () => {
    history.push('/links')
  }

  return (
    <Box>
      {redirect && isTheLoggedinUser && (
        <Box mt={2} style={{ maxWidth: 550, margin: '16px auto 0 auto' }}>
          <Alert
            title={pageStatics.data.titles.redirected}
            description={redirect}
            type="warning"
          />
        </Box>
      )}
      <Box className={classes.businessViewInfoContainer}>
        <Typography component="p" variant="body1" className={classes.viewCardName}>
          {firstName || lastName ? userName : ''}
          {mode.mode === 'edit' && (
            <span className={classes.placeholderButtonContainer}>
              <Button
                color="secondary"
                onClick={() => goToInfo()}
                className={buttonClasses.editModeButtonCircle}
              >
                <EditIcon style={{ fontSize: '0.9rem' }} />
              </Button>
            </span>
          )}
        </Typography>
        {title && (
          <Typography component="p" variant="body1" className={classes.viewCardAbout}>
            {title}
            {organization ? ` @ ${organization}` : ''}
          </Typography>
        )}
      </Box>
      <Box className={classes.businessViewInfoContainer}>
        {(!passwordProtected || isTheLoggedinUser) && email && (
          <Box className={classes.emailContainer}>
            <a href={`mailto:${email}`} style={{ color: colorCode }}>
              {email}
              {mode.mode === 'edit' && (
                <span className={classes.placeholderButtonContainer} style={{ top: 0 }}>
                  <Button
                    color="secondary"
                    onClick={() => goToContact()}
                    className={buttonClasses.editModeButtonCircle}
                  >
                    <EditIcon style={{ fontSize: '0.9rem' }} />
                  </Button>
                </span>
              )}
            </a>
          </Box>
        )}
        {(!passwordProtected || isTheLoggedinUser) && homePhone && (
          <Typography component="p" variant="body1" className={classes.viewCardPhone}>
            {homePhone}
          </Typography>
        )}
      </Box>
      {(!passwordProtected || isTheLoggedinUser) && (
        <>
          <Box mt={2}>
            <ActionButtons
              authUser={authUser}
              vCardFile={vCardFile}
              colorCode={colorCode}
              cardClickedHandler={cardClickedHandler}
              clickedNo={clickedNo}
              connectDialogOpen={connectDialogOpen}
              openConnectDialog={openConnectDialog}
              closeConnectDialog={closeConnectDialog}
              userName={userName}
              connectionsCount={connectionsCount}
              isTheLoggedinUser={isTheLoggedinUser}
              canFollow={canFollow}
              isFollowed={isFollowed}
              followingInProgress={followingInProgress}
              isEmbedForm={isEmbedForm}
              connectionSettings={connectionSettings}
              activeForm={activeForm}
              connectionTags={connectionTags}
            />
          </Box>

          {links && <CustomLinks links={links} colorCode={colorCode} countClicks={countClicks} profileType="business" />}

          {((!links || links.filter(link => link.platform === 'custom').length === 0) && authUser && isTheLoggedinUser && mode.mode === 'edit') && (
            <Box className={classes.placeholderContainer} mt={3}>
              <ProfilePlaceholder
                title={pageStatics.data.placeholder.customLinks.title}
                description={pageStatics.data.placeholder.customLinks.description}
                buttonText={pageStatics.data.placeholder.customLinks.button}
                isClickable
                isLarge
                link="/links"
              />
            </Box>
          )}

          {links && <SocialLinks defaultLinksToTheme={defaultLinksToTheme} socialLinksOrder={socialLinksOrder} links={links} countClicks={countClicks} colorCode={colorCode} profileType="business" />}

          {((!links || links.filter(link => link.platform !== 'custom').length === 0) && authUser && isTheLoggedinUser && mode.mode === 'edit') && (
            <Box className={classes.placeholderContainer} mt={3}>
              <ProfilePlaceholder
                title={pageStatics.data.placeholder.socialLinks.title}
                description={pageStatics.data.placeholder.socialLinks.description}
                buttonText={pageStatics.data.placeholder.socialLinks.button}
                isClickable
                isLarge
                link="/links"
              />
            </Box>
          )}

          {mode.mode === 'edit' && authUser && isTheLoggedinUser && (links && links.length > 0) && (
            <Box mt={5} mb={2}>
              <Button
                color="secondary"
                onClick={() => goToLinks()}
                className={buttonClasses.editModeButton}
              >
                Add / Edit links
              </Button>
            </Box>
          )}

          <Box className={`${classes.infoButtonContainer} ${classes.businessInfoButtonContainer}`} style={{ backgroundColor: colorCode }}>
            {showDrawer && (
              <InfoButton colorCode={colorCode} bioVideo={bioVideo} showInfoDialogHandler={openInfoDialog} logo={logo} />
            )}
          </Box>
          {showDrawer && (
            <InfoDrawer
              userName={userName}
              note={note}
              closeDialog={closeInfoDialog}
              dialogOpen={infoDialogOpen}
              openDialog={openInfoDialog}
              bioVideo={bioVideo}
              authUser={authUser}
              showHelperButtons={isTheLoggedinUser}
              colorCode={colorCode}
              defaultLinksToTheme={defaultLinksToTheme}
              workPhone={workPhone}
              workFax={workFax}
              homeFax={homeFax}
              address={address}
              marker={marker}
            />
          )}
        </>
      )}
    </Box>
  )
}

BusinessView.defaultProps = {
  colorCode: null,
  firstName: null,
  lastName: null,
  userName: null,
  authUser: null,
  vCardFile: null,
  clickedNo: 0,
  email: null,
  links: null,
  socialLinksOrder: null,
  organization: null,
  title: null,
  workPhone: null,
  homePhone: null,
  workFax: null,
  homeFax: null,
  note: null,
  connectDialogOpen: false,
  connectionsCount: 0,
  infoDialogOpen: false,
  bioVideo: null,
  passwordProtected: false,
  isTheLoggedinUser: false,
  canFollow: false,
  isFollowed: false,
  followingInProgress: false,
  logo: null,
  activeForm: null,
  connectionSettings: null,
  redirect: null,
  isEmbedForm: false,
  defaultLinksToTheme: false,
  address: null,
  marker: null,
  connectionTags: null,
}

BusinessView.propTypes = {
  colorCode: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userName: PropTypes.string,
  authUser: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.func,
  ])),
  vCardFile: PropTypes.string,
  cardClickedHandler: PropTypes.func.isRequired,
  clickedNo: PropTypes.number,
  email: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  socialLinksOrder: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  organization: PropTypes.string,
  title: PropTypes.string,
  workPhone: PropTypes.string,
  homePhone: PropTypes.string,
  workFax: PropTypes.string,
  homeFax: PropTypes.string,
  note: PropTypes.string,
  connectDialogOpen: PropTypes.bool,
  openConnectDialog: PropTypes.func.isRequired,
  closeConnectDialog: PropTypes.func.isRequired,
  connectionsCount: PropTypes.number,
  countClicks: PropTypes.func.isRequired,
  infoDialogOpen: PropTypes.bool,
  closeInfoDialog: PropTypes.func.isRequired,
  openInfoDialog: PropTypes.func.isRequired,
  bioVideo: PropTypes.string,
  passwordProtected: PropTypes.bool,
  isTheLoggedinUser: PropTypes.bool,
  canFollow: PropTypes.bool,
  isFollowed: PropTypes.bool,
  followingInProgress: PropTypes.bool,
  logo: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  activeForm: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  connectionSettings: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  redirect: PropTypes.string,
  isEmbedForm: PropTypes.bool,
  defaultLinksToTheme: PropTypes.bool,
  address: PropTypes.string,
  marker: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.func,
  ])),
  connectionTags: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
}

export default BusinessView
