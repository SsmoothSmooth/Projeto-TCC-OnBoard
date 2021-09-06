import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

<<<<<<< HEAD
// Import das paginas inicias
=======
import { CadastroCooperativa } from '../pages/CadastroCooperativa';
import { CadastroCooperativa2 } from '../pages/CadastroCooperativa2';
import { CadastroCooperativa3 } from '../pages/CadastroCooperativa3';
import { CadastroCooperativa4 } from '../pages/CadastroCooperativa4';
import { CadastroCooperativa5 } from '../pages/CadastroCooperativa5';

import { CadastroDomestico } from '../pages/CadastroDomestico';
import { CadastroDomestico2 } from '../pages/CadastroDomestico2';
import { CadastroDomestico3 } from '../pages/CadastroDomestico3';
import { CadastroDomestico4 } from '../pages/CadastroDomestico4';
import { CadastroDomestico5 } from '../pages/CadastroDomestico5';

import { CadastroColetor } from '../pages/CadastroColetor';
import { CadastroColetor2 } from '../pages/CadastroColetor2';
import { CadastroColetor3 } from '../pages/CadastroColetor3';
import { CadastroColetor4 } from '../pages/CadastroColetor4';
import { CadastroColetor5 } from '../pages/CadastroColetor5';
import { CadastroColetor6 } from '../pages/CadastroColetor6';
import { TelaMenuColetor } from '../pages/TelaMenuColetor';
import { TabelaPrecoColetor } from '../pages/TelaMenuColetor';

>>>>>>> develop

import { Welcome } from '../pages/Welcome';
import { ConfirmAccess } from '../pages/ConfirmAccess';
import { ModalityOptions } from '../pages/ModalityOptions';
import { Login } from '../pages/Login';

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
<<<<<<< HEAD
            name="FormPersonalDataCooperative"
            component={FormPersonalDataCooperative}
=======
            name="CadastroColetor5"
            component={CadastroColetor5}

        />

        <stackRoutes.Screen
            name="CadastroColetor6"
            component={CadastroColetor6}
>>>>>>> develop

        />

        <stackRoutes.Screen
<<<<<<< HEAD
            name="FormIdentificationCooperative"
            component={FormIdentificationCooperative}
=======
            name="TelaMenuColetor"
            component={TelaMenuColetor}
>>>>>>> develop

        />

        <stackRoutes.Screen
<<<<<<< HEAD
            name="FormContactCooperative"
            component={FormContactCooperative}
=======
            name="TabelaPrecoColetor"
            component={TabelaPrecoColetor}

        />


        <stackRoutes.Screen
            name="CadastroCooperativa"
            component={CadastroCooperativa}
>>>>>>> develop

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