import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 

// Import das paginas inicias { Begin }

import { Welcome } from '../pages/Begin/Welcome';
import { ConfirmAccess } from '../pages/Begin/ConfirmAccess';
import { ModalityOptions } from '../pages/Begin/ModalityOptions';
import { Login } from '../pages/Begin/Login';

//  Import dos formularios

// { Coletores }

import { C_Identification } from '../pages/Forms/Coletores/C_Identification';
import { C_Address } from '../pages/Forms/Coletores/C_Address';
import { C_PersonalData } from '../pages/Forms/Coletores/C_PersonalData';
import { C_Contact } from '../pages/Forms/Coletores/C_Contact';
import { C_Nickname } from '../pages/Forms/Coletores/C_Nickname';
import { C_Confirmed } from '../pages/Forms/Coletores/C_Confirmed';

// { Cooperativa }

import { Coop_Email } from '../pages/Forms/Cooperativa/Coop_Email';
import { Coop_PersonalData } from '../pages/Forms/Cooperativa/Coop_PersonalData';
import { Coop_Identification } from '../pages/Forms/Cooperativa/Coop_Identification';
import { Coop_Contact } from '../pages/Forms/Cooperativa/Coop_Contact';
import { Coop_Description } from '../pages/Forms/Cooperativa/Coop_Description';
import { Coop_Confirmed } from '../pages/Forms/Cooperativa/Coop_Confirmed';

// { Domestico }

import { D_Identification } from '../pages/Forms/Domesticos/D_Identification';
import { D_Address } from '../pages/Forms/Domesticos/D_Address';
import { D_PersonalData } from '../pages/Forms/Domesticos/D_PersonalData';
import { D_Contact } from '../pages/Forms/Domesticos/D_Contact';
import { D_Nickname } from '../pages/Forms/Domesticos/D_Nickname';
import { D_Confirmed } from '../pages/Forms/Domesticos/D_Confirmed';

// Import dos módulos

// { Coletores }

import { Mod_C_Feed } from '../pages/Modulos/Coletores/Mod_C_Feed';
import { Mod_C_Categoria } from '../pages/Modulos/Coletores/Mod_C_Categoria';
import { Mod_C_Tabela_Preco } from '../pages/Modulos/Coletores/Mod_C_Tabela_Preco';
import { Mod_C_TelaPerfil } from '../pages/Modulos/Coletores/Mod_C_TelaPerfil';
import { Mod_C_AlterarSenha } from '../pages/Modulos/Coletores/Mod_C_AlterarSenha';
import { Mod_C_Configuracoes } from '../pages/Modulos/Coletores/Mod_C_Configuracoes';
import { Mod_C_Ajuda} from '../pages/Modulos/Coletores/Mod_C_Ajuda';

// { Cooperativa }

import { Mod_Coop_Feed } from '../pages/Modulos/Cooperativas/Mod_Coop_Feed';
import { Mod_Coop_Campanha } from '../pages/Modulos/Cooperativas/Mod_Coop_Campanha';
import { Mod_Coop_Criar_Evento } from '../pages/Modulos/Cooperativas/Mod_Coop_Criar_Evento';
import { Mod_Coop_Menu } from '../pages/Modulos/Cooperativas/Mod_Coop_Menu';
import { Mod_Coop_Notificacao } from '../pages/Modulos/Cooperativas/Mod_Coop_Notificacao';
import { Mod_Coop_Tipo_Material } from '../pages/Modulos/Cooperativas/Mod_Coop_Tipo_Material';
import { Mod_Coop_TelaPerfil } from '../pages/Modulos/Cooperativas/Mod_Coop_TelaPerfil';
import { Mod_Coop_AlterarSenha } from '../pages/Modulos/Cooperativas/Mod_Coop_AlterarSenha';
import { Mod_Coop_Configuracoes } from '../pages/Modulos/Cooperativas/Mod_Coop_Configuracoes';
import { Mod_Coop_Ajuda} from '../pages/Modulos/Cooperativas/Mod_Coop_Ajuda';

// { Domestico }

