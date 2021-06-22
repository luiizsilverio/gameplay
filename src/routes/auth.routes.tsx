import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../components/Home'
import { SignIn } from '../components/SignIn'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none" //não mostra o título da página
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />
    </Navigator>
  )
}
