import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import FooterNav from "../components/footerbar"
import Header from "../components/header"

export default function Sobre(){
    return(
        <View style={styles.container}>
            <Header/>
            <Text style={styles.title}>Sobre o aplicativo</Text>
            <Text style={styles.text}>Esse aplicativo foi desenvolvido como um portifolio utilizando essas seguintes ferramentas </Text>

            <View>
                <TouchableOpacity style={styles.toolButton}>
                    <Text>ReactNative</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.toolButton}>
                    <Text >Expo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toolButton}>
                    <Text >TypeScript</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toolButton}>
                    <Text >Expo-router</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.toolButton}>
                    <Text >Vscode</Text>
                </TouchableOpacity>
            </View>

            <FooterNav/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#070743",
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#eaf6ffff",
        marginBottom: 20,
        textAlign: "center",
    },
    text: {
        fontSize: 14,
        color: "#eaf6ffff",
        textAlign: "center",
        marginBottom: 20,
        padding: 30,
        fontWeight: "bold"
    },

    toolButton: {
    backgroundColor: "#eaf6ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4, // Para Android
    alignItems: "center", // Centraliza horizontalmente
    justifyContent: "center", // Centraliza verticalmente
}

})