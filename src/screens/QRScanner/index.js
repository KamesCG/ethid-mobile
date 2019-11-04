import React, {createRef, useState, useContext} from 'react';
import {withNavigation} from 'react-navigation';
import {StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import {WalletConnectContext} from '../../modules/wallet-connect-system';

const QRScanner = props => {
  const walletConnect = useContext(WalletConnectContext);
  const [refCamera, setRef] = useState(createRef);
  const handleBarcodeDetected = values => {
    if (Array.isArray(values.barcodes)) {
      walletConnect.initConnection(values.barcodes[0]);
      props.navigation.navigate({
        routeName: 'Wallet',
      });
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref => setRef(ref)}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={handleBarcodeDetected}>
        <BarcodeMask
          width={300}
          height={300}
          showAnimatedLine={false}
          transparency={0.8}
        />
      </RNCamera>
    </View>
  );
};

export default withNavigation(QRScanner);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
