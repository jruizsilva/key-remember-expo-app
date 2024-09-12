import { HomeScreen, ProfileScreen, StackScreen } from '@/screens'
import { AppRegistry } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { CombinedDarkTheme } from '@/theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'

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

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof MaterialCommunityIcons.glyphMap
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline'
              break
            case 'Profile':
              iconName = focused ? 'cog' : 'cog-outline'
              break
            default:
              iconName = 'home'
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          )
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export function Navigation() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <TabGroup />
      </NavigationContainer>
    </PaperProvider>
  )
}

AppRegistry.registerComponent('key-remember', () => Navigation)
