import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Text, View} from 'react-native';

import ModalView from 'react-native-modal';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera, FaceDetector} from 'react-native-camera';
const Modal = props => {
  const [isVisible, setIsVisible] = useState();
  const [refS, setRef] = useState(createRef());
  return (
    <View>
      <ModalView
        isVisible={isVisible}
        customBackdrop={
          <TouchableWithoutFeedback onPress={() => setIsVisible(!isVisible)}>
            <View style={{p: 10}} />
          </TouchableWithoutFeedback>
        }>
        <View
          style={{
            backgroundColor: '#FFF',
            color: '#000',
            padding: 20,
            borderRadius: 10,
          }}>
          <View
            style={{
              height: 100,
              width: 100,
            }}>
            <RNCamera
              ref={refS => {
                this.camera = refS;
              }}
              style={styles.preview}
              type={RNCamera.Constants.Type.back}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              onGoogleVisionBarcodesDetected={({barcodes}) => {
                console.log(barcodes);
              }}
            />
          </View>
          {props.content}
          <TouchableWithoutFeedback
            onPress={() => setIsVisible(!isVisible)}
            sx={{textAlign: 'center'}}>
            <Text style={{marginTop: 20}}>Go Back</Text>
          </TouchableWithoutFeedback>
        </View>
      </ModalView>
      <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
        <Text style={props.sx}>{props.label}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

Modal.defaultProps = {
  label: 'Open',
};

export default Modal;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
