import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from "react";
import RoundButton from './RoundButton';

function isValid(text: string): boolean {
    if (text.includes("-") || text === "") {
        return false;
    } else {
        return true;
    }
}

function Alarm() {
    const [time, setTime] = useState(0);

    return (
        <View style={styles.container}>
            <TextInput style={styles.name}
                placeholder="Alarm name..."
                keyboardType='number-pad'
                onChangeText={newText => {
                    if (isValid(newText)) {
                        setTime(parseInt(newText));
                    }
                }}
                value={time.toString()}
            />
            <RoundButton type='red' text='-' onPress={() => null} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 40,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    name: {
        fontSize: 20,
        padding: 10,

    }
});

export default Alarm