import { AppRegistry } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { CombinedDefaultTheme } from '@/theme'
import { StatusBar } from 'expo-status-bar'
import { StackNavigator } from '@/StackNavigator'

export function Navigation() {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <NavigationContainer theme={CombinedDefaultTheme}>
        <StackNavigator />
        <StatusBar style="dark" />
      </NavigationContainer>
    </PaperProvider>
  )
}

AppRegistry.registerComponent('key-remember', () => Navigation)
