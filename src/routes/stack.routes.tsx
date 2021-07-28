import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Begin/Welcome';
import { ConfirmAccess } from '../pages/Begin/ConfirmAccess';
import { ModalityOptions } from '../pages/Begin/ModalityOptions';
import { Login } from '../pages/Begin/Login';

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
            name="ModalityOptions"
            component={ModalityOptions}

        />

        <stackRoutes.Screen
            name="Login"
            component={Login}

        />
        
    </stackRoutes.Navigator>
)

export default AppRoutes;