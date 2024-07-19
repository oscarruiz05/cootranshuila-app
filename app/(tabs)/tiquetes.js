import { Link } from "expo-router";
import { Pressable, ScrollView, Text, StyleSheet } from "react-native";
import { styled } from "nativewind";
import { Screen } from "../../components/Screen";

export default function tiquetes() {
  return (
    <Screen>
      <ScrollView>
        <Text className="text-white font-bold mb-8 text-2xl">Tiquetes</Text>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
