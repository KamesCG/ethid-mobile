import React from 'react'
import {
  Text,
  Image,
  View
} from 'react-native'
import Swiper from 'react-native-swiper'

const styles = {
  wrapper: {
  },
  slide: {
    paddingHorizontal: 10,
    padding: 10,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  description: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
}

export default () => (
<Swiper style={styles.wrapper} showsButtons>
  <View style={[styles.slide, styles.slide1]}>
    <Image
      source={{
        uri: 'https://images.ui8.net/uploads/slide_4_1529698464585.png'
      }}
      style={{
        borderRadius: 99999,
        maxWidth: 200
      }}
    />
    <Image
      source={require('../../../assets/images/RNS_nerd.png')}
      style={styles.nerdImage}
    />
    <Text style={styles.text}>Public</Text>
    <Text style={styles.description}>Save public profile data for others to view.</Text>
  </View>
  <View style={styles.slide2}>
    <Text style={styles.text}>Private</Text>
    <Text style={styles.description}>Store critical information privately. Move between applications.</Text>
  </View>
  <View style={styles.slide3}>
    <Text style={styles.text}>Messaging</Text>
    <Text style={styles.description}>Connect with communities using threads, chat and other other features..</Text>
  </View>
</Swiper>
)