import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-paper'

interface Props {}

export function HomePage(_props: Props): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your!</Text>
        <StatusBar style="auto" />
        <Button icon="camera">Press me</Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomePage
