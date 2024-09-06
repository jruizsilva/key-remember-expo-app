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
import { HomeScreen, ProfileScreen } from '@/screens'

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
})

export const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme)
export const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme)

export type RootStackParamList = {
  Home: undefined
  Profile: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Hola' }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

AppRegistry.registerComponent('key-remember', () => App)
