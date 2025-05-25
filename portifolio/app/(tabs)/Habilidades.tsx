import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import FooterNav from "../components/footerbar"
import Header from "../components/header"

const linguagens = [
    "C++", "C", "Python", "Java", "HTML", "CSS", "JavaScript", "React Native"
];
const ferramentas = [
    "VSCode", "Git", "Vim", "React", "Notion", "Figma" , "Obsidian"
];

export default function Habilidades(){
    return(
        <View style={styles.container}>
            <Header/>

            <Text style={styles.title}>Habilidades</Text>
            <Text style={styles.text}>Aqui estão algumas habilidades que possuo, como linguagens de programação e ferramentas de tecnologia</Text>
            
            <View style={styles.content}>  
                <Text style={styles.sectionTitle}>Linguagens de Programação</Text>
                <View style={styles.chipContainer}>
                    {linguagens.map((item, idx) => (
                        <TouchableOpacity key={idx} style={styles.chip}>
                            <Text style={styles.chipText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={styles.sectionTitle}>Ferramentas e tecnologias</Text>
                <View style={styles.chipContainer}>
                    {ferramentas.map((item, idx) => (
                        <TouchableOpacity key={idx} style={styles.chip}>
                            <Text style={styles.chipText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <FooterNav/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#070743",
        flex: 1,
        flexDirection: "column",
        paddingTop: 40, // Reduzido para aproximar do topo
        paddingBottom: 60,
        justifyContent: "center",
        alignItems: "center",
        padding: 3
    },
    content: {
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        marginTop: 10, // Pequeno espaço entre o texto e as seções
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#eaf6ff",
        marginBottom: 4, 
        textAlign: "center",
        paddingTop: 10, 
    },
    text: {
        fontSize: 16,
        color: "#eaf6ff",
        textAlign: "center",
        marginBottom: 10, 
        fontWeight: "bold",
        paddingHorizontal: 8,
    },
    sectionTitle: {
        fontSize: 22,
        color: "#eaf6ff",
        fontWeight: "bold",
        marginTop: 10, 
        marginBottom: 6, 
        textAlign: "center"
    },
    chipContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 20,
        width: "100%",
    },
    chip: {
        backgroundColor: "#fff",
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 18,
        margin: 5,
        elevation: 2,
    },
    chipText: {
        color: "#070743",
        fontWeight: "bold",
        fontSize: 15,
    },
});