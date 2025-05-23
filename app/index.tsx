import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { StatusBar } from "expo-status-bar";
import { images } from '@/constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'

const App = () => {
  return (
    <SafeAreaView className='h-full bg-primary'>
     <ScrollView contentContainerStyle={{ height: '100%' }}>
      <View className='items-center justify-center px-6 w-full min-h-[85vh]'>
        <Image source={images.logo} className='w-[130px] h-[84px]' resizeMode='contain' />
        <Image source={images.cards} className='max-w-[380px] w-full h-[300px]' resizeMode='contain' />
        <View className='relative mt-5'>
          <Text className='text-5xl font-bold text-white text-center'>
            Discover Endless Possibility With <Text className='text-secondary-200'>Aora</Text>
          </Text>
          <Image
            source={images.path}
            className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
            resizeMode='contain'
          />
        </View>
        <Text className='text-md font-pregular text-gray-100 mt-7 text-center '>Where creativity meets innovations: Embark on a journey of exploration</Text>
        <CustomButton 
          title="Continue with Email"
          handlePress={() => router.push('/sign-in')}
          containerStyles="w-full mt-7"
        />
      </View>
     </ScrollView>
     <StatusBar backgroundColor='#161622' style={'light'} />
    </SafeAreaView>
  )
}

export default App