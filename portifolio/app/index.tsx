import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FooterNav from "./components/footerbar";
import Header from "./components/header";

export default function Index(){
    return (
        <View style={styles.container}>
            <Header/>
            <Image source={require("../assets/images/minha-foto.jpeg")} style={styles.fotoPerfil}/>
            
            <Text style={styles.text}>
                Sou estudante de Ciência da Computação na Universidade Católica de Pernambuco (UNICAP) e atualmente estou no 5º período do curso. 
            </Text>
            <Text style={styles.text}>Tenho grande interesse em aprender coisas novas — seja explorando linguagens de programação, algoritmos ou desbravando o universo da tecnologia.</Text>
            <Text style={styles.text}>Faço parte do grupo de Programação Competitiva da UNICAP, onde estudamos algoritmos aplicados à resolução de problemas diversos. É um desafio empolgante e algo que considero extremamente fascinante. Além disso, participo de um projeto de Iniciação Científica na UNICAP, sob orientação do professor Diego Pinheiro.</Text>

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

    text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#eaf6ffff",
    textAlign: "center",
    padding: 10
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