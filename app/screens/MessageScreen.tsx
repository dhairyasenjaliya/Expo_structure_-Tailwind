import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, ViewStyle } from "react-native"
import { Screen, Text } from "../IgniteComponents"
import { DemoTabScreenProps } from "../navigators/TabNavigator"
import { spacing } from "../theme"

export const MessageScreen: FC<DemoTabScreenProps<"DemoPodcastList">> = observer(
  function DemoPodcastListScreen(_props) {
    return (
      <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
        <Text preset="heading" text="Coming Soon........" style={$title} />
      </Screen>
    )
  },
)

const $container: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
}

const $title: TextStyle = {
  marginBottom: spacing.sm,
}
