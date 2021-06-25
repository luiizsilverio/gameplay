import React, { useState, useEffect } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native'
import { Fontisto } from '@expo/vector-icons'
import * as Linking from 'expo-linking'

import { 
  Text, 
  View, 
  FlatList, 
  Alert, 
  Share,
  Platform,
  ImageBackground 
} from 'react-native'

import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { Header } from '../../components/Header'
import { Load } from '../../components/Load'
import { Member, MemberProps } from '../../components/Member'
import { Divider } from '../../components/Divider'
import { ButtonIcon } from '../../components/ButtonIcon'
import { AppointmentProps } from '../../components/Appointment'
import { api } from '../../services/api'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import BannerImg from '../../assets/banner.png'

type GuildWidget = {
  id: string
  name: string
  instant_invite: string
  members: MemberProps[]  
}

type Params = {
  guildSelected: AppointmentProps
}

export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
  const [loading, setLoading] = useState(false)

  const route = useRoute()
  const { guildSelected } = route.params as Params;
  
  function handleShare() {
    // só quem criou o canal pode convidar
    if (!widget.instant_invite) {
      Alert.alert('Você não é dono desse canal e não pode convidar ninguém')
      return
    }

    const message = Platform.OS === 'ios'
      ? `Junte-se a ${guildSelected.guild.name}`
      : widget.instant_invite

    Share.share({     
      message,
      url: widget.instant_invite
    })
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite)    
  }

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)

      setWidget(response.data)
    } catch {
      Alert.alert('Verifique as configurações do servidor. Será que o Widget está habilitado?')
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    fetchGuildWidget()
  }, [])  

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton onPress={handleShare}>
            <Fontisto 
              name="share"
              size={24}
              color={theme.color.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            { guildSelected.guild.name }
          </Text>          
          <Text style={styles.subtitle}>
          { guildSelected.description }
          </Text>
        </View>
      </ImageBackground>

      {
        loading ? <Load /> :
        <>
          <ListHeader 
            title="Jogadores"
            subtitle={`Total ${widget.members?.length}`}
          />

          <FlatList
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
            ItemSeparatorComponent={() => <Divider center />}
            style={styles.members}
          />
        </>
      }

      {
        guildSelected.guild.owner &&
          <View style={styles.footer}>
            <ButtonIcon 
              title="Entrar na partida" 
              onPress={handleOpenGuild}
              />
          </View>
      }
    </Background>
  )
}