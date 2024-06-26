import { spacing } from "@/theme"
import React, { FC } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Screen, Text } from "../IgniteComponents"

export const PlanScreen: FC = function PlanScreen(_props) {
  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text preset="heading" text="Coming Soon........" style={$title} />
    </Screen>
  )
}

const $container: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
}

const $title: TextStyle = {
  marginBottom: spacing.sm,
}
