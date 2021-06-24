import React from 'react'
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native'

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { useAuth } from '../../hooks/auth'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export function SignIn() {  
  const { loading, signIn } = useAuth()

  async function handleSignIn() {    
    try {
      await signIn()

    } catch(error) {
      Alert.alert(error)
    }
  }

  return (
    <View style={styles.container}>     

      <Image 
        source={IllustrationImg} 
        style={styles.image}
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize {'\n'}
          seus jogos          
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        { 
          loading
          ? <ActivityIndicator color={theme.color.primary} />
          : <ButtonIcon 
              title="Entrar com Discord" 
              onPress={handleSignIn}
            />     
      }

      </View>      
    </View>
  )
}