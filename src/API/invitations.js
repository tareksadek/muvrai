import { addDays } from 'date-fns'
import { getFirestoreInstance } from './firebase'
import { generateRandomNumber } from '../utilities/utils'

export const getInvitations = async () => {
  let invitations = []
  let invitationData
  let invitationsRes

  try {
    const db = await getFirestoreInstance()
    invitationsRes = await db.collection('invitations').orderBy('expirationDate').get()
    invitationsRes.forEach(invitation => {
      invitationData = invitation.data()
      invitations = [...invitations, invitationData]
    })
  } catch (err) {
    throw new Error(err)
  }

  return invitations
}

export const getAdminInvitations = async () => {
  let invitations = []
  let invitationData
  let invitationsRes

  try {
    const db = await getFirestoreInstance()
    invitationsRes = await db.collection('invitations').where('adminInvite', '==', true).orderBy('expirationDate').get()
    invitationsRes.forEach(invitation => {
      invitationData = invitation.data()
      invitations = [...invitations, invitationData]
    })
  } catch (err) {
    throw new Error(err)
  }

  return invitations
}

export const getPatchInvitations = async (patchId, invitationId) => {
  let invitations = []
  let invitationData
  let invitationsRes

  try {
    const db = await getFirestoreInstance()
    if (invitationId) {
      invitationsRes = await db.collection('invitations').where('patchId', '==', patchId).where('code', '==', invitationId).get()
    } else {
      invitationsRes = await db.collection('invitations').where('patchId', '==', patchId).get()
    }
    invitationsRes.forEach(invitation => {
      invitationData = invitation.data()
      invitations = [...invitations, invitationData]
    })
  } catch (err) {
    throw new Error(err)
  }

  return invitations
}

export const getInvitationByCode = async code => {
  try {
    const db = await getFirestoreInstance()
    const invitation = await db.collection('invitations').doc(code).get()
    if (invitation.exists) {
      return invitation.data()
    }
    return false
  } catch (err) {
    throw new Error(err.message)
  }
}

export const generateInvitaionCode = async (packageType, patchId, accountType, defaultForm, masterId, theme, store) => {
  try {
    const code = generateRandomNumber()
    const today = new Date()
    const expiresInDate = addDays(today, 364)
    const db = await getFirestoreInstance()
    const invitationCode = await db.collection('invitations').where('code', '==', code).get()
    let invitationObj
    if (!invitationCode.exists) {
      invitationObj = {
        adminInvite: true,
        code: `${code}_${patchId}`,
        type: accountType || 'single',
        expirationDate: expiresInDate,
        used: false,
        usedBy: null,
        usedOn: null,
        connected: false,
        package: packageType,
        defaultForm,
        masterId,
        patchId,
        theme,
        store,
      }
      db.collection('invitations').doc(code).set(invitationObj)
    }
    return invitationObj
  } catch (err) {
    throw new Error(err.message)
  }
}

export const resetInvitation = async invitationId => {
  try {
    const db = await getFirestoreInstance()
    await db.collection('invitations').doc(invitationId).update({
      used: false,
      usedBy: null,
      usedOn: null,
      connected: false,
    })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const disableInvitation = async (invitationId, userId) => {
  try {
    const db = await getFirestoreInstance()
    await db.collection('invitations').doc(invitationId).update({
      used: true,
      usedBy: userId,
      usedOn: new Date(),
    })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const disableChildInvitation = async (parentInvitationCode, childInvitationCode, userId) => {
  try {
    const db = await getFirestoreInstance()
    const parentInvitation = await db.collection('invitations').doc(parentInvitationCode).get()
    const parentInvitationData = parentInvitation.data()
    const { childInvitations } = parentInvitationData
    const childInvitationIndex = childInvitations.findIndex((obj => obj.code === childInvitationCode))
    childInvitations[childInvitationIndex].used = true
    childInvitations[childInvitationIndex].usedBy = userId
    childInvitations[childInvitationIndex].usedOn = new Date()
    await db.collection('invitations').doc(parentInvitationCode).update({
      childInvitations,
    })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const deleteInvitation = async code => {
  try {
    const db = await getFirestoreInstance()
    const invitationCode = await db.collection('invitations').where('code', '==', code).get()
    invitationCode.forEach(invitation => {
      invitation.ref.delete()
    })
    return true
  } catch (err) {
    throw new Error(err.message)
  }
}

export const deleteInvitationsByPatchId = async patchId => {
  try {
    const db = await getFirestoreInstance()
    const invitations = await db.collection('invitations').where('patchId', '==', patchId).get()
    const batch = db.batch()
    invitations.forEach(invitation => {
      batch.delete(invitation.ref)
    })
    return batch.commit()
  } catch (err) {
    throw new Error(err.message)
  }
}

export const connectInvitation = async invitationId => {
  try {
    const db = await getFirestoreInstance()
    await db.collection('invitations').doc(invitationId).update({ connected: true })
  } catch (err) {
    throw new Error(err.message)
  }
}
