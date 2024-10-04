import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import UploadCard from '@/components/UploadCard'

export class Home extends Component {
  render() {
    return (
        <View>
            {/* Hwader */}
            <View className='bg-blue h-80 m-5 rounded-lg p-4 drop-shadow-4xl'>
                <View className='mt-6'> 
                <Text className='text-[#FFFFFF] text-3xl font-bold'>Welcome back, Tom!</Text>
                </View>

                {/* Expense Card */}
                <View className='h-36 w-full mt-16 bg-white rounded-lg center flex justify-center items-center'>
                    <Text className='text-blue'>Today's Expenditure</Text>
                    <Text className='text-blue text-xl font-semibold'>R 1 500.00</Text>
                </View>
            </View>

            {/* Receipts */}
            <Text className='text-2xl font-semibold mx-5'>Receipts</Text>

            {/* Receipt Boxes */}
            <UploadCard/>
        </View>
    )
  }
}

export default Home






