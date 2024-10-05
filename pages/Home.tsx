import { FlatList, SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import UploadCard from '@/components/UploadCard'
import { data } from '../assets/DemoData';
import ReceiptCard from '@/components/ReceiptCard';
import { LinearGradient } from 'expo-linear-gradient';

export class Home extends Component {
  render() {
    return (
      <View>
        {/* Hwader */}
        <View >
          <LinearGradient colors={['#404CCF', '#0BB4EF']} className='h-80 m-5 rounded-lg p-4 drop-shadow-4xl'>
            <View className='mt-6'>
              <Text className='text-[#FFFFFF] text-3xl font-bold'>Welcome back, Tom!</Text>
            </View>

            {/* Expense Card */}
            <View className='h-36 w-full mt-16 bg-white rounded-lg center flex justify-center items-center' style={{
              shadowColor: '#22D566',
              shadowOffset: { width: 10, height: 20 },
              shadowOpacity: 1,
              shadowRadius: 0,
              elevation: 34,
            }}>
              <Text className='text-blue'>Today's Expenditure</Text>
              <Text className='text-blue text-xl font-semibold'>R 1 500.00</Text>
            </View>
          </LinearGradient>
        </View>

        {/* Receipts */}
        <Text className='text-2xl font-semibold mx-5'>Receipts</Text>

        {/* Receipt Boxes */}
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => <ReceiptCard amount={item.amount} location={item.shop} date={item.date} />}
        />
      </View>
    )
  }
}

export default Home






