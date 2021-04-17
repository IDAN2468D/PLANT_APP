import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '../consts/colors';

function HomeScreen() {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome</Text>
                    <Text style={{ fontSize: 38, fontWeight: "bold", color: COLORS.green }}>Planet Shop</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default HomeScreen
