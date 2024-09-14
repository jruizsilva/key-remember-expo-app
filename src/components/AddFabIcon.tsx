import { StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper'

export function AddFabIcon() {
  return (
    <FAB
      icon="plus"
      variant="primary"
      style={styles.fab}
      onPress={() => console.log('Pressed')}
    />
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 16,
    bottom: -16,
  },
})
