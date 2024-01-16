import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import EditIcon from '@material-ui/icons/Edit'

import ActionButtons from './ActionButtons'
import InfoButton from './InfoButton'
import InfoDrawer from './InfoDrawer'
import CustomLinks from './CustomLinks'
import ProfilePlaceholder from '../../Ui/ProfilePlaceholder'
import Alert from '../../../layout/Alert'
import SocialLinks from './SocialLinks'

import { useLanguage } from '../../../hooks/useLang'
import { useDisplayMode } from '../../../hooks/useDisplayMode'

import { socialViewStyles } from '../styles'
import { buttonStyles } from '../../../theme/buttons'

const SocialView = ({
  authUser, vCardFile, colorCode, cardClickedHandler, clickedNo, links, socialLinksOrder,
  userName, firstName, middleName, lastName, gender, nickname, career, organization, title, address,
  workPhone, workFax, homePhone, homeFax, birthday, note, bioVideo, openInfoDialog, email,
  closeInfoDialog, infoDialogOpen, connectDialogOpen, openConnectDialog, closeConnectDialog,
  connectionsCount, countClicks, defaultLinksToTheme, passwordProtected, isTheLoggedinUser,
  canFollow, isFollowed, followingInProgress, logo, userType, activeForm, connectionSettings, redirect, isEmbedForm, marker, connectionTags,
}) => {
  const classes = socialViewStyles()
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

  const goToLinks = () => {
    history.push('/links')
  }

  return (
    <Box>
      {redirect && isTheLoggedinUser && (
        <Box style={{ maxWidth: 550, margin: '0 auto' }}>
          <Alert
            title={pageStatics.data.titles.redirected}
            description={redirect}
            type="warning"
          />
        </Box>
      )}
      <Box className={classes.SocialViewInfoContainer}>
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

      {(!passwordProtected || isTheLoggedinUser) && (
        <>
          <ActionButtons
            authUser={authUser}
            vCardFile={vCardFile}
            colorCode={colorCode}
            cardClickedHandler={cardClickedHandler}
            clickedNo={clickedNo}
            profileType="social"
            connectDialogOpen={connectDialogOpen}
            openConnectDialog={openConnectDialog}
            closeConnectDialog={closeConnectDialog}
            userName={userName}
            connectionsCount={connectionsCount}
            canFollow={canFollow}
            isFollowed={isFollowed}
            followingInProgress={followingInProgress}
            userType={userType}
            activeForm={activeForm}
            connectionSettings={connectionSettings}
            isEmbedForm={isEmbedForm}
            connectionTags={connectionTags}
          />

          {(links && links.filter(link => link.platform === 'custom').length > 0) && (
            <CustomLinks links={links} countClicks={countClicks} profileType="social" colorCode={colorCode} />
          )}

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

          {(links && links.filter(link => link.platform !== 'custom').length > 0) && (
            <SocialLinks
              socialLinksOrder={socialLinksOrder}
              links={links}
              colorCode={colorCode}
              countClicks={countClicks}
              profileType="social"
              defaultLinksToTheme={defaultLinksToTheme}
            />
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

          <Box className={classes.infoButtonContainer} style={{ backgroundColor: colorCode }}>
            {showDrawer && (
              <InfoButton colorCode={colorCode} bioVideo={bioVideo} showInfoDialogHandler={openInfoDialog} logo={logo} organization={organization} />
            )}
          </Box>

          {showDrawer && (
            <InfoDrawer
              userName={userName}
              firstName={firstName}
              email={email}
              middleName={middleName}
              lastName={lastName}
              gender={gender}
              nickname={nickname}
              career={career}
              organization={organization}
              title={title}
              workPhone={workPhone}
              workFax={workFax}
              homePhone={homePhone}
              homeFax={homeFax}
              birthday={birthday}
              note={note}
              closeDialog={closeInfoDialog}
              dialogOpen={infoDialogOpen}
              openDialog={openInfoDialog}
              bioVideo={bioVideo}
              authUser={authUser}
              showHelperButtons={isTheLoggedinUser}
              colorCode={colorCode}
              links={links}
              socialLinksOrder={socialLinksOrder}
              isTheLoggedinUser={isTheLoggedinUser}
              countClicks={countClicks}
              defaultLinksToTheme={defaultLinksToTheme}
              address={address}
              marker={marker}
            />
          )}
        </>
      )}
    </Box>
  )
}

SocialView.defaultProps = {
  colorCode: null,
  authUser: null,
  vCardFile: null,
  clickedNo: 0,
  links: null,
  socialLinksOrder: null,
  firstName: null,
  lastName: null,
  userName: null,
  middleName: null,
  gender: null,
  nickname: null,
  organization: null,
  title: null,
  workPhone: null,
  homePhone: null,
  workFax: null,
  homeFax: null,
  birthday: null,
  note: null,
  infoDialogOpen: false,
  connectDialogOpen: false,
  connectionsCount: 0,
  bioVideo: null,
  defaultLinksToTheme: false,
  passwordProtected: null,
  isTheLoggedinUser: false,
  canFollow: false,
  isFollowed: false,
  followingInProgress: false,
  career: null,
  logo: null,
  address: null,
  email: null,
  userType: null,
  activeForm: null,
  connectionSettings: null,
  redirect: null,
  isEmbedForm: false,
  marker: null,
  connectionTags: null,
}

SocialView.propTypes = {
  colorCode: PropTypes.string,
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
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userName: PropTypes.string,
  middleName: PropTypes.string,
  gender: PropTypes.string,
  nickname: PropTypes.string,
  career: PropTypes.string,
  organization: PropTypes.string,
  title: PropTypes.string,
  workPhone: PropTypes.string,
  homePhone: PropTypes.string,
  workFax: PropTypes.string,
  homeFax: PropTypes.string,
  birthday: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  note: PropTypes.string,
  infoDialogOpen: PropTypes.bool,
  closeInfoDialog: PropTypes.func.isRequired,
  openInfoDialog: PropTypes.func.isRequired,
  connectDialogOpen: PropTypes.bool,
  openConnectDialog: PropTypes.func.isRequired,
  closeConnectDialog: PropTypes.func.isRequired,
  connectionsCount: PropTypes.number,
  countClicks: PropTypes.func.isRequired,
  bioVideo: PropTypes.string,
  defaultLinksToTheme: PropTypes.bool,
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
  address: PropTypes.string,
  email: PropTypes.string,
  userType: PropTypes.string,
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

export default SocialView
