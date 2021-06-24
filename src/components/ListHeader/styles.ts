import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 27
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.color.heading,
    fontSize: 18
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    color: theme.color.highlight,
    fontSize: 13
  }
})