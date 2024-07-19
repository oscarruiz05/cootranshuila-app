import { Tabs } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarActiveTintColor: "#16A34A",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Buscar",
          tabBarIcon: ({ color }) => <FontAwesome5 name="bus" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="tiquetes"
        options={{
          title: "Tiquetes",
          tabBarIcon: ({ color }) => <FontAwesome5 name="ticket-alt" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
