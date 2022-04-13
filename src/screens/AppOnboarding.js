import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen')

const AppOnboarding = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={require("../assets/images/onboarding.png")} style={styles.image} />
        <Text style={styles.title}>Control your daily energy consumptions</Text>
        <Text style={styles.note}>Always save your electrical energy needs to protect the earth</Text>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Getting started</Text></Pressable>
      </View>
    </SafeAreaView>
  )
}

export default AppOnboarding

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: width,
    height: width
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
  note: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#0d793c',
    padding: 20,
    borderRadius: 30,
    width: width / 2,
    marginTop: 50
  },
  buttonText: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  }
})