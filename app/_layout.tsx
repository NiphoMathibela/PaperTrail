import React from 'react'
import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const _layout = () => {
  return (
    <SafeAreaView>
      <Slot/>
    </SafeAreaView>
  )
}

export default _layout
