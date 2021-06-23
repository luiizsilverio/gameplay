import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.color.heading
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32
  },
  select: {
    width: '100%',
    flexDirection: 'row',
    height: 66,
    borderColor: theme.color.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingRight: 25,
    overflow: 'hidden'    
  },
  image: {
    width: 64,
    height: 64,
    backgroundColor: theme.color.secondary50,
    borderWidth: 1,
    borderRadius: 8
  },
  selectBody: {
    flex: 1,
    alignItems: 'center'
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.color.highlight
  },
  textLimit: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.color.highlight
  },
  footer: {
    marginVertical: 20,
    marginBottom: 20
  }
})

