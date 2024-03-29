import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 

// Import das paginas inicias

import { Welcome } from '../pages/Begin/Welcome';
import { ConfirmAccess } from '../pages/Begin/ConfirmAccess';
import { ModalityOptions } from '../pages/Begin/ModalityOptions';
import { Login } from '../pages/Begin/Login';

//  Import dos formularios

import { FormEmailCooperative } from '../pages/Forms/FormEmailCooperative';
import { FormPersonalDataCooperative } from '../pages/Forms/FormPersonalDataCooperative';
import { FormIdentificationCooperative } from '../pages/Forms/FormIdentificationCooperative';
import { FormContactCooperative } from '../pages/Forms/FormContactCooperative';
import { FormDescriptionCooperative } from '../pages/Forms/FormDescriptionCooperative';

import { FormIdentification } from '../pages/Forms/FormIdentification';
import { FormAddress } from '../pages/Forms/FormAddress';
import { FormPersonalData } from '../pages/Forms/FormPersonalData';
import { FormContact } from '../pages/Forms/FormContact';
import { FormNickname } from '../pages/Forms/FormNickname';
import { FormConfirmedCooperative } from '../pages/Forms/formConfirmedCooperative';
import { FormConfirmed } from '../pages/Forms/FormConfirmed';

// Import dos módulos

import { Feed } from '../pages/Modulos/Feed';

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

        {/* Formularios Coletores / Domesticos */}

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

        {/* Rota da Cooperativa */}

        <stackRoutes.Screen
            name="FormEmailCooperative"
            component={FormEmailCooperative}

        />

        <stackRoutes.Screen
            name="FormPersonalDataCooperative"
            component={FormPersonalDataCooperative}

        />

        <stackRoutes.Screen
            name="FormIdentificationCooperative"
            component={FormIdentificationCooperative}

        />

        <stackRoutes.Screen
            name="FormContactCooperative"
            component={FormContactCooperative}

        />

        <stackRoutes.Screen
            name="FormDescriptionCooperative"
            component={FormDescriptionCooperative}

        />

        {/* Finalização dos formulario */}

        <stackRoutes.Screen
            name="FormConfirmedCooperative"
            component={FormConfirmedCooperative}

        />
        

        <stackRoutes.Screen
            name="FormConfirmed"
            component={FormConfirmed}

        />

        {/* Modulos */}

        <stackRoutes.Screen 
            name="Feed"
            component={Feed}

        />
        
    </stackRoutes.Navigator>
)

export default AppRoutes;