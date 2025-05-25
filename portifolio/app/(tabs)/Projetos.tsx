import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, Dimensions } from "react-native";
import FooterNav from "../components/footerbar";
import Header from "../components/header";

const { width } = Dimensions.get("window");

const projetos = [
    {
        id: 1,
        titulo: "Workshop Maratona",
        imagem: require( "../../assets/images/maratona.webp"),
        descricao: "Evento de duas semanas organizado pelos próprios membros da equipe de Maratona de Programação, voltado para alunos iniciantes do 1º e 2º períodos do curso de Ciência da Computação. O workshop abordou desde os conceitos básicos de programação até algoritmos mais avançados. Durante o evento, cada integrante da equipe ministrou aulas, e os participantes puderam colocar seus conhecimentos em prática por meio de competições realizadas ao longo das semanas.",
        link: "https://github.com/seuusuario/projeto1"
    },
    {
        id: 2,
        titulo: "Projeto 2",
        imagem: "https://via.placeholder.com/300x150.png?text=Projeto+2",
        descricao: "Descrição do Projeto 2.",
        link: "https://github.com/seuusuario/projeto2"
    },
    
];

export default function Projetos() {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? projetos.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev === projetos.length - 1 ? 0 : prev + 1));
    };

    const projeto = projetos[index];

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.card}>
                <Text style={styles.title}>{projeto.titulo}</Text>
              <Image source={typeof projeto.imagem === "string" ? { uri: projeto.imagem } :  projeto.imagem} style={styles.image} />
                <Text style={styles.description}>{projeto.descricao}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL(projeto.link)}
                >
                    <Text style={styles.buttonText}>Ver Projeto</Text>
                </TouchableOpacity>
                <View style={styles.navButtons}>
                    <TouchableOpacity onPress={handlePrev} style={styles.navButton}>
                        <Text style={styles.navButtonText}>Anterior</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNext} style={styles.navButton}>
                        <Text style={styles.navButtonText}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FooterNav />
        </View>
    );
}

const CARD_WIDTH = width * 0.85;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#070743",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: CARD_WIDTH,
        alignSelf: "center",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 20,
        marginVertical: 40,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#070743",
    },
    image: {
        width: 300,
        height: 150,
        borderRadius: 8,
        marginBottom: 8,
    },
    description: {
        fontSize: 15,
        color: "#333",
        marginBottom: 12,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#070743",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 16,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    navButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    navButton: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    navButtonText: {
        color: "#070743",
        fontWeight: "bold",
    },
});