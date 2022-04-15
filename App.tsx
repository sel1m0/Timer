import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from "./src/Header";
import { useState, useEffect } from 'react';
import { secondsToString } from "./src/convertTime";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timeout: NodeJS.Timeout;
  
  useEffect(() => {
    if (isRunning) {
      timeout = setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
    }
  }, [timer, isRunning])

  function startTimer() {
    setIsRunning(true);
  }

  function resetTimer() {
    setIsRunning(false);
    clearTimeout(timeout);
    setTimer(0);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.clock}>
        <Text style={styles.time}>{secondsToString(timer)}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.stopButton} onPress={resetTimer}></TouchableOpacity>  
          <TouchableOpacity style={styles.startButton} onPress={startTimer}></TouchableOpacity>
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

