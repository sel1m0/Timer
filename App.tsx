import { Buttons } from './src/components/Buttons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from "./src/Header";
import { secondsToString } from "./src/convertTime";
import useTimer from './src/useTimer';
import Alarm from './src/components/Alarm';
import RoundButton from "./src/components/RoundButton";


export default function App() {
  const [timer, start, reset] = useTimer();


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.clock}>
        <Text style={styles.time}>{secondsToString(timer)}</Text>
        <Buttons resetTimer={reset} startTimer={start} />
      </View>
      <StatusBar style="auto" />

      <View style={styles.listContainer}>
        <View style={styles.plusButton}>
          <RoundButton type='green' text='+' onPress={() => null} />
        </View>
        <Alarm />
        <Alarm />
        <Alarm />
      </View>
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
  listContainer: {
    borderColor: "red",
    borderWidth: 1,
    marginTop: "5%",
    flex: 1,
    width: "80%"
  },
  plusButton: {
    alignSelf: "flex-end"
  }
});


