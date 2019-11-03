import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Text, View} from 'react-native';

import ModalView from 'react-native-modal';
import {Button} from 'atoms';

const Modal = props => {
  const [isVisible, setIsVisible] = useState();
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
