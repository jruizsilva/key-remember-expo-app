import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export function ProfileScreen(): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <Text>Profile screen !</Text>
        <StatusBar style="auto" />
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
