import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { ConfirmAccess } from '../pages/ConfirmAccess';
import { Header } from '../pages/Header';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions= {{
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >

        <stackRoutes.Screen 
            name="Welcome"
            component={Welcome}

        />

        <stackRoutes.Screen 
            name="ConfirmAccess"
            component={ConfirmAccess}

        />

        <stackRoutes.Screen 
            name="Header"
            component={Header}

        />

    </stackRoutes.Navigator>
)

export default AppRoutes;