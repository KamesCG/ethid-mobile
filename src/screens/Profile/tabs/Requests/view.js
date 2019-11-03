import React from 'react';
import {View, Image} from 'react-native';
import {RadioGroup} from '@components';

export default props => <View>{props.panels[props.tabIndex]}</View>;
