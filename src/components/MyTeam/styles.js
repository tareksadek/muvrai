import { makeStyles } from '@material-ui/core/styles'

export const listStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  connectionsList: {
    width: '100%',
    height: '100%',
    position: 'relative',
    '& .MuiListItem-container': {
      backgroundColor: '#eee',
      borderRadius: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  myTeamList: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
}))

export const connectionStyles = makeStyles(theme => ({
  connectionSkeletonContainer: {
    width: '100%',
    background: '#eee',
    borderRadius: theme.spacing(1),
  },
  connectionItemContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    minHeight: 75,
    borderBottom: `1px solid ${theme.palette.background.dark}`,
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  connectionItemAvatar: {
    backgroundColor: '#ccc',
    border: '1px solid #bbb',
  },
  connectionItemTextContainer: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: theme.palette.background.default,
  },
  connectionDetails: {
    fontWeight: 'normal',
    fontSize: '0.8rem',
    color: '#272727',
    '& .MuiTypography-body1': {
      fontWeight: 'normal',
      fontSize: '0.8rem',
      textTransform: 'initial',
      lineHeight: '1.3rem',
      opacity: 0.6,
    },
  },
  connectionItemActionContainer: {
    right: 0,
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
  connectionName: {
    position: 'initial',
    color: theme.palette.background.reverse,
    '& span': {
      fontSize: '0.8rem',
      opacity: 0.5,
      backgroundColor: '#fff',
      color: '#272727',
      borderRadius: theme.spacing(0.5),
      padding: theme.spacing(0.5),
      marginLeft: theme.spacing(0.5),
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        display: 'block',
        top: theme.spacing(2),
        right: theme.spacing(2),
        backgroundColor: 'transparent',
        padding: 0,
      },
    },
  },
  inactiveIcon: {
    position: 'relative',
    top: 5,
    fontSize: 18,
    color: '#ff2222',
  },
  menuAnchor: {
    '& svg': {
      color: theme.palette.background.reverse,
    },
  },
  FollowerSkeleton: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      '&:first-child': {
        flexShrink: 0,
      },
      '&:last-child': {
        minWidth: 175,
      },
    },
  },
  teamCardContainer: {
    width: 180,
    borderRadius: theme.spacing(1),
    margin: theme.spacing(1),
    ['@media (max-width:640px)']: { // eslint-disable-line no-useless-computed-key
      width: '46%',
      margin: '2%',
    },
    ['@media (max-width:400px)']: { // eslint-disable-line no-useless-computed-key
      width: '100%',
      margin: theme.spacing(1),
    },
  },
  teamCardMedia: {
    height: 180,
  },
  teamCardName: {
    color: theme.palette.background.default,
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: 0,
    textAlign: 'center',
  },
  teamCardEmail: {
    opacity: 0.75,
    textAlign: 'center',
    fontSize: '0.8rem',
  },
  teamCardActionsContainer: {
    flexDirection: 'column',
  },
  teamCardAction: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.background.reverse,
    width: '100%',
    borderRadius: theme.spacing(0.5),
    margin: '0 0 4px 0 !important',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.background.reverse,
      opacity: 0.75,
    },
  },
}))

export const connectionNoteDialogStyles = makeStyles(theme => ({
  connectionsActionsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderRadius: theme.spacing(2),
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
    textTransform: 'capitalize',
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
  shareButtonsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    marginBottom: theme.spacing(2),
    '& button': {
      display: 'flex',
      flex: '48%',
      textAlign: 'left',
      backgroundColor: '#eee !important',
      marginRight: '1%',
      borderRadius: theme.spacing(1),
      alignItems: 'center',
      padding: '8px !important',
      marginBottom: '1%',
      [theme.breakpoints.down('xs')]: {
        flex: '100%',
        marginRight: 0,
      },
    },
  },
  shareButtonText: {
    marginLeft: theme.spacing(1),
    color: '#212121',
  },
  icon: {
    color: theme.palette.background.gradient.dark,
  },
  noteText: {
    color: '#272727',
  },
}))

export const searchStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    border: `1px solid ${theme.palette.background.darker}`,
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  searchContainer: {
    marginRight: 0,
    marginBottom: theme.spacing(2),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    '& input::placeholder': {
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.8rem',
      },
    },
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
    background: theme.palette.background.reverse,
    opacity: '0.26',
  },
  arabicFont: {
    fontFamily: theme.fonts.arabic,
  },
}))

export const sortStyles = makeStyles(theme => ({
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
