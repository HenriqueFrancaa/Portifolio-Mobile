import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { generatePassword, checkGuess } from '../../assets/script/senha';
import { useRouter } from "expo-router";
import FooterNav from '../components/footerbar';
import Header from '../components/header';

export default function PasswordGame() {
    const router = useRouter();
    const [password, setPassword] = useState(generatePassword());
    const [guess, setGuess] = useState('');
    const [history, setHistory] = useState<
        { guess: string; correctPosition: number; correctDigit: number }[]
    >([]);
    const [revealed, setRevealed] = useState(false);

    const handleGuess = () => {
        if (guess.length !== 4 || !/^\d{4}$/.test(guess)) {
            Alert.alert('Digite uma senha de 4 dígitos.');
            return;
        }
        const result = checkGuess(password, guess);
        setHistory([{ guess, ...result }, ...history]);
        setGuess('');
        if (result.correctPosition === 4) {
            Alert.alert('Parabéns!', 'Você acertou a senha!');
            setRevealed(true);
        }
    };

    const handleGiveUp = () => setRevealed(true);

    const handleRestart = () => {
        setPassword(generatePassword());
        setGuess('');
        setHistory([]);
        setRevealed(false);
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: '#070743' }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <Header />
            <View style={styles.container}>
                
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.push('/Projetos')}
                >
                </TouchableOpacity>
                <View style={styles.box}>
                    
                <Text style={styles.title}>Jogo da Senha</Text>
                <Text style={styles.text}>
                    Tente adivinhar a senha de 4 dígitos. Você tem 10 tentativas!</Text>
                <TextInput
                    style={styles.input}
                    value={guess}
                    onChangeText={setGuess}
                    keyboardType="number-pad"
                    maxLength={4}
                    placeholder="Digite sua tentativa"
                    placeholderTextColor="#b0b8c1"
                    editable={!revealed}
                    />
                <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.button, revealed && styles.buttonDisabled]}
                        onPress={handleGuess}
                        disabled={revealed}
                        >
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                    
                    
                </View>
                {revealed && (
                    <Text style={styles.revealed}>Senha: {password}</Text>
                )}
                <Text style={styles.historyTitle}>Histórico:</Text>
                <FlatList
                    data={history}
                    keyExtractor={(_, idx) => idx.toString()}
                    renderItem={({ item, index }) => (
                        <Text style={styles.historyItem}>
                             {item.guess} ({item.correctPosition} Touros, {item.correctDigit} Vacas)
                        </Text>
                    )}
                    ListEmptyComponent={
                        <Text style={styles.historyItem}>Nenhuma tentativa ainda.</Text>
                    }
                    style={{ width: "100%" }}
                    />
                    <View style={styles.options}>
                        
                    <TouchableOpacity
                        style={[styles.button, revealed && styles.buttonDisabled]}
                        onPress={handleGiveUp}
                        disabled={revealed}
                        >
                        <Text style={styles.buttonText}>Desistir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleRestart}
                        >
                        <Text style={styles.buttonText}>Recomeçar</Text>
                    </TouchableOpacity>
                            </View>
                    </View>
            </View>
            <FooterNav/>
            <Header/>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
        paddingBottom: 70, // espaço para o FooterNav
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
    options:{
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