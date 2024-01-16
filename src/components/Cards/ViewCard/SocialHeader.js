import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { useTheme } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import PaletteIcon from '@material-ui/icons/Palette'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import useWindowDimensions from '../../../hooks/useWindowDimensions'

import AppNav from '../../../layout/AppNav'
import QRdrawer from './QRdrawer'

import { QrIcon } from '../../../layout/CustomIcons'

import { useDisplayMode } from '../../../hooks/useDisplayMode'
// import { useLanguage } from '../../../hooks/useLang'
import { useAuth } from '../../../hooks/use-auth'

import { getFirebaseStorage } from '../../../API/firebase'

import { LOGIN_PAGE } from '../../../utilities/appVars'

import { socialHeaderStyles } from '../styles'
import { buttonStyles } from '../../../theme/buttons'

const SocialHeader = ({
  userName, image, userColor, logo, showLoginIcon, urlSuffix,
}) => {
  const defaultTheme = useTheme()
  const mode = useDisplayMode()
  const auth = useAuth()
  const history = useHistory()
  // const language = useLanguage()
  const { width } = useWindowDimensions()
  const classes = socialHeaderStyles()
  const buttonClasses = buttonStyles()
  const [bannerimage, setBannerImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [qrDrawerOpen, setQrDrawerOpen] = useState(window.location.hash === '#qr')
  const logoImage = logo && `data:${logo.type};base64,${logo.code}`

  useEffect(() => {
    let mounted = true
    if (mounted && image) {
      (async () => {
        setLoading(true)
        const bannerStorageImage = await getFirebaseStorage().ref(`profiles/${image}`).getDownloadURL()
        setBannerImage(bannerStorageImage)
        setTimeout(() => setLoading(false), 1000)
      })()
    }
    return () => { mounted = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      setQrDrawerOpen(window.location.hash === '#qr')
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const goToImage = e => {
    e.stopPropagation()
    history.push('/picture')
  }

  const goToLogo = () => {
    history.push('/logo')
  }

  const goToTheme = e => {
    e.stopPropagation()
    history.push('/settings/theme')
  }

  const goToLogin = () => {
    history.push(LOGIN_PAGE)
  }

  const openQrDrawerHandler = () => {
    window.location.hash = '#qr'
  }

  const closeQrDrawerHandler = () => {
    window.history.back()
  }

  const menuId = 'qr-menu'

  return (
    <Box className={classes.container}>
      {showLoginIcon && (
        <Box display="flex" alignItems="center" className={classes.loggedoutRightMenu}>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={openQrDrawerHandler}
            color="inherit"
          >
            <QrIcon fill={defaultTheme.palette.background.default} />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="Login"
            onClick={goToLogin}
            color="inherit"
            className={classes.loginIconButton}
          >
            <AccountCircleIcon />
          </IconButton>
        </Box>
      )}
      <AppNav profileType="social" userColor={userColor} />
      <Box
        className={`${classes.content} ${image ? classes.headerWithImage : classes.headerWithOutImage}`}
        style={{ maxHeight: width / 2, backgroundColor: !loading && image ? 'transparent' : userColor }}
        onClick={e => (mode.mode === 'edit' ? goToImage(e) : true)}
      >
        {bannerimage && (
          <img src={bannerimage} alt={userName} className={`${classes.image} ${!image || (image && loading) ? classes.placeholderImage : ''}`} />
        )}
        {image && loading && (
          <CircularProgress size={30} className={classes.bannerLoadingProgress} />
        )}
        {mode.mode === 'edit' && (
          <>
            <Box className={classes.placeholderContainer}>
              <Button
                color="secondary"
                onClick={e => goToImage(e)}
                className={buttonClasses.editModeButtonCircle}
              >
                <AddAPhotoIcon style={{ fontSize: '1.2rem' }} />
              </Button>
            </Box>

            <Box className={classes.placeholderContainerTheme}>
              <Button
                color="secondary"
                onClick={e => goToTheme(e)}
                className={buttonClasses.editModeButtonCircle}
              >
                <PaletteIcon style={{ fontSize: '1.4rem' }} />
              </Button>
            </Box>
          </>
        )}
      </Box>
      <Box className={classes.cardLogo} onClick={() => (mode.mode === 'edit' ? goToLogo() : true)}>
        <Avatar
          alt={userName}
          src={logoImage || '/assets/images/avatar.svg'}
          className={`${classes.viewCardLogo} ${!logoImage ? classes.logoPlaceholder : ''} ${logo && logo.style === 'square' ? classes.squareLogo : ''}`}
        />
        {mode.mode === 'edit' && (
          <Box className={classes.logoPlaceholderContainer}>
            <Button
              color="secondary"
              onClick={() => goToLogo()}
              className={buttonClasses.editModeButtonCircle}
            >
              <AddAPhotoIcon style={{ fontSize: '1.2rem' }} />
            </Button>
          </Box>
        )}
      </Box>
      {qrDrawerOpen && !auth.user && (
        <QRdrawer
          hideButtons
          closeDialog={closeQrDrawerHandler}
          dialogOpen={qrDrawerOpen}
          urlSuffix={urlSuffix}
          // qrURL={`${language.languageVars.appDomain}/${urlSuffix}`}
          userColor={userColor}
        />
      )}
    </Box>
  )
}

SocialHeader.defaultProps = {
  userName: null,
  image: null,
  userColor: null,
  logo: null,
  showLoginIcon: false,
  urlSuffix: null,
}

SocialHeader.propTypes = {
  userName: PropTypes.string,
  image: PropTypes.string,
  logo: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  userColor: PropTypes.string,
  showLoginIcon: PropTypes.bool,
  urlSuffix: PropTypes.string,
}

export default SocialHeader
