import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, Dimensions } from "react-native";
import FooterNav from "../components/footerbar";
import Header from "../components/header";
import { useNavigation } from "expo-router";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.85;

const projetos = [
    {
        id: 1,
        titulo: "Workshop Maratona ",
        imagem: require("../../assets/images/maratona.webp"),
        descricao: "Evento de duas semanas organizado pelos próprios membros da equipe de Maratona de Programação, voltado para alunos iniciantes do 1º e 2º períodos do curso de Ciência da Computação. O workshop abordou desde os conceitos básicos de programação até algoritmos mais avançados. Durante o evento, cada integrante da equipe ministrou aulas, e os participantes puderam colocar seus conhecimentos em prática por meio de competições realizadas ao longo das semanas.",
        link: "https://www.instagram.com/p/DGT9qqPy9I9/"
    },
    {
        id: 2,
        titulo: "Jogo da Senha",
        imagem: require("../../assets/images/jogo-da-senha.png"),
        descricao: "O Jogo da Senha (Touros e Vacas) consiste em adivinhar uma sequência secreta de 4 números únicos. A cada palpite, o jogo irá te dar dois tipos de feedback: Touros, que indicam números corretos na posição certa, e Vacas, que indicam números corretos, mas na posição errada. O objetivo é acertar todos os números na ordem correta com o menor número de tentativas. Boa sorte e divirta-se!",
        link: "/(tabs)/jogo-da-Senha"
    },
    {
        id: 3,
        titulo: "Quiz do Curso de Ciência da Computação",
        imagem: require("../../assets/images/quizc3.png"),
        descricao: "O projeto consiste em um quiz voltado para alunos de Ciência da Computação, do 1º ao 5º período, com perguntas baseadas nos conteúdos das disciplinas. A proposta é utilizar a gamificação como ferramenta para tornar o aprendizado mais leve, divertido e interativo, incentivando os estudantes a revisarem os conteúdos de forma mais engajada e motivadora",
        link: "https://github.com/HenriqueFrancaa/QuizCC-pwm"
    },
];

export default function Projetos() {
    const [index, setIndex] = useState(0);
    const projeto = projetos[index];
    const navigation = useNavigation();
    const router = useRouter();

    const handlePrev = () => setIndex(index === 0 ? projetos.length - 1 : index - 1);
    const handleNext = () => setIndex(index === projetos.length - 1 ? 0 : index + 1);

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.card}>
                <Text style={styles.title}>{projeto.titulo}</Text>
                <Image source={projeto.imagem} style={styles.image} />
                <Text style={styles.description}>{projeto.descricao}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        if (projeto.titulo === "Jogo da Senha") {
                            router.push("/(tabs)/JogoSenha");
                        } else {
                            Linking.openURL(projeto.link);
                        }
                    }}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#070743",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: CARD_WIDTH,
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
        height: 200,
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