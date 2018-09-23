import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { StackNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Calendar from './screens/calendar';
import Profile from './screens/profile';
import Results from './screens/results';
import Categories from './screens/categories';
import EventChange from './screens/events_change';

let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
    'Profile': {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => <Icon name="face" type="material-community" size={28} color={tintColor} />
        },
    },
    'Calendar': {
        screen: Calendar,
        navigationOptions: {
            tabBarLabel: 'Calendar',
            tabBarIcon: ({ tintColor }) => <Icon name="calendar" type="material-community" size={28} color={tintColor} />
        },
    },
    'Results': {
        screen: Results,
        navigationOptions: {
            tabBarLabel: 'Results',
            tabBarIcon: ({ tintColor }) => <Icon name="chart-bar" type="material-community" size={28} color={tintColor} />
        },
    },
    'Categories': {
        screen: Categories,
        navigationOptions: {
            tabBarLabel: 'Categories',
            tabBarIcon: ({ tintColor }) => <Icon name="format-list-checkbox" type="material-community" size={28} color={tintColor} />
        },
    },
}, {
initialRouteName: 'Calendar',
    });

export const EventStack = createStackNavigator({
    Calendar: {
        screen: Calendar,
        navigationOptions: ({navigation}) => ({
            header:null
        })
    },
    EventChange: {
        screen: EventChange,
        navigationOptions: ({navigation}) => ({
            header: null,
            tabBarVisable: false,
            gesturesEnabled: false
        }) 
    }
})

export const createRootNavigator = () => {
    return createStackNavigator(
        {
            Tabs: {
                screen: Tabs,
                navigationOptions: {
                    gesturesEnabled: false
                }
            },
            EventChange: {
                screen: EventStack,
                navigationOptions: {
                    gesturesEnabled: false
                }
            }
        },
        {
            headerMode: "none",
            mode: "modal"
        }
    );
};