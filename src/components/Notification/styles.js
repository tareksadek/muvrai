import { makeStyles } from '@material-ui/core/styles'

export const notificationStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  arabicFont: {
    fontFamily: theme.fonts.arabic,
  },
  notificationSnakbarContainer: {
    width: '100%',
    borderRadius: 0,
    top: 0,
    left: 0,
    alignItems: 'flex-start',
    zIndex: 999999,
  },
  notificationContainer: {
    width: '100%',
    boxShadow: '0 0 0 transparent',
    borderRadius: 0,
    minHeight: 60,
    alignItems: 'center',
  },
}))
