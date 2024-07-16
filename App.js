import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { appStyles as styles } from "./src/styles.js";

import DrawerNavigator from "./src/navigation/DrawerNavigator";

function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <DrawerNavigator />
    </View>
  );
}

export default App;
