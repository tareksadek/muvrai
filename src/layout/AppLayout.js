import React from 'react'
import PropTypes from 'prop-types'

import { useLocation } from 'react-router-dom'

import Container from '@material-ui/core/Container'
// import Box from '@material-ui/core/Box'
// import Button from '@material-ui/core/Button'
//
// import AddToHomaScreenDialog from './AddToHomaScreenDialog'

import { useAuth } from '../hooks/use-auth'

import { settings } from '../utilities/appVars'

import { layoutStyles } from '../theme/layout'

import AppMeta from './AppMeta'
import AppNav from './AppNav'
// import AppFooter from './AppFooter'
import CookieBar from './CookieBar'

const AppLayout = ({ children, toggleTheme }) => {
  const classes = layoutStyles()
  const location = useLocation()
  const auth = useAuth()
  const {
    userUrlSuffix,
  } = auth
  const fullScreenLayout = location.pathname.includes(userUrlSuffix)
  const noHeaderLayout = location.pathname.includes('patches')
  // || location.pathname.includes('welcome')
  // || location.pathname.includes('welcomeMember')
  // || location.pathname.includes('subscriberThanks')
  || location.pathname.includes('invitationsAdmin')
  || location.pathname.includes('users')
  || location.pathname.includes('info')
  || location.pathname.includes('contact')
  || location.pathname.includes('picture')
  || location.pathname.includes('logo')
  || location.pathname.includes('links')
  || location.pathname.includes('bio')
  || location.pathname.includes('changePassword')
  || location.pathname.includes('settings')
  || location.pathname.includes('connections')
  || location.pathname.includes('connectionTags')
  || location.pathname.includes('connectionForm')
  || location.pathname.includes('qrcode')
  || location.pathname.includes('share')
  || location.pathname.includes('analytics')
  || location.pathname.includes('rewards')
  || location.pathname.includes('privacyPolicy')
  || location.pathname.includes('switch')

  const noCookieBar = location.pathname.includes('welcome')
  || location.pathname.includes('welcomeMember')
  || location.pathname.includes('connect')
  || location.pathname.includes('subscribe')
  // const [addToHomeScreenDialogOpen, setAddToHomeScreenDialogOpen] = useState(false)
  //
  // const closeAddToHomeScreenDialogHandler = () => {
  //   setAddToHomeScreenDialogOpen(false)
  // }
  //
  // const openAddToHomeScreenDialogHandler = () => {
  //   setAddToHomeScreenDialogOpen(true)
  // }
  return (
    <>
      <AppMeta />
      {auth.isSubscriber && auth.authStatus !== 'processing' && (
        <AppNav toggleTheme={toggleTheme} hideNavigation={fullScreenLayout} hideHeader={!noHeaderLayout} />
      )}
      {settings.onlyInvitations && !auth.isSubscriber && auth.authStatus !== 'processing' && (
        <AppNav toggleTheme={toggleTheme} hideNavigation={fullScreenLayout} hideHeader={!noHeaderLayout} />
      )}
      <Container maxWidth={false} className={fullScreenLayout ? classes.fullWidthAppContainer : classes.appContainer}>
        {children}
      </Container>
      {
        // <AppFooter />
      }
      {auth.user && !noCookieBar && <CookieBar />}
      {
        // !noHeaderLayout && (
        // <Box className={classes.addToHomeScreenButtonContainer}>
        //   <Button
        //     color="secondary"
        //     onClick={() => openAddToHomeScreenDialogHandler()}
        //     className={classes.openAddToHomeScreenDialogButton}
        //   >
        //     <span>For best experience</span>
        //     <span>Add {`${language.languageVars.appName}`} to home screen</span>
        //     <span>Learn how</span>
        //   </Button>
        //   <AddToHomaScreenDialog
        //     open={addToHomeScreenDialogOpen}
        //     onClose={closeAddToHomeScreenDialogHandler}
        //   />
        // </Box>
        // )
    }
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default AppLayout
