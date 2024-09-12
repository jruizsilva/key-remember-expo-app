import { HomeScreen, ProfileScreen, StackScreen } from '@/screens'
import { AppRegistry } from 'react-native'
import { Icon, PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { CombinedDarkTheme } from '@/theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type TabParamList = {
  Home: undefined
  Profile: undefined
}

export type HomeStackParamList = {
  HomeScreen: undefined
  StackScreen: undefined
}

const HomeStackNavigator = createNativeStackNavigator<HomeStackParamList>()
const Tab = createBottomTabNavigator<TabParamList>()

function HomeStack() {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStackNavigator.Screen name="StackScreen" component={StackScreen} />
    </HomeStackNavigator.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon source={'home'} size={size} color={color}></Icon>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon source={'cog'} size={size} color={color}></Icon>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export function Navigation() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <MyTabs />
      </NavigationContainer>
    </PaperProvider>
  )
}

AppRegistry.registerComponent('key-remember', () => Navigation)
