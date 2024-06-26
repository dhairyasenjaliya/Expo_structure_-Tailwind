import React, { FC } from "react"
import { Text, TextStyle, ViewStyle } from "react-native"
import { Screen } from "../IgniteComponents"

export const HomeScreen: FC = function HomeScreen(_props) {
  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text className={$textStyleNativeWind}>Tailwind Styling</Text>
      <Text style={$normalStyle}>Normal Styling........</Text>
    </Screen>
  )
}

const $container: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
}

const $normalStyle: TextStyle = {
  fontSize: 30,
  marginTop: 20,
}

const $textStyleNativeWind = `text-4xl md:text-6xl` // Native Wind CSS
