import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";
import { useState } from "react";

const { width, height } = Dimensions.get("window");

function Exercise({ name, method }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.exercise}> {name}</Text>
        <Text style={styles.method}> ({method})</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height / 6,
    width: width / 3,
    marginBottom: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  exercise: {
    color: "white",
    textAlign: "center",
  },
  method: {
    color: "white",
    textAlign: "center",
  },
});

export default Exercise;
