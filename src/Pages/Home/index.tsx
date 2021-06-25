import React, { useState, useCallback } from 'react'
import { View, FlatList, Text } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Profile } from '../../components/Profile' 
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Appointment, AppointmentProps } from '../../components/Appointment'
import { Divider } from '../../components/Divider'
import { Load } from '../../components/Load' 
import { styles } from './styles'
import { COLLECTION_APPOINTMENTS } from '../../config/database'

export function Home() {
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])

  const navigation = useNavigation()

  function handleCategorySelect(categoryId: string) {
    categoryId === category 
      ? setCategory('')
      : setCategory(categoryId)
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails')
  }
  
  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate')
  }

  async function loadAppointments() {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)    
    const appList: AppointmentProps[] = storage ? JSON.parse(storage) : []

    if (category) {
      setAppointments(appList.filter(item => item.category === category))      
    } else {
      setAppointments(appList)
    }

    setLoading(false)
  }

  useFocusEffect(useCallback(() => {
    loadAppointments()
  }, [category]))

  return (
    <>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>
      
      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
    
      {
        loading ? <Load /> :
        <>
          <ListHeader 
            title="Partidas agendadas"
            subtitle="Total 6"
          />

          <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment 
                data={ item } 
                onPress={handleAppointmentDetails}
              /> 
            )}
            ItemSeparatorComponent={() => <Divider />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 69 }}
          />
        </>
      }
    </>
  )
}