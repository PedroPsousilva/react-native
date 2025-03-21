
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import CadastroIngressos from './screens/CadastroIngressos';
import CadastroEvento from './screens/CadastroEvento';
import CadastroOrganizador from './screens/CadastroOrganizador';
import Home from './screens/Home';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CadastroIngressos" component={CadastroIngressos}/>
        <Stack.Screen name="CadastroEvento" component={CadastroEvento}/>
        <Stack.Screen name="CadastroOrganizador" component={CadastroOrganizador}/> 

      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

