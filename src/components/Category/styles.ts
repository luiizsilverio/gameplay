import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: 'transparent'
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  checked: {
    position: 'absolute',
    right: 7,
    top: 7,
    
    width: 10,
    height: 10,
    backgroundColor: theme.color.primary,
    borderRadius: 3
  },
  unchecked: {
    position: 'absolute',
    right: 7,
    top: 7,
    
    width: 12,
    height: 12,
    backgroundColor: theme.color.secondary100,
    borderColor: theme.color.secondary50,
    borderWidth: 2,
    borderRadius: 3
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.color.heading,
    fontSize: 15,
    marginTop: 15
  }
})