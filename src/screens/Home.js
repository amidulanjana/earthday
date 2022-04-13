import { View, Text, StyleSheet, Image, ScrollView, Dimensions, Switch } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProgressBar from '../components/ProgressBar'

const { width, height } = Dimensions.get('screen')

const Card = ({ source, title, devicesCount, toggle, onToggle }) => (
  <View style={[styles.card, { backgroundColor: toggle ? '#fff' : '#0d793c' }]}>
    <View style={[styles.imageContent, { backgroundColor: toggle ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)' }]}>
      <Image style={styles.image} source={source} />
    </View>
    <Text style={[styles.cardTitle, toggle ? styles.inActiveText : styles.activeText]}>{title}</Text>
    <Text style={[styles.cardText, toggle ? styles.inActiveText : styles.activeText]}>{devicesCount} devices</Text>
    <View style={styles.switchContent}>
      <Text style={[styles.cardTitle, toggle ? styles.inActiveText : styles.activeText]}>{toggle ? 'On' : 'Off'}</Text>
      <Switch
        trackColor={{ false: "transparent", true: "transparent" }}
        thumbColor="#ffff"
        ios_backgroundColor="transparent"
        onValueChange={(value) => onToggle(value)}
        value={toggle}
        style={{
          borderWidth: 2,
          borderColor: '#ffff',
        }}
      />
    </View>
  </View>
)

const Home = () => {
  const [devices, setDevices] = useState({
    bulb: true,
    tv: true,
    airConditioner: true,
    fridge: true,
    iron: true,
    fan: true
  })
  const [consumption, setConsumption] = useState(Math.floor(Math.random() * 150) + 20)

  const onToggle = (label, value) => [
    setDevices({
      ...devices,
      [label]: value
    }),
    setConsumption(!value ? consumption + 5 : consumption - 5)
  ]

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome!</Text>
        <View style={styles.header}>
          <Text style={styles.headerText}>Aventude Smart Solutions</Text>
          <Image source={require("../assets/images/logo.png")} />
        </View>
        <View style={styles.saving}>
          <View style={styles.row}>
            <Image source={require("../assets/images/bulb-color.png")} style={{ marginRight: 15 }} />
            <Text style={styles.text}>Estimated energy saving this week</Text>
          </View>
          <ProgressBar
            progress={consumption}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <Card
            source={devices.bulb ? require("../assets/images/bulb.png") : require("../assets/images/bulb-alt.png")}
            title='Lamp'
            devicesCount={10}
            toggle={devices.bulb}
            onToggle={(value) => onToggle('bulb', value)}
          />
          <Card
            source={devices.tv ? require("../assets/images/tv.png") : require("../assets/images/tv-alt.png")}
            title='Smart TV'
            devicesCount={1}
            toggle={devices.tv}
            onToggle={(value) => onToggle('tv', value)}
          />
          <Card
            source={devices.airConditioner ? require("../assets/images/air-conditioner.png") : require("../assets/images/air-conditioner-alt.png")}
            title='Air Conditioner'
            devicesCount={2}
            toggle={devices.airConditioner}
            onToggle={(value) => onToggle('airConditioner', value)}
          />
          <Card
            source={devices.fridge ? require("../assets/images/fridge.png") : require("../assets/images/fridge-alt.png")}
            title='Fridge'
            devicesCount={1}
            toggle={devices.fridge}
            onToggle={(value) => onToggle('fridge', value)}
          />
          <Card
            source={devices.iron ? require("../assets/images/iron.png") : require("../assets/images/iron-alt.png")}
            title='Iron'
            devicesCount={2}
            toggle={devices.iron}
            onToggle={(value) => onToggle('iron', value)}
          />
          <Card
            source={devices.fan ? require("../assets/images/fan.png") : require("../assets/images/fan-alt.png")}
            title='Fan'
            devicesCount={4}
            toggle={devices.fan}
            onToggle={(value) => onToggle('fan', value)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  headerText: {
    fontSize: 21,
    fontWeight: '700'
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    flexShrink: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  saving: {
    borderWidth: 1,
    borderColor: '#e2e2e2',
    marginTop: 30,
    padding: 15,
    borderRadius: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    // flex: 1,
    width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  card: {
    width: width / 2 - 30,
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
  image: {
    height: 30,
    width: 30,
  },
  imageContent: {
    padding: 8,
    alignSelf: 'baseline',
    borderRadius: 50,
    marginBottom: 10
  },
  cardTitle: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: '700',
  },
  cardText: {
    color: '#ffff',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 10
  },
  switchContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  activeText: {
    color: '#ffff',
  },
  inActiveText: {
    color: '#000',
  }
})