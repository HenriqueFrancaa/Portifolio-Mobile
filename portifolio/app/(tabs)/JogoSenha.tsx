import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { gerarSenha, conferirPalpite } from '../../assets/script/senha';
import { useRouter } from "expo-router";
import FooterNav from '../components/footerbar';
import Header from '../components/header';

export default function JogoSenha() {
    const router = useRouter();
    const [senha, setSenha] = useState(gerarSenha());
    const [palpite, setPalpite] = useState('');
    const [historico, setHistorico] = useState<
        { palpite: string; posicaoCerta: number; digitoCerto: number }[]
    >([]);
    const [revelado, setRevelado] = useState(false);

    const handlePalpite = () => {
        if (palpite.length !== 4 || !/^\d{4}$/.test(palpite)) {
            Alert.alert('Digite uma senha de 4 dígitos.');
            return;
        }
        const resultado = conferirPalpite(senha, palpite);
        setHistorico([{ palpite, ...resultado }, ...historico]);
        setPalpite('');
        if (resultado.posicaoCerta === 4) {
            Alert.alert('Parabéns!', 'Você acertou a senha!');
            setRevelado(true);
        }
    };

    const handleDesistir = () => setRevelado(true);

    const handleRecomecar = () => {
        setSenha(gerarSenha());
        setPalpite('');
        setHistorico([]);
        setRevelado(false);
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: '#070743' }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.push('/Projetos')}
                >
                </TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.title}>Jogo da Senha</Text>
                    <Text style={styles.text}>
                        Tente adivinhar a senha de 4 dígitos!
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={palpite}
                        onChangeText={setPalpite}
                        keyboardType="number-pad"
                        maxLength={4}
                        placeholder="Digite sua tentativa"
                        placeholderTextColor="#b0b8c1"
                        editable={!revelado}
                    />
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={[styles.button, revelado && styles.buttonDisabled]}
                            onPress={handlePalpite}
                            disabled={revelado}
                        >
                            <Text style={styles.buttonText}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                    {revelado && (
                        <Text style={styles.revealed}>Senha: {senha}</Text>
                    )}
                    <Text style={styles.historyTitle}>Histórico:</Text>
                    <FlatList
                        data={historico}
                        keyExtractor={(_, idx) => idx.toString()}
                        renderItem={({ item }) => (
                            <Text style={styles.historyItem}>
                                {item.palpite} ({item.posicaoCerta} Touros, {item.digitoCerto} Vacas)
                            </Text>
                        )}
                        ListEmptyComponent={
                            <Text style={styles.historyItem}>Nenhuma tentativa ainda.</Text>
                        }
                        style={{ width: "100%" }}
                    />
                    <View style={styles.options}>
                        <TouchableOpacity
                            style={[styles.button, revelado && styles.buttonDisabled]}
                            onPress={handleDesistir}
                            disabled={revelado}
                        >
                            <Text style={styles.buttonText}>Desistir</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleRecomecar}
                        >
                            <Text style={styles.buttonText}>Recomeçar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Header />
            <FooterNav />

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
        paddingBottom: 70,
        backgroundColor: '#070743',
        justifyContent: 'center',
    },
    header: {
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'white',
    },
    text: {
        fontSize: 16,
        color: '#eaf6ff',
        textAlign: 'center',
        marginBottom: 20,
        padding: 10,
        fontWeight: 'bold',
    },
    box: {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingTop: 20,
        paddingHorizontal: 50,
    },
    input: {
        borderWidth: 1,
        borderColor: '#eaf6ff',
        borderRadius: 8,
        padding: 10,
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
        color: '#eaf6ff',
        backgroundColor: "#101a3a",
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#eaf6ff',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 2,
        alignItems: 'center',
        minWidth: 80,
    },
    buttonDisabled: {
        opacity: 0.2,
    },
    buttonText: {
        color: '#12355b',
        fontWeight: 'bold',
        fontSize: 15,
    },
    revealed: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginVertical: 6
    },
    historyTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#eaf6ff',
        textAlign: 'center',
        marginBottom: 5,
    },
    historyItem: {
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginVertical: 1,
        color: '#eaf6ff',
        textAlign: 'center',
        backgroundColor: '#101a3a',
    },
    backButton: {
        alignSelf: 'flex-start',
        marginTop: 10,
        marginBottom: 5,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    backButtonText: {
        color: '#eaf6ff',
        fontSize: 15,
    },
    footer: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
    },
});