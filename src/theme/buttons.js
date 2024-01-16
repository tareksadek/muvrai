import { makeStyles } from '@material-ui/core/styles'

export const buttonStyles = makeStyles(theme => ({
  defaultButtonDescription: {},
  defaultButton: {
    backgroundColor: theme.palette.background.reverse,
    color: theme.palette.background.light,
    fontWeight: 'bold',
    fontSize: '1rem',
    textTransform: 'none',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    position: 'relative',
    padding: `${theme.spacing(1.5)}px ${theme.spacing(1)}px`,
    borderRadius: theme.spacing(6),
    '&:hover': {
      opacity: '0.9',
      backgroundColor: theme.palette.background.reverse,
    },
    '&:disabled': {
      backgroundColor: `${theme.palette.background.lighter} !important`,
    },
    '& span': {
      '&$defaultButtonDescription': {
        display: 'block',
        color: '#ffb100',
        lineHeight: '1.2rem',
        fontSize: '0.9rem',
        marginTop: theme.spacing(1),
      },
      '& i': {
        display: 'block',
        color: theme.palette.background.light,
        fontSize: '0.7rem',
        fontWeight: 400,
        fontStyle: 'normal',
        opacity: 0.75,
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  outlineButton: {
    backgroundColor: 'transparent',
    color: theme.palette.background.reverse,
    borderWidth: '2px',
    borderStyle: 'solid',
    fontWeight: 'bold',
    fontSize: '1rem',
    textTransform: 'none',
    textDecoration: 'none',
    display: 'block',
    borderRadius: theme.spacing(6),
    textAlign: 'center',
    position: 'relative',
    padding: theme.spacing(1),
    minHeight: 52,
    '&:hover': {
      opacity: '0.9',
    },
    '&$smallButton': {
      padding: theme.spacing(0.5),
      minHeight: 'auto',
    },
  },
  iconButton: {
    backgroundColor: 'transparent',
    color: theme.palette.background.reverse,
    borderRadius: theme.spacing(6),
    padding: `${theme.spacing(1.5)}px ${theme.spacing(1)}px`,
    width: '100%',
    fontWeight: 300,
    textTransform: 'none',
  },
  textButton: {
    backgroundColor: 'transparent',
    color: '#00abff',
    border: 'none',
    minWidth: 'auto',
    fontWeight: 400,
    fontSize: '0.8rem',
    textTransform: 'none',
    display: 'block',
    borderRadius: theme.spacing(6),
    textAlign: 'center',
    position: 'relative',
    padding: 0,
    textDecoration: 'none',
    '&:hover': {
      opacity: '0.9',
      textDecoration: 'underline',
      backgroundColor: 'transparent',
    },
  },
  textButtonReverse: {
    color: theme.palette.background.reverse,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  textButtonDefault: {
    color: theme.palette.background.default,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  getCardButton: {
    background: 'transparent',
    border: `2px solid ${theme.palette.background.default}`,
    color: theme.palette.background.default,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
    fontWeight: 600,
  },
  arabicFont: {
    fontFamily: theme.fonts.arabic,
  },
  centerButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  smallButton: {
    fontWeight: 'normal',
    padding: 6,
    fontSize: 14,
  },
  editModeButton: {
    backgroundColor: theme.palette.background.light,
    color: theme.palette.background.editButton,
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: theme.palette.background.editButton,
    maxWidth: 550,
    margin: '0 auto',
    width: '100%',
    fontSize: '0.8rem',
    textTransform: 'none',
    textDecoration: 'none',
    display: 'block',
    borderRadius: theme.spacing(6),
    textAlign: 'center',
    position: 'relative',
    padding: theme.spacing(0.5),
    '&:hover': {
      opacity: '0.9',
    },
    '&$smallButton': {
      padding: theme.spacing(0.5),
    },
  },
  editModeIconButton: {
    backgroundColor: theme.palette.background.editButton,
    color: theme.palette.background.light,
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: theme.palette.background.editButton,
    margin: '0 auto',
    width: 35,
    height: 35,
    fontSize: '0.8rem',
    textTransform: 'none',
    textDecoration: 'none',
    display: 'block',
    borderRadius: theme.spacing(6),
    textAlign: 'center',
    position: 'relative',
    padding: theme.spacing(0.5),
    '& svg': {
      fontSize: 17,
    },
    '&:hover': {
      opacity: '0.9',
      backgroundColor: theme.palette.background.editButton,
      color: theme.palette.background.light,
    },
  },
  editModeButtonCircle: {
    backgroundColor: theme.palette.background.light,
    color: theme.palette.background.editButton,
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: theme.palette.background.editButton,
    width: 45,
    height: 45,
    fontSize: '0.8rem',
    textTransform: 'none',
    textDecoration: 'none',
    display: 'flex',
    borderRadius: theme.spacing(6),
    textAlign: 'center',
    position: 'relative',
    padding: 0,
    minWidth: 'initial',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      opacity: '0.9',
    },
    '&$smallButton': {
      padding: theme.spacing(0.5),
    },
  },
}))
