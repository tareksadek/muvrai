import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import QRCode from 'react-qr-code'
import { saveSvgAsPng, svgAsDataUri } from 'save-svg-as-png'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'

import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn'
import FacebookIcon from '@material-ui/icons/Facebook'
import EmailIcon from '@material-ui/icons/Email'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import TelegramIcon from '@material-ui/icons/Telegram'
import FileCopyIcon from '@material-ui/icons/FileCopy'

import LoadingBackdrop from '../../Loading/LoadingBackdrop'
import FullScreenDialog from '../../../layout/FullScreenDialog'

import { useLanguage } from '../../../hooks/useLang'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { useColor } from '../../../hooks/useDarkMode'

import { getFirebaseStorage } from '../../../API/firebase'

import * as actions from '../../../store/actions'

import { detailsDialog, socialHeaderStyles } from '../styles'
import { buttonStyles } from '../../../theme/buttons'

const DetailsDialog = ({
  closeDialog, dialogOpen, cardName, urlSuffix, hideButtons, card, onSetNotification, userColor,
}) => {
  const classes = detailsDialog()
  const bannerClasses = socialHeaderStyles()
  const buttonClasses = buttonStyles()
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.qrCode
  const shareStatics = language.languageVars.pages.shareProfile
  const defaultMessage = shareStatics.messages.info.defaultShareMessageBody
  const defaultTitle = shareStatics.messages.info.defaultShareMessageTitle
  const profileUrl = `${language.languageVars.appDomain}/${urlSuffix}`
  const { width } = useWindowDimensions()
  const color = useColor()

  const userName = card && (card.firstName || card.lastName) ? `${card.firstName || ''} ${card.lastName || ''}` : ''

  const logoImage = card && card.logo && `data:${card.logo.type};base64,${card.logo.code}`

  const [bannerimage, setBannerImage] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    if (mounted && card.image) {
      (async () => {
        setLoading(true)
        const bannerStorageImage = await getFirebaseStorage().ref(`profiles/${card.image}`).getDownloadURL()
        setBannerImage(bannerStorageImage)
        setTimeout(() => setLoading(false), 1000)
      })()
    }
    return () => { mounted = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const saveAsPNG = () => {
    saveSvgAsPng(document.getElementById('qrcode'), `${cardName.trim()}.png`, { scale: 6 })
  }

  const saveAsSVG = async () => {
    try {
      const dataUri = await svgAsDataUri(document.getElementById('qrcode'))
      const dl = document.createElement('a')
      document.body.appendChild(dl)
      dl.setAttribute('href', dataUri)
      dl.setAttribute('download', `${cardName.trim()}.svg`)
      dl.click();
    } catch (err) {
      throw new Error(err)
    }
  }

  const copyUrl = () => {
    onSetNotification({
      message: pageStatics.messages.notifications.urlCopiedSuccess,
      type: 'success',
    })
  }

  return (
    <FullScreenDialog
      open={dialogOpen}
      onClose={closeDialog}
      title={cardName || pageStatics.data.titles.page}
      bodyBackground="dark"
      loading={false}
      noHeader
    >
      <Box className={classes.qrContainer}>
        <Box className={classes.qrContent}>
          {!urlSuffix ? (
            <LoadingBackdrop loadingText={pageStatics.messages.loading.generatingQrCode} boxed />
          ) : (
            <Box className={`${bannerClasses.container}`}>
              <IconButton edge="start" color="inherit" onClick={closeDialog} aria-label="close" className={`${classes.dbcClose}`}>
                <KeyboardReturnIcon />
              </IconButton>
              {(bannerimage || logoImage) ? (
                <Box className={classes.qrImagesContainer}>
                  {bannerimage ? (
                    <Box
                      className={`${bannerClasses.content} ${bannerClasses.dbcContent} ${classes.qrBannerContent} ${card.image ? bannerClasses.headerWithImage : bannerClasses.headerWithOutImage}`}
                      style={{ maxHeight: width / 2, backgroundColor: !loading && card.image ? 'transparent' : color.color.code }}
                    >
                      {bannerimage && (
                        <img src={bannerimage} alt={userName} className={`${bannerClasses.image} ${bannerClasses.dbcImage} ${!card.image || (card.image && loading) ? bannerClasses.placeholderImage : ''}`} />
                      )}
                      {card.image && loading && (
                        <CircularProgress className={bannerClasses.bannerLoadingProgress} />
                      )}
                    </Box>
                  ) : (
                    <Box className={classes.qrNoBannerImage} style={{ backgroundColor: userColor || color.color.code }}>&nbsp;</Box>
                  )}
                  {logoImage && !loading && (
                    <Box className={classes.qrLogoContainer}>
                      <Avatar
                        alt={userName}
                        src={logoImage}
                        className={`${classes.qrLogo}`}
                      />
                    </Box>
                  )}
                </Box>
              ) : (
                <Box className={classes.qrImagesContainer} style={{ marginBottom: 20 }}>
                  <Box className={classes.qrNoBannerImage} style={{ backgroundColor: '#fff', minHeight: 50 }}>&nbsp;</Box>
                </Box>
              )}
              <QRCode id="qrcode" value={profileUrl} />
              <Typography component="p" variant="body1" align="center" className={classes.qrCardName}>
                {userName}
              </Typography>
              {card.email && (
                <Typography component="p" variant="body1" align="center" className={classes.qrCardEmail}>
                  {card.email}
                </Typography>
              )}
              {card.workPhone && (
                <Typography component="p" variant="body1" align="center" className={classes.qrCardPhone}>
                  {card.workPhone}
                </Typography>
              )}
            </Box>
          )}
        </Box>
        {!hideButtons && (
          <Box className={classes.qrCodeButtonsContainer}>
            <Button
              className={buttonClasses.defaultButton}
              onClick={() => saveAsPNG()}
            >
              {pageStatics.buttons.saveAsPng}
            </Button>
            <Button
              className={buttonClasses.defaultButton}
              onClick={() => saveAsSVG()}
            >
              {pageStatics.buttons.saveAsSvg}
            </Button>
          </Box>
        )}
      </Box>
      <Box className={classes.shareContainer}>
        <Typography component="p" variant="body1" align="center" className={classes.shareTitle}>
          {pageStatics.data.titles.shareBox}
        </Typography>
        <Box className={classes.shareButtonsContainer}>
          <Box className={classes.copyToclipboardContainer}>
            <CopyToClipboard
              text={profileUrl}
              onCopy={() => copyUrl()}
            >
              <FileCopyIcon />
            </CopyToClipboard>
          </Box>
          <EmailShareButton subject={defaultTitle} body={`${defaultMessage}: ${profileUrl}`} separator=" ">
            <EmailIcon classes={{ root: classes.icon }} />
          </EmailShareButton>
          <FacebookShareButton url={profileUrl} quote={defaultMessage}>
            <FacebookIcon classes={{ root: classes.icon }} />
          </FacebookShareButton>
          <TwitterShareButton url={profileUrl} title={defaultMessage}>
            <TwitterIcon classes={{ root: classes.icon }} />
          </TwitterShareButton>
          <LinkedinShareButton url={profileUrl} title={defaultTitle} summary={defaultMessage} source="YLC Cards">
            <LinkedInIcon classes={{ root: classes.icon }} />
          </LinkedinShareButton>
          <WhatsappShareButton url={profileUrl} title={defaultTitle} separator=" ">
            <WhatsAppIcon classes={{ root: classes.icon }} />
          </WhatsappShareButton>
          <TelegramShareButton url={profileUrl}>
            <TelegramIcon classes={{ root: classes.icon }} />
          </TelegramShareButton>
        </Box>
      </Box>
    </FullScreenDialog>
  )
}

const mapStateToProps = state => ({
  card: state.cards,
})

const mapDispatchToProps = dispatch => ({
  onSetNotification: notification => dispatch(actions.setNotification(notification)),
})

DetailsDialog.defaultProps = {
  dialogOpen: false,
  cardName: null,
  urlSuffix: null,
  hideButtons: false,
  card: null,
  userColor: null,
}

DetailsDialog.propTypes = {
  dialogOpen: PropTypes.bool,
  closeDialog: PropTypes.func.isRequired,
  cardName: PropTypes.string,
  urlSuffix: PropTypes.string,
  hideButtons: PropTypes.bool,
  card: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  onSetNotification: PropTypes.func.isRequired,
  userColor: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsDialog)
