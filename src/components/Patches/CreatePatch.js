import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import Switch from '@material-ui/core/Switch'

import { SketchPicker } from 'react-color'

import CloseIcon from '@material-ui/icons/Close'
import CheckIcon from '@material-ui/icons/Check'

import LoadingBackdrop from '../Loading/LoadingBackdrop'
import PageTitle from '../../layout/PageTitle'

import FormElement from '../Ui/FormElement'

import { createUserDialog } from './styles'
import { buttonStyles } from '../../theme/buttons'

import { createFormElementObj, adjustFormValues, createFormValuesObj } from '../../utilities/form'

import {
  SocialLayoutIcon, BusinessLayoutIcon, BasicLayoutIcon,
} from '../../layout/CustomIcons'

import { generatePatchCode, addPatchMaster } from '../../API/invitationPatches'
import {
  generateInvitaionCode,
} from '../../API/invitations'

import { themeColors } from '../../utilities/appVars'

import * as actions from '../../store/actions'

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />)

const CreatPatch = ({
  closeDialog, dialogOpen, onSetNotification, reloadPatches, connectionForms,
}) => {
  console.log(connectionForms && connectionForms.length > 0 && connectionForms.map(form => ({ value: form.id, display: form.title })));
  const classes = createUserDialog()
  const buttonClasses = buttonStyles()
  const [loading, setLoading] = useState(false)
  const [patchFormValid, setPatchFormValid] = useState(false)
  const [patchForm, setpatchForm] = useState({
    title: createFormElementObj('input', 'Patch Title',
      { type: 'text', name: 'title', placeholder: 'Patch Title' }, '', null, { required: false }, true,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    invitationsNumber: createFormElementObj('input', 'Number of invitations',
      { type: 'number', name: 'invitationsNumber', placeholder: 'Number of invitations' }, 1, null, { required: false }, true,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    package: createFormElementObj('select', 'Package', { name: 'package' }, '', [
      { value: 'test', display: 'Test' },
      { value: 'virtual', display: 'Virtual' },
      { value: 'device', display: 'Regular' },
      { value: 'master', display: 'Master' },
      { value: 'realtor', display: 'Realtor' },
    ], { required: true }, false, {
      xs: 12,
      sm: null,
      md: null,
      lg: null,
      xl: null,
      fullWidth: true,
    }),
    connectForm: createFormElementObj('select', 'Connect Form', { name: 'connectForm' }, '',
      connectionForms && connectionForms.length > 0 ? connectionForms.map(form => ({ value: form.id, display: form.title })) : [],
      // [
      //   { value: 'default', display: 'Default' },
      //   { value: 'realtor', display: 'Realtor' },
      // ],
      { required: true }, false, {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    logo: createFormElementObj('textarea', 'Logo',
      {
        type: 'text',
        name: 'logo',
        placeholder: 'Logo',
        parse: 'disabled',
      },
      '',
      null,
      { required: false },
      true,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    logoLink: createFormElementObj('input', 'Logo Link',
      { type: 'text', name: 'logoLink', placeholder: 'Logo Link' }, '', null, { required: false }, true,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    storeButtonText: createFormElementObj('input', 'Store Button Text',
      { type: 'text', name: 'storeButtonText', placeholder: 'Store Button Text' }, '', null, { required: false }, true,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    storeButtonLink: createFormElementObj('input', 'Store Button Link',
      { type: 'text', name: 'storeButtonLink', placeholder: 'Store Button Link' }, '', null, { required: false }, true,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
  })
  const [defaultLayout, setDefaultLayout] = useState('social')
  const [defaultTheme, setDefaultTheme] = useState('light')
  const [defaultColor, setDefaultColor] = useState({ name: 'grey', code: '#888888' })
  const [pickerColor, setPickerColor] = useState('#000')
  const [defaultLinksToTheme, setDefaultLinksToTheme] = useState(false)

  useEffect(() => {
    if (connectionForms && connectionForms.length > 0) {
      const forms = connectionForms.map(form => ({ value: form.id, display: form.title }))
      const adjustedcontactForm = adjustFormValues(patchForm, { connectForm: forms }, null)
      // if (data.vCardFile) {
      //   setExistingVcard(data.vCardFile)
      // }
      setpatchForm(prevForm => ({ ...prevForm, ...adjustedcontactForm.adjustedForm }))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectionForms])

  const inputChangeHandler = (e, key) => {
    let changeEvent

    if (Array.isArray(e)) {
      changeEvent = e.join()
    } else if (Number.isInteger(e)) {
      changeEvent = String(e)
    } else {
      changeEvent = e
    }
    const adjustedForm = adjustFormValues(patchForm, changeEvent, key)
    setpatchForm(adjustedForm.adjustedForm)
    setPatchFormValid(adjustedForm.formValid)
  }

  const loadPatchForm = () => {
    const form = Object.keys(patchForm).map((formEl, i) => (
      <Grid item xs={12} key={formEl + i}>
        <Box mb={3} className={classes.readPrefContainer}>
          <FormElement
            elementType={patchForm[formEl].elementType}
            label={patchForm[formEl].elementLabel}
            value={patchForm[formEl].value}
            elementOptions={patchForm[formEl].elementOptions}
            touched={patchForm[formEl].touched}
            valid={patchForm[formEl].isValid}
            shouldValidate={patchForm[formEl].validtationRules}
            elementSetup={patchForm[formEl].elementSetup}
            changed={e => inputChangeHandler(e, formEl)}
            grid={patchForm[formEl].grid}
            disabled={loading}
          />
        </Box>
      </Grid>
    ))

    return form
  }

  const createPatchHandler = async e => {
    e.preventDefault()
    setLoading(true)
    const themeObj = {
      layout: defaultLayout,
      selectedColor: defaultColor,
      theme: defaultTheme,
      defaultLinksToTheme,
    }
    const patchDetails = createFormValuesObj(patchForm)
    const storeObj = {
      logo: patchDetails.logo && patchDetails.logo !== '' ? patchDetails.logo : null,
      logoLink: patchDetails.logoLink && patchDetails.logoLink !== '' ? patchDetails.logoLink : null,
      storeButtonText: patchDetails.storeButtonText && patchDetails.storeButtonText !== '' ? patchDetails.storeButtonText : null,
      storeButtonLink: patchDetails.storeButtonLink && patchDetails.storeButtonLink !== '' ? patchDetails.storeButtonLink : null,
    }
    const defaultForm = patchDetails.connectForm && patchDetails.connectForm !== '' ? patchDetails.connectForm : null
    const patchObj = await generatePatchCode(patchDetails.title, patchDetails.package, defaultForm, patchDetails.invitationsNumber, themeObj, storeObj)
    let invitationCodeObj
    let invitationPackage
    let masterId = null
    for (let i = 1; i <= patchDetails.invitationsNumber; i += 1) {
      invitationPackage = patchDetails.package === 'master' && i === 1 ? 'master' : 'single'
      try {
        /* eslint-disable no-await-in-loop */
        invitationCodeObj = await generateInvitaionCode(patchDetails.package, patchObj.patchId, invitationPackage, defaultForm, masterId, themeObj, storeObj)
        masterId = (patchDetails.package === 'master' && i === 1) ? invitationCodeObj.code.substring(0, invitationCodeObj.code.indexOf('_')) : masterId
      } catch (err) {
        closeDialog()
        onSetNotification({
          message: `There was a problem creating new patch. ${err.message}`,
          type: 'error',
        })
      }
    }

    if (masterId) {
      await addPatchMaster(patchObj.patchId, masterId)
    }

    await reloadPatches()
    closeDialog()
    onSetNotification({
      message: 'Patch created successfully.',
      type: 'success',
    })

    setLoading(false)
  }

  const changeLayoutHandler = layoutMode => {
    setDefaultLayout(layoutMode)
  }

  const changeThemeHandler = themeMode => {
    setDefaultTheme(themeMode)
  }

  const changeColorHandler = colorObj => {
    setDefaultColor(colorObj)
  }

  const colorPickerHandler = colorCode => {
    setPickerColor(colorCode)
    const colorObj = {
      name: 'picker',
      code: colorCode,
    }
    setDefaultColor(colorObj)
  }

  const setColorAsDefault = () => {
    setDefaultLinksToTheme(prevState => !prevState)
  }

  return (
    <Dialog
      fullScreen
      open={dialogOpen}
      onClose={closeDialog}
      TransitionComponent={Transition}
      classes={{
        paperFullScreen: classes.paperFullScreen,
      }}
    >
      {loading && <LoadingBackdrop placement="inset" loadingText="Creating user..." />}
      <AppBar className={classes.dialogHeader}>
        <Toolbar>
          <IconButton className={`${classes.dialogClose}`} edge="start" color="inherit" onClick={closeDialog} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography
            className={`${classes.dialogTitle}`}
            align="center"
            variant="h4"
          >
            Create new patch
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.dialogContent}>
        {loadPatchForm()}
        <PageTitle title="Layout" />
        <Box className={classes.layoutButtonsContainer}>
          <Button onClick={() => changeLayoutHandler('basic')} className={defaultLayout === 'basic' ? classes.selectedLayout : ''}>
            <BasicLayoutIcon
              fill="#bbb"
              background={defaultTheme === 'dark' ? '#272727' : '#fff'}
              backgroundrev={defaultTheme === 'dark' ? '#eee' : '#272727'}
              selectedcolor={defaultColor.code || '#bbb'}
            />
            <span className={classes.buttonText}>
              Basic
            </span>
          </Button>
          <Button onClick={() => changeLayoutHandler('social')} className={defaultLayout === 'social' ? classes.selectedLayout : ''}>
            <SocialLayoutIcon
              fill="#bbb"
              background={defaultTheme === 'dark' ? '#272727' : '#fff'}
              backgroundrev={defaultTheme === 'dark' ? '#eee' : '#272727'}
              selectedcolor={defaultColor.code || '#bbb'}
            />
            <span className={classes.buttonText}>
              Social
            </span>
          </Button>
          <Button onClick={() => changeLayoutHandler('business')} className={defaultLayout === 'business' ? classes.selectedLayout : ''}>
            <BusinessLayoutIcon
              fill="#bbb"
              background={defaultTheme === 'dark' ? '#272727' : '#fff'}
              backgroundrev={defaultTheme === 'dark' ? '#eee' : '#272727'}
              selectedcolor={defaultColor.code || '#bbb'}
            />
            <span className={classes.buttonText}>
              Business
            </span>
          </Button>
        </Box>
        <PageTitle title="Theme" mt={3} />
        <Box className={classes.themeButtonsContainer}>
          <Button
            className={`${classes.themeButton} ${classes.lightThemeButton} ${defaultTheme === 'light' ? classes.selectedTheme : ''}`}
            onClick={() => changeThemeHandler('light')}
          >
            <CheckIcon />
          </Button>
          <Button
            className={`${classes.themeButton} ${classes.darkThemeButton} ${defaultTheme === 'dark' ? classes.selectedTheme : ''}`}
            onClick={() => changeThemeHandler('dark')}
          >
            <CheckIcon />
          </Button>
        </Box>
        <PageTitle title="Color" mt={3} />
        <Box className={classes.colorButtonsContainer}>
          {
            // color.color.name === 'picker' && (
            //   <Button
            //     className={classes.colorButton}
            //     onClick={() => changeColorHandler({ name: 'picker', code: color.color.code })}
            //     style={{ backgroundColor: color.color.code }}
            //   >
            //     {color.color.name === 'picker' && (
            //       <CheckIcon />
            //     )}
            //   </Button>
            // )
          }
          {themeColors.map(colorObj => (
            <Button
              key={colorObj.name}
              className={classes.colorButton}
              onClick={() => changeColorHandler(colorObj)}
              style={{ backgroundColor: colorObj.code }}
            >
              {colorObj.name === defaultColor.name && (
                <CheckIcon />
              )}
            </Button>
          ))}
        </Box>
        <Box className={classes.colorPicker}>
          <SketchPicker
            color={defaultColor.code || pickerColor}
            presetColors={themeColors.map(colorObj => colorObj.code)}
            disableAlpha
            width="100%"
            onChange={colorCode => colorPickerHandler(colorCode.hex)}
          />
        </Box>
        <Box className={classes.defaultLinksColorContainer}>
          <Typography className={classes.defaultLinksCheckboxText} component="p" variant="body1">
            Use profile color as background
          </Typography>
          <Switch
            checked={defaultLinksToTheme}
            onChange={() => setColorAsDefault()}
            name="defaultColor"
          />
        </Box>
        <Button
          color="primary"
          className={buttonClasses.defaultButton}
          onClick={e => createPatchHandler(e)}
          disabled={!patchFormValid || loading}
        >
          Create patch
        </Button>
      </Box>
    </Dialog>
  )
}

const mapDispatchToProps = dispatch => ({
  onSetNotification: notification => dispatch(actions.setNotification(notification)),
})

CreatPatch.defaultProps = {
  dialogOpen: false,
  connectionForms: null,
}

CreatPatch.propTypes = {
  dialogOpen: PropTypes.bool,
  closeDialog: PropTypes.func.isRequired,
  onSetNotification: PropTypes.func.isRequired,
  reloadPatches: PropTypes.func.isRequired,
  connectionForms: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
}

export default connect(null, mapDispatchToProps)(CreatPatch)
