import { TouchableOpacity, Image, Text, View, TextInput, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Images from '../assets/Images';
import styles from '../Styles'
import * as FeatherIcons from 'react-native-feather'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = {
    LoginScreen({ route, navigation }) {
        const [email, onChangeText] = React.useState('');
        const [password, onChangePassword] = React.useState('');
        const [buttonActive, onChangeButton] = React.useState(false);
        const [isLoading, setLoading] = React.useState(false);
        const [data, setData] = React.useState([]);
        const [errorMessage, setErrorMessage] = React.useState('');

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: (`{"email": "${email}", "password": "${password}"}`)
        };

        function ActiveButton() {
            if (email !== '' && password !== '')
                onChangeButton(true);
        }

        function DeactiveButton() {
            if (email === '' || password === '')
                onChangeButton(false);
        }

        function ButtonColor() {
            if (buttonActive)
                return '#022048'
            return '#a6a6a6'
        }

        if (!buttonActive) {
            ActiveButton();
        }

        if (buttonActive) {
            DeactiveButton();
        }

        function CheckResponse(response) {
            if (response.message === 'Success') {
                getClient(email, response.token);
            }
            else {
                setErrorMessage('Email ou senha incorreta');
                setLoading(false);
            }
        }

        async function SaveUser(response, token) {
            try {
                await AsyncStorage.setItem('user', response);
                await AsyncStorage.setItem('token', token);
            } catch (error) {
                console.error(error);
            }
        }

        const postLogin = async () => {
            setLoading(true);
            let link = 'http://192.168.15.4:5000/api/Client/login';
            try {
                const response = await fetch(link, requestOptions);
                const json = await response.json();
                setData(json);
                CheckResponse(json);
            }
            catch (error) {
                console.error(error);
            }
        }

        const getClient = async (email, token) => {
            setLoading(true);
            let link = 'http://192.168.15.4:5000/api/Client/client-by-email?email=' + email;
            const getRequestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            };
            try {
                const response = await fetch(link, getRequestOptions);
                const json = await response.json();
                await SaveUser(JSON.stringify(json), token);
            }
            catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
                setErrorMessage('');
                navigation.replace('MainMenu');
            }
        }

        return (
            <KeyboardAwareScrollView
                contentContainerStyle={styles.stylesLogin.containerLogin}
            >
                {isLoading ?
                    (<ActivityIndicator size={'large'} color={'#fff'} />) :
                    (<><TextInput
                        style={styles.stylesLogin.textUsername}
                        onChangeText={onChangeText}
                        autoCapitalize='none'
                        value={email}
                        placeholder="Email"
                    />
                        <TextInput
                            style={styles.stylesLogin.textPassword}
                            onChangeText={onChangePassword}
                            secureTextEntry={true}
                            autoCapitalize='none'
                            value={password}
                            placeholder="Senha"
                        />
                        <View style={styles.stylesLogin.lineUsername} />
                        <FeatherIcons.Mail stroke="#B5B5B5" style={styles.stylesLogin.userIconStyle} />
                        <View style={styles.stylesLogin.linePassword} />
                        <FeatherIcons.Lock stroke="#B5B5B5" style={styles.stylesLogin.lockIconStyle} />
                        <View style={styles.stylesLogin.loginWhite}>
                        </View>
                        <Image source={Images.logo} style={styles.stylesLogin.logo} />
                        <Text style={styles.stylesLogin.textTitle}>Entrar</Text>
                        <Text style={styles.stylesLogin.textLogin}>Entrar</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.stylesLogin.buttonRegister}>
                            <Text style={styles.stylesLogin.textRegister}>Registrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => postLogin(email, password)} style={[styles.stylesLogin.buttonLogin, { backgroundColor: ButtonColor() }]} disabled={!buttonActive}>
                            <Text style={styles.stylesLogin.buttonLoginText}>Entrar</Text>
                        </TouchableOpacity></>)}
                <Text style={styles.stylesLogin.loginErrorText} >{errorMessage}</Text>
                <StatusBar style="auto" />
            </KeyboardAwareScrollView>
        )
    }
}

export default LoginScreen;