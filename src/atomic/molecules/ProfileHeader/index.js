import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';

import {colors} from '@styles';
import Avatar from '@atomic/atoms/Avatar';
import Flex from '@atomic/atoms/Flex';

const avatar = {
  uri: 'https://imgur.com/PNKaT0K.png',
};

const bg = {
  uri: 'https://cache.desktopnexus.com/thumbseg/2485/2485768-bigthumbnail.jpg',
};

const ProfileHeader = props => {
  return (
    <>
      <ImageBackground style={styles.cover} source={bg}>
        <View style={styles.overlay}>
          <View style={styles.headerInner}>
            <View style={styles.avatar}>
              <Avatar source={avatar} dimensions={'52px'} />
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>
                {props.name.first}{' '}
                <Text style={styles.tagline}>{props.name.last}</Text>
              </Text>
              {/* Tags */}
              <Flex style={{marginTop: 5}}>
                <Text style={styles.details}>
                  {props.details.occupation} {props.details.employer}
                </Text>
              </Flex>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  headerInner: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    marginLeft: 10,
  },
  avatar: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,1)',
    borderStyle: 'solid',
    borderRadius: 9999,
    padding: 4,
  },
  cover: {
    height: 150,
    width: 500,
  },
  overlay: {
    backgroundColor: 'rgba(1,30,170,0.65)',
    height: 220,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  bg: {
    backgroundColor: colors.blue,
    width: 500,
    height: 350,
    position: 'absolute',
  },
  image: {
    width: 500,
    height: 350,
    resizeMode: 'center',
    position: 'absolute',
  },
  header: {
    color: '#FFF',
    width: 700,
  },
  main: {
    padding: 25,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
  },
  tagline: {
    color: '#FFF',
    fontSize: 18,
  },
  details: {
    color: '#FFF',
    fontSize: 14,
  },
  actionContainer: {
    padding: 20,
  },
  button: {
    marginHorizontal: 7,
  },
});
