import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}> 
      <Stack.Screen name="index" /> {/* Tela 1 */}
      <Stack.Screen name="(tabs)" /> {/* Tela (tabs) */}
      
      
      
    </Stack>
  );
}