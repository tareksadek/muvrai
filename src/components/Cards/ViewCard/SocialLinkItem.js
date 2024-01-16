import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'

import { customIcons } from '../../../utilities/utils'

import { socialLinksViewStyles } from '../styles'

const SocialLinkItem = ({
  link, profileType, colorCode, color, platform, countClicks, defaultLinksToTheme,
}) => {
  const classes = socialLinksViewStyles()
  let tiktokPlatformIcon = profileType === 'social' || profileType === 'business' ? 'tiktokSocial' : 'tiktok'

  let socialLinkBackgroundColor
  let socialLinkIconColor = '#fff'
  let socialLinkBorderColor
  let socialLinkItemClass = ''

  if (profileType === 'social' || profileType === 'basic') {
    if (defaultLinksToTheme) {
      socialLinkBackgroundColor = colorCode
      tiktokPlatformIcon = 'tiktok'
    } else {
      socialLinkBackgroundColor = color
    }
  }

  if (profileType === 'business') {
    if (defaultLinksToTheme) {
      socialLinkBorderColor = colorCode
      socialLinkBackgroundColor = 'transparent'
      socialLinkIconColor = colorCode
      tiktokPlatformIcon = 'tiktok'
    } else {
      socialLinkBorderColor = 'transparent'
      socialLinkBackgroundColor = color
    }
  }

  if (profileType === 'social') {
    socialLinkItemClass = classes.largeSocialLink
  } else if (profileType === 'basic') {
    socialLinkItemClass = classes.basicSocialLink
  } else if (profileType === 'business') {
    socialLinkItemClass = classes.businessSocialLink
  }

  const countLinkClicks = () => {
    countClicks(link)
    window.open(link, '_blank')
  }

  return (
    <Button
      onClick={() => countLinkClicks()}
      className={`${classes.socialLink} ${socialLinkItemClass}`}
      style={{
        color: profileType === 'social' || profileType === 'basic' || profileType === 'business' ? '#ffffff' : colorCode,
        borderColor: socialLinkBorderColor,
        background: socialLinkBackgroundColor,
        borderWidth: profileType === 'social' || profileType === 'basic' ? 0 : 1,
      }}
    >
      {customIcons(platform === 'tiktok' ? tiktokPlatformIcon : platform, 'primary', 'small', null, {
        color: socialLinkIconColor,
        fontSize: profileType === 'social' || profileType === 'basic' ? 40 : 20,
        stroke: platform === 'snapchat' ? '#272727' : 'none',
      })}
    </Button>
  )
}

SocialLinkItem.defaultProps = {
  link: null,
  profileType: null,
  colorCode: null,
  platform: null,
  color: null,
  defaultLinksToTheme: false,
}

SocialLinkItem.propTypes = {
  link: PropTypes.string,
  profileType: PropTypes.string,
  colorCode: PropTypes.string,
  color: PropTypes.string,
  platform: PropTypes.string,
  countClicks: PropTypes.func.isRequired,
  defaultLinksToTheme: PropTypes.bool,
}

export default SocialLinkItem
