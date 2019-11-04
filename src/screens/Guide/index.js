import React from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper';
import {ButtonLink, Image, Modal, Flex, Text} from 'atoms';
import {colors, images} from '@styles';

const AuthenticationInformation = props => {
  return (
    <View>
      <Text style={{fontSize: 26}}>Authentication</Text>
      <Text style={{fontSize: 13}}>
        Authenticate with your decentralized identity anywhere. Authenticate
        with your decentralized identity anywhere.Authenticate with your
        decentralized identity anywhere.
      </Text>
    </View>
  );
};

export default () => (
  <Swiper style={styles.wrapper} showsButtons>
    <View style={[styles.slide, styles.slide1]}>
      <Image
        source={require('@assets/images/illustrations/authenticate.png')}
        resizeMode="contain"
        variants={['images.iconMedium']}
      />
      <Text style={styles.text}>Authentication</Text>
      <Text style={styles.description}>
        Authenticate with your decentralized identity anywhere.
      </Text>
      <ButtonLink to="Main" sx={{marginTop: 20}}>
        <Text>Create Account</Text>
      </ButtonLink>
      <Modal
        label="Learn More"
        sx={{color: 'white', marginTop: 20, padding: 5}}
        content={<AuthenticationInformation />}
      />
    </View>

    <View style={[styles.slide, styles.slide2]}>
      <Image
        source={require('@assets/images/illustrations/authenticate.png')}
        resizeMode="contain"
        variants={['images.iconMedium']}
      />
      <Text style={styles.text}>Storage</Text>
      <Text style={styles.description}>
        Save important inforamation in both public/private spaces.
      </Text>
      <ButtonLink to="Main" sx={{marginTop: 20}}>
        <Text>Create Account</Text>
      </ButtonLink>
      <Modal
        label="Learn More"
        sx={{color: 'white', marginTop: 20, padding: 5}}
        content={<AuthenticationInformation />}
      />
    </View>
    <View style={[styles.slide, styles.slide3]}>
      <Image
        source={require('@assets/images/illustrations/authenticate.png')}
        resizeMode="contain"
        variants={['images.iconMedium']}
      />
      <Text style={styles.text}>Messaging</Text>
      <Text style={styles.description}>
        Connect with communities using threads, chat and other other features.
      </Text>
      <ButtonLink to="Main" sx={{marginTop: 20}}>
        <Text>Create Account</Text>
      </ButtonLink>
      <Modal
        label="Learn More"
        sx={{color: 'white', marginTop: 20, padding: 5}}
        content={<AuthenticationInformation />}
      />
    </View>
  </Swiper>
);

const styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    padding: 10,
    textAlign: 'center',
  },
  slide1: {
    backgroundColor: colors.primary,
  },
  slide2: {
    backgroundColor: colors.primaryLight,
  },
  slide3: {
    backgroundColor: colors.primaryDark,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
  },
};
