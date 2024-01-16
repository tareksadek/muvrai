import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import QRCode from 'react-qr-code'
import { saveSvgAsPng, svgAsDataUri } from 'save-svg-as-png'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
// import Chip from '@material-ui/core/Chip'

// import StarIcon from '@material-ui/icons/Star'

import Header from '../../layout/Header'
import PageTitle from '../../layout/PageTitle'
import InfoBox from '../../components/Ui/InfoBox'
import SkeletonContainer from '../../layout/SkeletonContainer'
import ProDialog from '../../components/BecomePro/ProDialog'
import LoadingBackdrop from '../../components/Loading/LoadingBackdrop'

import { useAuth } from '../../hooks/use-auth'
import { useColor } from '../../hooks/useDarkMode'
import { useLanguage } from '../../hooks/useLang'

import { layoutStyles } from '../../theme/layout'
import { buttonStyles } from '../../theme/buttons'
import { qrStyles } from './styles'

import * as actions from '../../store/actions'
import { settings } from '../../utilities/appVars'

const QrCode = ({
  cardData,
}) => {
  const layoutClasses = layoutStyles()
  const buttonClasses = buttonStyles()
  const classes = qrStyles()

  const color = useColor()
  const auth = useAuth()
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.qrCode
  // const isTheLoggedinUser = cardData.urlSuffix === auth.userUrlSuffix

  const pageUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/profile/' : language.languageVars.appProfileURL
  const userName = `${cardData.namePrefix ? `${cardData.namePrefix}.` : ''} ${cardData.firstName} ${cardData.lastName} ${cardData.nameSuffix || ''}`
  const isPro = auth.isSubscriber && (auth.subscriberStatus === 'active' || auth.subscriberStatus === 'trialing')

  // const [loadingDone, setLoadingDone] = useState(false)
  // const [loading, setLoading] = useState(false)
  const [proDialogOpen, setProDialogOpen] = useState(window.location.hash === '#becomepro')

  // useEffect(() => {
  //   let mounted = true

  //   if ((mounted && !cardData.userId) || !isTheLoggedinUser) {
  //     (async () => {
  //       setLoading(true)
  //       await onLoadCard(auth.user.uid)
  //       setLoadingDone(true)
  //       setTimeout(() => setLoading(false), 1000)
  //     })()
  //   }

  //   return () => { mounted = false }
  // }, [onLoadCard, auth.user.uid, cardData.userId, isTheLoggedinUser])

  // useEffect(() => {
  //   if (window.localStorage.getItem('originalTheme')) {
  //     switchTheme(window.localStorage.getItem('originalTheme'))
  //   }
  // }, [switchTheme])

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

  const saveAsPNG = () => {
    if (settings.onlyInvitations && !isPro) {
      openProDialogHandler()
    } else {
      saveSvgAsPng(document.getElementById('qrcode'), `${userName.trim()}.png`, { scale: 6 })
    }
  }

  const saveAsSVG = async () => {
    if (settings.onlyInvitations && !isPro) {
      openProDialogHandler()
    } else {
      try {
        const dataUri = await svgAsDataUri(document.getElementById('qrcode'))
        const dl = document.createElement('a')
        document.body.appendChild(dl)
        dl.setAttribute('href', dataUri)
        dl.setAttribute('download', `${userName.trim()}.svg`)
        dl.click();
      } catch (err) {
        throw new Error(err)
      }
    }
  }

  if (cardData.loading || !cardData.userId || auth.loadingAuth) {
    return (
      <Box className={layoutClasses.pageContainer}>
        <Header title={pageStatics.data.titles.page}>
          <Box>
            <InfoBox infoList={[pageStatics.messages.info.general.first]} />
          </Box>
        </Header>
        <Box className={layoutClasses.contentContainer}>
          <Box className={layoutClasses.formContainer}>
            <Box className={`${layoutClasses.panel}`}>
              <SkeletonContainer list={[
                { variant: 'rect', fullWidth: true, height: 150 },
                { variant: 'rect', width: 100, height: 50 },
                { variant: 'rect', width: 100, height: 50 },
              ]}
              />
            </Box>
          </Box>
        </Box>
        <LoadingBackdrop done={!auth.loadingAuth} loadingText={pageStatics.messages.loading.loadingQrCode} boxed />
      </Box>
    )
  }

  return (
    <Box className={layoutClasses.pageContainer}>
      {/* {loading && <LoadingBackdrop done={loadingDone} loadingText={pageStatics.messages.loading.loadingQrCode} />} */}
      <Header title={pageStatics.data.titles.page}>
        <Box>
          <InfoBox infoList={[pageStatics.messages.info.general.first]} />
        </Box>
      </Header>
      <Box className={layoutClasses.contentContainer}>
        <Box className={layoutClasses.formContainer}>
          <Box className={`${layoutClasses.panel}`}>
            <PageTitle title={pageStatics.data.titles.qrCodePanel} isPro={settings.onlyInvitations && !isPro} />
            <Box className={classes.qrCodeContainer} mt={2}>
              <QRCode id="qrcode" value={`${pageUrl}${cardData.urlSuffix}`} />
            </Box>
            <Box className={layoutClasses.panelButtonsContainer}>
              <Button
                className={`${buttonClasses.defaultButton} ${layoutClasses.panelButton}`}
                style={{
                  backgroundColor: color.color.code,
                }}
                onClick={() => saveAsPNG()}
              >
                {pageStatics.buttons.saveAsPng}
              </Button>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Button
                  className={`${buttonClasses.defaultButton} ${layoutClasses.panelButton}`}
                  style={{
                    backgroundColor: color.color.code,
                  }}
                  onClick={() => saveAsSVG()}
                >
                  {pageStatics.buttons.saveAsSvg}
                </Button>
                {/* {settings.onlyInvitations && !isPro && (
                  <Chip
                    size="small"
                    icon={<StarIcon />}
                    label="Pro"
                    clickable
                    color="primary"
                    onClick={openProDialogHandler}
                    className={layoutClasses.proChip}
                    style={{ marginTop: 8 }}
                  />
                )} */}
              </Box>
            </Box>
          </Box>
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

const mapStateToProps = state => ({
  cardData: state.cards,
})

const mapDispatchToProps = dispatch => ({
  onLoadCard: userId => dispatch(actions.loadCardByUserId(userId)),
})

QrCode.defaultProps = {
  cardData: null,
}

QrCode.propTypes = {
  cardData: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  // onLoadCard: PropTypes.func.isRequired,
  // switchTheme: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(QrCode)
