import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'

const { CDN_IMAGE } = process.env

type Props = {
  guildId: string
  iconId: string | null
}

export function GuildIcon({ guildId, iconId}: Props) {
  const uri = guildId 
    ? `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`  
    : 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg'
  
  return (    
    <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover" 
    />
  )
}