import React, { useLayoutEffect } from 'react'
import { View, TouchableOpacity, Dimensions } from 'react-native'
import styles from './styles'
import FdGoogleBtn from '../../ui/FdSocialBtn/FdGoogleBtn/FdGoogleBtn'
import FdEmailBtn from '../../ui/FdSocialBtn/FdEmailBtn/FdEmailBtn'
import Spinner from '../../components/Spinner/Spinner'
import * as AppleAuthentication from 'expo-apple-authentication'
import { alignment } from '../../utils/alignment'
import TextDefault from '../../components/Text/TextDefault/TextDefault'
import { useCreateAccount } from './useCreateAccount'
import navigationOptions from './screenOptions'
import { useTranslation } from 'react-i18next'
import { GoogleSigninButton } from '@react-native-google-signin/google-signin'

const CreateAccount = (props) => {
  const {
    enableApple,
    loginButton,
    loginButtonSetter,
    loading,
    themeContext,
    currentTheme,
    mutateLogin,
    navigateToLogin,
    openTerms,
    openPrivacyPolicy,
    navigation,
    signIn
  } = useCreateAccount()
  const { t } = useTranslation()
  useLayoutEffect(() => {
    navigation.setOptions(
      navigationOptions({
        fontColor: currentTheme.fontMainColor,
        backColor: currentTheme.themeBackground,
        iconColor: currentTheme.iconColor,
        navigation: props.navigation
      })
    )
  }, [navigation, currentTheme])

  function renderAppleAction() {
    if (loading && loginButton === 'Apple') {
      return (
        <View style={styles().buttonBackground}>
          <Spinner
            backColor='rgba(0,0,0,0.1)'
            spinnerColor={currentTheme.white}
          />
        </View>
      )
    }
    return (
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
        buttonStyle={
          themeContext.ThemeValue === 'Dark'
            ? AppleAuthentication.AppleAuthenticationButtonStyle.WHITE
            : AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
        }
        cornerRadius={10}
        style={styles().appleBtn}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL
              ]
            })
            {
              const user = {
                appleId: credential.user,
                phone: '',
                email: credential.email,
                password: '',
                name:
                  credential.fullName.givenName +
                  ' ' +
                  credential.fullName.familyName,
                picture: '',
                type: 'apple'
              }
              mutateLogin(user)
            }
            loginButtonSetter('Apple')
            // signed in
          } catch (e) {
            if (e.code === 'ERR_CANCELLED') {
              // handle that the user canceled the sign-in flow
              loginButtonSetter(null)
            } else {
              // handle other errors
              loginButtonSetter(null)
            }
          }
        }}
      />
    )
  }

  function renderGoogleAction() {
    if (loading && loginButton === 'Google') {
      return (
        <View style={[styles().buttonBackground, styles().marginBottom5]}>
          <Spinner
            spinnerColor={currentTheme.primery}
            style={{ marginBottom: 20 }}
          />
        </View>
      )
    }

    return (
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={signIn}
        disabled={loading && loginButton === 'Google'}
      />
    )
  }

  function renderEmailAction() {
    return (
      <FdEmailBtn
        loadingIcon={loading && loginButton === 'Email'}
        onPress={() => {
          loginButtonSetter('Email')
          // eslint-disable-next-line no-unused-expressions
          navigateToLogin()
        }}
      />
    )
  }

  return (
    <View style={[styles(currentTheme).subContainer]}>
      {/* {user && JSON.stringify(user, null, 2)} */}
      <TextDefault
        H2
        bolder
        textColor={currentTheme.buttonBackgroundPink}
        style={{
          textAlign: 'center',
          ...alignment.MTlarge,
          ...alignment.MBlarge
        }}
      >
        {t('signUporSignIn')}
      </TextDefault>
      <View>
        <View style={styles().marginTop10}>{renderGoogleAction()}</View>
        {enableApple && (
          <View style={styles().marginTop10}>{renderAppleAction()}</View>
        )}
        <View
          style={[
            styles().marginTop5,
            { flexDirection: 'row', alignItems: 'center' }
          ]}
        >
          <View style={styles().line} />
          <View>
            <TextDefault
              H4
              bolder
              textColor={currentTheme.horizontalLine}
              style={{ width: 50, textAlign: 'center' }}
            >
              {t('or')}
            </TextDefault>
          </View>
          <View style={styles().line} />
        </View>
        <View style={styles().marginTop5}>{renderEmailAction()}</View>
      </View>
      <View
        style={{
          width: '80%',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          ...alignment.MTlarge,
          ...alignment.MBlarge
        }}
      >
        <TextDefault textColor={currentTheme.horizontalLine}>
          {t('termCondition1')}{' '}
        </TextDefault>
        <TouchableOpacity onPress={openTerms}>
          <TextDefault bolder textColor={currentTheme.buttonBackgroundPink}>
            {t('temrConditions')}{' '}
          </TextDefault>
        </TouchableOpacity>
        <TextDefault textColor={currentTheme.secondaryText}>
          {t('and')}
        </TextDefault>
        <TouchableOpacity onPress={openPrivacyPolicy}>
          <TextDefault bolder textColor={currentTheme.buttonBackgroundPink}>
            {' '}
            {t('privacyPolicy')}
          </TextDefault>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default CreateAccount
