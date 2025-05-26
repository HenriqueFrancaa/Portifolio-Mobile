import {View, Text, StyleSheet, Image} from 'react-native';
import FooterNav from '../components/footerbar';
import Header from '../components/header';

export default function Contato(){
    return(
        <View style={styles.container}>
            <Header/>
            <View>
                <Text style={styles.title}>Contato</Text>
                <Text style={styles.text}>
                    Para entrar em contato, envie um e-mail para:
                </Text>
                <View style={styles.contact}>

                <Image source={require("../../assets/images/linkedin.png")} style={styles.image}/>
                <Image source={require("../../assets/images/github.png")} style={styles.image}/>
                <Image source={require("../../assets/images/instagram.png")} style={styles.image}/>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#eaf6ff',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        color: '#eaf6ff',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 3,
    },
    contact :{
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%',
        padding: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    }
})