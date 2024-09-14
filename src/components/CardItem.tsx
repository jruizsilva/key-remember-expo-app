import { Card } from 'react-native-paper'

export function CardItem() {
  return (
    <Card>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Title title="Card Title" subtitle="Card Subtitle" />
    </Card>
  )
}
