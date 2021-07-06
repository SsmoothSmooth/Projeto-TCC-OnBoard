import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { ConfirmAccess } from '../pages/ConfirmAccess';
import { Login } from '../pages/Login';

import colors from '../styles/colors';
import { Password } from '../pages/Password';

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
            name="Login"
            component={Login}

        />

        <stackRoutes.Screen
            name="Password"
            component={Password}
        />




    </stackRoutes.Navigator>
)

export default AppRoutes;