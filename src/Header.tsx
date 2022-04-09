import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <Text style={styles.header}>Timer</Text>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: "15%",
        marginTop: "5%",
        fontSize: 50,
        fontFamily: "monospace"
    },
})
