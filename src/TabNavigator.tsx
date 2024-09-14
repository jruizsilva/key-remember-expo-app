import { MaterialCommunityIcons } from '@expo/vector-icons'
import { HomeScreen } from './screens/tabScreens/HomeScreen'
import SearchScreen from './screens/tabScreens/SearchScreen'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'
import { AccountScreen } from './screens/tabScreens/AccountScreen'

export type TabParamList = {
  Home: undefined
  Search: undefined
  Account: undefined
}

const Tab = createMaterialBottomTabNavigator<TabParamList>()

export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName: keyof typeof MaterialCommunityIcons.glyphMap
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Search') {
            iconName = focused ? 'magnify' : 'magnify'
          } else if (route.name === 'Account') {
            iconName = focused ? 'account' : 'account-outline'
          } else {
            iconName = 'home'
          }

          return (
            <MaterialCommunityIcons name={iconName} color={color} size={24} />
          )
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Inicio',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Buscar',
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'Mi cuenta',
        }}
      />
    </Tab.Navigator>
  )
}
