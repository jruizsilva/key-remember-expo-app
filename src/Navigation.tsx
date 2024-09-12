import { AppRegistry } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { CombinedDarkTheme } from '@/theme'
import { StatusBar } from 'expo-status-bar'
import { StackNavigator } from './StackNavigator'

export function Navigation() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <StackNavigator />
        <StatusBar style="light" />
      </NavigationContainer>
    </PaperProvider>
  )
}

AppRegistry.registerComponent('key-remember', () => Navigation)
