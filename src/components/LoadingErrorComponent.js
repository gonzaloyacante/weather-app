import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const LoadingErrorComponent = ({ isLoading, error, children }) => {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text style={styles.loading}>Cargando datos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Error: {error}</Text>
      </View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    fontSize: 18,
    color: "white",
  },
  error: {
    fontSize: 18,
    color: "#ff0000",
  },
});

export default LoadingErrorComponent;
