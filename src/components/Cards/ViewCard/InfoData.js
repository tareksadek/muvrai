import React from 'react'
import PropTypes from 'prop-types'

import GoogleMapReact from 'google-map-react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import RoomIcon from '@material-ui/icons/Room'

import { useLanguage } from '../../../hooks/useLang'

import { infoDataStyles } from '../styles'

import { GOOGLE_MAPS_KEY } from '../../../utilities/appVars'

const InfoData = ({
  workPhone, email, address, homePhone, workFax, note, marker,
}) => {
  const classes = infoDataStyles()
  const language = useLanguage()
  const pageStatics = language.languageVars.pages.viewProfile

  return (
    <Box className={classes.viewCardData}>
      {note && (
        <Box className={classes.notesContainer}>
          <Typography className={classes.notes} component="p" variant="body1">
            <span>{note}</span>
          </Typography>
        </Box>
      )}

      {workPhone && (
        <Typography component="p" variant="body1">
          {`${pageStatics.data.userInfo.workPhone}:`}
          <span>{workPhone}</span>
        </Typography>
      )}

      {homePhone && (
        <Typography component="p" variant="body1" className={!workPhone ? classes.viewCardEmail : ''}>
          {workPhone && `${pageStatics.data.userInfo.homePhone}:`}
          <span>{homePhone}</span>
        </Typography>
      )}

      {workFax && (
        <Typography component="p" variant="body1">
          {`${language.languageVars.pages.viewProfile.data.userInfo.workFax}:`}
          <span>{workFax}</span>
        </Typography>
      )}

      {email && (
        <Typography component="p" variant="body1" className={classes.viewCardEmail}>
          <span><a href={`mailto:${email}`} style={{ wordBreak: 'break-all' }}>{email}</a></span>
        </Typography>
      )}

      {address && (
        <Typography component="p" variant="body1" className={classes.viewCardEmail}>
          <span>{address}</span>
        </Typography>
      )}

      {marker && (
        <Box className={classes.mapContainer}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
            yesIWantToUseGoogleMapApiInternals
            defaultCenter={marker}
            defaultZoom={15}
          >
            <RoomIcon
              style={{ color: '#272727', fontSize: 36 }}
              className={classes.mapMarker}
              lat={marker.lat}
              lng={marker.lng}
            />
          </GoogleMapReact>
        </Box>
      )}
    </Box>
  )
}

InfoData.defaultProps = {
  workPhone: null,
  email: null,
  address: null,
  homePhone: null,
  workFax: null,
  note: null,
  marker: null,
}

InfoData.propTypes = {
  workPhone: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
  homePhone: PropTypes.string,
  workFax: PropTypes.string,
  note: PropTypes.string,
  marker: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.func,
  ])),
}

export default InfoData
