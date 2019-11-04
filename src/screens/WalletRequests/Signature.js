import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {Text} from 'atoms';
import {View} from 'react-native';
const Transaction = props => {
  const [request] = useState(props.navigation.state.params);
  return (
    <View style={[styles.container]}>
      <View style={[styles.card]}>
        <Text style={styles.title}>Signature</Text>
        <View style={{marginVertical: 20}}>
          <Text style={styles.text}>Transaction Request</Text>
          <Text style={styles.text}>{request.method}</Text>
          <Text style={styles.text}>From: {request.params[0].from}</Text>
          <Text style={styles.text}>To: {request.params[0].to}</Text>
          <Text style={styles.text}>Limit: {request.params[0].gasLimit}</Text>
          <Text style={styles.text}>Price: {request.params[0].gasPrice}</Text>
        </View>
      </View>
    </View>
  );
};

export default Transaction;

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
