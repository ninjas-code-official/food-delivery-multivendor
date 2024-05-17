import React, { useContext } from 'react'
import { TouchableOpacity, View } from 'react-native'
import styles from './styles.js'
import ThemeContext from '../../../ui/ThemeContext/ThemeContext.js'
import { theme } from '../../../utils/themeColors.js'
import TextDefault from '../../Text/TextDefault/TextDefault.js'
import { EvilIcons } from '@expo/vector-icons'
import { scale } from '../../../utils/scaling.js'
import { useTranslation } from 'react-i18next'

const ButtonContainer = (props) => {
  const { t } = useTranslation()
  const themeContext = useContext(ThemeContext)
  const currentTheme = theme[themeContext.ThemeValue]
  const isDisabled = props.onPress === 'null'
  const isVerifyDisabled = props.status === 'null'
  const statusColor = props.status === 'verified' ? `${currentTheme.linkColor}` : `${currentTheme.red600}`

  return (
    <>
      <View style={[styles().padding]}>
        <TouchableOpacity
          activeOpacity={isDisabled ? 1 : 0.7}
          style={[styles(currentTheme).linkContainer, styles().flexRow]}
          onPress={isDisabled ? null : props.onPress}
        >
          <View style={styles(currentTheme).mainLeftContainer}>
            <TextDefault
              style={styles().drawerContainer}
              textColor={currentTheme.fontMainColor}
              small
              H5
              bolder
            >
              {props.title}
            </TextDefault>
          </View>

          <View style={styles(currentTheme).leftContainer}>
            <TextDefault
              style={styles().drawerContainer}
              textColor={currentTheme.fontMainColor}
              small
              H5
              bolder
            >
              {props.detail}
            </TextDefault>
            {!isDisabled && (
              <EvilIcons
                name='chevron-right'
                size={scale(30)}
                color={currentTheme.darkBgFont}
              />
            )}
          </View>
        </TouchableOpacity>
      {!isVerifyDisabled && (
        <View style={styles(currentTheme).verifyView}>
          <TextDefault
            textColor={statusColor}
            small
          >
            {t(props.status)}
          </TextDefault>
        </View>
      )}
      </View>
    </>
  )
}

export default ButtonContainer
