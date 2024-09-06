import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { RootStackParamList } from '../../App'

export function HomeScreen({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'Home'>): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <Text>Home screen!</Text>
        <StatusBar style="auto" />
        <Button icon="camera" onPress={() => navigation.navigate('Profile')}>
          Go to profile
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
