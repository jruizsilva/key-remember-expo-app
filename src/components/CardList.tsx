import { View, StyleSheet } from 'react-native'
import { CardItem } from './CardItem'

export function CardList() {
  return (
    <View style={styles.container}>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
})
