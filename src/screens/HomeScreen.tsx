import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { HomeScreenProps } from './props'

export function HomeScreen({ navigation }: HomeScreenProps): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <Text>Home screen!</Text>
        <Button
          icon={'book'}
          onPress={() => {
            navigation.navigate('StackScreen')
          }}
        >
          Ir a stack
        </Button>
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
