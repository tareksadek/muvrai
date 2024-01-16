import React, {
  useState, useCallback, Suspense, lazy, useEffect,
} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import parse from 'html-react-parser'

import imageCompression from 'browser-image-compression'
import { getOrientation } from 'get-orientation/browser'
import { Wizard } from 'react-use-wizard'

import Box from '@material-ui/core/Box'

import { breakName, renameFile } from '../../utilities/utils'
import { getCroppedImg, getRotatedImage } from '../../utilities/canvasUtils'
import { createFormElementObj, adjustFormValues, createFormValuesObj } from '../../utilities/form'

import { useAuth } from '../../hooks/use-auth'
import { useLanguage } from '../../hooks/useLang'
import { useColor, useDarkMode } from '../../hooks/useDarkMode'
// import { useLayoutMode } from '../../hooks/useLayoutMode'

import LoadingBackdrop from '../../components/Loading/LoadingBackdrop'
import Header from '../../components/Onboarding/Header'
import SkeletonContainer from '../../layout/SkeletonContainer'
import AddToHomeScreen from './AddToHomeScreen'

// import { getFirebaseStorage } from '../../API/firebase'
import { updateCard } from '../../API/cards'
import { boardUser } from '../../API/users'
import { getConnectionForms, updateConnectionSettings } from '../../API/connections'

import { socialPlatforms, settings } from '../../utilities/appVars'

import * as actions from '../../store/actions'

import { layoutStyles } from '../../theme/layout'

const StepOne = lazy(() => import('../../components/Onboarding/StepOne'))
const StepTwo = lazy(() => import('../../components/Onboarding/StepTwo'))
const StepThree = lazy(() => import('../../components/Onboarding/StepThree'))
const StepFour = lazy(() => import('../../components/Onboarding/StepFour'))
// const StepFive = lazy(() => import('../../components/Onboarding/StepFive'))
const StepAddToHomeScreen = lazy(() => import('../../components/Onboarding/StepAddToHomeScreen'))

const ORIENTATION_TO_ANGLE = {
  3: 180,
  6: 90,
  8: -90,
}

