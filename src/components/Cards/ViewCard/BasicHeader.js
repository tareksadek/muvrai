import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { useTheme } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'

import PaletteIcon from '@material-ui/icons/Palette'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import EditIcon from '@material-ui/icons/Edit'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import { QrIcon } from '../../../layout/CustomIcons'

import AppNav from '../../../layout/AppNav'
import QRdrawer from './QRdrawer'

import { useDisplayMode } from '../../../hooks/useDisplayMode'
// import { useLanguage } from '../../../hooks/useLang'
import { useAuth } from '../../../hooks/use-auth'

import { getFirebaseStorage } from '../../../API/firebase'

import { LOGIN_PAGE } from '../../../utilities/appVars'

import { headerStyles } from '../styles'
import { buttonStyles } from '../../../theme/buttons'

const BasicHeader = ({
  userName, title, colorCode, firstName, lastName, image, logo, userColor, homePhone, email, organization, showLoginIcon, urlSuffix,
}) => {
  const defaultTheme = useTheme()
  const auth = useAuth()
  // const language = useLanguage()
  const classes = headerStyles()
  const buttonClasses = buttonStyles()

  const mode = useDisplayMode()
  const history = useHistory()

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

  const goToLogo = e => {
    e.stopPropagation()
    history.push('/logo')
  }

  const goToTheme = e => {
    e.stopPropagation()
    history.push('/settings/theme')
  }

  const goToInfo = e => {
    e.stopPropagation()
    history.push('/info')
  }

  const goToContact = e => {
    e.stopPropagation()
    history.push('/contact')
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
      <AppNav profileType="social" userColor={colorCode} />
      <Box
        className={`${classes.content} ${image ? classes.headerWithImage : classes.headerWithOutImage}`}
        style={{ backgroundColor: !loading && image ? 'transparent' : userColor }}
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
        <Box className={classes.cardContainer}>
          <Box className={classes.cardDataContainer}>
            <Box className={classes.cardAvatar}>
              <Avatar
                alt={userName}
                src={logoImage || '/assets/images/avatar.svg'}
                className={classes.basicViewCardAvatar}
              />
              {mode.mode === 'edit' && (
                <Box className={classes.logoPlaceholderContainer}>
                  <Button
                    color="secondary"
                    onClick={e => goToLogo(e)}
                    className={buttonClasses.editModeButtonCircle}
                  >
                    <AddAPhotoIcon style={{ fontSize: '1.2rem' }} />
                  </Button>
                </Box>
              )}
            </Box>
            <Box className={classes.cardData}>
              <Typography component="p" variant="body1" className={`${classes.viewCardName} ${(firstName && firstName.length > 9) || (lastName && lastName.length > 9) ? classes.viewCardNameSmall : ''}`}>
                {firstName || lastName ? userName : ''}
                {mode.mode === 'edit' && (
                  <span className={classes.placeholderButtonContainer}>
                    <Button
                      color="secondary"
                      onClick={e => goToInfo(e)}
                      className={buttonClasses.editModeButtonCircle}
                    >
                      <EditIcon style={{ fontSize: '0.9rem' }} />
                    </Button>
                  </span>
                )}
              </Typography>
              {title && (
                <Typography component="p" variant="body1" className={classes.viewCardTitle}>
                  {title}
                  {organization ? ` @ ${organization}` : ''}
                </Typography>
              )}
              <Box className={classes.viewCardContacts}>
                {email && (
                  <Box>
                    <a href={`mailto:${email}`} style={{ color: colorCode }} className={classes.viewCardEmail}>
                      {email}
                    </a>
                    {mode.mode === 'edit' && (
                      <span className={classes.placeholderButtonContainer} style={{ top: 0 }}>
                        <Button
                          color="secondary"
                          onClick={e => goToContact(e)}
                          className={buttonClasses.editModeButtonCircle}
                        >
                          <EditIcon style={{ fontSize: '0.9rem' }} />
                        </Button>
                      </span>
                    )}
                  </Box>
                )}
                {homePhone && (
                  <Typography component="p" variant="body1" className={classes.viewCardTitle}>
                    {homePhone}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {qrDrawerOpen && !auth.user && (
        <QRdrawer
          hideButtons
          closeDialog={closeQrDrawerHandler}
          dialogOpen={qrDrawerOpen}
          urlSuffix={urlSuffix}
          userColor={userColor}
        />
      )}
    </Box>
  )
}

BasicHeader.defaultProps = {
  userName: null,
  title: null,
  image: null,
  userColor: null,
  logo: null,
  colorCode: null,
  firstName: null,
  lastName: null,
  homePhone: null,
  email: null,
  organization: null,
  showLoginIcon: false,
  urlSuffix: null,
}

BasicHeader.propTypes = {
  userName: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  logo: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  userColor: PropTypes.string,
  colorCode: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  homePhone: PropTypes.string,
  email: PropTypes.string,
  organization: PropTypes.string,
  showLoginIcon: PropTypes.bool,
  urlSuffix: PropTypes.string,
}

export default BasicHeader
