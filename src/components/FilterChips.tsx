import { StyleSheet, View } from 'react-native'
import { Chip } from 'react-native-paper'

export function FilterChips() {
  return (
    <View style={styles.container}>
      <Chip icon="check">Todos</Chip>
      <Chip mode="outlined">Casa 1</Chip>
      <Chip mode="outlined">Casa 2</Chip>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingHorizontal: 16,
  },
})
