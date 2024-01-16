import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Prompt } from 'react-router-dom'
import { connect } from 'react-redux'

import GoogleMapReact from 'google-map-react'
import Geocode from 'react-geocode'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'

import RoomIcon from '@material-ui/icons/Room'
import StarIcon from '@material-ui/icons/Star'

import InfoBox from '../../components/Ui/InfoBox'
import PageTitle from '../../layout/PageTitle'
import FormElement from '../../components/Ui/FormElement'
import { createFormElementObj, adjustFormValues, createFormValuesObj } from '../../utilities/form'
import LoadingBackdrop from '../../components/Loading/LoadingBackdrop'
import Header from '../../layout/Header'
import SkeletonContainer from '../../layout/SkeletonContainer'
import Alert from '../../layout/Alert'
import ProDialog from '../../components/BecomePro/ProDialog'

import { buttonStyles } from '../../theme/buttons'
import { layoutStyles } from '../../theme/layout'
import { editProfileStyles } from './styles'

import { updateCard } from '../../API/cards'
// import { getFirebaseStorage } from '../../API/firebase'
import { useColor } from '../../hooks/useDarkMode'
import { useAuth } from '../../hooks/use-auth'

// import { generateVcard } from '../../utilities/utils'

import { useLanguage } from '../../hooks/useLang'

import * as actions from '../../store/actions'

import { GOOGLE_MAPS_KEY, settings } from '../../utilities/appVars'

