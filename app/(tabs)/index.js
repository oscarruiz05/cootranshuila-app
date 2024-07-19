import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { styled } from "nativewind";
import { Screen } from "../../components/Screen";
const StyledPressable = styled(Pressable);

export default function index() {
  return (
    <Screen>
      <ScrollView>
        <Text className="text-white font-bold mb-8 text-2xl">
          Coostranshuila
        </Text>
      </ScrollView>
    </Screen>
  );
}
