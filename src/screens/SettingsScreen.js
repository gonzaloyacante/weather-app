import { Text, View, StyleSheet } from "react-native";

import { commonStyles, colors, fonts } from "../styles.js";

const SettingsScreen = () => {
  return (
    <View style={commonStyles.container}>
      <Text
        style={StyleSheet.compose({
          color: colors.textPrimary,
          fontSize: fonts.size.extraLarge,
          fontWeight: fonts.weights.bold,
        })}>
        Configuración
      </Text>
    </View>
  );
};

export default SettingsScreen;
