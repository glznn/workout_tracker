import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

function BottomNav({ active, onNavigate }) {
  const menu = [
    { id: "1", name: "Home" },
    { id: "2", name: "Calendar" },
    { id: "3", name: "Workout" },
    { id: "4", name: "Progress" },
    { id: "5", name: "Search" },
  ];
  return (
    <View style={styles.container}>
      {menu.map((item) =>
        item.name === "Workout" ? (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => onNavigate("Workout")}
          >
            <View style={styles.btn}>
              <Image
                source={require("./assets/dumbbell.png")}
                style={styles.dumbbell}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => onNavigate(item.name)}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    overflow: "visible",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingVertical: 25,
  },
  item: {
    overflow: "visible",
    width: width / 5,
    alignItems: "center",
  },
  btn: {
    height: 60,
    width: 60,
    backgroundColor: "#775FFF",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
  },
  dumbbell: {
    width: 35,
    height: 35,
  },
});

export default BottomNav;
