import React, {
  useState, useEffect, lazy, Suspense,
} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Pagination from '@material-ui/lab/Pagination'
import LoadingBackdrop from '../../components/Loading/LoadingBackdrop'
import Header from '../../layout/Header'

import { useAuth } from '../../hooks/use-auth'
import { useColor } from '../../hooks/useDarkMode'
import { useLanguage } from '../../hooks/useLang'

import { deletePatchById } from '../../API/invitationPatches'
import { deleteInvitationsByPatchId } from '../../API/invitations'
import { getConnectionForms } from '../../API/connections'

import * as actions from '../../store/actions'

import { patchesStyles } from './styles'
import { buttonStyles } from '../../theme/buttons'
import { layoutStyles } from '../../theme/layout'

import * as vars from '../../utilities/appVars'

const PatchesList = lazy(() => import('../../components/Patches/PatchesList'))
const CreatePatch = lazy(() => import('../../components/Patches/CreatePatch'))
const ChangeStatus = lazy(() => import('../../components/Patches/ChangeStatus'))
const SearchPatches = lazy(() => import('../../components/Patches/SearchPatches'))
const FilterPatches = lazy(() => import('../../components/Patches/FilterPatches'))
const SortPatches = lazy(() => import('../../components/Patches/SortPatches'))

const Patches = ({
  onLoadPatches,
  onSortPatches,
  loading,
  patches,
  patchesCount,
  patchesPerPage,
  gridLayout,
  onSetNotification,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [createPatchDialogOpen, setCreatePatchDialogOpen] = useState(false)
  const [changeStatusDialogOpen, setChangeStatusDialogOpen] = useState(false)
  const [searchedPatches, setSearchedPatches] = useState(null)
  const [filterededPatches, setFilteredPatches] = useState(null)
  const [patchInfo, setPatchInfo] = useState(null)
  const [loadingBackdrop, setLoadingBackdrop] = useState(false)
  const [connectionForms, setConnectionForms] = useState(null)
  const auth = useAuth()
  const history = useHistory()
  const color = useColor()
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.patches
  const classes = patchesStyles()
  const layoutClasses = layoutStyles()
  const buttonClasses = buttonStyles()
  const patchesGrid = gridLayout || {
    lg: 3, md: 4, sm: 6, xs: 6,
  }
  const { user } = auth

  useEffect(() => {
    let mounted = true
    const { superAdminStatus } = auth

    if (mounted && !patches) {
      (async () => {
        if (user) {
          if (superAdminStatus) {
            await onLoadPatches()
          } else {
            history.push(vars.LOGIN_REDIRECT)
          }
        }
      })()
    }

    return () => {
      mounted = false
    }
  }, [auth, history, onLoadPatches, patches, user])

  useEffect(() => {
    let mounted = true

    if (mounted) {
      (async () => {
        const forms = await getConnectionForms()
        setConnectionForms(forms)
      })()
    }

    return () => { mounted = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pagePatches = pageNumber => {
    let patchesInPage

    if (searchedPatches) {
      return searchedPatches
    }

    if (filterededPatches) {
      return filterededPatches
    }

    if (patches) {
      patchesInPage = patches.slice(((pageNumber - 1) * (patchesPerPage)), ((pageNumber) * (patchesPerPage)))
    }

    return patchesInPage
  }

  const searchPatchesHandler = searchKeyword => {
    const searchFor = searchKeyword.toLowerCase()

    if (searchFor.length >= 3) {
      setSearchedPatches(patches.filter(patch => {
        const searchNumber = patch.patchId
        if (searchNumber.toLowerCase().includes(searchFor)) {
          return true
        }

        return false
      }))
    } else {
      setSearchedPatches(null)
      setCurrentPage(1)
    }

    return false
  }

  const clearSearchHandler = () => {
    setSearchedPatches(null)
  }

  const filterPatchesHandler = (filterValue, filterType) => {
    const filterBy = filterValue
    let filter

    setFilteredPatches(patches.filter(filteredPatch => {
      if (filterType === 'package') {
        filter = filteredPatch.package
      }

      if (filter === filterBy) {
        return true
      }

      return false
    }))

    return false
  }

  const clearFilterHandler = () => {
    setFilteredPatches(null)
  }

  const paginationChangeHandler = (e, page) => {
    setCurrentPage(page)
    pagePatches(page)
  }

  const openCreatePatchDialogHandler = () => {
    setCreatePatchDialogOpen(true)
  }

  const closePatchDialogHandler = () => {
    setCreatePatchDialogOpen(false)
  }

  const openChangeStatusDialogHandler = info => {
    setChangeStatusDialogOpen(true)
    setPatchInfo(info)
  }

  const closeChangeStatusDialogHandler = () => {
    setChangeStatusDialogOpen(false)
    setPatchInfo(null)
  }

  const reloadPatches = async () => {
    try {
      await onLoadPatches(user.email)
    } catch (err) {
      throw new Error(err)
    }
  }

  const sortPatches = (value, type) => {
    onSortPatches(value, type)
  }

  const deletePatch = async patchId => {
    setLoadingBackdrop(true)
    try {
      await deletePatchById(patchId)
      await deleteInvitationsByPatchId(patchId)
      setLoadingBackdrop(false)
      await reloadPatches()
      onSetNotification({
        message: 'Patch deleted successfully',
        type: 'success',
      })
    } catch (err) {
      setLoadingBackdrop(false)
      onSetNotification({
        message: 'There was a problem deleting patch',
        type: 'error',
      })
    }
  }

  return (
    <Box className={layoutClasses.pageContainer}>
      <Header title={pageStatics.data.titles.page} />
      <Box className={layoutClasses.contentContainer}>
        {(loading || loadingBackdrop) && <LoadingBackdrop loadingText={language.languageVars.processing} />}
        <Button
          color="primary"
          onClick={() => openCreatePatchDialogHandler()}
          className={buttonClasses.defaultButton}
          style={{
            backgroundColor: color.color.code,
            minWidth: '250px',
            marginBottom: 8,
          }}
        >
          {pageStatics.buttons.createNewPatch}
        </Button>
        <Box className={classes.filterContainer}>
          <Suspense fallback={pageStatics.messages.loading.constructingSearch}>
            <SearchPatches onSearch={searchPatchesHandler} onClear={clearSearchHandler} />
            <FilterPatches onFilter={filterPatchesHandler} onClear={clearFilterHandler} />
            <SortPatches onSort={sortPatches} />
          </Suspense>
        </Box>
        <Suspense fallback={language.languageVars.loading}>
          <PatchesList
            patches={pagePatches(currentPage)}
            loading={loading}
            grid={patchesGrid}
            openChangeStatusDialog={openChangeStatusDialogHandler}
            deletePatch={deletePatch}
          />
        </Suspense>
        <Suspense fallback={language.languageVars.loading}>
          <CreatePatch
            reloadPatches={reloadPatches}
            patchesCount={patchesCount}
            dialogOpen={createPatchDialogOpen}
            closeDialog={closePatchDialogHandler}
            connectionForms={connectionForms}
          />
        </Suspense>
        <Suspense fallback={language.languageVars.loading}>
          <ChangeStatus
            patchInfo={patchInfo}
            reloadPatches={reloadPatches}
            dialogOpen={changeStatusDialogOpen}
            closeDialog={closeChangeStatusDialogHandler}
          />
        </Suspense>
        {(!searchedPatches && !filterededPatches) && <Box mt={5}><Pagination count={Math.ceil(patchesCount / patchesPerPage)} variant="outlined" onChange={paginationChangeHandler} /></Box>}
      </Box>
    </Box>
  )
}

const mapStateToProps = state => ({
  loading: state.patches.loading,
  patches: state.patches.patches,
  patchesCount: state.patches.patchesCount,
  patchesPerPage: state.patches.patchesPerPage,
})

const mapDispatchToProps = dispatch => ({
  onLoadPatches: () => dispatch(actions.loadPatches()),
  onSortPatches: (value, type) => dispatch(actions.sortPatches(value, type)),
  onSetNotification: notification => dispatch(actions.setNotification(notification)),
})

Patches.defaultProps = {
  loading: false,
  patches: null,
  patchesCount: 0,
  patchesPerPage: 0,
  gridLayout: null,
}

Patches.propTypes = {
  loading: PropTypes.bool,
  patches: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  patchesCount: PropTypes.number,
  patchesPerPage: PropTypes.number,
  onLoadPatches: PropTypes.func.isRequired,
  onSortPatches: PropTypes.func.isRequired,
  onSetNotification: PropTypes.func.isRequired,
  gridLayout: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
}

export default connect(mapStateToProps, mapDispatchToProps)(Patches)
