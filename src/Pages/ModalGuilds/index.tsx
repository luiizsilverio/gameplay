import React from 'react'
import { View, FlatList } from 'react-native'

import { Guild, GuildProps } from '../../components/Guild'
import { Divider } from '../../components/Divider'

import { styles } from './styles'

type Props = {
  selectGuild: (guild: GuildProps) => void
}

export function ModalGuilds({ selectGuild }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Galera do game',
      icon: 'image.png',
      owner: false
    },
    {
      id: '3',
      name: 'Omnis',
      icon: 'image.png',
      owner: true
    }    
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild 
            data={item} 
            onPress={() => selectGuild(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Divider center />}
        ListHeaderComponent={() => <Divider center />}
        ListFooterComponent={() => <Divider center />}
        style={styles.guilds}
        contentContainerStyle={{paddingBottom: 68, paddingTop: 103}}
      />
    </View>
  )
}
