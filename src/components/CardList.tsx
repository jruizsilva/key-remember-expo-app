import { View, StyleSheet } from 'react-native'
import { CardItem } from './CardItem'

export function CardList() {
  return (
    <View style={styles.container}>
      <CardItem />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
