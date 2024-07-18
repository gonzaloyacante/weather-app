import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

import TopTabNavigator from "./TopTabNavigator";
import SettingsScreen from "../screens/SettingsScreen";

import { colors, fonts, spacing } from "../styles.js";
import { Text } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Inicio"
        defaultStatus="closed"
        screenOptions={{
          drawerStyle: {
            backgroundColor: colors.primaryBackground,
            width: 300,
          },
          drawerLabelStyle: {
            color: colors.textSecondary,
            fontSize: fonts.size.regular,
            fontWeight: fonts.weights.medium,
          },
          headerStyle: {
            backgroundColor: colors.primaryBackground,
          },
          headerTintColor: colors.textPrimary,
          headerTitleStyle: {
            fontSize: fonts.size.large,
            fontWeight: fonts.weights.bold,
          },
        }}>
        <Drawer.Screen
          name="Inicio"
          component={TopTabNavigator}
          options={{
            drawerLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: fonts.size.medium,
                  fontWeight: focused
                    ? fonts.weights.bold
                    : fonts.weights.medium,
                  color: focused ? colors.primaryColor : colors.secondaryColor,
                }}>
                Inicio
              </Text>
            ),
            drawerIcon: ({ size, focused }) => (
              <Icon
                name="home"
                color={focused ? colors.primaryColor : colors.secondaryColor}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Configuración"
          component={SettingsScreen}
          options={{
            drawerLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: fonts.size.medium,
                  fontWeight: focused
                    ? fonts.weights.bold
                    : fonts.weights.medium,
                  color: focused ? colors.primaryColor : colors.secondaryColor,
                }}>
                Configuración
              </Text>
            ),
            drawerIcon: ({ size, focused }) => (
              <Icon
                name="settings"
                color={focused ? colors.primaryColor : colors.secondaryColor}
                size={size}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
