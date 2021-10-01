import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 

<<<<<<< HEAD
import { Welcome } from '../pages/Welcome';
import { ConfirmAccess } from '../pages/ConfirmAccess';
import { ModalityOptions } from '../pages/ModalityOptions';
import { Login } from '../pages/Login';
import { Password } from '../pages/Password';
import { TelaPerfilColetores } from '../pages/TelaPerfilColetores'
=======
// Import das paginas inicias
>>>>>>> 510429b2c30817d1a7180be5c79ffbcfb3c64387

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

<<<<<<< HEAD
        <stackRoutes.Screen 
            name="TelaPerfilColetores"
            component={TelaPerfilColetores}
=======
        <stackRoutes.Screen
            name="FormPersonalData"
            component={FormPersonalData}
>>>>>>> 510429b2c30817d1a7180be5c79ffbcfb3c64387

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