import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { CopyToClipboard } from 'react-copy-to-clipboard'

import Box from '@material-ui/core/Box'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'

import DeleteIcon from '@material-ui/icons/Delete'
// import BlockIcon from '@material-ui/icons/Block'
import InfoIcon from '@material-ui/icons/Info'
import FileCopyIcon from '@material-ui/icons/FileCopy'

import { useLanguage } from '../../hooks/useLang'

import { invitationTableStyles } from './styles'

import * as actions from '../../store/actions'

const InvitationList = ({
  invitations, deleteInvitation, isValid, onOpenDetailsDialog, onSetNotification,
}) => {
  const classes = invitationTableStyles()

  const language = useLanguage()

  const [copiedCode, setCopiedCode] = useState(null)

  const invitationDomain = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `${language.languageVars.appDomain}`

  const copyInvitationCode = code => {
    setCopiedCode(code)
    onSetNotification({
      message: language.languageVars.pages.userInvitations.messages.notifications.invitationCodeCopiedSuccess,
      type: 'success',
    })
  }

  return (
    <Box className={classes.tableContainer}>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Device</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invitations && invitations.map(invitation => (
              <TableRow key={invitation.code} className={copiedCode === invitation.code ? classes.copiedRow : ''}>
                <TableCell component="th" scope="row">
                  {!invitation.used && !invitation.connected ? (
                    <CopyToClipboard
                      text={`${invitationDomain}/activate?tac=${invitation.code}`}
                      onCopy={() => copyInvitationCode(invitation.code)}
                      className={classes.copyCode}
                    >
                      <Box>
                        {invitation.type === 'master' && (<b>Master</b>)}
                        <br />
                        <FileCopyIcon className={classes.tableActionIcon} />
                        {invitation.code}
                      </Box>
                    </CopyToClipboard>
                  ) : (
                    <Box>
                      {invitation.type === 'master' && (<b>Master</b>)}
                      <br />
                      {invitation.code}
                    </Box>
                  )}
                </TableCell>
                <TableCell align="left">
                  {isValid(invitation) === 'Used' ? (
                    <span className={`${classes.invitationConnectedLabel} ${classes.invitationLabel}`}>Used</span>
                  ) : (
                    <span className={`${classes.invitationLabel}`}>Available</span>
                  )}
                </TableCell>
                {
                  // <TableCell align="left">{format(invitation.expirationDate.toDate(), 'MMMM d, y')}</TableCell>
                  // <TableCell align="left">{invitation.package}</TableCell>
                }
                <TableCell align="left">
                  {invitation.connected ? (
                    <span className={`${classes.invitationConnectedLabel} ${classes.invitationLabel}`}>Connected</span>
                  ) : (
                    <span className={`${classes.invitationUnlinkedLabel} ${classes.invitationLabel}`}>unlinked</span>
                  )}
                </TableCell>
                <TableCell align="left">
                  {invitation.used && (
                    <IconButton onClick={() => onOpenDetailsDialog(invitation)}>
                      <InfoIcon className={classes.tableActionIcon} />
                    </IconButton>
                  )}
                  {
                    // {!invitation.used && !invitation.connected && (
                    //   <IconButton>
                    //     <CopyToClipboard
                    //       text={`${language.languageVars.appDomain}/activate?tac=${invitation.code}`}
                    //       onCopy={() => copyInvitationCode()}
                    //     >
                    //       <FileCopyIcon className={classes.tableActionIcon} />
                    //     </CopyToClipboard>
                    //   </IconButton>
                    // )}
                  }
                  {
                    // <IconButton onClick={() => disableInvitation(invitation.code)}>
                    //   <BlockIcon color="primary" />
                    // </IconButton>
                  }
                  {!invitation.used && (
                    <IconButton aria-label="delete" onClick={() => deleteInvitation(invitation.code)}>
                      <DeleteIcon className={classes.tableActionIcon} />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

InvitationList.defaultProps = {
  invitations: null,
}

InvitationList.propTypes = {
  invitations: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  // disableInvitation: PropTypes.func.isRequired,
  deleteInvitation: PropTypes.func.isRequired,
  isValid: PropTypes.func.isRequired,
  onOpenDetailsDialog: PropTypes.func.isRequired,
  onSetNotification: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  onSetNotification: notification => dispatch(actions.setNotification(notification)),
})

export default connect(null, mapDispatchToProps)(InvitationList)
