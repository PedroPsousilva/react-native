import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import CadastroIngressos from "./screens/CadastroIngressos";
import EventosScreens from "./screens/EventoScreens";
import CadastroEvento from "./screens/CadastroEvento";
import CadastroOrganizador from "./screens/CadastroOrganizador";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Layout from "./components/Layout";
// import TaskList from './screens/TaskList';
// import TaskDetail from './screens/TaskDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="EventoScreens">
          {() => (
            <Layout>
              <EventosScreens />
            </Layout>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Cadastro"
          component={() => (
            <Layout>
              <Cadastro />
            </Layout>
          )}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadastroIngressos" component={CadastroIngressos} />
        <Stack.Screen name="CadastroEvento" component={CadastroEvento} />
        <Stack.Screen
          name="CadastroOrganizador"
          component={CadastroOrganizador}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
