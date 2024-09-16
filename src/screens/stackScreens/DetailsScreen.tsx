import { Appbar } from 'react-native-paper'
import { DetailsScreenProps } from '../props'

export function DetailsScreen({ navigation, route }: DetailsScreenProps) {
  const { id } = route.params
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title={`Details ${id}`} />
      </Appbar.Header>
    </>
  )
}
