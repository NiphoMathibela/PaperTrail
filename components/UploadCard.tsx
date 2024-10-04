import { View, Text } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import React from 'react'

const UploadCard = () => {
    return (
        <View className='flex justify-center items-center w-40 h-52 my-5 ml-5 rounded-xl bg-gray'>
            <IonIcon name='camera-outline' size={35} color='gray' />
            <Text>Upload Receipt</Text>
        </View>
    )
}

export default UploadCard