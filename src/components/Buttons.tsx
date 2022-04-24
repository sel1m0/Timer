import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface ButtonsProps {
  startTimer(): void;
  resetTimer(): void;
}

export function Buttons({ resetTimer, startTimer }: ButtonsProps) {
  return <View style={styles.buttons}>
    <TouchableOpacity style={styles.stopButton} onPress={resetTimer}></TouchableOpacity>
    <TouchableOpacity style={styles.startButton} onPress={startTimer}></TouchableOpacity>
  </View>;
}

const styles = StyleSheet.create({
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