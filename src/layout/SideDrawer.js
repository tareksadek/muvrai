import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

// import QRCode from 'react-qr-code'
import { getYear } from 'date-fns'

import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Chip from '@material-ui/core/Chip'

import StarIcon from '@material-ui/icons/Star'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DraftsIcon from '@material-ui/icons/Drafts'
import TapAndPlayIcon from '@material-ui/icons/TapAndPlay'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import InfoIcon from '@material-ui/icons/Info'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone'
import ImageIcon from '@material-ui/icons/Image'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import LinkIcon from '@material-ui/icons/Link'
import PaletteIcon from '@material-ui/icons/Palette'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import PersonIcon from '@material-ui/icons/Person'
import VisibilityIcon from '@material-ui/icons/Visibility'
import ShareIcon from '@material-ui/icons/Share'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import GroupIcon from '@material-ui/icons/Group'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import BubbleChartIcon from '@material-ui/icons/BubbleChart'
import TimelineIcon from '@material-ui/icons/Timeline'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import LabelIcon from '@material-ui/icons/Label'
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import EcoIcon from '@material-ui/icons/Eco'

import AddToHomaScreenDialog from './AddToHomaScreenDialog'

import {
  MenuIconLeft, SettingsIcon, LogoutIcon, EditIcon, ConnectionsIcon, QrIcon,
} from './CustomIcons'

import { useLanguage } from '../hooks/useLang'
import { useAuth } from '../hooks/use-auth'

import * as vars from '../utilities/appVars'

import { buttonStyles } from '../theme/buttons'
import { sideDrawerStyles } from './styles'
import { layoutStyles } from '../theme/layout'
import { settings } from '../utilities/appVars'

