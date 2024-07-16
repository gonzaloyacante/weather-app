import { StyleSheet } from "react-native";

// Variables de estilos compartidas
export const colors = {
  primaryBackground: "#333333",
  secondaryBackground: "#444444",
  textPrimary: "#ffffff",
  textSecondary: "#d3d3d3",
  primaryColor: "#ffffff",
  secondaryColor: "#d3d3d3",
};

export const fonts = {
  size: {
    regular: 16,
    medium: 18,
    large: 20,
    extraLarge: 24,
  },
  weights: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
};

export const spacing = {
  small: 5,
  medium: 10,
  large: 20,
};

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    padding: spacing.large,
  },
  text: {
    color: colors.textSecondary,
    fontSize: fonts.size.regular,
    fontWeight: fonts.weights.medium,
    marginBottom: spacing.small,
  },
  infoPrimaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: colors.secondaryColor,
    borderBottomWidth: 1,
    marginBottom: spacing.medium,
    paddingBottom: spacing.medium,
  },
  infoPrimaryDate: {
    color: colors.textPrimary,
    fontSize: fonts.size.medium,
    fontWeight: fonts.weights.bold,
    marginBottom: spacing.small,
  },
  infoPrimaryText: {
    color: colors.textSecondary,
    fontSize: fonts.size.regular,
    fontWeight: fonts.weights.medium,
    marginBottom: spacing.small,
  },
  infoPrimaryIcon: {
    width: 100,
    height: 80,
  },
});

// Estilos específicos para cada pantalla
export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    paddingTop: spacing.large,
  },
});

export const todayScreenStyles = StyleSheet.create({
  infoPrimaryTemp: {
    color: colors.textPrimary,
    fontSize: fonts.size.extraLarge,
    fontWeight: fonts.weights.bold,
    marginBottom: 0,
    textAlign: "center",
  },
  infoSecondaryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  infoSecondaryText: {
    color: colors.textSecondary,
    fontSize: fonts.size.regular,
    fontWeight: fonts.weights.medium,
    fontStyle: "italic",
    marginBottom: spacing.small,
  },
});

export const tomorrowScreenStyles = StyleSheet.create({
  infoSecondaryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  infoSecondaryText: {
    color: colors.textSecondary,
    fontSize: fonts.size.regular,
    fontWeight: fonts.weights.medium,
    fontStyle: "italic",
    marginBottom: spacing.small,
  },
});

export const fourteenDaysScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    alignItems: "center",
    padding: spacing.medium,
  },
  scrollView: {
    width: "100%",
  },
  dayContainer: {
    width: "100%",
    padding: spacing.medium,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: colors.textSecondary,
    borderBottomWidth: 1,
  },
  lastDayContainer: {
    borderBottomWidth: 0,
  },
  expandedDayContainer: {
    borderBottomWidth: 0,
  },
  date: {
    color: colors.textPrimary,
    fontSize: fonts.size.large,
    fontWeight: fonts.weights.bold,
    marginBottom: spacing.small,
  },
  text: {
    color: colors.textSecondary,
    fontSize: fonts.size.regular,
    fontWeight: fonts.weights.medium,
    marginBottom: spacing.small,
  },
  dayInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  dayInfoTemp: {
    marginLeft: spacing.medium,
    width: 66,
  },
  tempMax: {
    color: colors.textPrimary,
    fontSize: fonts.size.large,
    fontWeight: fonts.weights.bold,
    marginBottom: spacing.small,
  },
  tempMin: {
    color: colors.textSecondary,
    fontSize: fonts.size.regular,
    fontWeight: fonts.weights.medium,
  },
  icon: {
    width: 56,
    height: 56,
    marginRight: spacing.small,
  },
  expandedInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: spacing.medium,
    borderBottomColor: colors.secondaryColor,
    borderBottomWidth: 1,
  },
  expandedText: {
    fontStyle: "italic",
    color: colors.textSecondary,
    fontSize: fonts.size.regular,
    marginBottom: spacing.small,
  },
});
