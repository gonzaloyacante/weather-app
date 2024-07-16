import { View } from "react-native";

import TopTabNavigator from "../navigation/TopTabNavigator.js";
import { NavigationContainer } from "@react-navigation/native";

// import { mainStyles as styles } from "../styles.js";

const Main = () => {
  return (
    <View>
      <NavigationContainer>
        <TopTabNavigator />
      </NavigationContainer>
      <View>Search</View>
      <View>Favorite</View>
    </View>
  );
};

export default Main;
