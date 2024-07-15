import { View } from "react-native";

import Navigation from "../navigation/Navigation.js";
import { NavigationContainer } from "@react-navigation/native";

import { mainStyles as styles } from "../styles.js";

const Main = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Navigation />
      </View>
    </NavigationContainer>
  );
};

export default Main;
