import { Appbar } from 'react-native-paper'
import { HomeScreenProps } from '../props'

export function HomeScreen({ navigation }: HomeScreenProps): JSX.Element {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Key Photo Organizer" />
      </Appbar.Header>
    </>
  )
}
