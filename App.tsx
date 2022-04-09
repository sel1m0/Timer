import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.clock}>
        <Text style={styles.time}>00:00</Text>
        <View style={styles.buttons}>
          <View style={styles.stopButton}></View>  
          <View style={styles.startButton}></View>
        </View>  
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  clock: {
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 350,
    width: "80%",
    height: "40%",
    alignItems: "center"
  },

  time: {
    marginTop: "30%",
    fontSize: 50,
    fontFamily: "monospace"
  },
  buttons: {
    width: "50%",
    marginTop: "10%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  startButton: {
    width: 0,
    height: 0,
    fontSize: 50,
    borderTopWidth: 25,
    borderBottomWidth: 25,
    borderLeftWidth: 30,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
  },
  stopButton: {
    width: 50,
    height: 50,
    backgroundColor: "black",
  }
});

