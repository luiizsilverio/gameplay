import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

type Props = RectButtonProperties

export function ButtonAdd({...rest}: Props) {
  return (
    <RectButton 
      style={styles.container}
      {...rest}
    >
      <MaterialCommunityIcons
        name="plus"
        color={theme.color.heading}
        size={24}
      />
    </RectButton>
  )
}