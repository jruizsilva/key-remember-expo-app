import { StackParamList } from '@/StackNavigator'
import { TabParamList } from '@/TabNavigator'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps, RouteProp } from '@react-navigation/native'
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Home'>,
  NativeStackScreenProps<StackParamList, 'Tabs'>
>

export type DetailsScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, 'Details'>
  route: RouteProp<StackParamList, 'Details'>
}
