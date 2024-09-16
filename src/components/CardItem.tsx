import { StackParamList } from '@/StackNavigator'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

export function CardItem() {
  const navigation = useNavigation<NavigationProp<StackParamList>>()

  return (
    <Card
      style={styles.container}
      onPress={() => {
        navigation.navigate('Details')
      }}
    >
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
