import { Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

export default function App() {
  return (
    <View className='flex-1 justify-center items-center bg-primary'>
      <Text className='text-3xl text-secondary'>1%</Text>
      <StatusBar style='auto'/>
      <Link href="/profile" className='text-blue-400 font-bold'>Go to profile</Link>
    </View>
  )
}