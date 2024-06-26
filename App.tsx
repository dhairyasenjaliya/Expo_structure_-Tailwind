import App from "@/app"
import "@expo/metro-runtime"
import * as SplashScreen from "expo-splash-screen"
import React from "react"

SplashScreen.preventAutoHideAsync()

function DemoApp() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />
}

export default DemoApp
