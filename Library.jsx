import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

function Library() {
  const muscles = [
    { id: 1, name: "All" },
    { id: 2, name: "Arms" },
    { id: 3, name: "Back" },
    { id: 4, name: "Chest" },
    { id: 5, name: "Core" },
    { id: 6, name: "Glutes" },
    { id: 7, name: "Legs" },
    { id: 8, name: "Shoulders" },
  ];
  const methods = [
    { id: 1, name: "Barbell" },
    { id: 2, name: "Bodyweight" },
    { id: 3, name: "Cable" },
    { id: 4, name: "Dumbbell" },
    { id: 5, name: "Machine" },
    { id: 6, name: "Smith Machine" },
  ];

  const [activeMuscle, setActiveMuscle] = useState("All");
  const [activeMethod, setActiveMethod] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Exercise Library</Text>
        <Text style={styles.caption}>
          {"\n"}
          Add your next exercise or group them together to create a workout plan
          {"\n"}
        </Text>
        <Text style={styles.next}>Next Workout: Chest & Legs</Text>
      </View>
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.muscles}>
            {muscles.map((muscle) => (
              <TouchableOpacity
                key={muscle.id}
                style={[
                  styles.muscle,
                  activeMuscle === muscle.name && styles.muscleActive,
                ]}
                onPress={() => setActiveMuscle(muscle.name)}
              >
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={1}
                  style={[
                    styles.muscleText,
                    activeMuscle === muscle.name && styles.muscleTextActive,
                  ]}
                >
                  {muscle.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <ScrollView
          style={styles.methodsScroll}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.methods}>
            {methods.map((method) => (
              <TouchableOpacity
                key={method.id}
                style={[
                  styles.method,
                  activeMethod === method.name && styles.methodActive,
                ]}
                onPress={() => {
                  if (activeMethod === method.name) {
                    setActiveMethod("");
                  } else {
                    setActiveMethod(method.name);
                  }
                }}
              >
                <Text
                  style={[
                    styles.methodText,
                    activeMethod === method.name && styles.methodTextActive,
                  ]}
                >
                  {method.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#364EFF",
    alignItems: "center",
  },
  top: {
    marginTop: 30,
    marginBottom: -20,
    height: height * 0.2,
    justifyContent: "center",
    padding: 50,
  },
  title: {
    fontFamily: "Inter_700Bold",
    color: "white",
    textTransform: "uppercase",
    fontSize: 13,
  },
  caption: {
    fontFamily: "Inter_700Bold",
    color: "white",
    fontSize: 13,
  },
  next: {
    right: 0,
    alignSelf: "flex-end",
    fontFamily: "Inter_400Regular",
    color: "white",
    fontSize: 14,
    backgroundColor: "#1E30B5",
    borderRadius: 7,
    padding: 5,
  },
  body: {
    flexDirection: "row",
    backgroundColor: "#fbfaf5",
    width: width,
    height: height * 0.8,
    borderRadius: 35,
    paddingBottom: 100,
  },
  muscles: {
    alignSelf: "stretch",
    justifySelf: "start",
    justifyContent: "space-around",
    textWrap: "nowrap",
    marginTop: "55",
    paddingRight: 20,
  },
  muscle: {
    justifyContent: "center",
    alignItems: "center",
    height: (height - 100) / 7,
    width: 85,
    borderRightWidth: 2,
    borderRightColor: "#E5E5E5",
  },
  muscleActive: {
    borderRightColor: "#000000",
    opacity: 0.8,
  },
  muscleText: {
    fontSize: 14,
    color: "#999999",
  },
  muscleTextActive: {
    color: "#000000",
  },
  methodsScroll: {
    flexDirection: "row",
    height: 45,
    paddingLeft: 10,
    marginTop: 10,
    marginRight: 5,
  },
  methods: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  method: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: "#818181",
    backgroundColor: "transparent",
    borderRadius: 18,
  },
  methodActive: {
    backgroundColor: "#364EFF",
  },
  methodText: {
    color: "#505050",
  },
  methodTextActive: {
    color: "white",
  },
});

export default Library;
