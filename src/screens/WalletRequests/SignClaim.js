import React, {useState, useContext, useEffect} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {EthersContext} from 'modules/ethers-react-system';
import {WalletConnectContext} from 'modules/wallet-connect-system';
import {Text} from 'atoms';
import {View} from 'react-native';
import {Button, Flex} from 'atoms';

// const ethers = useContext(EthersContext);
const SignClaim = props => {
  const [approve, setApproveStatus] = useState(false);
  const [request] = useState(props.navigation.state.params);
  const wc = useContext(WalletConnectContext);

  console.log(approve, 'approveapprove');
  useEffect(() => {
    if (approve === 1 || approve === -1) {
      console.log(approve, 'aprive run');
      const runEffect = async () => {
        switch (approve) {
          case 1:
            try {
              wc.connections.approveRequest({
                id: request.id,
                result: 'approved',
              });
              props.navigation.navigate({
                routeName: 'Wallet',
              });
            } catch (error) {
              console.log(error, 'txxno');
            }
            break;
          case -1:
            try {
              // wc.connections.rejectRequest({
              wc.connections.rejectRequest({
                id: request.id,
                error: {
                  code: 'USER_REJECTED', // optional
                  message: 'USER_REJECT_CLAIM_SIGNATURE', // optional
                },
              });
              props.navigation.navigate({
                routeName: 'Wallet',
              });
            } catch (error) {
              console.log(error, 'txxno');
            }
            break;

          default:
        }
        try {
          wc.connections.approveRequest({
            id: request.id,
            result: 'approved',
          });
          props.navigation.navigate({
            routeName: 'Wallet',
          });
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
        <Text style={styles.title}>Sign Claim</Text>
        <View style={styles.payload}>
          <Text style={styles.text}>method: {request.method}</Text>
          <Text style={styles.text}>
            space: {request.params[0].options.space}
          </Text>
          <Text style={styles.text}>From</Text>
          <Text style={styles.text}>{request.params[0].options.DID}</Text>
          <Text style={styles.text}>Payload:</Text>
          <Text style={styles.text}>{request.params[0].payload}</Text>
          <Flex>
            <TouchableOpacity onPress={() => setApproveStatus(1)}>
              <Button bg="green">Approve</Button>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setApproveStatus(-1)}>
              <Button bg="red" sx={{marginLeft: 7}}>
                Reject
              </Button>
            </TouchableOpacity>
          </Flex>
        </View>
      </View>
    </View>
  );
};

export default SignClaim;

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
  payload: {
    marginVertical: 20,
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
  button: {
    backgroundColor: 'blue',
    color: '#FFF',
  },
  text: {
    marginBottom: 6,
  },
};
