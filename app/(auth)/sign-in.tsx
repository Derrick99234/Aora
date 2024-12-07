import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    // Implement your form submission logic here
    console.log(form)
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='justify-center w-full h-[82vh] px-6 my-6'>
          <Image source={images.logo} className='w-[130px] min-h-[82px]' resizeMode='contain' />
          <Text  className='text-2xl text-white font-psemibold font-semibold mt-10'>Log in to Aora</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({...form, email: e})}
            otherStyles="mt-7"
            keyBoardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyles="mt-7"
          />
          <CustomButton
              title='Sign in'
              handlePress={() => handleSubmit}
              containerStyles='mt-7'
              isLoading={loading}
           />
           <View className='justify-center items-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don&apos;t have an account ?
            </Text>
            <Link href="/(auth)/sign-up" className='text-secondary text-lg font-psemibold'>Sign up</Link>
           </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})