import React, { useEffect, useState } from 'react'
import { Image, View, Text } from 'react-native';

import { profileGraphQL, getProfile, getProfiles, getVerifiedAccounts } from '3box/lib/api'

const QuestList = props => {

  useEffect( () => {
    if(props.address) {
      const runEffect = async () => {
        const profile = await getProfile(props.address)
        console.log(profile, 'profile')
      }
      runEffect()
      }
  }, [props.address])
 return(
    <View>
      <Text>{props.address}</Text>
    </View>
)}

export default QuestList