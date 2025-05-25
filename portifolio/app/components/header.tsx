import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import {useRouter} from "expo-router"

export default function Header(){
    const router = useRouter();

    return(
        <View style={styles.header}>
            <TouchableOpacity onPress={() => router.push('/')}>
                <Text  style={styles.botton}>Henrique Franca</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: "white",
        position: "absolute",
        width: "100%",
        top: 0, // Alterado para posicionar no topo
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },

    botton: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18
    },

    title: {
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 31,
    }
})