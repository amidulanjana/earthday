import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('screen')

const random = Math.floor(Math.random() * 3) + 1

const calculateRandom = (max, min) => (Math.random() * (max - min + 1) + min)

const Line = ({ progress }) => (
  <View style={styles.line}>
    <View style={[styles.lineProgress, { width: `${progress / 200 * 100}%` }]} />
  </View>
)

const BottomSheetContent = ({ consumption }) => {
  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <AnimatedCircularProgress
        arcSweepAngle={180}
        rotation={270}
        size={width * (2 / 3)}
        lineCap='round'
        width={8}
        fill={consumption / 200 * 100}
        tintColor="#0d793c"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#dfede5" >
        {
          (fill) => (
            <View style={styles.progressContent}>
              <Text style={styles.text}>Savings</Text>
              <Text style={styles.fill}>{consumption}</Text>
            </View>
          )
        }
      </AnimatedCircularProgress>
      <View style={styles.progress}>
        <Text style={styles.text}>0Kwh</Text>
        <Text style={[styles.text, { color: '#0d793c' }]}>{consumption > 100 ? 'Good' : "Improve"}</Text>
        <Text style={styles.text}>200Kwh</Text>
      </View>
      <View style={[styles.card, { marginTop: 20 }]}>
        <View style={styles.row}>
          <Text style={styles.text}>Savings</Text>
          <Text style={styles.text}>Savings Target</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>{consumption}</Text>
          <Text style={styles.title}>200Kwh</Text>
        </View>
        <Line progress={consumption} />
      </View>

      <View style={[styles.card]}>
        <View style={styles.row}>
          <Text style={styles.title}>Lamp</Text>
          <Text style={styles.title}>{parseInt(consumption / 6 * calculateRandom(2, 1))}Kwh <Text style={styles.text}>Saving</Text></Text>
        </View>
        <Line progress={parseInt(consumption / 6 * calculateRandom(2, 1))} />
      </View>

      <View style={[styles.card]}>
        <View style={styles.row}>
          <Text style={styles.title}>Smart Tv</Text>
          <Text style={styles.title}>{parseInt(consumption / 6 * calculateRandom(2, 1))}Kwh <Text style={styles.text}>Saving</Text ></Text>
        </View>
        <Line progress={parseInt(consumption / 6 * calculateRandom(2, 1))} />
      </View>

      <View style={[styles.card]}>
        <View style={styles.row}>
          <Text style={styles.title}>Air Conditioner</Text>
          <Text style={styles.title}>{parseInt(consumption / 6 * calculateRandom(2, 1))}Kwh <Text style={styles.text}>Saving</Text></Text>
        </View>
        <Line progress={parseInt(consumption / 6 * calculateRandom(2, 1))} />
      </View>

      <View style={[styles.card]}>
        <View style={styles.row}>
          <Text style={styles.title}>Iron</Text>
          <Text style={styles.title}>{parseInt(consumption / 6 * calculateRandom(2, 1))}Kwh <Text style={styles.text}>Saving</Text></Text>
        </View>
        <Line progress={parseInt(consumption / 6 * calculateRandom(2, 1))} />
      </View>

      <View style={[styles.card]}>
        <View style={styles.row}>
          <Text style={styles.title}>Fridge</Text>
          <Text style={styles.title}>{parseInt(consumption / 6 * calculateRandom(2, 1))}Kwh <Text style={styles.text}>Saving</Text></Text>
        </View>
        <Line progress={parseInt(consumption / 6 * calculateRandom(2, 1))} />
      </View>
    </ScrollView >
  )
}

export default BottomSheetContent

const styles = StyleSheet.create({
  content: {
    padding: 20,
    // flex: 1,
    alignItems: 'center'
  },
  progress: {
    width: width * (2 / 3) + 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -width * (1 / 3) + 10,
  },
  progressContent: {
    marginTop: -width * (1 / 3) + 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fill: {
    fontSize: 36,
    fontWeight: '700'
  },
  text: {
    fontSize: 14,
    color: '#878A8F',
    marginBottom: 5
  },
  title: {
    fontSize: 18,
    fontWeight: '600'
  },
  card: {
    backgroundColor: '#fff',
    width: width - 40,
    marginHorizontal: 10,
    marginBottom: 20,
    padding: 20,
    borderRadius: 20,
    shadowColor: "#334454",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  line: {
    height: 8,
    backgroundColor: '#dfede5',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  lineProgress: {
    backgroundColor: '#0d793c',
    height: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
})