
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native"; 
import { router } from "expo-router"; 

export default function tela2() { 
  const [count, setCount] = useState(999);

  function handleAdd() {
    console.log("Adicionado");
    setCount(count + 1); 
  }
  function irParaTela3() {
    router.replace("/tela3"); 
  }

  return ( 
    <SafeAreaView style={styles.container}>
      <View style={styles.content}> 
        <Text style={styles.text}>Hello, EXPO ROUTER! - Henry TELA DOIS</Text> 
        <Text style={styles.text}>{count}</Text>
        
        <Button title="Adicionar" onPress={handleAdd} /> 
        
        <Button title="Ir para Tela 3" onPress={irParaTela3} color="#007AFF" /> 
      </View> 
    </SafeAreaView> 
  ); 
} 

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  content: {
    alignItems: 'center',
    gap: 15, 
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    gap: 10,
    width: 200,
  }
});
