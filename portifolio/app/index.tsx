import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FooterNav from "./components/navbar";
export default function Index(){
    return (
        <View style={styles.container}>
            <Image source={require("../assets/images/minha-foto.jpeg")} style={styles.fotoPerfil}/>
            <Text style={styles.title}>Henrique Franca</Text>

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
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 31,
    },

    fotoPerfil: {
    width: 150,
    height: 150,
    borderRadius: 150, // 50% de 300 = 150
    borderWidth: 3,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, // sombra no Android
},

})