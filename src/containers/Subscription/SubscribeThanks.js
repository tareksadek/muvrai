import React from 'react'

import { useHistory } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { Logo } from '../../layout/CustomIcons'

import ProBox from '../../components/BecomePro/ProBox'

import { useLanguage } from '../../hooks/useLang'

import { proBoxStyles } from '../../components/BecomePro/styles'
import { buttonStyles } from '../../theme/buttons'
import { layoutStyles } from '../../theme/layout'

// const YlcCarousel = lazy(() => import('../../components/Landing/Carousel'))

const Landing = () => {
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.becomePro

  const classes = proBoxStyles()
  const layoutClasses = layoutStyles()
  const buttonClasses = buttonStyles()
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }

  return (
    <Box className={`${layoutClasses.pageContainer} ${classes.landingPageContainer}`}>
      <Box className={classes.landingHeader}>
        <Box className={classes.landingNav}>
          <Button
            onClick={() => goToHome()}
          >
            <Logo className={classes.logo} />
          </Button>
        </Box>
      </Box>
      <Box className={classes.proBoxContainer}>
        <Box className={classes.proBox}>
          <Box className={classes.proBoxHeader}>
            {/* <img src="/assets/images/becomePro.jpg" alt={pageStatics.data.titles.page} />
            <Box className={classes.proBoxHeaderData}>
              <Typography variant="body1" align="left" component="p" className={classes.proBoxHeaderTitle}>
                {pageStatics.data.titles.page}
              </Typography>
              <Typography variant="body1" align="left" component="p" className={classes.proBoxHeaderDescription}>
                {pageStatics.data.description.page}
              </Typography>
              <Button
                className={`${buttonClasses.defaultButton} ${classes.proBoxHeaderButton}`}
                onClick={() => goToSubscribe()}
                style={{
                  backgroundColor: color.color.code,
                }}
              >
                {pageStatics.buttons.becomePro}
              </Button>
            </Box> */}
            <Box className={classes.landingTextContainer}>
              <Typography variant="body1" component="p" align="center" className={classes.landingTextOne}>
                Thank you
                <span>FOR</span>
              </Typography>
              <Typography variant="body1" component="p" align="center" className={classes.landingTextOne}>
                <span>Subscribing</span>
              </Typography>
              {/* <Typography variant="body1" component="p" align="center" className={classes.landingTextThree}>
                to
                <span>Connect</span>
              </Typography>
              <Typography variant="body1" component="p" align="center" className={classes.landingTextFour}>
                {pageStatics.data.titles.subtitle}
              </Typography> */}
            </Box>
            <Button
              className={`${buttonClasses.defaultButton} ${classes.proBoxHeaderButton}`}
              onClick={() => goToHome()}
            >
              {pageStatics.buttons.startPro}
            </Button>
          </Box>

          <Box className={classes.proBoxContent}>
            <Box className={classes.proBoxContentHeader}>
              <Typography variant="body1" align="left" component="p" className={classes.proBoxContentSubTitle}>
                {pageStatics.data.titles.thanksSubtitle}
              </Typography>
              <Typography variant="body1" align="left" component="p" className={classes.proBoxContentTitle}>
                {pageStatics.data.titles.thanksTitle}
              </Typography>
            </Box>
            <ProBox noButton onlyFeatures noTitles />
            <Box mb={2} pl={2} pr={2}>
              <Button
                className={`${buttonClasses.defaultButton} ${classes.proBoxHeaderButton}`}
                onClick={() => goToHome()}
              >
                {pageStatics.buttons.startPro}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Landing