const Onboarding = ({
  onSetNotification,
  onActivateForm,
  onLoadCardByUserId,
  layout,
  switchTheme,
}) => {
  const layoutClasses = layoutStyles()
  const auth = useAuth()
  const userName = breakName(parse(auth.user.displayName) || '')
  const userEmail = auth.user.email
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.onboarding
  // const isMaster = auth.accountType === 'master'

  const color = useColor()
  const { theme } = useDarkMode()
  // const { switchLayout } = useLayoutMode()

  const [infoForm, setInfoForm] = useState({
    firstName: createFormElementObj('input', pageStatics.forms.stepOne.firstName, { type: 'text', name: 'firstName', placeholder: pageStatics.forms.stepOne.firstName }, userName.firstName, null, { required: false }, false,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    lastName: createFormElementObj('input', pageStatics.forms.stepOne.lastName, { type: 'text', name: 'lastName', placeholder: pageStatics.forms.stepOne.lastName }, userName.lastName || '', null, { required: false }, false,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    email: createFormElementObj('input', pageStatics.forms.stepOne.email, { type: 'text', name: 'email', placeholder: pageStatics.forms.stepOne.email }, userEmail, null, { required: false }, false,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    workPhone: createFormElementObj('input', pageStatics.forms.stepOne.workPhone, { type: 'tel', name: 'workPhone', placeholder: pageStatics.forms.stepOne.workPhone }, '', null, { required: false }, false,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    address: createFormElementObj('input', pageStatics.forms.stepOne.address, { type: 'text', name: 'address', placeholder: pageStatics.forms.stepOne.address }, '', null, { required: false }, false,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
  })

  const [linksForm, setLinksForm] = useState({
    website: createFormElementObj('input', pageStatics.forms.stepThree.website, { type: 'text', name: 'website', placeholder: pageStatics.forms.stepThree.website }, '', null, { required: false }, false,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    facebook: createFormElementObj('input', pageStatics.forms.stepThree.facebook, { type: 'text', name: 'facebook', placeholder: pageStatics.forms.stepThree.facebook }, '', null, { required: false }, false,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    instagram: createFormElementObj('input', pageStatics.forms.stepThree.instagram, { type: 'text', name: 'instagram', placeholder: pageStatics.forms.stepThree.instagram }, '', null, { required: false }, false,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    linkedin: createFormElementObj('input', pageStatics.forms.stepThree.linkedIn, { type: 'text', name: 'linkedin', placeholder: pageStatics.forms.stepThree.linkedIn }, '', null, { required: false }, false,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    twitter: createFormElementObj('input', pageStatics.forms.stepThree.twitter, { type: 'text', name: 'twitter', placeholder: pageStatics.forms.stepThree.twitter }, '', null, { required: false }, false,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
  })

  const [pictureForm, setPictureForm] = useState({
    logo: createFormElementObj('imageUpload', pageStatics.forms.stepTwo.logo, {
      name: 'logo',
      placeholder: pageStatics.forms.stepTwo.logo,
      stateClass: 'cropActive',
      withView: false,
      showLabel: false,
      label: null,
      selectButtonText: 'Select image',
      changeButtonText: 'Change',
    }, '', null, { required: false }, false,
    {
      xs: 12,
      sm: null,
      md: null,
      lg: null,
      xl: null,
      fullWidth: true,
    }),
  })

  const [newProfilePicture, setNewProfilePicture] = useState(null)
  const [newProfilePictureType, setNewProfilePictureType] = useState(null)
  const [imageSrc, setImageSrc] = useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [loadingMessage, setLoadingMessage] = useState(null)
  const [formValid, setFormValid] = useState(false)
  const [formTouched, setFormTouched] = useState(false)
  const [formSaved, setFormSaved] = useState(false)
  const [loadingDone, setLoadingDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const [onBoardingDone, setOnboardingDone] = useState(false)
  const [connectionForms, setConnectionForms] = useState(null)
  const [selectedForm, setSelectedForm] = useState(settings.showIndustry ? null : 'HL1tL8IANmDYVC8b909Y')

  // const invitationTheme = window.localStorage.getItem('invitationTheme')
  const invitationTheme = window.localStorage.getItem('invitationTheme')
  const invitationColorName = window.localStorage.getItem('invitationColorName')
  const invitationColorCode = window.localStorage.getItem('invitationColorCode')

  useEffect(() => {
    let mounted = true

    if (mounted) {
      (async () => {
        setLoading(true)
        const forms = await getConnectionForms()
        setConnectionForms(forms)
        setLoadingDone(true)
        setTimeout(() => setLoading(false), 1000)
      })()
    }

    return () => { mounted = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (invitationTheme) {
      switchTheme(invitationTheme)
    }
    if (invitationColorName && invitationColorCode) {
      const colorObj = {
        name: invitationColorName,
        code: invitationColorCode,
      }
      color.switchColor(colorObj)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invitationTheme, invitationColorName, invitationColorCode])

  const onCropComplete = useCallback((croppedArea, croppedAreaPx) => {
    setCroppedAreaPixels(croppedAreaPx)
  }, [])

  const readFile = file => new Promise(resolve => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })

  const onFileChange = async (eve, key) => {
    if (eve && eve[0] instanceof File) {
      const file = eve[0]
      const compressionOptions = {
        maxSizeMB: file.size > 8000000 ? 0.05 : 0.2,
        maxWidthOrHeight: 550,
        useWebWorker: true,
      }
      const compressedFile = await imageCompression(file, compressionOptions)
      const newPic = renameFile(compressedFile, +new Date())
      setNewProfilePicture(newPic)

      let imageDataUrl = await readFile(newPic)

      // apply rotation if needed
      const orientation = await getOrientation(newPic)
      const rotationAmt = ORIENTATION_TO_ANGLE[orientation]
      if (rotationAmt) {
        imageDataUrl = await getRotatedImage(imageDataUrl, rotationAmt)
      }
      setNewProfilePictureType(newPic.type)
      setImageSrc(imageDataUrl)
      const adjustedPictureForm = adjustFormValues(pictureForm, newPic.name, key)
      setPictureForm(adjustedPictureForm.adjustedForm)
      setFormValid(adjustedPictureForm.formValid)
      setFormTouched(true)
      setFormSaved(false)
    }
  }

  const inputChangeHandler = async (eve, key, form, setForm) => {
    let changeEvent
    let e = eve
    if (!e) {
      e = ''
    }
    if (Array.isArray(e)) {
      changeEvent = e.join()
    } else if (Number.isInteger(e)) {
      changeEvent = String(e)
    } else {
      changeEvent = e
    }

    const adjustedForm = adjustFormValues(form, changeEvent, key)
    setForm(adjustedForm.adjustedForm)
    setFormValid(adjustedForm.formValid)
    setFormTouched(true)
    setFormSaved(false)
    setLoading(false)
  }

  const cleanUrl = url => url.replace(/ /g, '')

  const cleanSpecialChars = str => str.replace(/[#^+()$~'":*<>{}!@]/g, '')

  const isURL = str => {
    const pattern = new RegExp('^(https?:\\/\\/)?' // protocol
      + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
      + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
      + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
      + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
      + '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  }

  const getPlatformDomain = platform => {
    const socialLinkIndex = socialPlatforms.findIndex(socialPlatfrom => socialPlatfrom.platform === platform)
    const socialLinkDomain = socialPlatforms[socialLinkIndex].domain || ''

    return socialLinkDomain
  }

  const domainExits = (platform, url) => {
    const domain = getPlatformDomain(platform)
    const domainPart = domain.substring(0, domain.indexOf('.'))

    return url.includes(domainPart)
  }

  const validPlatformUrl = (url, platform) => {
    const isValidURL = isURL(url)
    const platformDomainExists = domainExits(platform, url)
    const linkProtocolExists = url.substring(0, 8) === 'https://' || url.substring(0, 7) === 'http://'

    return {
      isValidURL,
      platformDomainExists,
      linkProtocolExists,
    }
  }

  const linkBlurHandler = (e, platform) => {
    let inputValue = cleanUrl(e.target.value)
    const urlProps = validPlatformUrl(inputValue, platform)

    if (urlProps.isValidURL && urlProps.platformDomainExists && !urlProps.linkProtocolExists) {
      inputValue = `https://${inputValue}`
    } else if (inputValue !== '' && !urlProps.platformDomainExists && !urlProps.linkProtocolExists) {
      const domain = getPlatformDomain(platform)
      const cleanValue = cleanSpecialChars(inputValue)
      inputValue = `https://${domain}/${cleanValue}`
    }

    setLinksForm(prevForm => ({
      ...prevForm,
      ...{
        [platform]: {
          ...prevForm[platform],
          value: inputValue,
        },
      },
    }))

    setFormValid(true)
    setFormTouched(true)
  }

  // const inputBlurHandler = (e, platform, key) => {
  //   console.log(platform);
  //   const inputValue = e.target.value
  //   const isValid = inputValue.substring(0, 8) === 'https://' || inputValue.substring(0, 7) === 'http://'
  //   if (!isValid) {
  //     e.target.value = `http://${inputValue}`
  //   }
  //
  //   const adjustedForm = adjustFormValues(linksForm, e, key)
  //   setLinksForm(adjustedForm.adjustedForm)
  //   setFormValid(adjustedForm.formValid)
  //   setFormTouched(true)
  // }

  const createLinksArray = linksObject => {
    const linksArray = Object.entries(linksObject)
    let linkObj = {}
    const arrayOfLinks = []
    linksArray.map(link => {
      if (link[1] && link[1] !== '') {
        linkObj.active = true
        linkObj.originallyActive = true
        linkObj.saved = true
        linkObj.errorMessage = null
        linkObj.key = socialPlatforms.filter(sp => sp.platform === link[0])[0].key
        // eslint-disable-next-line prefer-destructuring
        linkObj.link = link[1]
        // eslint-disable-next-line prefer-destructuring
        linkObj.platform = link[0]
        linkObj.touched = true
        linkObj.valid = true
        linkObj.memberClicks = []
        arrayOfLinks.push(linkObj)
        linkObj = {}
      }
      return true
    })

    return arrayOfLinks
  }

  const updateCardHandler = async e => {
    e.preventDefault()
    setLoadingDone(false)
    setLoading(true)
    const infoFormDetails = createFormValuesObj(infoForm)
    const linksFormDetails = createFormValuesObj(linksForm)
    const pictureFormDetails = createFormValuesObj(pictureForm)
    const linksArray = createLinksArray(linksFormDetails)
    const themeObj = {
      theme,
      selectedColor: color && color.color && color.color !== '' ? color.color : '#272727',
      layout: layout && layout !== '' ? layout : 'social',
    }
    const cardDetails = {
      ...infoFormDetails,
      ...pictureFormDetails,
      settings: themeObj,
      links: linksArray.length > 0 ? linksArray : null,
    }
    // if (isMaster) {
    //   cardDetails.teamData = {
    //     settings: themeObj,
    //     links: linksArray.length > 0 ? linksArray : null,
    //   }
    // }
    try {
      let imageCode = null
      if (newProfilePicture) {
        const croppedImageFile = await getCroppedImg(imageSrc, croppedAreaPixels, rotation, newProfilePictureType)
        if (newProfilePictureType === 'image/png') {
          imageCode = croppedImageFile.split('data:image/png;base64,').pop()
        } else {
          imageCode = `/9j/${croppedImageFile.split('/9j/').pop()}`
        }
        setLoadingMessage(pageStatics.messages.loading.analyzingImageFile)
        cardDetails.logo = {}
        cardDetails.logo.code = imageCode
        cardDetails.logo.type = newProfilePictureType
        setLoadingMessage(pageStatics.messages.loading.uploadingNewImage)
        setNewProfilePicture(null)
      }

      // const confirmVcardFileExists = await getFirebaseStorage().ref(`card/${language.languageVars.appNameCAPS}_${auth.userUrlSuffix}.vcf`).listAll()
      // if (confirmVcardFileExists.items.length > 0) {
      //   await getFirebaseStorage().ref(`card/${language.languageVars.appNameCAPS}_${auth.userUrlSuffix}.vcf`).delete()
      // }

      setLoadingMessage(pageStatics.messages.loading.updatingProfileData)
      await updateCard(auth.user.uid, cardDetails)
      if (selectedForm) {
        await updateConnectionSettings(auth.user.uid, { activeFormId: selectedForm })
        onActivateForm(selectedForm)
      }
      await boardUser(auth.user.uid)
      setFormSaved(true)
      setFormTouched(false)
      setOnboardingDone(true)
      setLoadingDone(true)
      setTimeout(() => setLoading(false), 1000)
    } catch (err) {
      onSetNotification({
        message: pageStatics.messages.notifications.onboardingError,
        type: 'error',
      })
    }
  }

  const selectFormHandler = (e, form) => {
    e.preventDefault()
    setSelectedForm(form)
  }

  // const changeThemeHandler = selectedtheme => {
  //   switchTheme(selectedtheme)
  // }

  // const changeLayoutHandler = layoutMode => {
  //   switchLayout(layoutMode)
  // }

  // const changeColorHandler = colorObj => {
  //   color.switchColor(colorObj)
  // }

  const buttonDisabled = formSaved || (formTouched && !formValid) || !formTouched || loading

  if (auth.isSubscriber && auth.isBoarded) {
    return <Redirect to={`/${auth.userUrlSuffix}`} />
  }

  if (loading) {
    return <LoadingBackdrop done={loadingDone} loadingText={`${formTouched ? loadingMessage : pageStatics.messages.loading.loadingProfileData}`} boxed />
  }

  return (
    <Box className={layoutClasses.pageContainer}>
      <Box className={layoutClasses.contentContainer}>
        <Box className={layoutClasses.formContainer}>
          {!onBoardingDone ? (
            <>
              <Header stepsCount={4} firstName={userName.firstName} />
              <Wizard>
                <Suspense fallback={(
                  <SkeletonContainer list={[
                    { variant: 'rect', fullWidth: true, height: 250 },
                    { variant: 'rect', width: '75%' },
                    { variant: 'rect', width: '45%', height: 35 },
                  ]}
                  />
                )}
                >
                  <StepOne
                    inputChangeHandler={inputChangeHandler}
                    infoForm={infoForm}
                    setInfoForm={setInfoForm}
                    loading={loading}
                  />
                </Suspense>
                <Suspense fallback={(
                  <SkeletonContainer list={[
                    { variant: 'rect', fullWidth: true, height: 250 },
                    { variant: 'rect', width: '75%' },
                    { variant: 'rect', width: '45%', height: 35 },
                  ]}
                  />
                )}
                >
                  <StepTwo
                    onFileChange={onFileChange}
                    loading={loading}
                    pictureForm={pictureForm}
                    setPictureForm={setPictureForm}
                    newProfilePicture={newProfilePicture}
                    imageSrc={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    rotation={rotation}
                    setCrop={setCrop}
                    setZoom={setZoom}
                    setRotation={setRotation}
                    onCropComplete={onCropComplete}
                    onUpdate={() => true}
                  />
                </Suspense>
                <Suspense fallback={(
                  <SkeletonContainer list={[
                    { variant: 'rect', fullWidth: true, height: 250 },
                    { variant: 'rect', width: '75%' },
                    { variant: 'rect', width: '45%', height: 35 },
                  ]}
                  />
                )}
                >
                  <StepThree
                    inputChangeHandler={inputChangeHandler}
                    inputBlurHandler={linkBlurHandler}
                    linksForm={linksForm}
                    setLinksForm={setLinksForm}
                    buttonDisabled={!buttonDisabled}
                    loading={loading}
                  />
                </Suspense>
                {settings.showIndustry && (
                  <Suspense fallback={(
                    <SkeletonContainer list={[
                      { variant: 'rect', fullWidth: true, height: 250 },
                      { variant: 'rect', width: '75%' },
                      { variant: 'rect', width: '45%', height: 35 },
                    ]}
                    />
                  )}
                  >
                    <StepFour
                      inputChangeHandler={inputChangeHandler}
                      buttonDisabled={!buttonDisabled}
                      loading={loading}
                      forms={connectionForms}
                      onUseForm={selectFormHandler}
                      selectedForm={selectedForm}
                    />
                  </Suspense>
                )}
                {/* <Suspense fallback={(
                  <SkeletonContainer list={[
                    { variant: 'rect', fullWidth: true, height: 250 },
                    { variant: 'rect', width: '75%' },
                    { variant: 'rect', width: '45%', height: 35 },
                  ]}
                  />
                )}
                >
                  <StepFive
                    changeThemeHandler={changeThemeHandler}
                    changeLayoutHandler={changeLayoutHandler}
                    changeColorHandler={changeColorHandler}
                    color={color}
                    layout={layout}
                    theme={theme}
                    loading={loading}
                    onUpdate={updateCardHandler}
                  />
                </Suspense> */}
                <Suspense fallback={(
                  <SkeletonContainer list={[
                    { variant: 'rect', fullWidth: true, height: 250 },
                    { variant: 'rect', width: '75%' },
                    { variant: 'rect', width: '45%', height: 35 },
                  ]}
                  />
                )}
                >
                  <StepAddToHomeScreen
                    onLoadCard={onLoadCardByUserId}
                    onUpdate={updateCardHandler}
                  />
                </Suspense>
              </Wizard>
            </>
          ) : (
            <AddToHomeScreen />
          )}
        </Box>
      </Box>
    </Box>
  )
}

const mapDispatchToProps = dispatch => ({
  onSetNotification: notification => dispatch(actions.setNotification(notification)),
  onActivateForm: (userId, formId) => dispatch(actions.activateForm(userId, formId)),
  onLoadCardByUserId: (userId, isMaster) => dispatch(actions.loadCardByUserId(userId, isMaster)),
})

Onboarding.defaultProps = {
  // theme: null,
  layout: null,
}

Onboarding.propTypes = {
  onSetNotification: PropTypes.func.isRequired,
  onActivateForm: PropTypes.func.isRequired,
  onLoadCardByUserId: PropTypes.func.isRequired,
  layout: PropTypes.string,
  switchTheme: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Onboarding)
