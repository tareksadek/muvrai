import React, {
  useState, lazy, Suspense,
} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { CSVLink } from 'react-csv'

import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination'

import SkeletonContainer from '../../layout/SkeletonContainer'
import FullScreenDialog from '../../layout/FullScreenDialog'
import Alert from '../../layout/Alert'
import PageTitle from '../../layout/PageTitle'

import { useLanguage } from '../../hooks/useLang'
import { useColor } from '../../hooks/useDarkMode'

import { getFirebaseStorage } from '../../API/firebase'

import { mapToArray } from '../../utilities/utils'

import { layoutStyles } from '../../theme/layout'
import { buttonStyles } from '../../theme/buttons'
import { connectionNoteDialogStyles } from './styles'

import { CONNECTIONS_PER_PAGE, CONNECTIONS_CSV_HEADER } from '../../utilities/appVars'

import * as actions from '../../store/actions'

const SearchConnections = lazy(() => import('../Connections/SearchConnections'))
const SortConnections = lazy(() => import('../Connections/SortConnections'))
const ConnectionsList = lazy(() => import('../Connections/ConnectionsList'))
const ConnectionNoteDialog = lazy(() => import('../Connections/ConnectionNoteDialog'))

const TeamMemberConnections = ({
  connections, onSetNotification, open, onClose, memberName, onSortConnections,
}) => {
  const layoutClasses = layoutStyles()
  const buttonClasses = buttonStyles()
  const classes = connectionNoteDialogStyles()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchedConnections, setSearchedConnections] = useState(null)
  const [connectionNoteDialogOpen, setConnectionNoteDialogOpen] = useState(false)
  const [connectionNoteDialogData, setConnectionNoteDialogData] = useState(null)

  const language = useLanguage()
  const pageStatics = language.languageVars.pages.myTeam
  const color = useColor()

  const addToContact = async vCardFile => {
    try {
      const vCardFileBlob = await getFirebaseStorage().ref(`connections/${vCardFile}`).getDownloadURL()
      const a = document.createElement('a')
      a.href = vCardFileBlob
      a.click()
    } catch (err) {
      onSetNotification({
        message: pageStatics.messages.notifications.downloadVcardError,
        type: 'error',
      })
    }
  }

  const pageConnections = pageNumber => {
    let connectionsInPage

    if (searchedConnections) {
      return searchedConnections
    }

    if (connections) {
      connectionsInPage = connections.slice(((pageNumber - 1) * (CONNECTIONS_PER_PAGE)), ((pageNumber) * (CONNECTIONS_PER_PAGE)))
    }

    return connectionsInPage
  }

  const searchConnectionsHandler = searchKeyword => {
    const searchFor = searchKeyword.toLowerCase()

    if (searchFor.length >= 3) {
      setSearchedConnections(connections.filter(connectionCard => {
        const searchName = `${connectionCard.firstName} ${connectionCard.lastName}`
        const searchEmail = connectionCard.email
        const searchPhone = connectionCard.workPhone
        if (searchName.toLowerCase().includes(searchFor) || searchEmail.toLowerCase().includes(searchFor) || searchPhone.includes(searchFor)) {
          return true
        }

        return false
      }))
    } else {
      setSearchedConnections(null)
      setCurrentPage(1)
    }

    return false
  }

  const clearSearchHandler = () => {
    setSearchedConnections(null)
  }

  const paginationChangeHandler = (e, page) => {
    setCurrentPage(page)
    pageConnections(page)
  }

  const sortConnections = (value, type) => {
    onSortConnections(value, type)
  }

  const openConnectionNoteDialogHandler = connection => {
    setConnectionNoteDialogOpen(true)
    setConnectionNoteDialogData(connection)
  }

  const closeConnectionNoteDialogHandler = () => {
    setConnectionNoteDialogOpen(false)
    setConnectionNoteDialogData(null)
  }

  return (
    <FullScreenDialog
      open={open}
      onClose={onClose}
      title={`${memberName} ${pageStatics.data.titles.memberConnectionsDialog}`}
      loading={false}
    >
      <Box mb={2}>
        {(connections && connections.length > 0) ? (
          <Box className={`${layoutClasses.panel}`}>
            <PageTitle
              title={pageStatics.data.titles.memberConnectionsPanel}
            />
            <Suspense fallback={(
              <SkeletonContainer list={[
                { variant: 'rect', fullWidth: true },
              ]}
              />
            )}
            >
              <SearchConnections onSearch={searchConnectionsHandler} onClear={clearSearchHandler} />
            </Suspense>
            <Suspense fallback={(
              <SkeletonContainer list={[
                { variant: 'rect', width: '20%' },
                { variant: 'rect', width: '20%' },
                { variant: 'rect', width: '20%' },
                { variant: 'rect', width: '20%' },
              ]}
              />
            )}
            >
              <SortConnections onSort={sortConnections} />
            </Suspense>
            <Suspense fallback={(
              <SkeletonContainer list={[
                { variant: 'circle', width: 50, height: 50 },
                { variant: 'rect', fullWidth: true, height: 150 },
                { variant: 'circle', width: 50, height: 50 },
                { variant: 'rect', fullWidth: true, height: 150 },
                { variant: 'circle', width: 50, height: 50 },
                { variant: 'rect', fullWidth: true, height: 150 },
              ]}
              />
            )}
            >
              <ConnectionsList
                connections={pageConnections(currentPage)}
                onAdd={addToContact}
                onRemove={() => false}
                onOpenEditDialog={() => false}
                disableRemove
                onOpenNoteDialog={openConnectionNoteDialogHandler}
                disableEdit
              />
            </Suspense>
            {(connections && connections.length > 0 && !searchedConnections) && (
              <Box mt={1} mb={2}><Pagination count={Math.ceil(connections.length / CONNECTIONS_PER_PAGE)} variant="outlined" onChange={paginationChangeHandler} /></Box>
            )}
            <Box className={classes.connectionsActionsContainer}>
              <CSVLink
                data={mapToArray(connections, CONNECTIONS_CSV_HEADER) || []}
                filename={`${memberName.replace(/\s/g, '_')}${language.languageVars.files.teamMemberConnections}.csv`}
                className={buttonClasses.defaultButton}
                style={{
                  backgroundColor: color.color.code,
                  maxWidth: 200,
                }}
              >
                {pageStatics.buttons.downloadCSV}
              </CSVLink>
            </Box>
          </Box>
        ) : (
          <Alert
            title={pageStatics.messages.info.noMemberConnections.title}
            description={`${memberName} ${pageStatics.messages.info.noMemberConnections.first}`}
            type="info"
          />
        )}
        {(connections && connections.length > 0 && !searchedConnections) && <Box mt={5}><Pagination count={Math.ceil(connections.length / CONNECTIONS_PER_PAGE)} variant="outlined" onChange={paginationChangeHandler} /></Box>}
      </Box>
      <Suspense fallback={(
        <SkeletonContainer list={[
          { variant: 'rect', fullWidth: true, height: 150 },
        ]}
        />
      )}
      >
        <ConnectionNoteDialog
          open={connectionNoteDialogOpen}
          onClose={closeConnectionNoteDialogHandler}
          connection={connectionNoteDialogData}
        />
      </Suspense>
    </FullScreenDialog>
  )
}

const mapDispatchToProps = dispatch => ({
  onSetNotification: notification => dispatch(actions.setNotification(notification)),
})

TeamMemberConnections.defaultProps = {
  connections: null,
  open: false,
  memberName: null,
}

TeamMemberConnections.propTypes = {
  onSetNotification: PropTypes.func.isRequired,
  onSortConnections: PropTypes.func.isRequired,
  connections: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  memberName: PropTypes.string,
}

export default connect(null, mapDispatchToProps)(TeamMemberConnections)
