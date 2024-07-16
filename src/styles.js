import { StyleSheet } from "react-native";

// const commonStyles = {
//   container: {
//     flex: 1,
//     backgroundColor: "#333333",
//     padding: 10,
//   },
//   text: {
//     color: "#d3d3d3",
//     fontSize: 16,
//     fontWeight: "500",
//     marginBottom: 5,
//   },
// };

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    paddingTop: 40,
  },
});

export const todayScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    padding: 20,
  },
  infoPrimaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingBottom: 20,
  },
  infoPrimaryDate: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  infoPrimaryText: {
    color: "#d3d3d3",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  infoPrimaryIcon: {
    width: 100,
    height: 80,
  },
  infoPrimaryTemp: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 0,
    textAlign: "center",
  },
  infoSecondaryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  infoSecondaryText: {
    color: "#d3d3d3",
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "italic",
    marginBottom: 5,
  },
});

export const tomorrowScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    padding: 20,
  },
  infoPrimaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingBottom: 20,
  },
  infoPrimaryDate: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  infoPrimaryText: {
    color: "#d3d3d3",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  infoPrimaryIcon: {
    width: 100,
    height: 80,
  },
  infoPrimaryTemp: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 0,
    textAlign: "center",
  },
  infoSecondaryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  infoSecondaryText: {
    color: "#d3d3d3",
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "italic",
    marginBottom: 5,
  },
});

export const fourteenDaysScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    alignItems: "center",
    padding: 10,
  },
  scrollView: {
    width: "100%",
  },
  dayContainer: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  lastDayContainer: {
    borderBottomWidth: 0,
  },
  expandedDayContainer: {
    borderBottomWidth: 0,
  },
  date: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    color: "#d3d3d3",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  dayInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  dayInfoTemp: {
    marginLeft: 10,
    width: 64,
  },
  tempMax: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  tempMin: {
    color: "#d3d3d3",
    fontSize: 16,
    fontWeight: "600",
  },
  icon: {
    width: 56,
    height: 56,
    marginRight: 5,
  },
  expandedInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  expandedText: {
    fontStyle: "italic",
    color: "#fff",
    fontSize: 16,
    marginBottom: 5,
  },
});