const SideDrawer = ({
  toggleDrawer, anchor, drawerState, iconColor, navLinks, selectedColor, hasSecretCode, openQr,
}) => {
  const classes = sideDrawerStyles()
  const buttonClasses = buttonStyles()
  const layoutClasses = layoutStyles()
  const auth = useAuth()
  const language = useLanguage()
  const location = useLocation()
  const [expanded, setExpanded] = useState([])
  const [addToHomeScreenDialogOpen, setAddToHomeScreenDialogOpen] = useState(window.location.hash === '#addToHS')

  useEffect(() => {
    const onHashChange = () => setAddToHomeScreenDialogOpen(window.location.hash === '#addToHS')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(prevState => (isExpanded ? [...prevState, panel] : prevState.filter(item => item !== panel)))
  }

  const closeAddToHomeScreenDialogHandler = () => {
    window.history.back()
  }

  const openAddToHomeScreenDialogHandler = () => {
    window.location.hash = '#addToHS'
  }

  const listLinks = () => (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      dir={language.direction}
    >
      <List>
        {navLinks && navLinks.map((linksGroup, i) => (
          <Accordion
            className={`${classes.accordionContainer} ${linksGroup.title ? classes.editGroup : ''}`}
            expanded={!linksGroup.title || expanded.includes(linksGroup.title) || (linksGroup.links.some(alink => alink.path === location.pathname) && expanded.includes(linksGroup.title))}
            onChange={handleChange(linksGroup.title)}
            key={i}
          >
            {linksGroup.title && (
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${linksGroup.title}-content`}
                id={`${linksGroup.title}-header`}
                className={classes.linksGroupTitleContainer}
              >
                <Typography variant="body1" component="p" align="center" className={classes.linksGroupTitle} style={{ color: '#f3f0ea' }}>
                  {linksGroup.title}
                </Typography>
              </AccordionSummary>
            )}
            <AccordionDetails className={classes.accordionDetails}>
              {linksGroup.links.map(({ linkfor, path }) => (
                <Box
                  key={linkfor}
                  style={{
                    display: linkfor === 'secretCode' && !hasSecretCode ? 'none' : 'block',
                  }}
                >
                  <>
                    {linkfor === 'qrBox' ? (
                      // <Box className={classes.navQrContainer}>
                      //   <QRCode value={`${language.languageVars.appDomain}${path}`} size={220} />
                      // </Box>
                      <Button
                        onClick={() => openQr()}
                        className={`
                          ${classes.linkText}
                        `}
                        style={{
                          // backgroundColor: location.pathname.includes(linkfor.path) && selectedColor,
                          backgroundColor: `${linkfor === 'profile' ? selectedColor : ''}`,
                        }}
                      >
                        <ListItem button className={classes.sideMenuItem}>
                          <ListItemIcon className={classes.sideMenuItemIcon}>
                            <QrIcon fill="#ffffff" />
                          </ListItemIcon>
                          <ListItemText
                            primaryTypographyProps={{
                              classes: {
                                body1: classes.primaryLinkItemText,
                              },
                            }}
                            className={language.direction === 'rtl' ? classes.arabicFont : ''}
                            primary={language.languageVars.navLinks[linkfor]}
                          />
                        </ListItem>
                      </Button>
                    ) : (
                      <Button
                        onClick={toggleDrawer(anchor, false, path)}
                        className={`
                          ${classes.linkText}
                          ${linkfor === 'profile' ? classes.profileLink : ''}
                          ${linkfor === 'logout' ? classes.logoutLink : ''}
                        `}
                        // style={{
                        //   // backgroundColor: location.pathname.includes(linkfor.path) && selectedColor,
                        //   backgroundColor: `${linkfor === 'profile' ? selectedColor : ''}`,
                        // }}
                      >
                        <ListItem button className={`${classes.sideMenuItem} ${location.pathname === path ? classes.selectedNavLink : ''}`}>
                          <ListItemIcon className={classes.sideMenuItemIcon}>
                            {linkfor === 'profile' && <VisibilityIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'editProfile' && <EditIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'info' && <InfoIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'contact' && <ContactPhoneIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'picture' && <ImageIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'logo' && <BubbleChartIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'bio' && <PlayCircleFilledIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'links' && <LinkIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'settings' && <SettingsIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'theme' && <PaletteIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'privacy' && <VpnKeyIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'account' && <PersonIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'connect' && <TapAndPlayIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'connections' && <ConnectionsIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'connectionTags' && <LabelIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'connectionForm' && <FormatAlignCenterIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'offers' && <LocalOfferIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'followings' && <PersonAddIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'followers' && <PersonAddIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'invitations' && <DraftsIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'qrcode' && <QrIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'switch' && <SwapHorizIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'share' && <ShareIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'analytics' && <TimelineIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'rewards' && <EcoIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'myTeam' && <GroupIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'secretCode' && <SupervisedUserCircleIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                            {linkfor === 'logout' && <LogoutIcon style={{ color: location.pathname === path ? selectedColor : '#ffffff' }} fill={location.pathname === path ? selectedColor : '#ffffff'} />}
                          </ListItemIcon>
                          <ListItemText
                            primaryTypographyProps={{
                              classes: {
                                body1: `${classes.primaryLinkItemText} ${location.pathname === path ? classes.primarySelectedLinkItemText : ''}`,
                              },
                              style: {
                                // color: linkfor === 'profile' && '#272727',
                                // color: location.pathname === path ? selectedColor : '#ffffff',
                              },
                            }}
                            primary={language.languageVars.navLinks[linkfor]}
                          />
                          {((linkfor === 'analytics' || linkfor === 'switch') && settings.onlyInvitations && !auth.isSubscriber) && (
                            <Chip
                              size="small"
                              icon={<StarIcon />}
                              label="Pro"
                              clickable={false}
                              color="primary"
                              className={layoutClasses.proChip}
                            />
                          )}
                        </ListItem>
                        {/* {location.pathname === path && (
                          <span
                            className={classes.selectedLinkIndicator}
                            style={{
                              backgroundColor: selectedColor,
                            }}
                          >
                            &nbsp;
                          </span>
                        )} */}
                      </Button>
                    )}
                  </>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </List>
      <Box className={classes.addToHomeScreenButtonContainer}>
        <Button
          color="secondary"
          onClick={() => openAddToHomeScreenDialogHandler()}
          className={`${buttonClasses.defaultButton} ${classes.openAddToHomeScreenDialogButton}`}
        >
          <span>For best experience</span>
          <span>{`Add ${language.languageVars.appName} to home screen`}</span>
          <span>Learn how</span>
        </Button>
      </Box>
      <Box className={classes.mobileFooter}>
        <List className={classes.footerLinks}>
          {vars.footerLinks.map(({ linkfor, path }) => (
            <Link
              to={path}
              key={linkfor}
              className={classes.linkText}
            >
              <ListItem button>
                <ListItemText
                  primaryTypographyProps={{
                    classes: {
                      body1: language.direction === 'rtl' ? classes.arabicFont : '',
                    },
                  }}
                  primary={language.languageVars.footer.buttons[linkfor]}
                  className={`${language.direction === 'rtl' ? classes.linkTextRight : ''} ${language.direction === 'rtl' ? classes.arabicFont : ''}`}
                />
              </ListItem>
            </Link>
          ))}
          <a href={`mailto:${vars.CONTACT_EMAIL}`} className={classes.linkText} style={{ textDecoration: 'none', color: '#ffffff' }}>
            <ListItem button>
              <ListItemText
                primaryTypographyProps={{
                  classes: {
                    body1: language.direction === 'rtl' ? classes.arabicFont : '',
                  },
                }}
                className={`${language.direction === 'rtl' ? classes.linkTextRight : ''} ${language.direction === 'rtl' ? classes.arabicFont : ''}`}
                primary="Contact"
              />
            </ListItem>
          </a>
        </List>
        <Typography variant="body1" component="p" align="center" className={classes.title} style={{ color: '#f3f0ea', fontSize: '0.8rem', opacity: 0.5 }}>
          <a href={language.languageVars.appParentDomain} target="_blank" rel="noreferrer">{language.languageVars.appName}</a>
          &nbsp;&copy;
          {getYear(new Date())}
        </Typography>
      </Box>
      <AddToHomaScreenDialog
        open={addToHomeScreenDialogOpen}
        onClose={closeAddToHomeScreenDialogHandler}
      />
    </div>
  )

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(anchor, true)}
      >
        <MenuIconLeft fill={iconColor || '#272727'} />
      </IconButton>
      <Drawer anchor={anchor} open={drawerState} onClose={toggleDrawer(anchor, false)}>
        {
        // <Link to="/" style={{ textDecoration: 'none' }} className={language.direction === 'rtl' ? classes.linkTextRight : ''}>
        //   <Box className={classes.logoContainer}>
        //     <Logo fill="#ffffff" style={{ fontSize: 70 }} />
        //   </Box>
        // </Link>
        }
        {listLinks()}
      </Drawer>
    </>
  )
}

SideDrawer.defaultProps = {
  anchor: 'left',
  drawerState: false,
  iconColor: null,
  navLinks: null,
  selectedColor: null,
  hasSecretCode: false,
}

SideDrawer.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  anchor: PropTypes.string,
  drawerState: PropTypes.bool,
  iconColor: PropTypes.string,
  navLinks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  selectedColor: PropTypes.string,
  hasSecretCode: PropTypes.bool,
  openQr: PropTypes.func.isRequired,
}

export default SideDrawer
