import React, {
  useState, useEffect, lazy, Suspense, useCallback,
} from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { CSVLink } from 'react-csv'

import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import {
  getPatchInvitations, disableInvitation, deleteInvitation, resetInvitation, generateInvitaionCode,
} from '../../API/invitations'
import { getFirebaseFunctions, getFirebaseStorage } from '../../API/firebase'
import { deleteUserById } from '../../API/users'
import { deleteCardByuserId, getCardById } from '../../API/cards'
import { deleteCounterById } from '../../API/counter'
import { deleteSubscriberById } from '../../API/subscriptions'

import { getPatchByPatchId, updatePatchInvitations } from '../../API/invitationPatches'

import * as actions from '../../store/actions'

import LoadingBackdrop from '../../components/Loading/LoadingBackdrop'
import Header from '../../layout/Header'

import { useColor } from '../../hooks/useDarkMode'
import { useLanguage } from '../../hooks/useLang'

import { buttonStyles } from '../../theme/buttons'
import { layoutStyles } from '../../theme/layout'

import { INVITATIONS_PER_PAGE, SENDOWL_CSV_HEADER } from '../../utilities/appVars'

const CreateInvitation = lazy(() => import('../../components/InvitationsAdmin/CreateInvitation'))
const InvitationList = lazy(() => import('../../components/InvitationsAdmin/InvitationList'))
const InvitationDetailsDialog = lazy(() => import('../../components/InvitationsAdmin/InvitationDetailsDialog'))
const FilterInvitations = lazy(() => import('../../components/InvitationsAdmin/FilterInvitations'))
const QrList = lazy(() => import('../../components/InvitationsAdmin/QrList'))

