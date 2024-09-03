import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

interface Props {}

export default function HomePage(_props: Props): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your appxdd!</Text>
        <StatusBar style="auto" />
        <Button icon="camera">Press me</Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
