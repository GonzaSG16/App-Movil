import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola señor tutor de la plataforma Coder</Text>
      <Text>Amo los Pet Shop Boys :D</Text>
      <Text>¿A vos te gustan?</Text>
      <Text>En particular a mi me gustan mucho las siguientes canciones:</Text>
      <Text>1. Love is a Bourgeois Construct - 2. Love Etc. - 3. So Hard</Text>
      <Text>Escuchalas. Probablemente te gusten mucho.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
