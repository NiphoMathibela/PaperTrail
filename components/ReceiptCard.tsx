import { View, Text } from 'react-native'
import React from 'react'

//Interface for Props data
interface ReceiptCardProps {
    amount: number;
    location: string;
    date: string;
}

const ReceiptCard:React.FC<ReceiptCardProps> = (props) => {
  return (
    <View className='flex justify-center items-center w-40 h-52 my-5 ml-5 rounded-xl bg-gray'>
            <Text>{props.date}</Text>

            <View>
                <Text>{props.amount}</Text>
                <Text>{props.location}</Text>
            </View>
        </View>
  )
}

export default ReceiptCard