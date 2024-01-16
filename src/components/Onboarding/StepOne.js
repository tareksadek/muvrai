import React from 'react'
import PropTypes from 'prop-types'

import { useWizard } from 'react-use-wizard'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

import FormElement from '../Ui/FormElement'
// import InfoBox from '../Ui/InfoBox'
import PageTitle from '../../layout/PageTitle'

import { useLanguage } from '../../hooks/useLang'

import { layoutStyles } from '../../theme/layout'
import { onboardingStyles } from './styles'
import { buttonStyles } from '../../theme/buttons'

const StepOne = ({
  inputChangeHandler, infoForm, setInfoForm, loading,
}) => {
  const classes = onboardingStyles()
  const layoutClasses = layoutStyles()
  const buttonClasses = buttonStyles()
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.onboarding
  const {
    nextStep, activeStep,
  } = useWizard()

  const loadStepFormContent = (formElements, setForm) => {
    const form = Object.keys(formElements).map((formEl, i) => (
      <FormElement
        elementType={formElements[formEl].elementType}
        label={formElements[formEl].elementLabel}
        value={formElements[formEl].value}
        elementOptions={formElements[formEl].elementOptions}
        touched={formElements[formEl].touched}
        valid={formElements[formEl].isValid}
        errorMessage={formElements[formEl].errorMessage}
        shouldValidate={formElements[formEl].validtationRules}
        elementSetup={formElements[formEl].elementSetup}
        changed={e => inputChangeHandler(e, formEl, formElements, setForm)}
        grid={formElements[formEl].grid}
        disabled={loading}
        key={formEl + i}
      />
    ))

    return form
  }

  return (
    <>
      <Stepper activeStep={activeStep} className={classes.stepsBar}>
        <Step><StepLabel>1</StepLabel></Step>
        <Step><StepLabel>2</StepLabel></Step>
        <Step><StepLabel>3</StepLabel></Step>
        <Step><StepLabel>4</StepLabel></Step>
      </Stepper>
      {/* <Box className={classes.stepsBar}>
        <ul className={classes.progressbar}>
          <li className={classes.active}>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
          <li>Step 4</li>
        </ul>
      </Box> */}
      <Box className={`${layoutClasses.panel} ${layoutClasses.transPanel} ${layoutClasses.onboardingPanel}`}>
        <PageTitle
          title={`${activeStep + 1}. ${pageStatics.data.titles.stepOne}`}
        />
        <Box mb={2}>
          <Typography variant="body1" align="left" component="p" className={layoutClasses.panelText}>
            {pageStatics.data.description.stepOne}
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {loadStepFormContent(infoForm, setInfoForm)}
        </Grid>
      </Box>
      <Box className={classes.stepbuttonsContainer}>
        {/* <Button
          onClick={() => previousStep()}
          disabled={isFirstStep}
          className={buttonClasses.defaultButton}
        >
          {pageStatics.buttons.prevStep}
        </Button> */}
        <Button
          onClick={() => nextStep()}
          className={`${buttonClasses.defaultButton} ${classes.nextButton}`}
        >
          {pageStatics.buttons.nextStep}
        </Button>
        {/* <Box className={classes.onboardingIndicator}>
          <span className={classes.selected}>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </Box> */}
      </Box>
      {
        // <Box mt={3}>
        //   <InfoBox infoList={[pageStatics.messages.info.stepOne.first]} />
        // </Box>
      }
    </>
  )
}

StepOne.defaultProps = {
  infoForm: null,
  loading: false,
}

StepOne.propTypes = {
  inputChangeHandler: PropTypes.func.isRequired,
  setInfoForm: PropTypes.func.isRequired,
  infoForm: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  loading: PropTypes.bool,
}

export default StepOne
