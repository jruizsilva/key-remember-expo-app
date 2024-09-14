import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export function AccountScreen(): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <Text>Profile screen !</Text>
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
