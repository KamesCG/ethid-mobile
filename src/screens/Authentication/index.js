import React from 'react';
import {Dimensions, Platform} from 'react-native';
import {View} from 'react-native';
import {ImageBackground, StyleSheet} from 'react-native';
import {ButtonLink, Image, Modal, Flex, Text} from 'atoms';
import {colors, images} from '@styles';
const avatar = {
  uri: 'https://imgur.com/PNKaT0K.png',
};

const bg = {
  uri:
    'https://i.pinimg.com/originals/f7/f6/8f/f7f68f4ef9e52fea71f91547c99e2431.jpg',
};

const InformationModal = props => {
  return (
    <View>
      <Text style={{fontSize: 26}}>What Is ΞID</Text>
      <Text style={styles.text}>
        The ΞID Mobile Wallet is an experiment to test decentralized identity in
        a mobile environment.
      </Text>
      <Text style={styles.text}>
        The application relies entirely on 3Box and 3ID to implement the
        decentralized identity specification and feautres.
      </Text>
      <Text style={styles.text}>MIT Licensed. Enjoy the experiment.</Text>
    </View>
  );
};

export default () => (
  <ImageBackground style={styles.cover} source={bg}>
    <View style={[styles.slide, styles.slide1]}>
      {/* <Image
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1125210143484985344/6Kae1Al3_400x400.png',
        }}
        style={{
          borderRadius: 999999,
        }}
        height={70}
        width={70}
        resizeMode="contain"
        variants={['images.iconMedium']}
      /> */}
      <Text style={styles.title}>ΞID</Text>
      <Flex style={{alignItems: 'center', marginVertical: 20}}>
        <ButtonLink to="Main" sx={{}}>
          <Text>Login</Text>
        </ButtonLink>
        <Modal
          label="Learn"
          sx={{color: 'white', marginLeft: 20, padding: 5}}
          content={<InformationModal />}
        />
      </Flex>
      {/* <Text style={styles.description}>Access Web3</Text> */}
    </View>
  </ImageBackground>
);

const styles = {
  wrapper: {},
  cover: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    padding: 10,
    textAlign: 'center',
  },
  slide1: {
    backgroundColor: 'rgba(3, 78, 252,0.5)',
  },
  title: {
    color: '#fff',
    fontSize: 58,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    color: '#fff',
    fontSize: 18,
    marginTop: 20,
    fontWeight: '300',
    textAlign: 'center',
  },
  text: {
    marginBottom: 10,
  },
};
