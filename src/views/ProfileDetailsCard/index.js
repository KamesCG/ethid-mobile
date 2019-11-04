import React from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Heading from '@atomic/atoms/Heading';
import Avatar from '@atomic/atoms/Avatar';
import Card from '@atomic/atoms/Card';

import {shadows} from '@styles';

const DetailsCard = props => {
  return (
    <TouchableOpacity>
      <Card style={styles.card}>
        <View>
          <Avatar
            style={styles.image}
            source={{
              uri: props.icon,
            }}
            dimensions="32px"
          />
        </View>
        <View>
          <Heading style={styles.title}>{props.title}</Heading>
          <Text style={styles.tagline}>{props.tagline}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  card: {
    ...shadows.light,
    elevation: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  image: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 0,
  },
  tagline: {
    fontSize: 12,
  },
});
