import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import TopTabNavigator from "./TopTabNavigator";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        defaultStatus="closed"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#333333",
            width: 300,
          },
          headerStyle: {
            backgroundColor: "#333333",
          },
          headerTintColor: "#fff",
        }}>
        <Drawer.Screen name="Inicio" component={TopTabNavigator} />
        <Drawer.Screen name="Configuración" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
