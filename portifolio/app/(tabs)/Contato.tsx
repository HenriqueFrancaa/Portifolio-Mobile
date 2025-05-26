import {View, Text, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import FooterNav from '../components/footerbar';
import Header from '../components/header';

export default function Contato(){
    return(
        <View style={styles.container}>
            <Header/>
            <View>
                <Text style={styles.title}>Contato</Text>
                <Text style={styles.text}>
                    Aqui estão algumas formas de entrar em contato comigo. Você pode me encontrar nessas redes sociais.
                </Text>
                <View style={styles.contact}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/henrique-franca-16390125b/')}>
                        <Image source={require("../../assets/images/linkedin.png")} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/HenriqueFrancaa')}>
                        <Image source={require("../../assets/images/github.png")} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/henriq.francaa/')}>
                        <Image source={require("../../assets/images/instagram.png")} style={styles.image}/>
                    </TouchableOpacity>
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
        paddingTop: 40,
        paddingBottom: 60,
        justifyContent: "center",
        padding: 3
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#eaf6ff',
        marginBottom: 10,
        textAlign: 'center',
    },
    text: {
        fontSize: 14,
        color: '#eaf6ff',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '100%',
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 20,
    },
    contact :{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        paddingVertical: 20,
        marginTop: 20,
    }
});