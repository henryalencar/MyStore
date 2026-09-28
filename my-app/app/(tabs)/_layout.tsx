import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="rocket" color={color} size={24} /> 
          ),
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: "Configurações",
          tabBarLabel: "Config",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gear" size={24} color={color} /> 
          ),
        }}
      />
    </Tabs>
  );
}
