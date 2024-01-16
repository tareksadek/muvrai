import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import ProDialog from '../../components/BecomePro/ProDialog'

import { buttonStyles } from '../../theme/buttons'
import { subscriptionStyles } from './styles'

import { getAllPackages, getPackagePrices, checkoutUser } from '../../API/subscriptions'

import { useAuth } from '../../hooks/use-auth'
import { useLanguage } from '../../hooks/useLang'

import { settings } from '../../utilities/appVars'

const Subscrption = () => {
  const auth = useAuth()
  const language = useLanguage()
  const history = useHistory()
  const classes = subscriptionStyles()
  const buttonClasses = buttonStyles()
  const pageStatics = language.languageVars.pages.subscription
  const [packages, setPackages] = useState(null)
  const [packagePrices, setPackagePrices] = useState(null)
  const [fullPackages, setFullPackages] = useState(null)
  const [subscriptionProcessing, setSubscribtionProcessing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [proDialogOpen, setProDialogOpen] = useState(window.location.hash === '#becomepro')

  const isPro = auth.isSubscriber && (auth.subscriberStatus === 'active' || auth.subscriberStatus === 'trialing')
  const subscribtionSuccessUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/subscriberThanks' : `${language.languageVars.appDomain}/subscriberThanks`
  const subscribtionFailUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/subscribe' : `${language.languageVars.appDomain}/subscribe`

  useEffect(() => {
    let mounted = true
    if (mounted) {
      (async () => {
        try {
          setLoading(true)
          const packs = await getAllPackages()
          setPackages(packs)
          const packPrices = await getPackagePrices()
          setPackagePrices(packPrices)
        } catch (err) {
          throw new Error(err)
        }
        setLoading(false)
      })()
    }
    return () => {
      mounted = false
    }
  }, [])

  useEffect(() => {
    if (packages && packagePrices) {
      const assignPackagePrices = packages.map(pack => {
        const x = packagePrices.filter(packagePrice => pack.id === packagePrice.product)
        return { ...pack, prices: x }
      })
      setFullPackages(assignPackagePrices)
    }
  }, [packages, packagePrices])

  useEffect(() => {
    const onHashChange = () => {
      setProDialogOpen(window.location.hash === '#becomepro')
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const goToLanding = () => {
    if (settings.onlyInvitations) {
      history.push(`/${auth.userUrlSuffix}`)
    } else {
      auth.logout()
      history.push('/')
    }
  }

  const closeProDialogHandler = () => {
    window.history.back()
  }

  const openProDialogHandler = () => {
    window.location.hash = '#becomepro'
  }

  // console.log(packages);
  // console.log(packagePrices);
  // console.log(fullPackages);

  const subscribeUser = async (userId, priceId) => {
    setSubscribtionProcessing(true)
    try {
      await checkoutUser(userId, priceId, subscribtionSuccessUrl, subscribtionFailUrl)
    } catch (err) {
      // console.log(err);
      throw new Error()
    }
  }

  return (
    <Box className={classes.pricingContainer}>
      {subscriptionProcessing && (
        <Backdrop className={classes.backdrop} open={subscriptionProcessing} style={{ zIndex: 2 }}>
          <Box alignItems="center" display="flex" flexDirection="column">
            <CircularProgress color="inherit" style={{ color: '#fff' }} />
            <Typography
              variant="body1"
              component="p"
              align="center"
              className={classes.loadingText}
            >
              {pageStatics.messages.loading.redirectingToStripe}
            </Typography>
          </Box>
        </Backdrop>
      )}
      <Box className={classes.pricingHeaderContainer}>
        <Box className={classes.pricingHeader}>
          <IconButton edge="start" color="inherit" onClick={goToLanding} aria-label="close" className={classes.pricingBackButton}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Box className={classes.pricingHero}>
          <Box className={classes.pricingLogoContainer}>
            <img src="/logo512.png" alt={pageStatics.data.titles.subscribe} />
          </Box>
          <Typography
            variant="body1"
            component="p"
            align="center"
            className={`${classes.pricingTitle}`}
          >
            {pageStatics.data.titles.subscribe}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            align="center"
            className={`${classes.pricingPrice}`}
          >
            {pageStatics.data.titles.selectPaymentPlan}
          </Typography>
          <Button
            className={`${buttonClasses.textButton}`}
            onClick={() => openProDialogHandler()}
            style={{
              width: '100%',
            }}
          >
            {pageStatics.data.titles.viewFeatures}
          </Button>
        </Box>
      </Box>
      {loading ? (
        <Box display="flex" alignItems="center" justifyContent="center" p={5}>
          <CircularProgress style={{ color: '#000' }} />
        </Box>
      ) : (
        <Box className={classes.pricingButtonContainer}>
          <>
            {fullPackages && fullPackages.length > 0 && fullPackages.map(pack => (
              pack.prices.map(packPrice => {
                if (packPrice.active) {
                  return (
                    <Button
                      key={packPrice.id}
                      className={`${classes.pricingButton}`}
                      onClick={() => subscribeUser(auth.user.uid, packPrice.id)}
                    >
                      {packPrice.interval === 'month' ? (
                        <Typography className={classes.pricingButtonText} variant="body1" component="p">
                          {pageStatics.data.packages.monthly.title}
                          <br />
                          <span className={classes.pricingButtonNumber}>
                            <span className={`${classes.pricingButtonCurrency} ${classes.pricingButtonCurrencyMonthly}`}>{pageStatics.data.currency}</span>
                            {`${packPrice.unit_amount / 100}`}
                          </span>
                          <span className={classes.pricingButtonPeriod}>{pageStatics.data.packages.monthly.period}</span>
                          <span className={classes.pricingButtonSave}>{pageStatics.data.packages.monthly.offer}</span>
                          <span className={classes.pricingSelect}>{pageStatics.buttons.select}</span>
                          <span className={classes.pricingSafePayment}>{pageStatics.data.titles.safePayment}</span>
                        </Typography>
                      ) : (
                        <>
                          <Typography className={classes.pricingBestValue} variant="body1" component="p">
                            {pageStatics.data.titles.bestValue}
                          </Typography>
                          <Typography className={classes.pricingButtonText} variant="body1" component="p">
                            {pageStatics.data.packages.yearly.title}
                            <br />
                            <span className={classes.pricingButtonNumber}>
                              <span className={classes.pricingButtonCurrency}>{pageStatics.data.currency}</span>
                              {`${packPrice.unit_amount / 100}`}
                            </span>
                            <span className={classes.pricingButtonPeriod}>{pageStatics.data.packages.yearly.period}</span>
                            <span className={classes.pricingButtonSave}>{pageStatics.data.packages.yearly.offer}</span>
                            <span className={classes.pricingSelect}>{pageStatics.buttons.select}</span>
                            <span className={classes.pricingSafePayment}>{pageStatics.data.titles.safePayment}</span>
                          </Typography>
                        </>
                      )}
                    </Button>
                  )
                }
                return true
              })
            ))}
          </>
        </Box>
      )}
      {settings.onlyInvitations && !isPro && (
        <ProDialog
          open={proDialogOpen}
          onClose={closeProDialogHandler}
          onlyFeatures
        />
      )}
    </Box>
  )
}

export default Subscrption
