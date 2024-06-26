import { AndroidConfig, ConfigPlugin, withAndroidStyles, withStringsXml } from "expo/config-plugins"

export const withSplashScreen: ConfigPlugin = (config) => {
  config = withAndroidSplashScreen(config)
  return config
}

const withAndroidSplashScreen: ConfigPlugin = (config) => {
  config = withCustomStylesXml(config)
  config = withCustomStringsXml(config)
  return config
}

const withCustomStringsXml: ConfigPlugin = (config) =>
  withStringsXml(config, (modConfig) => {
    modConfig.modResults = AndroidConfig.Strings.setStringItem(
      [
        {
          _: "true",
          $: {
            name: "expo_splash_screen_status_bar_translucent",
            translatable: "false",
          },
        },
      ],
      modConfig.modResults,
    )
    return modConfig
  })

const withCustomStylesXml: ConfigPlugin = (config) =>
  withAndroidStyles(config, async (modConfig) => {
    modConfig.modResults = AndroidConfig.Styles.assignStylesValue(modConfig.modResults, {
      add: true,
      name: "android:windowIsTranslucent",
      value: "true",
      parent: {
        name: "Theme.App.SplashScreen",
        parent: "AppTheme",
      },
    })
    return modConfig
  })
