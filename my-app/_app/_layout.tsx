import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}> 
      <Stack.Screen name="index" /> {/* Tela 1 */}
      <Stack.Screen name="tela2" /> {/* Tela 2 */}
      <Stack.Screen name="tela3" /> {/* Tela 3 */}


      {/* <Stack.Screen name="tela_lampada" /> {/* Tela da lâmpada */}
      
      
      
      
    </Stack>
  );
}