import { StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

export function CardItem() {
  return (
    <Card style={styles.container}>
      <Card.Cover
        source={{ uri: 'https://picsum.photos/700' }}
        style={{ height: 130 }}
      />
      <Card.Title
        title="Card Title"
        titleVariant="titleLarge"
        subtitle="Card Subtitle"
        subtitleVariant="labelLarge"
      />
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    minWidth: 160,
  },
})
