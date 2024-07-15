import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

import Main from "./src/components/Main";

function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    paddingTop: 35,
  },
});

export default App;
