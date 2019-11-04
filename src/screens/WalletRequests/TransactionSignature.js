import React, {useState, useContext, useEffect} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {EthersContext} from 'modules/ethers-react-system';
import {WalletConnectContext} from 'modules/wallet-connect-system';
import {Text} from 'atoms';
import {View} from 'react-native';
const Transaction = props => {
  const [approve, setApproveStatus] = useState(false);
  const [request] = useState(props.navigation.state.params);
  const ethers = useContext(EthersContext);
  const wc = useContext(WalletConnectContext);

  console.log(approve, 'approveapprove');
  useEffect(() => {
    if (approve) {
      const runEffect = async () => {
        try {
          // All properties are optional
          const nonce = await ethers.providers.rinkeby.getTransactionCount(
            ethers.wallet.address,
          );
          let transaction = {
            nonce,
            gasLimit: request.params[0].gasLimit,
            gasPrice: request.params[0].gasPrice,
            to: request.params[0].to,
            value: request.params[0].value,
            data: request.params[0].data,
            chainId: 4,
          };

          const tx = await ethers.wallet.sign(transaction);
          // Approve Call Request
          wc.connections.approveRequest({
            id: request.id,
            result: tx,
          });
          console.log(tx, 'txtxtx');
        } catch (error) {
          console.log(error, 'txxno');
        }
      };
      runEffect();
    }
  }, [approve, request]);

  return (
    <View style={[styles.container]}>
      <View style={[styles.card]}>
        <Text style={styles.title}>Transactions</Text>
        <View style={{marginVertical: 20}}>
          <Text style={styles.text}>Transaction Request</Text>
          <Text style={styles.text}>{request.method}</Text>
          <Text style={styles.text}>From: {request.params[0].from}</Text>
          <Text style={styles.text}>To: {request.params[0].to}</Text>
          <Text style={styles.text}>Limit: {request.params[0].gasLimit}</Text>
          <Text style={styles.text}>Price: {request.params[0].gasPrice}</Text>
          <TouchableOpacity onPress={() => setApproveStatus(true)}>
            <Text style={styles.text}>Approve Transactions</Text>
          </TouchableOpacity>
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