import { Mod_D_Feed } from '../pages/Modulos/Domesticos/Mod_D_Feed';
import { Mod_D_Menu } from '../pages/Modulos/Domesticos/Mod_D_Menu';
import { Mod_D_Categoria } from '../pages/Modulos/Domesticos/Mod_D_Categoria';
import { Mod_D_Sacola } from '../pages/Modulos/Domesticos/Mod_D_Sacola';
import { Mod_D_Manual_Categoria } from '../pages/Modulos/Domesticos/Manual/Mod_D_Manual_Categoria';
import { Mod_D_Manual_Guia } from '../pages/Modulos/Domesticos/Manual/Mod_D_Manual_Guia';
import { Mod_D_Descarte } from '../pages/Modulos/Domesticos/Mod_D_Descarte';
import { Mod_D_TelaPerfil } from '../pages/Modulos/Domesticos/Mod_D_TelaPerfil';
import { Mod_D_AlterarSenha } from '../pages/Modulos/Domesticos/Mod_D_AlterarSenha';
import { Mod_D_Configuracoes } from '../pages/Modulos/Domesticos/Mod_D_Configuracoes';
import { Mod_D_Ajuda} from '../pages/Modulos/Domesticos/Mod_D_Ajuda';

// **********


import { Mod_C_Menu } from '../pages/Modulos/Coletores/Mod_C_Menu';
import Mod_C_Mapa from '../pages/Modulos/Coletores/Mod_C_Mapa';
import { Mod_C_Coleta } from '../pages/Modulos/Coletores/Mod_C_Coleta';
import Mod_C_Ponto_Venda from '../pages/Modulos/Coletores/Mod_C_Ponto_Venda';

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
        {/* BEGIN */}

        {/* Rota Begin */}

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

        {/*** End BEGIN ***/}

        {/* FORMULÁRIO*/}

        {/* Formulários Coletores */}

        <stackRoutes.Screen
            name="C_Identification"
            component={C_Identification}
        />

        <stackRoutes.Screen
            name="C_Address"
            component={C_Address}
        />

        <stackRoutes.Screen
            name="C_PersonalData"
            component={C_PersonalData}
        />

        <stackRoutes.Screen
            name="C_Contact"
            component={C_Contact}
        />

        <stackRoutes.Screen
            name="C_Nickname"
            component={C_Nickname}
        />

        <stackRoutes.Screen
            name="C_Confirmed"
            component={C_Confirmed}
        />

        {/* Formulários Cooperativas */}
        
        <stackRoutes.Screen
            name="Coop_Email"
            component={Coop_Email}
        />

        <stackRoutes.Screen
            name="Coop_PersonalData"
            component={Coop_PersonalData}
        />

        <stackRoutes.Screen
            name="Coop_Identification"
            component={Coop_Identification}
        />

        <stackRoutes.Screen
            name="Coop_Contact"
            component={Coop_Contact}
        />

        <stackRoutes.Screen
            name="Coop_Description"
            component={Coop_Description}
        />

        <stackRoutes.Screen
            name="Coop_Confirmed"
            component={Coop_Confirmed}
        />

        {/* Formulários Domésticos */}

        <stackRoutes.Screen
            name="D_Identification"
            component={D_Identification}
        />

        <stackRoutes.Screen
            name="D_Address"
            component={D_Address}
        />

        <stackRoutes.Screen
            name="D_PersonalData"
            component={D_PersonalData}
        />

        <stackRoutes.Screen
            name="D_Contact"
            component={D_Contact}
        />

        <stackRoutes.Screen
            name="D_Nickname"
            component={D_Nickname}
        />

        <stackRoutes.Screen
            name="D_Confirmed"
            component={D_Confirmed}
        />

        {/*** End FORMULÁRIO ***/}

        {/* MÓDULO */}

        {/* Módulos - Coletores */}

        <stackRoutes.Screen 
            name="Mod_C_Feed"
            component={Mod_C_Feed}
        />

        <stackRoutes.Screen 
            name="Mod_C_Menu"
            component={Mod_C_Menu}
        />

        <stackRoutes.Screen 
            name="Mod_C_Mapa"
            component={Mod_C_Mapa}
        />

        <stackRoutes.Screen 
            name="Mod_C_Ponto_Venda"
            component={Mod_C_Ponto_Venda}
        />

        <stackRoutes.Screen 
            name="Mod_C_Categoria"
            component={Mod_C_Categoria}
        />

        <stackRoutes.Screen 
            name="Mod_C_Tabela_Preco"
            component={Mod_C_Tabela_Preco}
        />

        <stackRoutes.Screen 
            name="Mod_C_TelaPerfil"
            component={Mod_C_TelaPerfil}
        />

        <stackRoutes.Screen 
            name="Mod_C_AlterarSenha"
            component={Mod_C_AlterarSenha}
        />

        <stackRoutes.Screen 
            name="Mod_C_Configuracoes"
            component={Mod_C_Configuracoes}
        />

        <stackRoutes.Screen 
            name="Mod_C_Ajuda"
            component={Mod_C_Ajuda}
        />

        <stackRoutes.Screen
            name="Mod_C_Coleta"
            component={Mod_C_Coleta}
        />


        {/* Módulos - Cooperativa */}

        <stackRoutes.Screen 
            name="Mod_Coop_Feed"
            component={Mod_Coop_Feed}
        />

        <stackRoutes.Screen 
            name="Mod_Coop_Menu"
            component={Mod_Coop_Menu}
        />

        <stackRoutes.Screen 
            name="Mod_Coop_Campanha"
            component={Mod_Coop_Campanha}
        />

        <stackRoutes.Screen 
            name="Mod_Coop_Criar_Evento"
            component={Mod_Coop_Criar_Evento}
        />

        <stackRoutes.Screen 
            name="Mod_Coop_Notificacao"
            component={Mod_Coop_Notificacao}
        />

        <stackRoutes.Screen 
            name="Mod_Coop_Tipo_Material"
            component={Mod_Coop_Tipo_Material}
        />

        <stackRoutes.Screen 
            name="Mod_Coop_TelaPerfil"
            component={Mod_Coop_TelaPerfil}
        />

        <stackRoutes.Screen 
            name="Mod_Coop_AlterarSenha"
            component={Mod_Coop_AlterarSenha}
        />

        <stackRoutes.Screen 
            name="Mod_Coop_Configuracoes"
            component={Mod_Coop_Configuracoes}
        />

        <stackRoutes.Screen 
            name="Mod_Coop_Ajuda"
            component={Mod_Coop_Ajuda}
        />


        {/* Módulos - Dómesticos */}

        <stackRoutes.Screen 
            name="Mod_D_Feed"
            component={Mod_D_Feed}
        />

        <stackRoutes.Screen 
            name="Mod_D_Menu"
            component={Mod_D_Menu}
        />

        <stackRoutes.Screen 
            name="Mod_D_Categoria"
            component={Mod_D_Categoria}
        />

        <stackRoutes.Screen 
            name="Mod_D_Descarte"
            component={Mod_D_Descarte}
        />

        <stackRoutes.Screen 
            name="Mod_D_Sacola"
            component={Mod_D_Sacola}
        />

        <stackRoutes.Screen 
            name="Mod_D_Manual_Categoria"
            component={Mod_D_Manual_Categoria}
        />

        <stackRoutes.Screen 
            name="Mod_D_Manual_Guia"
            component={Mod_D_Manual_Guia}
        />

        <stackRoutes.Screen 
            name="Mod_D_TelaPerfil"
            component={Mod_D_TelaPerfil}
        />

        <stackRoutes.Screen 
            name="Mod_D_AlterarSenha"
            component={Mod_D_AlterarSenha}
        />

        <stackRoutes.Screen 
            name="Mod_D_Configuracoes"
            component={Mod_D_Configuracoes}
        />

        <stackRoutes.Screen 
            name="Mod_D_Ajuda"
            component={Mod_D_Ajuda}
        />

        {/* Criando */}

        {/*** End MÓDULO ***/}


    </stackRoutes.Navigator>
)

export default AppRoutes;