import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.fill, { width: `${progress / 200 * 100}%` }]}>
        <Text style={styles.text}>|</Text>
      </View>
      <Text style={styles.total}>200kwh</Text>
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#dfede5',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  fill: {
    backgroundColor: '#0d793c',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  text: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: '700',
    marginRight: 10
  },
  total: {
    color: '#878A8F',
    right: 10,
    fontWeight: '600',
    position: 'absolute'
  }
})