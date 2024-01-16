import { getFirestoreInstance } from './firebase'
import { generateRandomString } from '../utilities/utils'

export const getAllPatches = async () => {
  let patches = []
  let patchData
  let patchesRes

  try {
    const db = await getFirestoreInstance()
    patchesRes = await db.collection('patches').orderBy('createdOn').get()
    patchesRes.forEach(patch => {
      patchData = patch.data()
      patches = [...patches, patchData]
    })
  } catch (err) {
    throw new Error(err)
  }

  return patches
}

export const getPatchesByPackage = async packageType => {
  let patches = []
  let patchData
  let patchesRes

  try {
    const db = await getFirestoreInstance()
    patchesRes = await db.collection('patches').where('package', '==', packageType).orderBy('createdOn').get()
    patchesRes.forEach(patch => {
      patchData = patch.data()
      patches = [...patches, patchData]
    })
  } catch (err) {
    throw new Error(err)
  }

  return patches
}

export const getPatchByPatchId = async patchId => {
  try {
    const db = await getFirestoreInstance()
    const patch = await db.collection('patches').doc(patchId).get()
    if (patch.exists) {
      return patch.data()
    }
    return false
  } catch (err) {
    throw new Error(err.message)
  }
}

export const generatePatchCode = async (title, packageType, defaultForm, contains, theme, store) => {
  try {
    const code = generateRandomString()
    const today = new Date()
    const db = await getFirestoreInstance()
    const patchCode = await db.collection('patches').where('patchId', '==', code).get()
    let patchObj
    if (!patchCode.exists) {
      patchObj = {
        patchId: code,
        patchTitle: title,
        status: 'ready',
        package: packageType,
        createdOn: today,
        defaultForm,
        contains,
        theme,
        store,
      }
      db.collection('patches').doc(code).set(patchObj)
    }
    return patchObj
  } catch (err) {
    throw new Error(err.message)
  }
}

export const deletePatchById = async patchId => {
  try {
    const db = await getFirestoreInstance()
    const patchCode = await db.collection('patches').where('patchId', '==', patchId).get()
    patchCode.forEach(patch => {
      patch.ref.delete()
    })
    return true
  } catch (err) {
    throw new Error(err.message)
  }
}

export const changePatchStatus = async (patchId, status) => {
  try {
    const db = await getFirestoreInstance()
    await db.collection('patches').doc(patchId).update({ status })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updatePatchInvitations = async patchId => {
  try {
    const db = await getFirestoreInstance()
    const patch = await db.collection('patches').doc(patchId).get()
    const currentInvitationsCount = patch.data().contains
    await db.collection('patches').doc(patchId).update({ contains: Number(currentInvitationsCount) + 1 })
  } catch (err) {
    throw new Error(err.message)
  }
}

export const addPatchMaster = async (patchId, masterId) => {
  try {
    const db = await getFirestoreInstance()
    await db.collection('patches').doc(patchId).update({ masterId })
  } catch (err) {
    throw new Error(err.message)
  }
}
