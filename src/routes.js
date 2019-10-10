import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Home,
            Cart,
        },
        {
            initialRouteName: 'Home',
            defaultNavigationOptions: navigation => ({
                headerTitle: <Header {...navigation} />,
                headerStyle: {
                    backgroundColor: '#141419',
                },
                headerTintColor: '#fff',
            }),
        }
    )
);

export default Routes;
