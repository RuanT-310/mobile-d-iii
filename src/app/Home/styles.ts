import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    paddingTop: 60,
  },
  logo: {
    height: 34,
    width: 134,
  },
  form: {
    flexDirection: 'row',
    width: '85%',
    paddingHorizontal: 16,
    gap: 7,
    justifyContent: 'center',
    top: 46,
    zIndex: 1,
  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#262626',
    padding: 24,
    paddingTop: 32,
    marginTop: 24,
  },
  contentList:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 48,
  },
  icon: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    paddingBottom: 12,
  },
  clearButton: {
    marginLeft: 'auto',
  },
  clearText: {
    fontSize: 12,
    color: '#828282',
    fontWeight: 600,
  },
  separator: {
    width: "100%",
    marginVertical: 5,
  },
  listContent: {
    paddingTop: 24,
    paddingBottom: 62,
  },
  empty: {
    fontSize: 14,
    color: "#808080",
    textAlign: 'center'
  },
});