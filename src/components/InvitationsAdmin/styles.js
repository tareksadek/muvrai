import { makeStyles } from '@material-ui/core/styles'

export const invitationTableStyles = makeStyles(theme => ({
  qrListContainer: {
    '& svg': {
      margin: theme.spacing(0.5),
    },
  },
  tableContainer: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    border: '1px solid #272727',
  },
  table: {
    minWidth: 650,
    backgroundColor: '#ffffff',
    color: '#272727',
    '& .MuiTableCell-head': {
      color: '#272727',
      fontWeight: 700,
    },
    '& .MuiTableCell-body': {
      color: '#272727',
    },
    '& tbody': {
      position: 'relative',
      '& tr': {
        '&:nth-child(odd)': {
          backgroundColor: '#f3f3f3',
        },
      },
    },
  },
  tableActionIcon: {
    color: '#272727',
  },
  copyCode: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& svg': {
      width: 20,
      color: '#888',
      marginRight: theme.spacing(0.5),
    },
  },
  copiedRow: {
    backgroundColor: '#aae2a9 !important',
    '& svg': {
      color: '#377d36',
    },
  },
  invitationLabel: {
    borderRadius: theme.spacing(0.5),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  invitationConnectedLabel: {
    backgroundColor: '#006d00',
    color: '#fff',
  },
  invitationUnlinkedLabel: {
    backgroundColor: '#d69e00',
    color: '#fff',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  connectionSkeletonContainer: {
    width: '100%',
    background: '#eee',
    borderRadius: theme.spacing(1),
  },
  connectionItemContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#eee',
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      marginBottom: theme.spacing(1),
      paddingRight: theme.spacing(2),
    },
  },
  connectionItemAvatar: {
    backgroundColor: '#ccc',
    paddingTop: theme.spacing(0.5),
    border: '1px solid #bbb',
    [theme.breakpoints.down('xs')]: {
      width: 60,
      height: 60,
      marginTop: theme.spacing(1),
    },
  },
  connectionItemTextContainer: {
    fontWeight: 'bold',
    color: '#272727',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  connectionDetails: {
    fontWeight: 'normal',
    fontSize: '0.8rem',
    '& .MuiTypography-body1': {
      fontWeight: 'normal',
      fontSize: '0.8rem',
      textTransform: 'initial',
      lineHeight: '1.3rem',
      opacity: 0.6,
    },
  },
  connectionItemActionContainer: {
    [theme.breakpoints.down('xs')]: {
      position: 'initial',
      transform: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: theme.spacing(2),
    },
  },
  settingsButtonsContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonInfo: {
    fontSize: '0.8rem',
    color: theme.palette.background.reverse,
    opacity: 0.5,
    marginTop: theme.spacing(1),
  },
  connectionItemAction: {
    color: '#fff',
    marginRight: theme.spacing(1),
    '&:last-child': {
      marginRight: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: 75,
      borderRadius: theme.spacing(1),
    },
  },
  connectionItemNote: {
    backgroundColor: '#37c396',
    '&:hover': {
      backgroundColor: '#37c396',
      opacity: 0.8,
    },
  },
  connectionItemAdd: {
    backgroundColor: '#347bd2',
    '&:hover': {
      backgroundColor: '#347bd2',
      opacity: 0.8,
    },
  },
  connectionItemremove: {
    backgroundColor: '#d00000',
    '&:hover': {
      backgroundColor: '#d00000',
      opacity: 0.8,
    },
  },
  usedInvitation: {
    backgroundColor: '#d00000',
  },
  availableInvitation: {
    backgroundColor: '#006d00',
  },
  connectionName: {
    position: 'relative',
    '& span': {
      fontSize: '0.8rem',
      opacity: 0.5,
      backgroundColor: '#fff',
      borderRadius: theme.spacing(0.5),
      padding: theme.spacing(0.5),
      marginLeft: theme.spacing(3),
      color: '#fff',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        display: 'block',
      },
      '&$usedInvitation': {
        backgroundColor: '#d00000',
      },
      '&$availableInvitation': {
        backgroundColor: '#006d00',
      },
    },
  },
}))

