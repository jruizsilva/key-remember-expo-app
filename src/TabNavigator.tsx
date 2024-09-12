import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from './screens/tabScreens/HomeScreen'
import { ProfileScreen } from './screens/tabScreens/ProfileScreen'

export type TabParamList = {
  Home: undefined
  Profile: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

export function TabNavigation() {
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}
