import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TabNavigation } from './TabNavigator'
import { DetailsScreen } from './screens/stackScreens/DetailsScreen'

export type StackParamList = {
  Tabs: undefined
  Details: undefined
}

const Stack = createNativeStackNavigator<StackParamList>()
export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  )
}
