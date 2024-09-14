import { Appbar } from 'react-native-paper'
import { HomeScreenProps } from '../props'
import { StyleSheet, View } from 'react-native'
import { FilterChips } from '@/components/FilterChips'
import { CardList } from '@/components/CardList'

export function HomeScreen({ navigation }: HomeScreenProps): JSX.Element {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Key Photo Organizer" />
      </Appbar.Header>
      <View style={styles.container}>
        <FilterChips />
        <CardList />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    paddingHorizontal: 16,
  },
})
