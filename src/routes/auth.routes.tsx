import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../Pages/Home'
import { SignIn } from '../Pages/SignIn'
import { AppointmentDetails } from '../Pages/AppointmentDetails'
import { AppointmentCreate } from '../Pages/AppointmentCreate'

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
        name="Home"
        component={Home}
      />
      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
      <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
    </Navigator>
  )
}

/*
<Screen
  name="SignIn"
  component={SignIn}
/>
*/