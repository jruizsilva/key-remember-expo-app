import '@expo/metro-runtime'
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import { AppRegistry } from 'react-native'
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
  PaperProvider,
} from 'react-native-paper'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import merge from 'deepmerge'
import { HomePage } from '@/pages'

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
})

export const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme)
export const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme)

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ title: 'Hola' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

AppRegistry.registerComponent('key-remember', () => App)
