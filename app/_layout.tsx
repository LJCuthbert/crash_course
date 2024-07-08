import { Slot, Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import "../global.css"
const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}}/>
    </Stack>
  )
}

export default RootLayout