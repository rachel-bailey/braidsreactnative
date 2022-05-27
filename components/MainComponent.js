import React, { Component } from 'react';
import Home from './HomeComponent';
import SearchBraids from './SearchBraids';
import BraidInfo from './BraidInfoComponent';
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';


const BraidNavigator = createStackNavigator(
    {
        SearchBraids: { screen: SearchBraids },
        BraidInfo: { screen: BraidInfo }
    },
    {
        initialRouteName: 'SearchBraids',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#AC7D88'
            },
            headerTintColor: '#F8ECD1',
            headerTitleStyle: {
                color: '#F8ECD1'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    }, 
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#AC7D88'
            },
            headerTintColor: '#F8ECD1',
            headerTitleStyle: {
                color: '#F8ECD1'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator},
        BraidNavigator: { screen: BraidNavigator }
    },
    {
        drawerBackgroundColor: '#85586F'
    }
)

const AppNavigator= createAppContainer(MainNavigator);

class Main extends Component {

    render() {
        return (
            <View 
                style={{
                flex: 1, 
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        )
    }
}

export default Main;