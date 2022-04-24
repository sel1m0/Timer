import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface RoundButtonProps {
  type: "red" | "green",
  text: string,
  onPress: () => void
}

export default function RoundButton({ type, text, onPress }: RoundButtonProps) {
  let buttonStyles;
  if (type === "green") {
    buttonStyles = [styles.roundButton, styles.green];
  } else if (type === "red") {
    buttonStyles = [styles.roundButton, styles.red];
  }

  return <TouchableOpacity onPress={onPress} style={buttonStyles}>
    <Text style={styles.roundButtonText}>{text}</Text>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  roundButton: {
    backgroundColor: "#00aa00",
    borderRadius: 200,
    width: 45,
    height: 45,
    alignItems: "center",
  },
  roundButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white"
  },
  green: {
    backgroundColor: "green"
  },
  red: {
    backgroundColor: "red"
  }
})