import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { RootStackParamList } from '../../App'

export function ProfileScreen({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'Profile'>): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <Text>Profile screen!</Text>
        <StatusBar style="auto" />
        <Button icon="camera" onPress={() => navigation.navigate('Home')}>
          Go to home
        </Button>
        <Button onPress={() => navigation.goBack()}>Go back</Button>
        <Button onPress={() => navigation.popToTop()}>
          Go back to first screen in stack
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