const Contact = ({
  cardData, onSetNotification, onUpdateCard, activeProfileId,
}) => {
  const color = useColor()
  const auth = useAuth()
  const userId = auth.user.uid
  // const profileId = auth.user.uid !== cardId && auth.superAdminStatus ? cardId : userId
  // const profileId = userId
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.editProfile
  const isPro = auth.isSubscriber && (auth.subscriberStatus === 'active' || auth.subscriberStatus === 'trialing')

  const classes = editProfileStyles()
  const layoutClasses = layoutStyles()
  const buttonClasses = buttonStyles()

  const [formValid, setFormValid] = useState(false)
  const [formTouched, setFormTouched] = useState(false)
  const [loadingDone, setLoadingDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState(pageStatics.messages.loading.updatingProfileContact)
  // const [existingVcard, setExistingVcard] = useState(null)
  // const [newVcardName, setNewVcardName] = useState(cardData && cardData.urlSuffix ? `${language.languageVars.appNameCAPS}_${cardData.urlSuffix}.vcf` : null)
  const [formSaved, setFormSaved] = useState(false)
  // const [profileData, setProfileData] = useState(cardData || null)

  const [contactForm, setContactForm] = useState({
    email: createFormElementObj('input', pageStatics.forms.contactTab.email,
      { type: 'text', name: 'email', placeholder: pageStatics.forms.contactTab.email },
      '',
      null,
      { required: false },
      !!cardData.userId,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    workPhone: createFormElementObj('input', pageStatics.forms.contactTab.workPhone,
      { type: 'tel', name: 'workPhone', placeholder: pageStatics.forms.contactTab.workPhone },
      '',
      null,
      { required: false, onlyNumber: true },
      !!cardData.userId,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    workFax: createFormElementObj('input', pageStatics.forms.contactTab.workFax,
      { type: 'tel', name: 'workfax', placeholder: pageStatics.forms.contactTab.workFax },
      '',
      null,
      { required: false, onlyNumber: true },
      !!cardData.userId,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    homePhone: createFormElementObj('input', pageStatics.forms.contactTab.homePhone,
      {
        type: 'tel',
        name: 'homePhone',
        placeholder: pageStatics.forms.contactTab.homePhone,
        help: pageStatics.forms.contactTab.homePhoneHelp,
      },
      '',
      null,
      { required: false, onlyNumber: true },
      !!cardData.userId,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    address: createFormElementObj('input', pageStatics.forms.contactTab.address,
      { type: 'text', name: 'address', placeholder: pageStatics.forms.contactTab.address },
      '',
      null,
      { required: false },
      !!cardData.userId,
      {
        xs: 12,
        sm: null,
        md: null,
        lg: null,
        xl: null,
        fullWidth: true,
      }),
    // homeFax: createFormElementObj('input', pageStatics.forms.contactTab.homeFax,
    //   { type: 'tel', name: 'homeFax', placeholder: pageStatics.forms.contactTab.homeFax },
    //   cardData.userId && cardData.homeFax ? cardData.homeFax : '',
    //   null,
    //   { required: false, onlyNumber: true },
    //   !!cardData.userId,
    //   {
    //     xs: 12,
    //     sm: null,
    //     md: null,
    //     lg: null,
    //     xl: null,
    //     fullWidth: true,
    //   }),
  })

  const [proDialogOpen, setProDialogOpen] = useState(window.location.hash === '#becomepro')
  const [markerPos, setMarkerPos] = useState(null)
  const [addressError, setAddressError] = useState(false)

  Geocode.setApiKey(GOOGLE_MAPS_KEY)

  useEffect(() => {
    if ((cardData.userId && !cardData.loading)) {
      // setLoading(true)
      // const data = await onLoadCardByUserId(userId)
      if (cardData.marker) {
        setMarkerPos(cardData.marker)
      }
      // await onLoadCardByUserId(userId)
      // setProfileData(data)
      const adjustedcontactForm = adjustFormValues(contactForm, cardData, null)
      // if (data.vCardFile) {
      //   setExistingVcard(data.vCardFile)
      // }
      setContactForm(prevForm => ({ ...prevForm, ...adjustedcontactForm.adjustedForm }))
      setFormValid(adjustedcontactForm.formValid)
      // setNewVcardName(`${language.languageVars.appNameCAPS}_${data.urlSuffix}.vcf`)
      // setLoadingDone(true)
      // setTimeout(() => setLoading(false), 1000)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardData])

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

  const getCoordinatesFromAddress = async address => {
    setAddressError(false)
    try {
      const directions = await Geocode.fromAddress(address)
      const { lat, lng } = directions.results[0].geometry.location
      return {
        lat,
        lng,
      }
    } catch (err) {
      setAddressError(true)
    }
    return null
  }

  const showOnMap = async e => {
    e.preventDefault()
    if (settings.onlyInvitations && !isPro) {
      openProDialogHandler()
    } else {
      setAddressError(false)
      setMarkerPos(null)
      try {
        const infoFormDetails = createFormValuesObj(contactForm)
        const { address } = infoFormDetails
        const coordinates = await getCoordinatesFromAddress(address)
        if (coordinates) {
          setMarkerPos(coordinates)
        }
      } catch (err) {
        setAddressError(true)
      }
    }
  }

  const updateInfoHandler = async e => {
    e.preventDefault()
    setLoadingDone(false)
    setLoading(true)
    const data = { ...cardData }
    const contactFormDetails = createFormValuesObj(contactForm)
    const { address } = contactFormDetails
    if (address && address !== '') {
      const coordinates = await getCoordinatesFromAddress(address)
      if (coordinates) {
        setMarkerPos(coordinates)
        contactFormDetails.marker = coordinates
      } else {
        contactFormDetails.marker = null
      }
    }

    const cardDetails = {
      ...data,
      ...contactFormDetails,
    }
    try {
      setLoadingMessage(pageStatics.messages.loading.updatingVcard)
      await updateCard(activeProfileId || userId, cardDetails)

      await onUpdateCard({ ...contactFormDetails })

      setFormSaved(true)
      setFormTouched(false)

      setLoadingDone(true)
      setTimeout(() => setLoading(false), 1000)

      onSetNotification({
        message: pageStatics.messages.notifications.profileContactUpdateSuccess,
        type: 'success',
      })
    } catch (err) {
      setLoadingDone(true)
      setLoading(false)
      onSetNotification({
        message: pageStatics.messages.notifications.profileContactUpdateError,
        type: 'error',
      })
    }
  }

  const inputChangeHandler = async (eve, key) => {
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

    const adjustedcontactForm = adjustFormValues(contactForm, changeEvent, key)
    setContactForm(adjustedcontactForm.adjustedForm)
    setFormValid(adjustedcontactForm.formValid)
    setFormTouched(true)
    setFormSaved(false)
  }

  const loadTabFormContent = formElements => {
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
        changed={e => inputChangeHandler(e, formEl)}
        grid={formElements[formEl].grid}
        disabled={loading}
        key={formEl + i}
      />
    ))

    return form
  }

  const buttonDisabled = formSaved || (formTouched && !formValid) || !formTouched || loading

  // if (auth.user && userId !== cardId && !auth.superAdminStatus) {
  //   return <Redirect to="/auth" />
  // }

  if (cardData.loading || !cardData.userId || auth.loadingAuth) {
    return (
      <Box className={layoutClasses.pageContainer}>
        <Header title={pageStatics.data.titles.contact}>
          <Box>
            <InfoBox infoList={[pageStatics.messages.info.contact.first]} />
          </Box>
        </Header>
        <Box className={layoutClasses.contentContainer}>
          <Box className={layoutClasses.formContainer}>
            <Box className={`${layoutClasses.panel}`}>
              <SkeletonContainer list={[
                { variant: 'rect', fullWidth: true, height: 50 },
                { variant: 'rect', fullWidth: true, height: 50 },
                { variant: 'rect', fullWidth: true, height: 50 },
                { variant: 'rect', fullWidth: true, height: 50 },
              ]}
              />
            </Box>
            <SkeletonContainer list={[
              { variant: 'rect', fullWidth: true, height: 50 },
            ]}
            />
          </Box>
        </Box>
        <LoadingBackdrop done={loadingDone} loadingText={pageStatics.messages.loading.loadingProfileContact} boxed />
      </Box>
    )
  }

  return (
    <Box className={layoutClasses.pageContainer}>
      {loading && <LoadingBackdrop done={loadingDone} loadingText={`${formTouched ? loadingMessage : pageStatics.messages.loading.loadingProfileContact}`} boxed />}
      {!proDialogOpen && (
        <Prompt
          when={!buttonDisabled}
          message={pageStatics.messages.notifications.savePrompt}
        />
      )}
      <Header title={pageStatics.data.titles.contact}>
        <Box>
          <InfoBox infoList={[pageStatics.messages.info.contact.first]} />
        </Box>
      </Header>
      <Box className={layoutClasses.contentContainer}>
        <Box className={layoutClasses.formContainer}>
          <form>
            <Box className={classes.root}>
              <Box className={`${layoutClasses.panel}`}>
                <PageTitle
                  title={pageStatics.data.titles.editContact}
                />
                <Grid container spacing={3}>
                  {loadTabFormContent(contactForm)}
                </Grid>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Button
                    color="secondary"
                    onClick={e => showOnMap(e)}
                    className={`${buttonClasses.defaultButton} ${layoutClasses.panelButton}`}
                    disabled={(!contactForm.address.value || contactForm.address.value === '') && !markerPos}
                  >
                    {pageStatics.buttons.showOnMap}
                  </Button>
                  {settings.onlyInvitations && !isPro && (
                    <Chip
                      size="small"
                      icon={<StarIcon />}
                      label="Pro"
                      clickable={false}
                      color="primary"
                      className={layoutClasses.proChip}
                      style={{ marginTop: 4 }}
                    />
                  )}
                </Box>
                {addressError && (
                  <Box mt={2}>
                    <Alert
                      title={pageStatics.messages.notifications.wrongAddress.title}
                      description={pageStatics.messages.notifications.wrongAddress.body}
                      type="warning"
                    />
                  </Box>
                )}
                {markerPos && !addressError && (
                  <Box className={classes.mapContainer}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
                      yesIWantToUseGoogleMapApiInternals
                      defaultCenter={markerPos}
                      defaultZoom={15}
                    >
                      <RoomIcon
                        style={{ color: '#272727', fontSize: 36 }}
                        className={classes.mapMarker}
                        lat={markerPos.lat}
                        lng={markerPos.lng}
                      />
                    </GoogleMapReact>
                  </Box>
                )}
              </Box>
            </Box>
            <Box className={classes.editButtonContainer}>
              <Button
                color="secondary"
                onClick={e => updateInfoHandler(e)}
                disabled={buttonDisabled}
                className={buttonClasses.defaultButton}
                style={{
                  backgroundColor: !buttonDisabled && color.color.code,
                  minWidth: '250px',
                }}
              >
                {pageStatics.buttons.updateContact}
              </Button>
            </Box>
          </form>
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
  activeProfileId: state.profiles.activeProfileId,
})

const mapDispatchToProps = dispatch => ({
  onSetNotification: notification => dispatch(actions.setNotification(notification)),
  onLoadCardByUserId: userId => dispatch(actions.loadCardByUserId(userId)),
  onUpdateCard: newData => dispatch(actions.updateCard(newData)),
})

Contact.defaultProps = {
  cardData: null,
  activeProfileId: null,
}

Contact.propTypes = {
  cardData: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  onSetNotification: PropTypes.func.isRequired,
  // onLoadCardByUserId: PropTypes.func.isRequired,
  onUpdateCard: PropTypes.func.isRequired,
  activeProfileId: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
