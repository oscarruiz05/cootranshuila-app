import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';

export function Screen({ children }) {
  return (
    <SafeAreaProvider>
      <LinearGradient
        start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
        locations={[0.3, 0.3]}
        colors={["#16A34A", "#F8F9FA"]}
        style={styles.linearGradient}
      >
        <View className="pt-16 px-4">
          {children}
        </View>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});