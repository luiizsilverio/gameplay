import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'

import { Guild, GuildProps } from '../../components/Guild'
import { Divider } from '../../components/Divider'
import { Load } from '../../components/Load'

import { styles } from './styles'
import { api } from '../../services/api'

type Props = {
  selectGuild: (guild: GuildProps) => void
}

export function Guilds({ selectGuild }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchGuilds() {
      const response = await api.get('/users/@me/guilds')
      setGuilds(response.data)
      setLoading(false)
    }

    fetchGuilds()
  }, [])

  

  const guildsx = [
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
    {
      loading ? <Load /> :
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
        contentContainerStyle={{paddingBottom: 68, paddingTop: 103}}
        style={styles.guilds}
      />
    }
    </View>
  )
}
