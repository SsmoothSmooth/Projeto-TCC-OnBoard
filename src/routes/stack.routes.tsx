import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Begin/Welcome';
import { ConfirmAccess } from '../pages/Begin/ConfirmAccess';
import { ModalityOptions } from '../pages/Begin/ModalityOptions';
import { Login } from '../pages/Begin/Login';

import { CadastroCooperativa } from '../pages/Forms/CadastroCooperativa';
import { CadastroCooperativa2 } from '../pages/Forms/CadastroCooperativa2';
import { CadastroCooperativa3 } from '../pages/Forms/CadastroCooperativa3';
import { CadastroCooperativa4 } from '../pages/Forms/CadastroCooperativa4';
import { CadastroCooperativa5 } from '../pages/Forms/CadastroCooperativa5';

import { CadastroDomestico } from '../pages/Forms/CadastroDomestico';
import { CadastroDomestico2 } from '../pages/Forms/CadastroDomestico2';
import { CadastroDomestico3 } from '../pages/Forms/CadastroDomestico3';
import { CadastroDomestico4 } from '../pages/Forms/CadastroDomestico4';
import { CadastroDomestico5 } from '../pages/Forms/CadastroDomestico5';

import { CadastroColetor } from '../pages/Forms/CadastroColetor';
import { CadastroColetor2 } from '../pages/Forms/CadastroColetor2';
import { CadastroColetor3 } from '../pages/Forms/CadastroColetor3';
import { CadastroColetor4 } from '../pages/Forms/CadastroColetor4';
import { CadastroColetor5 } from '../pages/Forms/CadastroColetor5';
import { CadastroColetor6 } from '../pages/Forms/CadastroColetor6';

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
            name="CadastroDomestico"
            component={CadastroDomestico}

        />

        <stackRoutes.Screen
            name="CadastroDomestico2"
            component={CadastroDomestico2}

        />

        <stackRoutes.Screen
            name="CadastroDomestico3"
            component={CadastroDomestico3}

        />

        <stackRoutes.Screen
            name="CadastroDomestico4"
            component={CadastroDomestico4}

        />

        <stackRoutes.Screen
            name="CadastroDomestico5"
            component={CadastroDomestico5}

        />

        <stackRoutes.Screen
            name="CadastroColetor"
            component={CadastroColetor}

        />

        <stackRoutes.Screen
            name="CadastroColetor2"
            component={CadastroColetor2}

        />

        <stackRoutes.Screen
            name="CadastroColetor3"
            component={CadastroColetor3}

        />

        <stackRoutes.Screen
            name="CadastroColetor4"
            component={CadastroColetor4}

        />


        <stackRoutes.Screen
            name="CadastroColetor6"
            component={CadastroColetor6}

        />

        <stackRoutes.Screen
            name="CadastroColetor5"
            component={CadastroColetor5}

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
        
    </stackRoutes.Navigator>
)

export default AppRoutes;