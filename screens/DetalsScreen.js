import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';



function DetailsScreen({ navigation, route }) {

    const [count, setCount] = useState(0)
    const plant = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={styles.header}>
                <Icon
                    name="arrow-back"
                    size={40} onPress={() => navigation.goBack()}
                    style={{
                        marginTop: 30,
                    }}
                />
                <Icon
                    name="shopping-cart"
                    size={30}
                    style={{
                        marginTop: 20,
                        backgroundColor: COLORS.green,
                        padding: 15,
                        borderRadius: 20
                    }}
                />
            </View>
            <View style={styles.imageContainer}>
                <Image source={plant.img} style={{ resizeMode: "contain", flex: 1 }} />
            </View>
            <View style={styles.detailsContainer}>
                <View style={{ marginLeft: 20, flexDirection: "row", alignItems: "flex-end" }}>
                    <View style={styles.line} />
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Best Choice</Text>
                </View>
                <View
                    style={{
                        marginLeft: 20,
                        marginTop: 20,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>{plant.name}</Text>
                    <View style={styles.priceTag}>
                        <Text style={{ marginLeft: 15, color: COLORS.white, fontWeight: "bold" }}>${plant.price}</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>About</Text>
                    <Text style={{ color: "grey", fontSize: 16, lineHeight: 22, marginTop: 20 }}>{plant.about}</Text>
                    <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={styles.borderBtn}>
                            <Text style={styles.borderBtnText} onPress={() => setCount(count + 1)}>+</Text>
                        </View>
                        <Text style={{ fontSize: 40, marginHorizontal: 10, fontWeight: "bold" }}>{count}</Text>
                        <View style={styles.borderBtn}>
                            <Text style={styles.borderBtnText} onPress={() => setCount(count - 1)}>-</Text>
                        </View>
                    </View>
                    <Button
                        title="Buy"
                        color="#00B761"
                    />
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    detailsContainer: {
        flex: 1,
        backgroundColor: COLORS.light,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30
    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: COLORS.dark,
        marginBottom: 5,
        marginRight: 3
    },
    priceTag: {
        backgroundColor: COLORS.green,
        width: 80,
        height: 40,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: "center",
    },
    borderBtn: {
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    borderBtnText: {
        fontWeight: "bold",
        fontSize: 28
    },

});

export default DetailsScreen