const InvitationsAdmin = ({ onSetNotification }) => {
  const color = useColor()
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.invitations
  const location = useLocation()
  const { patchId, invitationID } = queryString.parse(location.search)
  const invitationDomain = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : language.languageVars.appDomain

  const layoutClasses = layoutStyles()
  const buttonClasses = buttonStyles()
  const [invitations, setInvitations] = useState(null)
  const [filteredInvitations, setFilteredInvitations] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [updated, setUpdated] = useState(false)
  const [createInvitationDialogOpen, setCreateInvitationDialogOpen] = useState(false)
  const [invitationDetailsDialogOpen, setInvitationDetailsDialogOpen] = useState(false)
  const [invitationDetailsDialogData, setInvitationDetailsDialogData] = useState(null)
  const [patch, setPatch] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingNewInvitation, setLoadingNewInvitation] = useState(false)

  const loadInvitations = useCallback(async () => {
    try {
      const patchData = await getPatchByPatchId(patchId)
      const allInvitations = await getPatchInvitations(patchId, invitationID || null)
      let sortedInvitations = allInvitations
      if (patchData.package === 'master') {
        sortedInvitations = allInvitations.sort((a, b) => {
          const comp1 = a.masterId
          const comp2 = b.masterId
          let r
          if (comp1 > comp2) {
            r = 1
          } else if (comp1 < comp2) {
            r = -1
          } else {
            r = 0
          }

          if (r === 0) {
            r = (typeof a.key !== 'undefined' && typeof b.key !== 'undefined') ? a.key - b.key : 0
          }

          return r
        })
      }
      setPatch(patchData)
      setInvitations(sortedInvitations)
      setFilteredInvitations(sortedInvitations)
      setUpdated(false)
    } catch (err) {
      throw new Error(err)
    }
  }, [invitationID, patchId])

  useEffect(() => {
    let mounted = true

    if (mounted) {
      (async () => {
        await loadInvitations()
      })()
    }

    return () => { mounted = false }
  }, [loadInvitations])

  console.log(patch);
  console.log(updated);

  const pageInvitations = pageNumber => {
    let invitationsInPage

    if (filteredInvitations) {
      invitationsInPage = filteredInvitations.slice(((pageNumber - 1) * (INVITATIONS_PER_PAGE)), ((pageNumber) * (INVITATIONS_PER_PAGE)))
    }

    return invitationsInPage
  }

  const paginationChangeHandler = (e, page) => {
    setCurrentPage(page)
    pageInvitations(page)
  }

  const openInvitationDetailsDialogHandler = invitation => {
    setInvitationDetailsDialogOpen(true)
    setInvitationDetailsDialogData(invitation)
  }

  const closeInvitationDetailsDialogHandler = () => {
    setInvitationDetailsDialogOpen(false)
    setInvitationDetailsDialogData(null)
  }

  const filterInvitations = type => {
    let newInvitations = null
    if (invitations && type === 'available') {
      newInvitations = [...invitations].filter(invitation => invitation.usedBy === null)
    } else if (invitations && type === 'used') {
      newInvitations = [...invitations].filter(invitation => invitation.usedBy !== null)
    } else if (invitations && type === 'connected') {
      newInvitations = [...invitations].filter(invitation => invitation.connected)
    } else if (invitations && type === 'unlinked') {
      newInvitations = [...invitations].filter(invitation => !invitation.connected)
    } else {
      newInvitations = [...invitations]
    }
    setFilteredInvitations(newInvitations)
  }

  const closeInvitationDialogHandler = () => {
    setCreateInvitationDialogOpen(false)
  }

  const updateInvitationList = () => {
    setUpdated(true)
  }

  const disableInvitationHandler = async invitationCode => {
    try {
      await disableInvitation(invitationCode)
      onSetNotification({
        message: pageStatics.messages.notifications.disableInvitationSuccess,
        type: 'success',
      })
    } catch (err) {
      onSetNotification({
        message: pageStatics.messages.notifications.disableInvitationError,
        type: 'error',
      })
    }
  }

  const deleteInvitationHandler = async invitationCode => {
    try {
      await deleteInvitation(invitationCode)
      setUpdated(true)
      onSetNotification({
        message: pageStatics.messages.notifications.deleteInvitationSuccess,
        type: 'success',
      })
    } catch (err) {
      onSetNotification({
        message: pageStatics.messages.notifications.deleteInvitationError,
        type: 'error',
      })
    }
  }

  const checkInvitationCodeValidity = invitationObj => {
    let validMessage = 'Valid'
    if (invitationObj.used) {
      validMessage = 'Used'
      return validMessage
    }
    // if (invitationObj.expirationDate.toDate() < new Date()) {
    //   validMessage = 'Expired'
    // }
    return validMessage
  }

  // const openCreateInvitationDialogHandler = () => {
  //   setCreateInvitationDialogOpen(true)
  // }

  const mapToArray = (arr = []) => {
    const res = [];
    arr.forEach(obj => {
      res.push([`${invitationDomain}/activate?tac=${obj.code}`], [])
    })
    return res
  }

  const mapToSendOwlArray = (arr = []) => {
    const res = []
    let j = 0
    res.push(SENDOWL_CSV_HEADER)
    arr.forEach((obj, i) => {
      j = i < 9 ? `0${i + 1}` : i + 1
      res.push([`TESTSKU${j}`, `${invitationDomain}/activate?tac=${obj.code}`])
    })
    return res
  }

  const resetInvitationHandler = async (userId, invitationId) => {
    closeInvitationDetailsDialogHandler()
    const confirmBox = window.confirm('This action will wipe out the connected profile data and reset the invitation as new. Only do this action if the user wants to reset his account and never use it for different Tappl device.')
    if (confirmBox === true) {
      setLoading(true)
      try {
        const userData = await getCardById(userId)
        const dbFunctions = await getFirebaseFunctions()
        const deleteUserCall = dbFunctions.httpsCallable('deleteUser')
        const deletedUser = await deleteUserCall(userId)
        await deleteUserById(userId)
        await deleteCardByuserId(userId)
        await deleteSubscriberById(userId)
        await deleteCounterById(userId)

        if (userData.vCardFile) {
          await getFirebaseStorage().ref(`card/${userData.vCardFile}`).delete()
        }
        await resetInvitation(invitationId)
        await loadInvitations()
        setLoading(false)
        onSetNotification({
          message: deletedUser.data.message.body,
          type: deletedUser.data.message.type,
        })
      } catch (err) {
        setLoading(false)
        onSetNotification({
          message: 'Resetting invitation failed',
          type: 'error',
        })
      }
    }
  }

  const addInvitation = async () => {
    setLoadingNewInvitation(true)
    try {
      await generateInvitaionCode(patch.package, patch.patchId, 'single', patch.masterId || null, patch.theme || null)
      await updatePatchInvitations(patch.patchId)
      setLoadingNewInvitation(false)
      onSetNotification({
        message: 'Invitation added successfully',
        type: 'success',
      })
    } catch (err) {
      onSetNotification({
        message: 'There was a problem adding invitation',
        type: 'error',
      })
      setLoadingNewInvitation(false)
    }
  }

  if (loading) {
    return <LoadingBackdrop loadingText="Resetting invitation..." placement="inset" />
  }

  if (loadingNewInvitation) {
    return <LoadingBackdrop loadingText="Adding invitation..." placement="inset" />
  }

  return (
    <Box className={layoutClasses.pageContainer}>
      <Header title={pageStatics.data.titles.page} />
      <Typography
        align="center"
        variant="body1"
      >
        {patch && patch.patchTitle}
      </Typography>
      <Box className={layoutClasses.contentContainer}>
        {!invitations ? (
          <LoadingBackdrop loadingText={pageStatics.messages.loading.loadingInvitations} placement="inset" />
        ) : (
          <>
            {
            //   <Button
            //   color="primary"
            //   onClick={() => openCreateInvitationDialogHandler()}
            //   className={buttonClasses.defaultButton}
            //   style={{
            //     backgroundColor: color.color.code,
            //     minWidth: '250px',
            //   }}
            // >
            //     {pageStatics.buttons.generateInvitationCode}
            //   </Button>
            }
            <Box>
              <CSVLink
                data={mapToArray(invitations)}
                filename={`${patchId}_${language.languageVars.appNameCAPS}.csv`}
                className={buttonClasses.defaultButton}
                style={{
                  backgroundColor: color.color.code,
                  minWidth: '250px',
                }}
              >
                Download CSV
              </CSVLink>
            </Box>
            <Box mt={2}>
              <CSVLink
                data={mapToSendOwlArray(invitations)}
                filename={`${patchId}_${language.languageVars.appNameCAPS}_Sendowl.csv`}
                className={buttonClasses.defaultButton}
                style={{
                  backgroundColor: color.color.code,
                  minWidth: '250px',
                }}
              >
                Download Sendowl CSV
              </CSVLink>
            </Box>
            <Box mt={2}>
              <Button
                color="primary"
                className={buttonClasses.defaultButton}
                style={{
                  backgroundColor: color.color.code,
                  minWidth: '250px',
                  width: '100%',
                }}
                onClick={() => addInvitation()}
              >
                Add invitation
              </Button>
            </Box>
            <Box mt={3}>
              <Suspense fallback={language.languageVars.loading}>
                <FilterInvitations onFilter={filterInvitations} />
              </Suspense>
              <Suspense fallback={language.languageVars.loading}>
                <InvitationList
                  invitations={pageInvitations(currentPage)}
                  onOpenDetailsDialog={openInvitationDetailsDialogHandler}
                  disableInvitation={disableInvitationHandler}
                  deleteInvitation={deleteInvitationHandler}
                  isValid={checkInvitationCodeValidity}
                  resetInvitation={resetInvitationHandler}
                />
              </Suspense>
              {(filteredInvitations && filteredInvitations.length > 9) && <Box mt={5}><Pagination count={Math.ceil(filteredInvitations.length / INVITATIONS_PER_PAGE)} variant="outlined" onChange={paginationChangeHandler} /></Box>}
              <Suspense fallback={language.languageVars.loading}>
                <QrList invitations={filteredInvitations} />
              </Suspense>
            </Box>
            <Suspense fallback={language.languageVars.loading}>
              <InvitationDetailsDialog
                open={invitationDetailsDialogOpen}
                onClose={closeInvitationDetailsDialogHandler}
                invitation={invitationDetailsDialogData}
                resetInvitation={resetInvitationHandler}
              />
            </Suspense>
          </>
        )}
        <Suspense fallback={language.languageVars.loading}>
          <CreateInvitation
            dialogOpen={createInvitationDialogOpen}
            closeDialog={closeInvitationDialogHandler}
            updateInvitationList={updateInvitationList}
          />
        </Suspense>
      </Box>
    </Box>
  )
}

InvitationsAdmin.propTypes = {
  onSetNotification: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  onSetNotification: notification => dispatch(actions.setNotification(notification)),
})

export default connect(null, mapDispatchToProps)(InvitationsAdmin)
