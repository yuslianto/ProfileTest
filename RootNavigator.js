import {
    StackNavigator
} from 'react-navigation';
import React, { Component } from 'react';
import {Text, Button, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

import NotificationDetail from '../Notifications/screens/NotificationDetail';
import ProfileList from '../Profile/screens/ProfileList';
import ProfileCreate from '../Profile/screens/ProfileCreate';


const RootNavigator = StackNavigator({
    ProfileList: {
        screen: ProfileList,
        navigationOptions: {
          title: 'Profile List'
        }
    },
    ProfileCreate: {
        screen: ProfileCreate,
        navigationOptions: {
          title: 'Profile Create'
        }
    },
})

export default RootNavigator;
