import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
import { createUser } from '@/lib/appwrite'

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    createUser()
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='justify-center w-full h-[82vh] px-6 my-6'>
          <Image source={images.logo} className='w-[130px] min-h-[82px]' resizeMode='contain' />
          <Text  className='text-2xl text-white font-psemibold font-semibold mt-10'>Sign up to Aora</Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({...form, username: e})}
            otherStyles="mt-10"
          />
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
              title='Sign up'
              handlePress={() => handleSubmit}
              containerStyles='mt-7'
              isLoading={loading}
           />
           <View className='justify-center items-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Already have an account ?
            </Text>
            <Link href="/(auth)/sign-in" className='text-secondary text-lg font-psemibold'>Sign in now</Link>
           </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})