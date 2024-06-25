import React from "react"
import { ScrollView, StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import StyledText from "./StyledText"
import Constants from "expo-constants"
import theme from "../theme"
import { Link, useLocation } from "react-router-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight + 10
  },scroll: {
    paddingBottom: 15,
  },
  scroll:{
    paddingBottom: 15,
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.textPrimary,
  }
})

const AppBarTab = ({ children, to}) => {
  //funcion para cambiar el estilo segun la vista
  const {pathname} = useLocation()
  const active = pathname === to
  //estilos y condicion para cambiar el color del texto
  const textStyle = [
    styles.text,
    active && styles.active
  ]
  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight="bold" style={textStyle}>
        {children}
      </StyledText>
    </Link>
  )
}
const getRoute = ({})

const AppBar = () => {

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/">Repositories</AppBarTab>
      </ScrollView>
    </View>
  )
}

export default AppBar