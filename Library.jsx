import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, Image, View } from "react-native";

const { width, height } = Dimensions.get("window");

function Library() {
  return (
    <View style={styles.container}>
      <Text>This is the Exercise Library</Text>
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

export default Library;
