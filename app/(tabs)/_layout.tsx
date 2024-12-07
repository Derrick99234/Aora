import { View, Text, Image, ImageSourcePropType, ColorValue } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from "expo-router";
import {  icons } from "../../constants";

interface TabIconProps {
  icon: ImageSourcePropType, 
  focused: boolean, 
  name: string, 
  color: ColorValue 
}

const TabIcon = ({icon, focused, name, color}:TabIconProps ) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs w-full`} style={{ color}}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{ 
        tabBarShowLabel: false, 
        tabBarActiveTintColor: "#ffa001", 
        tabBarInactiveTintColor: "#cdcde0", 
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        }
      }}>
        <Tabs.Screen name="home" options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({color, focused }) => (
            <TabIcon icon={icons.home} focused={focused} name="Home" color={color} />
          )
        }}  />
        <Tabs.Screen name="bookmark" options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({color, focused }) => (
            <TabIcon icon={icons.bookmark} focused={focused} name="Bookmark" color={color} />
          )
        }}  />
        <Tabs.Screen name="create" options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({color, focused }) => (
            <TabIcon icon={icons.plus} focused={focused} name="Create" color={color} />
          )
        }}  />
        <Tabs.Screen name="profile" options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({color, focused }) => (
            <TabIcon icon={icons.profile} focused={focused} name="Profile" color={color} />
          )
        }}  />
      </Tabs>
    </>
  )
}

export default TabsLayout