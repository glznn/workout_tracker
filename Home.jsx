import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

function Home({ active, onNavigate }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.welcome}>Hey, Raph</Text>
        <View style={styles.streak}>
          <Text style={styles.streakNum}>6 </Text>
          <Image source={require("./assets/flame.png")} style={styles.flame} />
        </View>
        <Text style={styles.topMessage}>
          You worked out for 6 days! You've been consistent :)
        </Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.bodyContent}></TouchableOpacity>
        <TouchableOpacity style={styles.bodyContent}></TouchableOpacity>
      </View>
      <View style={styles.start}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => onNavigate("Workout")}
        >
          <Text style={styles.btnText}>+ Start Workout</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.98,
    backgroundColor: "#fbfaf5",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: height * 0.14,
    backgroundColor: "#A4CDF7",
    width: width * 0.98,
    borderRadius: 12,
  },
  welcome: {
    width: 100,
    marginLeft: 16,
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    fontSize: 35,
    color: "white",
  },
  streak: {
    flexDirection: "row",
    justifyContent: "center",
    width: width * 0.25,
    marginLeft: 20,
  },
  streakNum: {
    fontSize: 35,
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    color: "white",
  },
  flame: {
    opacity: 0.8,
    width: 31,
    height: 38,
  },
  topMessage: {
    fontFamily: "Inter_700Bold",
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    flexWrap: "wrap",
    maxWidth: width * 0.45,
    padding: 10,
  },
  body: {
    marginTop: -50,
    gap: 10,
  },
  bodyContent: {
    width: width * 0.98,
    height: height * 0.25,
    backgroundColor: "#A4CDF7",
    borderRadius: 12,
  },
  btn: {
    backgroundColor: "yellowgreen",
    height: height * 0.05,
    width: width * 0.78,
    marginTop: -60,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontFamily: "Inter_700Bold",
    fontWeight: "semibold",
    fontSize: 16,
    color: "white",
  },
});

export default Home;
