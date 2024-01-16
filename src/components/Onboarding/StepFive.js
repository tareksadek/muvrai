import React from 'react'
import PropTypes from 'prop-types'

import { useWizard } from 'react-use-wizard'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import CheckIcon from '@material-ui/icons/Check'

// import InfoBox from '../Ui/InfoBox'
import PageTitle from '../../layout/PageTitle'

import { useLanguage } from '../../hooks/useLang'

import { themeColors } from '../../utilities/appVars'

import { onboardingStyles } from './styles'
import { layoutStyles } from '../../theme/layout'
import { buttonStyles } from '../../theme/buttons'

const StepFive = ({
  changeColorHandler, changeThemeHandler, color, theme, onUpdate,
}) => {
  const classes = onboardingStyles()
  const layoutClasses = layoutStyles()
  const buttonClasses = buttonStyles()
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.onboarding

  const {
    previousStep, nextStep, isFirstStep, isLastStep,
  } = useWizard()

  const processData = e => {
    if (isLastStep) {
      onUpdate(e)
    } else {
      nextStep()
    }
  }

  return (
    <>
      <Box className={`${layoutClasses.panel}`}>
        <PageTitle
          title={pageStatics.data.titles.stepFive}
        />
        <Box mb={2}>
          <Typography variant="body1" align="left" component="p" className={layoutClasses.panelText}>
            {pageStatics.data.description.stepFive}
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Box className={classes.themeContainer}>
            <Typography variant="body1" component="p" className={classes.stepSubtitle}>
              {pageStatics.data.titles.selectBackground}
            </Typography>
            <Box className={classes.themeButtonsContainer}>
              <Button
                className={`${classes.themeButton} ${classes.lightThemeButton} ${theme === 'light' ? classes.selectedTheme : ''}`}
                onClick={() => changeThemeHandler('light')}
              >
                <CheckIcon />
              </Button>
              <Button
                className={`${classes.themeButton} ${classes.darkThemeButton} ${theme === 'dark' ? classes.selectedTheme : ''}`}
                onClick={() => changeThemeHandler('dark')}
              >
                <CheckIcon />
              </Button>
            </Box>
          </Box>
          <Box className={classes.colorsContainer}>
            <Typography variant="body1" component="p" className={classes.stepSubtitle}>
              {pageStatics.data.titles.selectColor}
            </Typography>
            <Box className={classes.colorsButtonsContainer}>
              {themeColors.map(colorObj => (
                <Button
                  key={colorObj.name}
                  className={`${classes.colorButton} ${colorObj.name === 'black' ? classes.blackColorButton : ''}`}
                  onClick={() => changeColorHandler(colorObj)}
                  style={{ backgroundColor: colorObj.code }}
                >
                  {colorObj.name === color.color.name && (
                    <CheckIcon />
                  )}
                </Button>
              ))}
            </Box>
          </Box>
        </Grid>
      </Box>
      {
        // <Box mt={3}>
        //   <InfoBox infoList={[pageStatics.messages.info.stepThree.first]} />
        // </Box>
      }
      <Box className={classes.stepbuttonsContainer}>
        <Button
          onClick={() => previousStep()}
          disabled={isFirstStep}
          className={buttonClasses.defaultButton}
        >
          {pageStatics.buttons.prevStep}
        </Button>
        <Button
          onClick={e => processData(e)}
          className={buttonClasses.defaultButton}
        >
          {pageStatics.buttons.lastStep}
        </Button>
        <Box className={classes.onboardingIndicator}>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span className={classes.selected}>&nbsp;</span>
        </Box>
      </Box>
    </>
  )
}

StepFive.defaultProps = {
  color: null,
  theme: null,
}

StepFive.propTypes = {
  changeColorHandler: PropTypes.func.isRequired,
  changeThemeHandler: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  color: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.func,
  ])),
  theme: PropTypes.string,
}

export default StepFive
