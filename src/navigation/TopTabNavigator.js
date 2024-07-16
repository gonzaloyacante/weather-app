import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import TodayScreen from "../screens/TodayScreen";
import TomorrowScreen from "../screens/TomorrowScreen";
import FourteenDaysScreen from "../screens/FourteenDaysScreen";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="TodayScreen"
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: "bold",
          fontSize: 16,
        },
        tabBarStyle: {
          backgroundColor: "#333333",
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#aaaaaa",
        tabBarIndicatorStyle: {
          backgroundColor: "#ffffff",
        },
      }}>
      <Tab.Screen name="Hoy" component={TodayScreen} />
      <Tab.Screen name="Mañana" component={TomorrowScreen} />
      <Tab.Screen name="14 Días" component={FourteenDaysScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
