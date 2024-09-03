import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { MD3DarkTheme, PaperProvider } from 'react-native-paper'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './src/pages/HomePage'

const theme = {
  ...MD3DarkTheme,
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
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

AppRegistry.registerComponent('key-remember-blank', () => App)
