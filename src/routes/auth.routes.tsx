import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../Pages/Home'
import { SignIn } from '../components/SignIn'
import { AppointmentDetails } from '../Pages/AppointmentDetails'

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
      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
    </Navigator>
  )
}
