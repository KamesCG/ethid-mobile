import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {View} from 'react-native';
import {ImageBackground} from 'react-native';
import {ButtonLink, Modal, Flex, Text} from 'atoms';

import PersonalSignature from './PersonalSignature';
import Signature from './Signature';
import TransactionSignature from './TransactionSignature';

const Request = (method, props) =>
  ({
    eth_sign: <Signature {...props} />,
    personal_sign: <PersonalSignature {...props} />,
    eth_signTransaction: <TransactionSignature {...props} />,
    eth_sendTransaction: <TransactionSignature {...props} />,
  }[method]);

export default props => {
  const [request] = useState(props.navigation && props.navigation.state.params);
  useEffect(() => {}, []);
  console.log(request, props, 'wallet requests');
  return (
    <ImageBackground
      style={{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
      }}
      source={bg}>
      {Request(request.method, props)}
    </ImageBackground>
  );
};

const bg = {
  uri:
    'https://i.pinimg.com/originals/f7/f6/8f/f7f68f4ef9e52fea71f91547c99e2431.jpg',
};

const styles = {
  wrapper: {},
  cover: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  container: {
    backgroundColor: 'rgba(3, 78, 252, 0.5)',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    paddingVertical: 30,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    display: 'flex',
    width: Dimensions.get('window').width / 1.2,
    padding: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: '300',
    textAlign: 'center',
  },
  text: {
    marginBottom: 10,
  },
};
