import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}> 
      <Stack.Screen name="index" /> {/* Tela 1 */}
      <Stack.Screen name="(tabs)" /> {/* Tela (tabs) */}
      <Stack.Screen name="(auth)" /> {/* Tela (auth) */}
      
      
      
    </Stack>
  );
}