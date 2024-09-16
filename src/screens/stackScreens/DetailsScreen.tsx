import { MaterialCommunityIcons } from '@expo/vector-icons'
import { DetailsScreenProps } from '../props'
import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, FAB, Portal, Text } from 'react-native-paper'

export function DetailsScreen({ navigation, route }: DetailsScreenProps) {
  const { id } = route.params
  const [isOpenGroup, setIsOpenGroup] = useState(false)

  useEffect(() => {
    navigation.setOptions({ title: `Details ${id}` })
  }, [id, navigation])

  return (
    <>
      <View style={styles.container}>
        <Card>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content style={styles.cardContent}>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
        </Card>
        <Portal>
          <FAB.Group
            open={isOpenGroup}
            visible
            icon={'menu'}
            actions={[
              {
                icon: 'delete',
                label: 'Eliminar',
                onPress: () => console.log('Eliminar'),
              },
              {
                icon: 'pencil',
                label: 'Editar',
                onPress: () => console.log('Editar'),
              },
            ]}
            onStateChange={({ open }) => setIsOpenGroup(open)}
          />
        </Portal>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  cardContent: {
    padding: 16,
  },
})
