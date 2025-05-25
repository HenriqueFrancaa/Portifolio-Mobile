import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import {useRouter} from "expo-router"

export default function FooterNav(){
    const router = useRouter();

    return(
        <View style={styles.footer}>
           
            <TouchableOpacity onPress={() => router.push('/')}>
                <Text  style={styles.botton}>Sobre</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/')} >
                <Text  style={styles.botton}>Projetos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/')} >
                <Text style={styles.botton}>Habilidades</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/')} >
                <Text  style={styles.botton}>Contato</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 30,
        backgroundColor: "white",
        position: "absolute",
        width: "100%",
        bottom: 0
    },

    botton: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18
    }
})