import React from 'react';
import {withNavigation} from 'react-navigation';
import {Dimensions} from 'react-native';
import {View} from 'react-native';
import {ImageBackground} from 'react-native';
import {ButtonLink, Modal, Flex, Text} from 'atoms';
import {SetNavigation} from '../../modules/wallet-connect-system';
import {SvgUri} from 'react-native-svg';
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

const Authentication = props => (
  <ImageBackground style={styles.cover} source={bg}>
    <SetNavigation navigation={props.navigation} />
    <View style={[styles.slide, styles.slide1]}>
      <Text style={styles.title}>ΞID</Text>
      <Flex
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
          width: '60%',
        }}>
        <ButtonLink to="Wallet" sx={{}}>
          <Text>Wallet</Text>
        </ButtonLink>
        <ButtonLink to="Main" sx={{}}>
          <Text>Identity</Text>
        </ButtonLink>
      </Flex>
      <Flex style={{marginTop: 40}}>
        <Modal
          label="Apps"
          sx={{color: 'white', padding: 5}}
          content={<InformationModal />}
        />
        <ButtonLink to="QRScanner" sx={{marginHorizontal: 10}}>
          <SvgUri
            style={styles.icon}
            width="18"
            height="18"
            uri="https://image.flaticon.com/icons/svg/1058/1058992.svg"
          />
        </ButtonLink>
        <Modal
          label="Learn"
          sx={{color: 'white', padding: 5}}
          content={<InformationModal />}
        />
      </Flex>
    </View>
  </ImageBackground>
);

export default withNavigation(Authentication);

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
