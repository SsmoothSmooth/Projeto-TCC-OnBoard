import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { ConfirmAccess } from '../pages/ConfirmAccess';
import { TipoCadastro } from '../pages/TipoCadastro';
import { Login } from '../pages/Login';
import { Senha } from '../pages/Senha';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: 'white'
            },
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
            name="TipoCadastro"
            component={TipoCadastro}

        />

        <stackRoutes.Screen
            name="Login"
            component={Login}

        />

        <stackRoutes.Screen
            name="Senha"
            component={Senha}

        />

    </stackRoutes.Navigator>
)

export default AppRoutes;