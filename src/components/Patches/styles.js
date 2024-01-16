import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

export const listStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export const cardStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    color: theme.palette.text.secondary,
    overflow: 'initial !important',
    marginBottom: theme.spacing(6),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardContent: {
    position: 'relative',
    paddingTop: '50px !important',
    textAlign: 'center',
  },
  userAvatar: {
    width: 75,
    height: 75,
    position: 'absolute',
    left: 0,
    right: 0,
    top: -38,
    bottom: 'auto',
    margin: 'auto',
    border: `4px solid ${theme.palette.background.default}`,
  },
  userName: {
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: '0.8rem',
  },
  cardActions: {
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: red[500],
  },
  deleteBtn: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  menuAnchor: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  cardMenu: {
    background: theme.palette.background.default,
  },
  cardMenuButton: {
    color: theme.palette.background.reverse,
  },
  patchStatus: {
    fontSize: '0.8rem',
    textAlign: 'center',
    borderRadius: theme.spacing(5),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    color: '#fff',
    backgroundColor: '#00adff',
  },
  patchStatusChina: {
    backgroundColor: '#ef6605',
  },
  patchStatusUsa: {
    backgroundColor: '#2f8b00',
  },
}))

export const createUserDialog = makeStyles(theme => ({
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

  layoutButtonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    '& button': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 130,
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
      '& span': {
        display: 'block',
        width: 'auto',
      },
      '& svg': {
        fontSize: 150,
      },
    },
  },
  selectedLayout: {
    border: `1px solid ${theme.palette.background.reverse}`,
    borderRadius: theme.spacing(1),
  },
  buttonText: {
    fontSize: '0.8rem',
    textAlign: 'center',
    opacity: 0.5,
    textTransform: 'initial',
  },
  themeButtonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  themeButton: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    minWidth: 'auto',
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    '& svg': {
      display: 'none',
    },
  },
  lightThemeButton: {
    backgroundColor: '#fff',
    border: '1px solid #272727',
    '& svg': {
      color: '#272727',
    },
  },
  darkThemeButton: {
    backgroundColor: '#272727',
    border: '1px solid #fff',
    '& svg': {
      color: '#fff',
    },
  },
  selectedTheme: {
    '& svg': {
      display: 'inline',
    },
  },
  colorButtonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  colorButton: {
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(5),
    width: 50,
    height: 50,
    minWidth: 'auto',
  },
  colorPicker: {
    width: '100%',
    '& .sketch-picker': {
      boxShadow: '0 0 0 transparent !important',
      backgroundColor: `${theme.palette.background.reverse} !important`,
      borderRadius: `${theme.spacing(2)}px !important`,
      width: 'auto !important',
      '& > div': {
        '&:first-child': {
          borderRadius: `${theme.spacing(2)}px !important`,
        },
        '&:nth-child(2)': {
          '& > div': {
            '& > div': {
              height: '20px !important',
              '& > div': {
                '& > div': {
                  '& > div': {
                    '& > div': {
                      height: '18px !important',
                    },
                  },
                },
              },
            },
          },
        },
        '&:last-child': {
          display: 'none !important',
        },
      },
      '& .hue-horizontal': {
        borderRadius: `${theme.spacing(2)}px !important`,
      },
      '& input': {
        borderRadius: theme.spacing(0.5),
      },
      '& label': {
        color: `${theme.palette.background.default} !important`,
      },
    },
  },
  defaultLinksColorContainer: {
    color: theme.palette.background.reverse,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    '& .MuiCheckbox-root': {
      color: theme.palette.background.reverse,
    },
  },
}))

export const accountInfo = makeStyles(theme => ({
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
    width: '100%',
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
  viewCardData: {
    maxWidth: 350,
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
      justifyContent: 'flex-end',
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
        color: theme.palette.background.reverse,
        '&:first-letter': {
          textTransform: 'uppercase',
        },
      },
      '&:last-of-type': {
        border: 'none',
      },
    },
  },
}))

export const searchStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: 400,
    background: 'transparent',
    border: '1px solid #888',
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  searchContainer: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1),
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
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

export const filterStyles = makeStyles(theme => ({
  filterContainer: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1),
    },
  },
  root: {
    '&:focus': {
      backgroundColor: theme.palette.background.reverse,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.background.default,
      },
    },
  },
  divider: {
    height: 28,
    margin: '4px 4px 4px 8px',
    background: theme.palette.background.reverse,
    opacity: '0.26',
  },
  filterButton: {
    border: '1px solid #888888',
    minHeight: '50px',
    borderRadius: theme.spacing(1),
  },
  arabicFont: {
    fontFamily: theme.fonts.arabic,
    textAlign: 'right',
  },
}))
