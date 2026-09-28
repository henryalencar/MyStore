import { SafeAreaView, StyleSheet, Text, View, Image, Button } from "react-native";
import { router} from "expo-router";

export default function Index() {
  // Função para lidar com o clique do botão
  const handleEntrar = () => {
    router.push("/home"); // Navega para a tela2, ou use push para navegação empilhada

    console.log("Botão Entrar clicado!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require('../assets/logo.png')} 
        style={styles.logo} 
        resizeMode="cover" 
      />
      
      <View style={styles.contentContainer}>
        
        <View style={styles.row}>
          <Text style={[styles.titulo, styles.destaque]}>Jukas </Text>
          <Text style={[styles.titulo, styles.destaque]}>Store</Text>
        </View>
        
        <Text style={styles.subtitulo}>Aqui seu dinheiro rende mais!</Text>
        
        <Button title="Entrar" onPress={handleEntrar} />
        
        <Text style={styles.footerText}>Hello, EXPO ROUTER! - Henry INDEX</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row', 
  },
  logo: {
    width: 200,
    height: 200,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  destaque: {
    color: '#007AFF', 
  },
  subtitulo: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  footerText: {
    marginTop: 20,
    color: '#888',
  }
});
