export const en = {
  language: 'العربية',
  languageShort: 'ع',
  appName: 'ONE',
  appNameSM: 'one',
  appNameCAPS: 'ONE',
  appAppr: 'ONE',
  appSlogan: 'ONE - Digital Business Card. ONE Profile. Endless Possibilities.',
  appAdmin: 'ONE Admin',
  appStamp: 'Powered by ONE',
  appProfileURL: 'https://onedbc.app/profile/',
  appShortLink: 'https://onedbc.app',
  appEditProfileURL: 'https://onedbc.app/cards',
  appActivationURL: 'https://onedbc.app/activate?tac=',
  appDomain: 'https://onedbc.app',
  appParentDomain: 'https://onedbc.com',
  appStore: 'https://onedbc.com',
  appHowItWorks: 'https://onedbc.com/pages/how-it-works',
  appFeatures: 'https://onedbc.com/pages/one-features',
  appfaq: 'https://onedbc.com/a/faq',
  appEmail: 'support@onedbc.com',
  learnFeatures: 'https://onedbc.com/pages/setup',
  connectCard: 'https://onedbc.com/connectCard',
  supportPage: 'https://www.onedbc.com/support',
  login: 'Login',
  loading: 'loading...',
  processing: 'Processing...',
  authenticating: 'Authenticating...',
  getTheCard: 'Get Your Digital Card',
  prompt: {
    unsavedChanges: 'You have unsaved changes, are you sure you want to leave?',
  },
  files: {
    myConnections: 'my_DBC_connections',
    facebookCampaign: 'Facebook_campaign_DBC_connections',
    mailChimp: 'Mailchimp_DBC_connections',
    salesforce: 'Salesforce_DBC_leads',
    hubspot: 'Hubspot_DBC_contacts',
    myFollowers: 'my_DBC_followers',
    myFollowings: 'my_DBC_followings',
    teamMemberConnections: '_DBC_connections',
    teamMemberFollowers: '_DBC_followers',
    teamMemberFollowing: '_DBC_following',
  },
  pages: {
    /* ...............................................Layout.................................................... */
    layout: {
      buttons: {
        closeInstallPWADialog: 'Close',
      },
      data: {
        titles: {
          install: 'Install ONE-dbc',
        },
        installPWA: {
          first: 'Add ONE-dbc to your home screen for a better experience.',
          second: 'Requires 0 space and no permissions.',
          third: 'then "Add to Home Screen"',
        },
      },
    },

    /* ...............................................Onboarding.................................................... */
    onboarding: {
      messages: {
        loading: {
          loadingProfileData: 'Loading profile...',
          updatingProfileData: 'Updating Profile...',
          analyzingImageFile: 'Analyzing image file...',
          replacingOldImage: 'Replacing previous image...',
          uploadingNewImage: 'Uploading new image...',
          loadingLinks: 'Loading links...',
        },
        info: {
          stepOne: {
            first: 'You can always add more information by editting your profile info later.',
          },
          stepThree: {
            first: 'You can always add and/sort social links, custom links or redirect your profile to any link of your choosing.',
          },
        },
        notifications: {
          profileUpdateSuccess: 'Profile updated successfully.',
          profileUpdateError: 'There was a problem updating profile.',
          deleteLinkError: 'There was a problem deleting link.',
          addLinkError: 'There was a problem adding link.',
          savePrompt: 'You have unsaved changes, are you sure you want to leave?',
          onboardingError: 'There was a problem creating your ONE profile. Please reload and try again.',
        },
      },
      buttons: {
        nextStep: 'Next',
        prevStep: 'Previous',
        lastStep: 'Finish',
        continueToProfile: 'Continue To Profile',
      },
      data: {
        titles: {
          welcome: 'Welcome on Board!',
          createProfile: {
            first: 'Lets\'s create your ONE-dbc profile in the next',
            second: 'steps.',
          },
          stepOne: 'Your info',
          stepTwo: 'Logo / Image',
          zoom: 'Zoom',
          rotate: 'Rotate',
          stepThree: 'Your links',
          stepFour: 'Industry',
          stepFive: 'Your profile design',
          stepAddToHomeScreen: 'Add to home screen',
          selectLayout: 'Layout',
          basicLayout: 'Default',
          socialLayout: 'Social',
          businessLayout: 'Business',
          selectBackground: 'Theme',
          selectColor: 'Main color',
          addToHomeScreen: 'Add ONE-dbc to home screen',
          addToHomeScreenSubtitle: 'For better experience and instant updates.',
        },
        description: {
          stepOne: 'Information on your ONE-dbc profile and contact card.',
          stepTwo: 'Profile image on your ONE-dbc profile.',
          stepThree: 'Links on your ONE-dbc profile and contact card.',
          stepFour: 'Will affect how the connect form appears on your profile.',
          stepFive: 'Create your basic ONE-dbc profile design.',
          stepAddToHomeScreen: {
            first: 'Play the video below to learn how.',
            second: 'For better experience and instant updates. No space required; It is just a shortcut.',
          },
          addToHomeScreen: 'No space or permissions required. It is just a shortcut.',
        },
        installPWA: {
          first: 'Add ONE-dbc to your home screen for a better experience.',
          second: 'Requires 0 space and no permissions.',
          third: 'then "Add to Home Screen"',
        },
      },
      forms: {
        stepOne: {
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'Email',
          workPhone: 'Phone number',
          address: 'Address',
        },
        stepTwo: {
          picture: 'Profile picture',
          logo: 'Logo/image',
        },
        stepThree: {
          website: 'Website',
          facebook: 'Facebook',
          instagram: 'Instagram',
          linkedIn: 'Linkedin',
          twitter: 'Twitter',
        },
      },
    },

    /* ...............................................Authentication.................................................... */
    auth: {
      messages: {
        loading: {
          authenticating: 'Authenticating...',
          validatingEmail: 'Validating E-mail...',
          findProfile: 'Searching profile...',
          connectprofile: 'Connecting profile...',
          connectprofileSuccess: 'Profile connected successfully',
          loadingConnectProfile: 'Loading profile...',
          changingPassword: 'Changing password',
          loadingAuth: 'Loading Auth...',
        },
        notifications: {
          verificationSuccess: '<b>Your email address was successfully verified</b>',
          passwordChangeSuccess: 'Your password was successfully changed. You can continue using ONE.',
          emailRecoverSuccess: '<b>Your email was successfully changed</b>'
          + '<br />'
          + 'You can continue using ONE.',
          verificationFail: '<b>There was a problem verifying your email address.</b>'
          + '<br />'
          + 'Click the link below to resend verification email.',
          invitationCodeRequired: 'You need a ONE device to create an account.',
          invalidInvitationCode: 'Invalid code. The code entered is',
          wrongOldPassword: 'Your old password is wrong. Please try again.',
          wrongChangeEmail: 'Something went wrong. Please try again.',
          sameAccountCode: 'Mirroring failed: Can\'t mirror same profile.',
          invalidCode: 'Mirroring failed: The secret code entered is invalid',
          mirrorDescription: 'Current profile will mirror (redirect to) the profile below',
          getMirrorProfileFail: 'Mirroring failed: An error occured during mirroring. Please try again.',
          currentlyConnected: 'Your ONE is now connected to the profile below.',
          clientOffline: 'Failed to load ONE because the device is offline.',
          emailVerifiedSuccess: 'Email verified successfully.',
          wrongAuth: {
            title: 'Unauthorized process',
            description: 'You are not logged in this browser. Please open the confirmation URL on the same browser you are logged-in or login this browser and re-open the URL.',
          },
          loginFail: 'There was a problem logging in.',
          onlyExistingUsersCanLogin: 'No existing user. Please create a new account.',
        },
        info: {
          connectProfile: {
            first: 'You are about to connect your this ONE-dbc account to the account listed below.',
            second: 'Please note that once you accept to connect to this ONE-dbc account, this action cannot be undone.',
            doneTitle: 'Success!',
            done: 'Your ONE-dbc account is successfully connected.',
          },
          profileDeactivated: {
            userTitle: 'Profile deactivated',
            userFirst: 'You have deactivated your profile. It will show a deactivated message to visitors.',
            teamMemberTitle: 'Profile deactivated',
            teamMemberFirst: 'This profile is temporary deactivated by your team admin. Your profile will remain invisible to visitors until activated.',
            visitorTitle: 'Profile inactive',
            visitorFirst: 'This profile is temporary deactivated by their owner.',
            masterTitle: 'Profile deactivated',
            masterFirst: 'You have deactivated the profile of this team member. Their profile will remain invisible to visitors until activated.',
          },
        },
      },
      buttons: {
        resendVerificationEmail: 'Resend verification email',
        closeConfirmEmail: 'Close this message',
        enterInvitationCode: 'Enter invitation code',
        contactUs: 'Contact us',
        continueAfterConfirmation: 'Continue',
        continueAfterPasswordChange: 'Continue',
        changePassword: 'Confirm',
        signup: 'Create account',
        buyTappl: 'Buy ONE-dbc account',
        connectToProfile: 'Connect multiple ONE-dbc accounts',
        getProfile: 'Find profile',
        connect: 'Connect',
        cancelConnect: 'Cancel connection',
        continueConnect: 'Continue',
        goToProfile: 'View profile',
        login: 'Login',
        loginWithEmail: 'Login with E-mail',
        loginWithGoogle: 'login with Google',
        createAccountWithEmail: 'Create account with E-mail',
        createAccountWithGoogle: 'Create account with Google',
      },
      data: {
        titles: {
          signin: 'Welcome Back!',
          signup: 'New ONE-dbc Account',
          connect: 'Connect to existing account',
          connectSubTitle: 'Login to the ONE-dbc account you want to connect this profile to.',
          connectSubTitleTwo: 'Click connect to confirm connection or cancel',
          connectSubTitleThree: 'Connection completed',
          connectInfo: 'When to use',
          connectWarning: 'Warning',
          verify: 'Verify your E-mail',
          changePassword: 'Change password',
          changePasswordPage: 'Fill the form below to change your password',
          emailNotVerified: 'You Email is not verified',
          verifyEmail: 'Verify your Email address',
          authinticationError: 'Authentication Error',
          recoverEmail: 'Recover your email',
          signupWithEmail: 'Create account with email',
          landingAuth: 'Just TAP to connect with PPL',
          suspended: 'Suspended Profile',
          passwordError: 'Password error',
          passwordSuccess: 'Password changed successfully',
          confirmEmail: 'Verify Email',
          welcome: {
            first: 'Welcome',
            second: 'to',
            third: 'ONE',
          },
          welcomeSlim: {
            first: 'Create',
            second: 'Your Account',
          },
          login: {
            first: 'Welcome',
            second: 'Back',
          },
        },
        description: {
          loginPanel: 'Login using the same method you created your account.',
          signupPanel: 'Use one of the methods below to create your ONE-dbc account.',
          connectPanel: 'Connect this ONE-dbc account to another account. This profile will then work as a mirror to the connected account.',
          connectInfo: 'Connect to an existing account if you want to use this ONE-dbc account as a secondary for your existing account or as a replacement for a disposed or lost card.',
          connectWarning: 'Connecting to an existing account is a one way action and can not be reversed. This account will always remain connected to the selected account if you choose to do so.',
          changePassword: 'Write your old and new password then confirm',
          confirmEmail: 'Verify your ONE-dbc Email',
        },
        emailNotVerified: 'Please verify your email to continue using the app.',
        verifyEmail: 'A verification email has been sent to your email address. Please follow the instructions in the email to continue using the app.'
        + '<span>If you do not receive it within a few minutes, Please check your Junk, Bulk or spam folders.</span>',
      },
      forms: {
        accountSecret: 'Profile secret code',
      },
    },

    /* ...............................................Landing.................................................... */
    landing: {
      messages: {
        loading: {
          auth: 'Authenticating...',
        },
      },
      buttons: {
        enterInvitationCode: 'Enter Activation Code',
        login: 'Login',
        store: 'Get Your Digital Card',
        join: 'Join ONE-dbc',
        howItWorks: 'How it works',
        features: 'Features',
        faq: 'FAQs',
      },
      data: {
        titles: {
          page: 'Just TAP to connect with PPL',
          subtitle: 'Exchange information in seconds with the people you meet.',
          main: {
            first: {
              a: 'You',
              b: 'ONLY',
            },
            second: {
              a: 'need',
              b: 'one',
            },
            third: {
              a: 'to',
              b: 'connect',
            },
          },
        },
      },
    },

    /* ...............................................Subscription.................................................... */
    subscription: {
      messages: {
        loading: {
          auth: 'Authenticating...',
          redirectingToStripe: 'Redirecting to safe payment with Stripe, this may take a few seconds...',
        },
      },
      buttons: {
        select: 'Select',
      },
      data: {
        titles: {
          subscribe: 'Subscribe to ONE-dbc',
          selectPaymentPlan: 'Select your payment plan',
          viewFeatures: 'Why become pro?',
          bestValue: 'Best value',
          safePayment: 'Safe payment with Stripe - Cancel anytime.',
        },
        packages: {
          monthly: {
            title: 'monthly',
            period: 'Per month',
            offer: '14 days free trial',
          },
          yearly: {
            title: 'Yearly',
            period: 'Per year',
            offer: 'Get 30% off',
          },
        },
        currency: '$',
      },
    },

    /* ...............................................View Profile.................................................... */
    viewProfile: {
      messages: {
        loading: {
          loadingProfileData: 'Loading profile...',
          connecting: 'Sending contact info...',
          validatingProfileKey: 'Validating Key...',
        },
        info: {
          inactiveVcard: 'Activate the "Add to Contact" button by editing your profile data.',
          connectDialog: 'Share your contact info with ',
          invalidPhone: 'Phone number is not valid.',
          passwordProtected: {
            first: 'Profile information are private. Enter the profile key below to reveal all information.',
            second: 'Enter the key below to reveal all information.',
          },
        },
        notifications: {
          connectSuccess: 'Contact info sent successfully.',
          connectError: 'There was a problem sending contact info.',
        },
      },
      buttons: {
        addToContacts: 'Add to Contacts',
        connect: 'Connect',
        follow: 'Follow',
        unfollow: 'Unfollow',
        revealProtectedprofileInfo: 'Reveal Information',
        sendContactInfo: 'Send Contact Info',
        drawerText: 'Click for video and info',
        drawerTextNoVideo: 'Click for more info',
        goPro: 'GO PRO',
        whyPro: 'Why become pro?',
      },
      data: {
        titles: {
          privateProfile: 'Private profile',
          redirected: 'Your profile currently redirects to:',
          inTrial: 'Your pro features trial ends in',
        },
        description: {
          inTrial: 'Upgrade and don\'t lose your pro features or learn more on why become pro.',
        },
        userInfo: {
          firstName: 'First Name',
          middleName: 'Middle Name',
          lastName: 'Last Name',
          gender: 'Gender',
          nickname: 'Nickname',
          career: 'Industry',
          organization: 'Organization',
          title: 'Title',
          workPhone: 'Work Phone',
          email: 'Email',
          workFax: 'Work Fax',
          homePhone: 'Cell Phone',
          homeFax: 'Home Fax',
          birthday: 'Birthday',
        },
        placeholder: {
          customLinks: {
            title: 'No custom links',
            description: 'You did not create any custom links on your profile yet.',
            button: 'Click to add links',
          },
          socialLinks: {
            title: 'No social links',
            description: 'You did not add any social links to your profile yet.',
            button: 'Click to add links',
          },
        },
        customPlaceholder: {
          title: 'Custom Links',
          description: 'Here you can add links to your listings or any custom link you like.',
          button: 'Click to add links',
        },
        socialPlaceholder: {
          title: 'Social Links',
          description: 'Here you can add links to your social platforms.',
          button: 'Click to add links',
        },
        videoPlaceholder: {
          title: 'No video',
          description: 'You did not add any video yet.',
          button: 'Click to add video',
        },
        privateProfileTitle: 'Private Profile',
      },
      forms: {
        connectDialog: {
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'E-mail',
          phone: 'Phone Number',
          website: 'Website',
          organization: 'Organization',
          jobTitle: 'Job Title',
          note: 'Note',
          interest: 'I am interested in',
          reason: 'Looking to buy / sell as',
          period: 'Looking to buy or sell within',
          mortgage: 'Are you Pre-Approved for a mortgage?',
          consultation: 'Would you like to connect by phone for a 15 minute consultation?',
        },
      },
    },

    /* ...............................................Edit Profile.................................................... */
    editProfile: {
      messages: {
        loading: {
          loadingProfileData: 'Loading data...',
          updatingProfileData: 'Updating profile...',
          loadingProfileInfo: 'Loading profile info...',
          updatingProfileInfo: 'Updating profile info...',
          loadingProfileContact: 'Loading contact info...',
          updatingProfileContact: 'Updating contact info...',
          loadingProfileBio: 'Loading video...',
          updatingProfileBio: 'Updating video...',
          loadingProfileLinks: 'Loading profile links...',
          deletingProfileLinks: 'Deleting link...',
          updatingProfileLinks: 'Updating profile links...',
          loadingProfilePicture: 'Loading profile picture...',
          updatingProfilePicture: 'Updating profile picture...',
          loadingLogo: 'Loading image...',
          updatingLogo: 'Updating image...',
          readingVcard: 'Loading profile...',
          updatingVcard: 'Updating profile...',
          updatingLinks: 'Updating links...',
          addingLink: 'Saving link...',
          redirectingProfile: 'Redirecting profile...',
          validatingLinks: 'Validating links...',
          sortingLinks: 'Sorting links...',
          analyzingImageFile: 'Analyzing image file...',
          replacingOldImage: 'Replacing previous image...',
          uploadingNewImage: 'Uploading new image...',
          removingImage: 'Removing new image...',
          loadingLinks: 'Loading links...',
          updatingTeamMember: {
            first: 'Updating team member',
            second: 'of',
          },
        },
        info: {
          links: {
            first: 'Add social links, custom links - or - redirect your profile to any link.',
            second: 'Press and drag to sort the icons on your profile.',
            third: 'The number above each icon represents the number of visits for that link.',
            master: 'Changes will reflect on team members profiles.',
          },
          redirect: {
            first: 'Your ONE-dbc profile will open to the selected link instead of your profile page.',
            second: 'Once selected and saved your ONE-dbc URL/QR will open to the selected link.',
            third: 'Deselect the redirect link and your ONE-dbc URL/QR will point back to your ONE-dbc profile.',
            socialPanel: 'Click a link icon to select/deselect as a redirect destination.',
            customPanel: 'Click a link to select/deselect as a redirect destination',
          },
          bio: {
            first: 'Video displays on the bottom drawer of your profile page.',
            master: 'Changes will reflect on team members profiles.',
          },
          logo: {
            first: 'Profile image your public page and contact card.',
            master: 'Changes will reflect on team members profiles.',
          },
          picture: {
            first: 'Banner image on your profile page.',
          },
          contact: {
            first: 'Contact information on your profile page and contact card (When saved to phones contacts).',
          },
          info: {
            first: 'General information on your profile page and contact card (When saved to phones contacts).',
            master: 'Organization and Industry fields will reflect on team members profiles.',
          },
        },
        notifications: {
          profileUpdateSuccess: 'Profile updated successfully.',
          profileUpdateError: 'There was a problem updating profile data.',
          profileInfoUpdateSuccess: 'Profile info updated successfully.',
          profileInfoUpdateError: 'There was a problem updating profile info.',
          profileContactUpdateSuccess: 'Contact info updated successfully.',
          profileContactUpdateError: 'There was a problem updating contact info.',
          profileBioUpdateSuccess: 'Video updated successfully.',
          profileBioUpdateError: 'There was a problem updating video.',
          profileLinksUpdateSuccess: 'Profile link added successfully.',
          profileLinksUpdateError: 'There was a problem adding link.',
          profileLinksRedirectedSuccess: 'Profile redirected successfully.',
          profileLinksRedirectedError: 'There was a problem redirecting profile.',
          profileLinksSortSuccess: 'Profile links ordered successfully.',
          profileLinksSortError: 'There was a problem ordering profile links.',
          profileLinkDeletedSuccess: 'Profile link deleted successfully.',
          profileLinkDeletedError: 'There was a problem deleting links.',
          profilePictureUpdateSuccess: 'Profile picture updated successfully.',
          profilePictureUpdateError: 'There was a problem updating profile picture.',
          logoUpdateSuccess: 'Image updated successfully.',
          logoUpdateError: 'There was a problem updating Image.',
          deleteLinkError: 'There was a problem deleting link.',
          deleteLinkPrompt: 'Are you sure you want to delete this link?',
          addLinkError: 'There was a problem adding link.',
          savePrompt: 'You have unsaved changes, are you sure you want to leave?',
          enableRedirectPrompt: {
            first: 'Your ONE-dbc URL/QR will automatically redirect to',
            second: 'Continue?',
          },
          disableRedirectPrompt: 'Disable redirect. Your ONE-dbc URL/QR will point to your profile page. Continue?',
          noLogo: {
            title: 'No Existing logo',
            description: 'You need to add a logo first before changing the style.',
          },
          linkOrderChanged: {
            title: 'Link order changed',
            description: 'Please click on "Update links order" on the links panel to save the changes.',
          },
          wrongAddress: {
            title: 'Map geocode error',
            body: 'Unable to geocode the address entered for google maps. Address will only show as text your profile.',
          },
        },
      },
      buttons: {
        updateProfile: 'Update profile',
        addCustomLink: 'Add link',
        addMenuLink: 'Add menu link',
        updateBio: 'Update video',
        updateInfo: 'Update info',
        updatePicture: 'Update picture',
        updateLogo: 'Update image',
        removeLogo: 'Remove',
        removeImage: 'Remove',
        removePicture: 'Remove',
        updateContact: 'Update contact info',
        redirectProfile: 'Select a redirect link',
        updateLinks: 'Update links',
        saveSocialLink: 'Save link',
        saveCustomLink: 'Save link',
        saveMenuLink: 'Save link',
        updateLinksOrder: 'Update links order',
        showOnMap: 'Show on map',
      },
      data: {
        titles: {
          page: 'Edit Profile',
          basicLinks: 'Social Links',
          redirectProfile: 'Select a Redirect link',
          socialRedirect: 'Social Redirect Links',
          customRedirect: 'Custom Redirect Links',
          customLinks: 'Custom Links',
          menuLinks: 'Menu Links',
          links: 'My Links',
          redirected: 'Your profile currently redirects to:',
          picture: 'My Picture',
          logo: 'My Image',
          contact: 'My Contacts',
          info: 'My Info',
          bio: 'My Video',
          addCustomLink: 'Create link',
          addMenuLink: 'Create link',
          currentVideo: 'Current video',
          addVideo: 'Add video',
          addImage: 'Add image',
          currentImage: 'Current image',
          addLogo: 'Add image',
          currentLogo: 'Current image',
          logoStyle: 'Image style',
          editContact: 'Contact info',
          editInfo: 'Basic info',
        },
        tabs: {
          info: 'Info',
          contact: 'Contact',
          picture: 'Picture',
          links: 'Links',
          addLinks: 'Add links',
          redirectProfile: 'Profile Redirect',
        },
        tags: {
          activateLink: 'Activate link',
          deactivateLink: 'Deactivate link',
        },
        tooltips: {
          redirect: 'Visitors of your profile will be redirect to this link.',
          redirectInactive: 'Activate link and add URL to enable.',
        },
        socialLinksPlaceholder: {
          title: 'No Social Links',
          description: 'You don\'t have any active social links at the moment.',
        },
        customLinksPlaceholder: {
          title: 'No Custom Links',
          description: 'You don\'t have any active custom links at the moment.',
        },
        description: {
          socialLinksPanel: 'Click to activate, add or edit links. Drag to sort link icons on your profile then click update order.',
          customLinksPanel: 'Add or remove custom links. Drag the handle to sort links on your profile then click update order.',
          menuLinksPanel: 'Add or remove menu links. Drag the handle to sort links on your profile then click update order.',
          logoPanel: 'Recommended: 150 x 150 image with a jpg or png format.',
          picturePanel: 'Recommended: 550 x 275 image with a jpg or png format.',
        },
      },
      forms: {
        infoTab: {
          firstName: 'First Name',
          middleName: 'Middle Name',
          lastName: 'Last Name',
          namePrefix: 'Prefix',
          nameSuffix: 'Suffix',
          gender: 'Gender',
          nickname: 'Nickname',
          career: 'Industry',
          organization: 'Organization',
          title: 'Job Title',
          birthday: 'Birthday',
          note: 'Note',
        },
        contactTab: {
          email: 'E-mail',
          workPhone: 'Work Phone',
          workFax: 'Work Fax',
          homePhone: 'Cell Phone',
          homePhoneHelp: 'The number added to visitors\' phones',
          homeFax: 'Home Fax',
          address: 'Address',
        },
        pictureTab: {
          image: 'Image',
        },
        socialLinks: {
          labelActive: 'PROFILE NAME',
          labelActiveUrl: 'YOUR URL',
          placeholder: 'Type your link',
          labelInactive: 'Activate to add/change link',
          disablled: 'Toggle to add/change link',
          defaultLinksToTheme: 'Use profile color as a background for social icons.',
          setAsProfileDefault: 'Set as profile default',
        },
        customLinks: {
          linkTitle: 'Link Title',
          link: 'Link URL',
        },
        menuLinks: {
          linkTitle: 'Link Title',
          link: 'Link URL',
        },
      },
    },

    /* ...............................................Connections.................................................... */
    connections: {
      messages: {
        loading: {
          loadingConnections: 'Loading connections...',
          removingConnection: 'Removing connection...',
          addingConnection: 'Adding connection...',
          sendingContactInfo: 'Sending info...',
          loadingConnectionInfo: 'Loading connection info...',
          updatingConnectionInfo: 'Updating connection info...',
          loadingTags: 'Loading labels...',
          addingTag: 'Adding label...',
          editingTag: 'Updating label...',
          removingTag: 'Removing label...',
          loadingForms: 'Loading forms...',
          activatingForm: 'Activating form...',
          asigningTags: 'Assigning labels...',
          updatingSettings: 'Updating form settings...',
          savingEmbedForm: 'Saving form...',
        },
        info: {
          general: {
            title: 'A list of all connections.',
            first: 'View, remove, filter and download connections.',
          },
          noConnections: {
            title: 'You don\'t have any connections yet.',
            first: 'Share your QR code or profile URL to collect connections data.',
            grid: 'No matching connections',
          },
          forms: {
            first: 'Activate and/or assign labels to forms.',
          },
          noForms: {
            title: 'You don\'t have any forms yet.',
            first: 'Add forms to your profile page to collect connections data.',
          },
          formSettings: {
            first: 'Change your form title and description',
          },
        },
        notifications: {
          downloadVcardError: 'There was a problem downloading V-card file.',
          deleteConnectionSuccess: 'Connection removed successfully.',
          deleteConnectionError: 'There was a problem removing connection.',
          deleteConnectionPrompt: {
            first: 'Are you sure you want to delete',
            second: 'from your connections?',
          },
          connectAddedSuccess: 'Connection added successfully.',
          connectAddedError: 'There was a problem adding connection.',
          connectSentSuccess: 'Contact info sent successfully.',
          connectSentError: 'There was a problem sending contact info.',
          connectionEditSuccess: 'Connection updated successfully.',
          connectionEditError: 'There was a problem updating connection.',
          tagAddedSuccess: 'Label added successfully.',
          tagAddedError: 'There was a problem adding label.',
          tagEditSuccess: 'Label updated successfully.',
          tagEditError: 'There was a problem updating label.',
          tagExists: {
            first: 'Label',
            second: 'Already exists',
          },
          deleteTagPrompt: {
            first: 'Are you sure you want to delete',
            second: 'from your labels?',
            assigned: {
              first: 'is assigned to',
              second: 'connections',
              third: 'You will not be able to filter your connections using this label if removed. Continue?',
            },
          },
          tagDeletedSuccess: 'Label removed successfully.',
          tagDeletedError: 'There was a problem removing label.',
          noTags: {
            title: 'No Labels',
            body: 'Start adding labels - to assign directly to your connections or through the connect form - for easier search and classification in the future.',
          },
          activateFormSuccess: 'Form activated successfully.',
          activateFormError: 'There was a problem activating form.',
          assignTagsSuccess: 'Labels assigned successfully.',
          assignTagsError: 'There was a problem assigning labels.',
          settingsUpdateSuccess: 'Settings updated successfully.',
          settingsUpdateError: 'There was a problem updating settings.',
          embedFormUpdateSuccess: 'Form updated successfully.',
          embedFormUpdateError: 'There was a problem updating form.',
        },
      },
      buttons: {
        download: 'Download',
        downloadCSV: 'Email contacts CSV',
        downloadFacebookCSV: 'Facebook campaign CSV',
        downloadMailchimpCSV: 'Mailchimp contacts CSV',
        downloadSalesforceCSV: 'SalesForce leads CSV',
        downloadHubspotCSV: 'HubSpot contacts CSV',
        addConnection: 'Add Connection',
        extractData: 'Extract Contact Data from a Business Card Image',
        startReading: 'Start Reading',
        cancelReading: 'Cancel',
        addNewContact: 'Add Connection',
        sendContactInfo: 'Send Contact Info',
        editConnection: 'Edit Connection',
        advancedSearch: 'Search',
        advancedSearchClear: 'Reset',
        addTag: 'Add Label',
        editTag: 'Update Label',
        useForm: 'Use form',
        viewFields: 'View fields',
        saveTags: 'Save',
        addTagShort: 'Add',
        saveFormSettings: 'Save',
        goToTags: 'Add labels',
        formMenu: {
          view: 'View form fields',
          assign: 'Assign labels',
          use: 'Use form',
        },
        connectionsMenu: {
          addToContacts: 'Add to phone contacts',
          details: 'Connection Details',
          edit: 'Edit Connection',
          assign: 'Assign label',
          remove: 'Remove Connection',
        },
      },
      data: {
        titles: {
          page: 'My Connections',
          connectionNoteDialog: 'Note from',
          connect: 'Connect with me',
          panel: 'Connections list',
          connectionForms: 'Connect Form',
          addTagDialog: 'Add label',
          editTagDialog: 'Edit label',
          connectionTags: 'Connection labels',
          addConnection: {
            title: 'Add New Connection',
            subTitle: {
              first: '- or -',
              second: 'Fill in the form below',
            },
          },
          tagsPanel: 'Labels list',
          formsPanel: 'Available forms',
          settingsPanel: 'Form settings',
          defaultButtonTitle: 'Connect',
          defaultFormTitle: 'Connect With Me',
          embedForm: 'Embed form',
          typeFormAlert: 'Type-Form embed',
          googleAlert: 'Google-Form embed',
          microsoftAlert: 'Microsoft-Form embed',
          jotformAlert: 'Jot-Form embed',
          tagColor: 'Label color',
          assignTagDialog: 'Assign labels',
          assignTagDialogAddNewTagPanel: 'Add new label',
          advancedSearch: 'Advanced Search',
        },
        description: {
          connectionTags: {
            first: 'Create labels to group and classify your connections.',
            second: 'You can assign single or multiple labels to each connection.',
            third: 'You can assign labels to your connection form and it will automatically be assigned to the visitors filling the form.',
          },
          tagsPanel: 'Add or remove labels.',
          connectionForms: 'Select and change settings of your connect form.',
          viewFormDialog: 'Your form will collect the following data.',
          defaultFormDescription: 'Fill the form below to connect with me.',
          embedForm: 'Select your form provider then follow the instructions to embed your form.',
          typeFormAlert: {
            first: '- Select the standard embed mode.',
            second: '- Copy the <b>(form-id)</b> from the public URL of your form:',
            third: '<i style="font-size: 12px">https://form.typeform.com/to/<b>(form-id)</b></i>',
            fourth: '- Or from admin panel URL:',
            fifth: '<i style="font-size: 12px">https://admin.typeform.com/form/<b>(form-id)</b>/*</i>',
          },
          googleAlert: {
            first: '- Open your Google form and click "Send"',
            second: '- Select the embed tab "< >"',
            third: '- Copy the full code',
            fourth: '<i style="font-size: 12px"><b>Ex: &lt;iframe src="" &gt;Loading…&lt;/iframe&gt;</b></i>',
          },
          microsoftAlert: {
            first: '- Open your Microsoft form and click "Send"',
            second: '- Select the embed tab "< >"',
            third: '- Copy the full code',
            fourth: '<i style="font-size: 12px"><b>Ex: &lt;iframe src="" &gt;&lt;/iframe&gt;</b></i>',
          },
          jotformAlert: {
            first: '- Go to the Publish tab in the Form Builder',
            second: '- Click Embed on the left "< / >"',
            third: '- Select "IFRAME" from the list',
            fourth: '- Click "COPY CODE"',
          },
          assignTagDialog: 'Select label/s to assign to your connection.',
        },
        connectionInfo: {
          latestOfferClaimedOn: 'Latest Offer',
          offersCount: {
            first: 'Claimed',
            second: 'Offers',
          },
          addedOn: 'Added on',
          name: 'Name',
          tags: 'Labels',
          firstName: 'First Name',
          lastName: 'Last Name',
          organization: 'Organization',
          title: 'Job Title',
          workPhone: 'Phone',
          website: 'Website',
          email: 'Email',
          note: 'Note',
          interest: 'Interested in',
          reason: 'Buy / sell as',
          period: 'Within',
          mortgage: 'Pre-Approved for a mortgage',
          consultation: '15min consultation',
        },
      },
      forms: {
        searchConnections: 'Search name, email or phone number',
        advancedSearch: {
          startDate: 'Added from:',
          endDate: 'To:',
          tags: 'With labels:',
        },
        addTagDialog: {
          tag: 'Label title',
        },
        assignTags: {
          tags: 'Labels',
        },
        addNewTagDialog: {
          tag: 'Title',
        },
        formSettings: {
          buttonTitle: 'Form Button Text',
          buttonTitleHelp: 'Maximum 25 characters',
          formTitle: 'Form Title',
          formDescription: 'Form Description',
        },
        formEmbed: {
          embedCode: 'Embed Code',
        },
        formType: {
          formType: 'Form Provider',
        },
      },
    },

    /* ...............................................userInvitations.................................................... */
    userInvitations: {
      messages: {
        loading: {
          loadingInvitations: 'Loading invitations...',
          loadingUserData: 'Loading data...',
        },
        info: {
          general: {
            first: 'Use or share the invitation codes to create different profiles for your ONE devices.',
            second: 'Once an invitation code is used you can track the created profile activity.',
          },
          share: {
            title: 'Invitation to create a ONE account',
            body: 'Use the activation code below to create your ONE account and connect it to your ONE device.\n\nActivation Code: ',
          },
        },
        notifications: {
          loadUserDataError: 'There was a problem loading user data.',
          invitationCodeCopiedSuccess: 'Invitation code copied successfully.',
        },
      },
      buttons: {
        visitProfile: 'Visit Profile',
        copyInvitationLink: 'Copy Invitation Link',
        shareInvitationLink: 'Share Invitation Link',
        inviteeInfo: 'Invitee info',
      },
      data: {
        titles: {
          page: 'Invitations',
          invitationDetailsDialog: 'Account information for: ',
          shareInvitationCodeDialog: 'Share invitation code',
        },
        labels: {
          usedInvitation: 'Used',
          availableInvitation: 'Available',
          yourInvitation: 'Your account invitation',
        },
        userInfo: {
          email: 'E-mail',
          created: 'Created on',
          lastLogin: 'Last Login',
          addedToContacts: 'Added to contacts',
          connections: 'Connections',
        },
      },
    },

    /* ...............................................AdminInvitations.................................................... */
    invitations: {
      messages: {
        loading: {
          loadingInvitations: 'Loading invitations...',
          creatingInvitations: 'Creating invitation...',
        },
        notifications: {
          disableInvitationSuccess: 'Invitation disabled successfully.',
          disableInvitationError: 'Action failed :(',
          deleteInvitationSuccess: 'Invitation deleted successfully.',
          deleteInvitationError: 'Action failed :(',
          createInvitationSuccess: 'Invitation created successfully.',
          createInvitationError: 'There was a problem creating new invitation.',
        },
      },
      buttons: {
        generateInvitationCode: 'Generate an invitation code',
        createNewInvitation: 'Create invitation',
      },
      data: {
        titles: {
          page: 'Invitations',
          createNewInvitation: 'Create new invitation',
        },
      },
      forms: {
        invitationPackages: 'Package',
      },
    },

    /* ...............................................Orders.................................................... */
    orders: {
      messages: {
        loading: {
          loadingOrders: 'Loading orders...',
        },
        notifications: {
          deleteOrderSuccess: 'Order deleted successfully.',
          deleteOrderError: 'Action failed :(',
        },
      },
      data: {
        titles: {
          page: 'Orders',
        },
      },
    },

    /* ...............................................Invitation Code.................................................... */
    invitationCode: {
      messages: {
        notifications: {
          invitationCodeSuccess: 'Invitation code is valid click Next to start creating your account.',
          invitationCodeError: 'Invalid code. The code entered is',
          autoCodeSuccess: 'You are eligible to create a ONE-dbc account. Click the button below to start.',
          autoCodeError: 'The activation used is ',
          invalidCodeAdvice: 'Use another activation link or visit our store buy a new account.',
        },
        loading: {
          validatingInvitation: 'Analyzing ONE-dbc...',
          loadingProfile: 'Loading profile...',
        },
      },
      buttons: {
        nextStep: 'Next',
        activate: 'Activate',
        createAccount: 'Create my account',
        visitStore: 'Visit ONE-dbc store',
      },
      data: {
        titles: {
          page: 'Activation code',
          enterInvitationCode: 'Enter your activation code to create a ONE-dbc account',
          invitationCodeSuccess: 'Congratulations!',
          invitationCodeError: 'Link is not valid.',
        },
      },
      forms: {
        invitationCode: 'Invitation Code',
      },
    },

    /* ...............................................Connect Tappl.................................................... */
    connectTappl: {
      messages: {
        loading: {
          loadingQrCode: 'Loading Qr code...',
        },
        info: {
          general: {
            first: 'Save your QR code to use the in <b>Print</b>, <b>Web pages</b> or <b>Mobile scanning</b>.',
          },
        },
        notifications: {
          urlCopiedSuccess: 'Profile URL copied successfully.',
        },
      },
      buttons: {
        copyUrl: 'Copy my profile link',
        login: 'Login',
      },
      data: {
        titles: {
          page: 'Connect ONE',
          subTitle: 'Follow the steps below to connect your ONE device to your profile.',
        },
        steps: {
          first: {
            title: 'Copy your profile link',
            descriptionLoggedIn: 'Click the button to copy your profile link.',
            descriptionLoggedOut: 'Login to show and copy your profile link. ',
          },
          second: {
            title: 'Download the activation app',
            description: 'Click the store version matching your phone operating system.',
          },
          third: {
            title: 'Start writing',
            description: 'Open the NFC app and click on “Write”.',
          },
          fourth: {
            title: 'Add Record',
            description: 'Click on “Add Record”.',
          },
          fifth: {
            title: 'URL option',
            description: 'Click “URL option” (second from the top).',
          },
          sixth: {
            title: 'Past your profile link',
            description: 'Paste your link by holding your finger on the text area and click paste then click “ok”.',
          },
          seventh: {
            title: 'Connect',
            description: 'Click write and hold your ONE product near the top of your iPhone or the middle of your Android device.',
          },
          eighth: {
            title: 'Confirm',
            description: 'Once you see the checkmark, your profile is now connected to your ONE product.',
          },
        },
      },
    },

    /* ...............................................QR Code.................................................... */
    qrCode: {
      messages: {
        loading: {
          loadingQrCode: 'Loading Qr code...',
          generatingQrCode: 'Generating QR code',
        },
        info: {
          general: {
            first: 'Save your QR code to use on <b>Print Materials</b>, <b>Web pages</b> or <b>Advertising</b>.',
          },
        },
        notifications: {
          invitationCodeSuccess: 'Invitation code is valid click Next to start creating your account.',
          invitationCodeError: 'Invalid code. The code entered is',
          urlCopiedSuccess: 'Profile URL copied successfully.',
        },
      },
      buttons: {
        saveAsPng: 'Save as PNG',
        saveAsSvg: 'Save as SVG',
      },
      data: {
        titles: {
          page: 'My QR Code',
          qrCodePanel: 'Print QR code',
          shareBox: 'Share Profile',
        },
      },
    },

    /* ...............................................Share Profile.................................................... */
    shareProfile: {
      messages: {
        loading: {
          loadingShareOptions: 'Loading options...',
        },
        info: {
          defaultShareMessageTitle: 'Add my contact details via my ONE-dbc profile.',
          defaultShareMessageBody: 'Hello! Access my digital business card via this link.',
          general: {
            first: 'Write your message then select your preferred platform.',
          },
          profileLink: {
            first: 'Click the copy button to copy your profile url to the clipboard.',
          },
          share: {
            first: 'Copy your profile page URL or share on your social media accounts.',
          },
        },
        notifications: {
          urlCopiedSuccess: 'Profile URL copied successfully.',
        },
      },
      buttons: {
        copyUrl: 'Copy to Clipboard',
      },
      data: {
        titles: {
          page: 'Share profile',
          profileLink: 'Profile URL',
          shareProfile: 'Profile share',
        },
      },
      forms: {
        shareMessage: 'Share message',
      },
    },

    /* ...............................................Account Secret.................................................... */
    accountSecret: {
      messages: {
        loading: {
          loadingAccountData: 'Loading account data...',
        },
        info: {
          general: {
            first: 'Use the code below to connect a new ONE device to this profile.',
            second: 'Once used the connected device will point to this profile.',
          },
        },
        notifications: {
          codeCopiedSuccess: 'Account code copied successfully.',
        },
      },
      buttons: {
        copyCode: 'Copy code to Clipboard',
      },
      data: {
        titles: {
          page: 'Profile code',
        },
      },
    },

    /* ...............................................Profile Mirror.................................................... */
    profileMirror: {
      messages: {
        loading: {
          loadingMirror: 'Loading...',
        },
        info: {
          general: {
            first: 'Use this ONE-dbc account to mirror another ONE-dbc account.',
            second: 'Once mirrored this account will point to the account of the secret code entered.',
            third: 'You can un-mirror this profile at anytime to use as septate profile.',
          },
        },
        notifications: {
          sameAccountCode: 'Mirroring failed: Can\'t mirror same account.',
          invalidCode: 'Mirroring failed: The secret code entered is invalid',
          mirrorDescription: 'You are about to connect this ONE-dbc account to the account listed below.',
          getMirrorProfileFail: 'Mirroring failed: An error occurred during mirroring. Please try again.',
        },
      },
      buttons: {
        mirrorProfile: 'Mirror',
      },
      data: {
        titles: {
          page: 'Profile mirror',
          profileLink: 'Profile page URL',
          shareProfile: 'Share your Profile',
        },
      },
      forms: {
        accountSecret: 'Profile code',
      },
    },

    /* ...............................................Switch.................................................... */
    switchProfile: {
      messages: {
        loading: {
          loadingProfiles: 'Loading profiles...',
          addingProfile: 'Creating profile...',
          switchProfile: 'Loading profile data...',
        },
        info: {
          general: {
            first: 'Create more profiles in your account.',
            second: 'Switch between your default and created profiles.',
          },
        },
        notifications: {
          profileAddSuccess: 'Profile is created successfully.',
          profileAddError: 'There was a problem creating new profile. Try again later.',
        },
      },
      buttons: {
        addNewProfile: 'Add profile',
      },
      data: {
        titles: {
          page: 'My Profiles',
          profilesPanel: 'Add / Switch profile',
          addNewProfile: 'Add new profile',
          importData: 'Import Profile Data',
        },
        description: {
          profilesPanel: 'Click to add or change your active profile',
          importData: 'Select styles / data to import from your default profile',
        },
      },
      forms: {
        profileForm: {
          title: 'Profile title',
          importLayout: 'Layout',
          importColor: 'Main color',
          importTheme: 'Theme',
          importTitle: 'Job title',
          importNote: 'Note',
          importAddress: 'Address',
          importVideo: 'Video',
          importOrganization: 'Organization',
          importLogo: 'Profile image',
          importImage: 'Banner image',
          importPhoneNumbers: 'Phone numbers',
          importLinks: 'Links',
        },
      },
    },

    /* ...............................................Patches.................................................... */
    patches: {
      messages: {
        loading: {
          constructingSearch: 'Constructing search elements...',
        },
        notifications: {
          sendingEmailFail: 'There was a problem sending email',
          sendingEmailSuccess: 'Email sent successfully',
          changingAccountFail: 'There was a problem changing user account activity',
          userActivated: 'User activated successfully',
          userDeactivated: 'User deactivated successfully',
          deleteUSerFail: 'There was a problem deleting user',
        },
      },
      buttons: {
        createNewPatch: 'Create new patch',
      },
      data: {
        titles: {
          page: 'Patches',
        },
      },
    },

    /* ...............................................Users.................................................... */
    users: {
      messages: {
        loading: {
          sendingWelcomeEmail: 'Sending welcome email...',
          constructingSearch: 'Constructing search elements...',
        },
      },
      buttons: {
        createNewUser: 'Create new user',
      },
      data: {
        titles: {
          page: 'Users',
        },
      },
    },

    /* ...............................................Welcome.................................................... */
    welcome: {
      buttons: {
        nextStep: 'Next',
        prevStep: 'Back',
        start: 'Start Now',
      },
      data: {
        steps: {
          first: {
            title: 'The easiest way to share your contacts.',
            description: 'All your contact data on one page, added to phones with one click.',
          },
          second: {
            title: 'Start by adding your information.',
            description: 'Edit your profile with your recent contact information to activate the &apos;Add to contact&apos; button on your profile.',
          },
          third: {
            title: 'Add and sort your links.',
            description: 'Add your social and/or custom links and sort it with the order you prefer on your profile.',
          },
          fourth: {
            title: 'Share your profile.',
            description: 'With one click you can email your profile or share it on social platforms.',
          },
          fifth: {
            title: 'Customize your profile.',
            description: 'Switch between dark and light theme and change the main color of your profile.',
          },
          sixth: {
            title: 'Change your password or login email at anytime.',
            description: 'It is very recommended that you change your default password.',
          },
        },
      },
    },

    /* ...............................................Analytics.................................................... */
    analytics: {
      messages: {
        loading: {
          loadingAnalytics: 'Generating report...',
        },
        info: {
          general: {
            first: 'An overview of your profile activity.',
          },
        },
        notifications: {
          urlCopiedSuccess: 'Profile URL copied successfully.',
          noLinks: {
            title: 'No active links',
            description: 'There are no active links in your profile. Start adding links to tack their activity.',
          },
          noTags: {
            title: 'No active labels',
            description: 'You did\'t add any labels. Start adding labels and assign to your connections and track their activity.',
          },
        },
      },
      buttons: {
        viewConnections: 'View connections',
        viewFollowings: 'View followings',
        viewFollowers: 'View followers',
        viewLinks: 'View links',
        viewTags: 'View labels',
        visitsTime: {
          pastWeek: 'Past week',
          pastMonth: 'Past month',
          pastYear: 'Past year',
        },
        claimReward: 'Claim your reward',
      },
      data: {
        titles: {
          page: 'My Analytics',
          addedToContacts: 'Added to contacts',
          connections: 'Connections',
          visits: 'Profile visits',
          followers: 'Followers',
          followings: 'Followings',
          links: 'Links',
          tags: 'Labels',
          efficiency: 'Profile efficiency',
          visitsTime: 'Profile visits breakdown',
          envImpact: 'Impact and Rewards',
          rewardNotReadyDialog: 'Reward not ready',
        },
        description: {
          addedToContacts: 'Number of times added to phone contacts',
          connections: 'Number of connections',
          visits: 'Number of visits to this profile.',
          followers: 'Number of ONE followers',
          followings: 'Number of ONE followings',
          linksPanel: 'Clicks count on each link sorted by most visited.',
          tagsPanel: 'Number of connections assigned to each label sorted by most used.',
          efficiency: 'How efficient is your profile in turning visitors into leads',
          visitsTime: 'Your profile visits over past periods',
          totalVisits: 'Total visits',
          envImpact: 'Your digital card is an eco-friendly way to share your information. With every visit, you\'re making a positive impact on the environment. Earn discounts and rewards as you reach milestones along the way.',
          rewardNotReadyDialog: {
            first: 'You need to reach the milestone of',
            second: 'visits to claim your reward',
          },
          noVisits: 'There are no visits for the selected period',
        },
        placeholders: {
          noEnoughData: {
            title: 'Not enough data',
            description: 'There is not enough data to draw an efficiency chart. Chart will be available when your profile gets more visits.',
          },
          noEnoughDataTime: {
            title: 'Not enough data',
            description: 'There is not enough data to draw a visits over time breakdown chart. Chart will be available when your profile gets more visits.',
          },
        },
      },
      forms: {
        shareMessage: 'Share message',
      },
    },

    /* ...............................................Rewards.................................................... */
    rewards: {
      messages: {
        loading: {
          loadingRewards: 'Loading Rewards...',
        },
        info: {
          general: {
            first: 'Your digital card is an eco-friendly way to share your information. With every visit, you\'re making a positive impact on the environment. Earn discounts and rewards as you reach milestones along the way.',
          },
        },
        notifications: {
          urlCopiedSuccess: 'Promo code copied successfully.',
        },
      },
      buttons: {
        claimReward: {
          claimed: 'Claim reward',
          unclaimed: {
            first: 'Save',
            second: 'Paper cards more to claim reward',
          },
        },
        useReward: 'Copy & Use',
        copyReward: 'Copy',
      },
      data: {
        titles: {
          page: 'Impact and Rewards',
          impactPanel: 'Your impact',
          milestonesPanel: 'Your rewards',
          shareBox: 'Share Profile',
          rewardNotReadyDialog: 'Reward not ready',
          rewardReadyDialog: 'Congratulations',
          imapctSection: {
            savedCards: 'Paper cards saved',
            savedCardsUnit: '',
            greenhouseGases: 'Greenhouse gases reduced',
            greenhouseGasesUnit: 'GMs',
            trees: 'Trees saved',
            treesUnit: '',
            water: 'Water saved',
            waterUnit: 'Liters',
          },
        },
        description: {
          impactPanel: 'The environmental impact of your use of ONE digital business card vs paper cards',
          milestonesPanel: 'Complete the goal for each milestone to claim your reward.',
          rewardNotReadyDialog: 'You did not complete the goal required to claim this reward.',
          rewardReadyDialog: 'Copy and use your promo code.',
          imapctSection: {
            savedCards: 'This number represents the amount of paper cards saved by using digital business cards instead of printed ones. '
            + 'Each unique visit to your profile is equivalent to one paper card that didn\'t have to be printed.',
            greenhouseGases: 'Based on the number of unique visits to your digital business card, '
            + 'we estimate that you have saved approximately X Grams of greenhouse gases. This estimate takes into account the energy used to power electronic devices and the greenhouse gases emitted '
            + 'during the production and disposal of paper business cards. '
            + 'Our calculations assume that each paper business card produces approximately 20 grams of greenhouse gases, and that each metric ton of paper production emits approximately 1.8 metric tons of CO2 equivalents.'
            + 'Note that this is an estimate and may not reflect exact values for your specific circumstances.',
            trees: 'This number represents the number of trees saved by using digital business cards instead of printed ones. Every paper card that isn\'t printed saves approximately 0.0004 trees.',
            water: 'This number represents the amount of water saved by using digital business cards instead of printed ones. Every paper card that isn\'t printed saves approximately 0.07 litres of water.',
          },
        },
      },
    },

    /* ...............................................Settings.................................................... */
    settings: {
      messages: {
        loading: {
          loadingSettings: 'Loading settings...',
          savingSettings: 'Saving settings...',
          updatingLayout: 'Updating layout...',
          updatingTheme: 'Updating theme...',
          loadingKey: 'Loading data...',
          savingKey: 'Saving key data...',
          verifyEmailRequest: 'Sending verification Email...',
          passwordChangeRequest: 'Sending password change request...',
          emailChangeRequest: 'Sending email change request...',
          loadingAccounData: 'Loading account data...',
          processing: 'Processing...',
          updatingTeamMember: {
            first: 'Updating team member',
            second: 'of',
          },
          manageSubscription: 'Redirecting to Stripe...',
        },
        info: {
          account: {
            first: 'Subscription and login details.',
            second: 'An email verification is required before you can change your email or password.',
          },
          privacy: {
            first: 'Create a key to reveal your profile information or deactivate your profile.',
            second: 'Name and picture will always remain active.',
          },
          theme: {
            first: 'Control theme and colors of your profile page.',
            master: 'Changes will reflect on team members profiles.',
          },
        },
        notifications: {
          settingsSavedSuccess: 'Settings saved successfully.',
          settingsSavedError: 'There was a problem saving settings.',
          keySavedSuccess: 'Profile key saved successfully.',
          keySavedError: 'There was a problem saving profile key.',
          verificationEmailSentSuccess: 'Verification Email sent.',
          verificationEmailSentError: 'Problem sending verification Email. Please try again.',
          passwordChangeEmailSent: {
            title: 'A password change email is sent to your inbox.',
            body: 'Please follow the instruction in the email to change your password.',
          },
          passwordChangeEmailSentSuccess: 'Change password email sent.',
          passwordChangeEmailSentError: 'There was a problem sending email. Please try again.',
          emailChangeEmailSent: {
            title: 'Email changed.',
            body: 'Your email is changed successfully. A verification email is sent to your new login email, it is recommended that you verify your new email to be able to make changes in the future.',
          },
          emailChangeEmailSentSuccess: 'Change login email sent.',
          emailChangeEmailSentError: 'There was a problem sending email. Please try again.',
          savePrompt: 'You have unsaved changes, are you sure you want to leave?',
          wrongCurrentEmail: {
            title: 'Wrong email',
            body: 'Wrong current login email. Please enter the Current logged in email.',
          },
          activateProfileSuccess: 'Profile activated successfully.',
          deactivateProfileSuccess: 'Profile deactivated successfully.',
          activateProfileError: 'There was a problem activating profile.',
          deactivateProfileError: 'There was a problem deactivating profile.',
          confirmDeactivate: 'Are you sure you want to deactivate your profile?',
          becomePro: {
            title: 'Upgrade to pro',
            body: 'Upgrade your account to pro and enjoy unlimited features and add-ons',
          },
        },
      },
      buttons: {
        saveSettings: 'Save Settings',
        verifyEmail: 'Verify email',
        changePassword: 'Change',
        changeEmailRequest: 'Change',
        changeEmailCancel: 'Cancel',
        changeEmail: 'Change',
        basicStyleTheme: 'Card',
        businessStyleTheme: 'Business',
        socialStyleTheme: 'Default',
        lightTheme: 'Light',
        darkTheme: 'Dark',
        savePrivacy: 'Save',
        saveTheme: 'Update theme',
        colorPicker: 'Pick my color',
        deactivateProfile: 'Deactivate',
        activateProfile: 'Activate',
        manageSubscription: 'Manage',
        goPro: 'GO PRO',
        whyPro: 'Why become pro?',
      },
      data: {
        titles: {
          page: 'Settings',
          accountTab: 'Change your Email & Password',
          subscription: 'Subscription',
          changePassword: 'Change Your Password',
          changeEmail: 'Change Your Login Email',
          changeEmailSubtitle: 'Type in your current Email and new Email to continue',
          privacyTab: 'Profile Key',
          themeTab: 'ONE-dbc Theme',
          profileLayout: 'Profile Layout',
          defaultTheme: 'Profile Theme',
          defaultColor: 'Profile Color',
          defaultColorSubtitle: 'Select From Swatches',
          defaultColorSubtitleTwo: '- Or - Pick Your Own',
          iconsColor: 'Icons Color',
          theme: 'Profile Design',
          privacy: 'Profile Privacy',
          profileKey: 'Profile Key',
          deactivateProfile: 'Deactivate profile',
          account: 'My Account',
          verifyEmailDialog: 'Verify your Email address',
          password: 'Password',
          loginEmail: 'Login Email',
        },
        description: {
          passwordPanel: 'Change your login password.',
          emailPanel: 'Change your login email.',
          profileKey: 'When activated, the key will be required to reveal information on your profile while your name and picture will always remain visible.',
          deactivateProfilePanel: 'When deactivated, all information will be hidden on this profile and Visitors will see a deactivated message.',
          subscriptionPanel: 'Manage your ONE-dbc subscription',
          subscriptionRenews: 'Your subscription renews on:',
          subscriptionEnds: 'Your subscription ends on:',
          trialEnds: 'Your trial period ends on:',
          subscriptionCancel: 'Your subscription is set to cancel on:',
        },
        tabs: {
          theme: 'Theme',
          account: 'Account',
          privacy: 'Privacy',
        },
        placeholders: {
          verifyEmail: {
            title: 'Email address is not verified',
            description: 'Verify your email address and don\'t risk losing your account.',
            button: 'Verify Email',
          },
          verifyEmailSent: {
            title: 'Verification Email sent',
            description: 'A verification Email is sent to your inbox. Please follow the instruction in the email to complete the process.',
          },
        },
        dialog: {
          verifyEmail: {
            notVerified: 'You need to verify your email address before changing your email or password.',
            emailSent: 'A verification Email is sent to your inbox. Please follow the instruction in the email to complete the process.',
          },
        },
        tooltips: {
          emailVerified: 'Email verified',
          emailUnverified: 'Email not verified',
        },
      },
      forms: {
        currentEmail: 'Current login E-mail',
        newEmail: 'New login E-mail',
        profilePassword: 'Profile Key',
        profileKeySwitchOn: 'Turn on profile key',
        profileKeySwitchOff: 'Turn off profile key',
        socialLinks: {
          defaultLinksToTheme: 'Use profile color as social links background.',
        },
      },
    },

    /* ...............................................BecomePro.................................................... */
    becomePro: {
      messages: {
        loading: {
          sendingWelcomeEmail: 'Sending welcome email...',
          constructingSearch: 'Constructing search elements...',
        },
      },
      buttons: {
        becomePro: 'BECOME PRO',
        becomeProOffer: '14 days free trial - Up to 30% off',
        becomeProCancel: 'Cancel anytime',
        startPro: 'Start pro',
      },
      data: {
        titles: {
          page: 'Become Pro',
          contentSubtitle: 'GET UNLIMITED FEATURES',
          contentTitle: 'Why Become Pro?',
          dialog: 'Pro feature',
          thanksSubtitle: 'GET UNLIMITED EXPOSURE',
          thanksTitle: 'Enjoy all ONE features',
          proBox: {
            first: 'YLC',
            second: 'PRO',
            third: 'Features',
          },
        },
        description: {
          page: 'Get your personalized card with ONE pro plus unlimited features',
          features: {
            main: {
              title: 'Multiple profiles',
              description: 'Add up to three digital business cards and switch between them..',
            },
            first: {
              title: 'Custom forms',
              description: 'Embed your custom Google, Microsoft, Type form, or Jot form and capture better leads.',
            },
            second: {
              title: 'Export connections',
              description: 'Export your leads in multiple CSV ready formats to create email lists or import to your CRM.',
            },
            third: {
              title: 'Advanced analytics',
              description: 'A complete analysis of your cards activity (Visits, Connections, Clicks & More).',
            },
            fourth: {
              title: 'Multiple layouts',
              description: 'Switch between different layouts to change the appearance of your card.',
            },
            fifth: {
              title: 'Printable QR code',
              description: 'A print ready SVG version of your QR code.',
            },
            sixth: {
              title: 'Address map',
              description: 'A dynamic map showing your address location.',
            },
            seventh: {
              title: 'Profile redirect',
              description: 'Redirect your profile visitors to any of your added links.',
            },
            eighth: {
              title: 'Profile Privacy',
              description: 'Lock your profile or create a password to reveal your info.',
            },
            ninth: {
              title: 'Removed Branding',
              description: 'Remove our logo and call to action from the header.',
            },
            // tenth: {
            //   title: 'Unbranded profile',
            //   description: 'Hide top bar with "ONE logo" and "Get the card button" for your visitors.',
            // },
            tenth: {
              title: 'Extra features',
              description: 'Get early access to all new pro features that we add constantly.',
            },
          },
        },
      },
    },
  },

  footer: {
    buttons: {
      privacy: 'Privacy Policy',
      contact: 'Contact',
    },
  },

  cookieBar: {
    message: 'ONE-dbc uses cookies to enhance the user experience.',
    link: 'Privacy policy',
    button: 'Agree',
  },

  navLinks: {
    homePage: 'Home',
    profile: 'My Profile',
    editProfile: 'Edit Profile',
    share: 'Share Profile',
    qrcode: 'Print QR Code',
    switch: 'Add/Switch Profile',
    analytics: 'My Analytics',
    connections: 'My Connections',
    connectionTags: 'Connection Labels',
    connectionForm: 'Connection Forms',
    offers: 'My promotions',
    followings: 'I\'m Following',
    followers: 'My Followers',
    invitations: 'My Invitations',
    settings: 'Settings',
    connect: 'Connect ONE',
    logout: 'Logout',
    authintication: 'Sign-in',
    info: 'Info',
    contact: 'Contacts',
    picture: 'Banner',
    logo: 'Logo/Image',
    bio: 'Video',
    links: 'Links',
    theme: 'Design',
    privacy: 'Profile Privacy',
    account: 'My Account',
    myTeam: 'My Team',
    secretCode: 'Profile code',
    qrBox: 'Digital Business Card',
    rewards: 'Impact & Rewards',
  },

  userLinks: {
    invitationsAdmin: 'Invitations',
    orders: 'Orders',
    logout: 'Logout',
    users: 'Users',
    account: 'My account',
  },

  suits: {
    all: 'All',
    admin: 'admin',
    invitation: 'invitation',
  },

  meta: {
    title: 'ONE-dbc',
    description: 'Create, update and share your contact information and allow people an easy access to your public information with one click.',
  },

  fonts: {
    cardTitle: {
      family: 'Playfair Display',
    },
  },
}
