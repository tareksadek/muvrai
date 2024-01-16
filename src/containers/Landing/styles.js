import { makeStyles } from '@material-ui/core/styles'

export const landingStyles = makeStyles(theme => ({
  landingPageContainer: {
    backgroundColor: theme.palette.background.light,
  },
  landingHeader: {
    backgroundColor: theme.palette.background.light,
    '& > .MuiBox-root': {
      marginTop: 0,
      backgroundColor: `${theme.palette.background.light} !important`,
    },
  },
  headerTitle: {
    color: theme.palette.background.reverse,
    fontSize: '1.4rem',
    fontWeight: 'bold',
    padding: theme.spacing(2),
  },
  landingData: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      maxWidth: 350,
      width: '100%',
      margin: '0 auto',
    },
  },
  landingTextContainer: {
    padding: theme.spacing(2),
  },
  landingTextOne: {
    color: theme.palette.background.lighter,
    fontSize: '3rem',
    textTransform: 'uppercase',
    fontWeight: 300,
    textAlign: 'center',
    display: 'block',
    lineHeight: '3rem',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      textAlign: 'left',
    },
    '& span': {
      color: theme.palette.background.reverse,
      fontSize: '3.2rem',
      fontWeight: 800,
      marginLeft: '6px',
    },
  },
  landingTextTwo: {
    color: theme.palette.background.lighter,
    display: 'block',
    textAlign: 'center',
    fontSize: '2.6rem',
    fontWeight: 700,
    lineHeight: '1rem',
    textTransform: 'uppercase',
    letterSpacing: 2,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
      letterSpacing: 0,
    },
  },
  landingTextThree: {
    color: theme.palette.background.lighter,
    fontSize: '3rem',
    display: 'block',
    textAlign: 'center',
    lineHeight: '3rem',
    textTransform: 'uppercase',
    fontWeight: 300,
    letterSpacing: 4,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
      letterSpacing: 0,
      marginLeft: 5,
    },
    '& span': {
      color: theme.palette.background.reverse,
      fontSize: '3.2rem',
      fontWeight: 800,
    },
  },
  landingTextFour: {
    color: theme.palette.background.landingText,
    fontSize: '1rem',
    marginTop: theme.spacing(2),
    display: 'block',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
  landingActions: {
    width: '100%',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.background.light,
    position: 'sticky',
    bottom: theme.spacing(2),
    left: 0,
  },
  landingNav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    '& button': {
      paddingRight: 0,
      '& span': {
        justifyContent: 'flex-end',
      },
      '& svg': {
        color: theme.palette.background.reverse,
        fontSize: 22,
      },
    },
  },
  logo: {
    color: theme.palette.background.reverse,
    fill: theme.palette.background.reverse,
    fontSize: 55,
  },
  landingFooter: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    bottom: theme.spacing(3),
    position: 'sticky',
    zIndex: 2,
    '& a': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  landingTitle: {
    fontFamily: theme.fonts.titles,
    color: theme.palette.background.reverse,
    fontWeight: 700,
    fontSize: '2rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  carouselContainer: {
    borderRadius: 20,
    boxShadow: '0px 0px 12px rgb(0 0 0 / 30%)',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    overflow: 'hidden',
    minHeight: 'fit-content',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  },
  landingButtonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    '& button': {
      maxWidth: 250,
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        maxWidth: 'initial',
      },
    },
    '& a': {
      minWidth: 'initial',
      width: '100%',
      marginTop: theme.spacing(2),
      maxWidth: 250,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      [theme.breakpoints.down('xs')]: {
        maxWidth: 'initial',
      },
    },
  },
  landingImage: {
    width: '100%',
    borderRadius: theme.spacing(2),
  },
  heroParagraph: {
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  },
  sectionBoxesContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  readSectionBox: {
    backgroundColor: theme.palette.background.reverse,
    color: theme.palette.background.default,
    borderRadius: '4px',
    width: '150px',
    padding: theme.spacing(1),
    height: '200px',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: theme.spacing(2),
    cursor: 'pointer',
    '& div': {
      position: 'absolute',
      width: '65px',
      height: '98px',
      left: 0,
      right: 0,
      margin: 'auto',
      '&:first-child': {
        transform: 'rotate(-7deg)',
        top: '-20px',
        zIndex: 0,
      },
      '&:nth-child(2)': {
        transform: 'rotate(15deg)',
        backgroundColor: theme.palette.background.reverse,
        top: '20px',
        zIndex: 2,
        left: '40px',
      },
      '&:nth-child(3)': {
        transform: 'rotate(-30deg)',
        backgroundColor: theme.palette.background.reverse,
        top: '45px',
        zIndex: 1,
        left: '-25px',
      },
    },
    '& img': {
      width: '65px',
      height: '98px',
    },
  },
  readSectionBoxDarker: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: theme.palette.background.reverse,
    borderRadius: '4px',
    width: '150px',
    padding: theme.spacing(1),
    height: '200px',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: theme.spacing(2),
    cursor: 'pointer',
    '& div': {
      position: 'absolute',
      left: 0,
      right: 0,
      margin: 'auto',
      width: '85px',
      top: '-25px',
    },
    '& img': {
      width: '85px',
      height: '163px',
    },
  },
  readSectionBoxText: {
    textTransform: 'uppercase',
    fontSize: '0.8rem',
  },
  arabicFont: {
    fontFamily: theme.fonts.arabic,
  },
}))
