import { Appbar } from 'react-native-paper'
import { HomeScreenProps } from '../props'
import { View } from 'react-native'
import { FilterChips } from '@/components/FilterChips'

export function HomeScreen({ navigation }: HomeScreenProps): JSX.Element {
  return (
    <>
      <View>
        <Appbar.Header>
          <Appbar.Content title="Key Photo Organizer" />
        </Appbar.Header>
        <FilterChips />
      </View>
    </>
  )
}
