import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Countries from './Components/Countries';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Visiting Countries!
      </Text>
      <Countries/>
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
  header :{
    marginTop:100,
  }
});