export const createInvitationDialog = makeStyles(theme => ({
  paperFullScreen: {
    top: theme.dialogSpacing,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('md')]: {
      top: 0,
    },
  },
  dialogHeader: {
    top: theme.dialogSpacing,
    backgroundColor: theme.palette.background.reverse,
    color: theme.palette.background.default,
    [theme.breakpoints.down('md')]: {
      top: 0,
    },
  },
  dialogClose: {
    position: 'absolute',
    left: theme.spacing(3),
    top: 0,
    bottom: 0,
    margin: 'auto',
  },
  arabicClose: {
    right: theme.spacing(3),
    left: 'auto',
  },
  dialogHeaderSlotName: {
    border: `1px dashed ${theme.palette.background.default}`,
    padding: '2px 5px',
  },
  dialogTitle: {
    width: '100%',
    fontFamily: theme.fonts.cardTitle.en.family,
    fontSize: '1.5rem',
  },
  cardContentContainer: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  dialogContent: {
    paddingBottom: theme.dialogSpacing + 20,
    backgroundColor: theme.palette.background.default,
    maxWidth: '800px',
    margin: '0 auto',
    padding: theme.spacing(2),
    paddingTop: '100px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingBottom: 0,
    },
  },
  dialogImage: {
    maxWidth: '250px',
    width: '100%',
    borderRadius: '6px',
  },
  keywordsContainer: {
    backgroundColor: theme.palette.background.reverse,
    color: theme.palette.background.default,
    borderRadius: '6px',
  },
  keywordsBox: {
    padding: theme.spacing(2),
  },
  keywordsTitle: {
    borderBottom: `1px solid ${theme.palette.background.default}`,
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  multiLine: {
    whiteSpace: 'pre-line',
  },
  arabicFont: {
    fontFamily: theme.fonts.arabic,
  },
}))

export const invitationDetailsDialogStyles = makeStyles(theme => ({
  dialogHeader: {
    top: theme.dialogSpacing,
    backgroundColor: theme.palette.background.reverse,
    color: theme.palette.background.default,
    [theme.breakpoints.down('md')]: {
      top: 0,
    },
  },
  dialogClose: {
    position: 'absolute',
    right: theme.spacing(3),
    top: 0,
    bottom: 0,
    margin: 'auto',
    width: 30,
    height: 30,
  },
  titleContainer: {
    position: 'relative',
    color: '#212121',
    '& h2': {
      fontWeight: 'bold',
    },
  },
  title: {
    textAlign: 'center',
    color: '#212121',
    '& h2': {
      fontSize: '0.9rem',
    },
  },
  dialogContent: {
    paddingBottom: theme.dialogSpacing + 20,
    backgroundColor: '#ffffff',
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: 0,
    padding: 0,
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingBottom: 0,
    },
    '& textarea': {
      '&.MuiInputBase-input': {
        color: '#212121',
      },
    },
  },
  viewUserData: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    '& p': {
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: theme.palette.background.darker,
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      color: theme.palette.background.lighter,
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
      '&$notes': {
        border: 'none',
        marginTop: theme.spacing(1),
        fontSize: '0.9rem',
        '& span': {
          width: '100%',
        },
      },
      '& span': {
        display: 'block',
        width: '50%',
        marginLeft: theme.spacing(1),
        color: '#272727',
        '&:first-letter': {
          textTransform: 'uppercase',
        },
      },
      '&:last-of-type': {
        border: 'none',
      },
    },
  },
  icon: {
    color: theme.palette.background.gradient.dark,
  },
  noteText: {
    color: '#272727',
  },
}))

export const filterStyles = makeStyles(theme => ({
  sortContainer: {
    marginBottom: theme.spacing(2),
  },
  sortButton: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.background.reverse,
    borderColor: '#ccc',
    '&:first-child': {
      borderRadius: `${theme.spacing(1)}px 0 0 ${theme.spacing(1)}px`,
    },
    '&:last-child': {
      borderRadius: `0 ${theme.spacing(1)}px ${theme.spacing(1)}px 0`,
    },
    ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  selectedSortButton: {
    cursor: 'default',
    backgroundColor: theme.palette.background.reverse,
    color: theme.palette.background.default,
    '&:hover': {
      backgroundColor: theme.palette.background.reverse,
    },
  },
}))

export const qrListStyles = makeStyles(theme => ({
  qrListContainer: {
    overflow: 'hidden',
  },
  sortButton: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.background.reverse,
    borderColor: '#ccc',
    '&:first-child': {
      borderRadius: `${theme.spacing(1)}px 0 0 ${theme.spacing(1)}px`,
    },
    '&:last-child': {
      borderRadius: `0 ${theme.spacing(1)}px ${theme.spacing(1)}px 0`,
    },
    ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  selectedSortButton: {
    cursor: 'default',
    backgroundColor: theme.palette.background.reverse,
    color: theme.palette.background.default,
    '&:hover': {
      backgroundColor: theme.palette.background.reverse,
    },
  },
}))
