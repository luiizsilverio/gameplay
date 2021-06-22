import React, { useState } from 'react'
import { View, FlatList, Text } from 'react-native'
import { styles } from './styles'

import { Profile } from '../Profile'
import { ButtonAdd } from '../ButtonAdd'
import { CategorySelect } from '../CategorySelect'
import { ListHeader } from '../ListHeader'
import { Appointment } from '../Appointment'
import { Divider } from '../Divider'

const appointments = [
  {
    id: '1',
    guild: {
      id: '1',
      name: 'Lendarios',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  },
  {
    id: '2',
    guild: {
      id: '2',
      name: 'Omnis',
      icon: null,
      owner: false
    },
    category: '1',
    date: '22/06 às 20:40',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  }
]

export function Home() {
  const [category, setCategory] = useState('')

  function handleCategorySelect(categoryId: string) {
    categoryId === category 
      ? setCategory('')
      : setCategory(categoryId)
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      
      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader 
          title="Partidas agendadas"
          subtitle="Total 6"
        />

        <FlatList 
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment data={ item } />              
          )}
          ItemSeparatorComponent={() => <Divider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />

      </View>    
    </View>
  )
}