import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import TodayScreen from "../screens/TodayScreen";
import TomorrowScreen from "../screens/TomorrowScreen";
import FourteenDaysScreen from "../screens/FourteenDaysScreen";

import { colors, fonts } from "../styles.js";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="TodayScreen"
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: fonts.weights.bold,
          fontSize: fonts.size.medium,
        },
        tabBarStyle: {
          shadowColor: colors.primaryBackground,
          borderColor: colors.primaryBackground,
          borderWidth: 1,
          borderBottomWidth: 0,
          backgroundColor: colors.primaryBackground,
        },
        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: colors.secondaryColor,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primaryColor,
          height: 1,
        },
      }}>
      <Tab.Screen name="Hoy" component={TodayScreen} />
      <Tab.Screen name="Mañana" component={TomorrowScreen} />
      <Tab.Screen name="14 Días" component={FourteenDaysScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
