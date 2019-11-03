import React from 'react';
import {
  StyleSheet,
  View,
  // Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {fonts, colors} from '@styles';
import {Text} from '../../../../components/StyledText';

import Box from '@atomic/atoms/View';
import Image from '@atomic/atoms/Image';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover">
        <View style={styles.section}>
          <Box>
            <Image
              dimensions="80px"
              source={require('../../../../assets/images/icons/mapColor.png')}
            />
          </Box>
          <Text size={22} bold white style={styles.title}>
            Start Adventures
          </Text>
          <TouchableOpacity onPress={props.navigation.openDrawer}>
            <Text>Create Profile</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
    width: '100%',
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
