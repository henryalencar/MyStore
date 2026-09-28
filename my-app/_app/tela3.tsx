import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native"; 

export default function Tela3() {
  const [count, setCount] = useState(0); 

  function handleSubtrair() {
    console.log("Subtraído");
    setCount(count - 1); 
  }

  {/*
    function handleVoltar() {
    router.back(); 
 }
    function handleVoltar() {
    // router.replace("/") volta para a index ou você pode usar router.back() para retornar à tela anterior
    router.replace("/"); 
  }
 */ }

  return ( 
    <SafeAreaView style={styles.container}>
      <View style={styles.content}> 
        <Text style={styles.text}>Hello, EXPO ROUTER! - Henry TELA TRÊS</Text> 
        
        <Text style={styles.counter}>{count}</Text>
        
        <View style={styles.buttonContainer}>
          <Button title="Subtrair" onPress={handleSubtrair} color="#ff3b30" /> 
          
        </View>
      </View> 
    </SafeAreaView> 
  ); 
} 

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5', 
  }, 
  content: {
    alignItems: 'center',
    gap: 20, 
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 48, 
    fontWeight: '600',
  },
  buttonContainer: {
    gap: 10,
    width: 200,
  }
});
