import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import das paginas inicias

import { Welcome } from '../pages/Begin/Welcome';
import { ConfirmAccess } from '../pages/Begin/ConfirmAccess';
import { ModalityOptions } from '../pages/Begin/ModalityOptions';
import { Login } from '../pages/Begin/Login';

//  Import dos formularios

import { CadastroCooperativa } from '../pages/Forms/CadastroCooperativa';
import { CadastroCooperativa2 } from '../pages/Forms/CadastroCooperativa2';
import { CadastroCooperativa3 } from '../pages/Forms/CadastroCooperativa3';
import { CadastroCooperativa4 } from '../pages/Forms/CadastroCooperativa4';
import { CadastroCooperativa5 } from '../pages/Forms/CadastroCooperativa5';

import { FormIdentification } from '../pages/Forms/FormIdentification';
import { FormAddress } from '../pages/Forms/FormAddress';
import { FormPersonalData } from '../pages/Forms/FormPersonalData';
import { FormContact } from '../pages/Forms/FormContact';
import { FormNickname } from '../pages/Forms/FormNickname';
import { FormConfirmed } from '../pages/Forms/FormConfirmed';

// Import do aplicativos

import { Feed } from '../pages/Interface/Feed';

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
            name="Login"
            component={Login}

        />


        <stackRoutes.Screen
            name="ModalityOptions"
            component={ModalityOptions}

        />

        <stackRoutes.Screen
            name="FormIdentification"
            component={FormIdentification}

        />

        <stackRoutes.Screen
            name="FormAddress"
            component={FormAddress}

        />

        <stackRoutes.Screen
            name="FormPersonalData"
            component={FormPersonalData}

        />

        <stackRoutes.Screen
            name="FormContact"
            component={FormContact}

        />


        <stackRoutes.Screen
            name="FormNickname"
            component={FormNickname}

        />

        <stackRoutes.Screen
            name="FormConfirmed"
            component={FormConfirmed}

        />

        <stackRoutes.Screen
            name="CadastroCooperativa"
            component={CadastroCooperativa}

        />

        <stackRoutes.Screen
            name="CadastroCooperativa2"
            component={CadastroCooperativa2}

        />

        <stackRoutes.Screen
            name="CadastroCooperativa3"
            component={CadastroCooperativa3}

        />

        <stackRoutes.Screen
            name="CadastroCooperativa4"
            component={CadastroCooperativa4}

        />

        <stackRoutes.Screen
            name="CadastroCooperativa5"
            component={CadastroCooperativa5}

        />

        <stackRoutes.Screen 
            name="Feed"
            component={Feed}

        />
        
    </stackRoutes.Navigator>
)

export default AppRoutes;