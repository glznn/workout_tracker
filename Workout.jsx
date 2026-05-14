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

function Workout({ active, onNavigate }) {
  return (
    <View style={styles.container}>
      <Text>
        This is the Workout Page {"\n"}
        {"\n"}
      </Text>
      <TouchableOpacity
        style={styles.body}
        onPress={() => onNavigate("Library")}
      >
        <Text> Click here to navigate to the Exercise Library</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfaf5",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Workout;
