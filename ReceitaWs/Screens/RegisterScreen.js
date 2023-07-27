import { TouchableOpacity, Image, Text, View, TextInput, ActivityIndicator } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Images from '../assets/Images';
import styles from '../Styles'
import * as FeatherIcons from 'react-native-feather'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterScreen = {
    RegisterScreen({ route, navigation }) {
        const [email, onChangeEmail] = React.useState('');
        const [name, onChangeName] = React.useState('');
        const [errorMessage, setErrorMessage] = React.useState('');
        const [surname, onChangeSurname] = React.useState('');
        const [password, onChangePassword] = React.useState('');
        const [conpassword, onChangeConPassword] = React.useState('');
        const [buttonActive, onChangeButton] = React.useState(false);
        const [isLoading, setLoading] = React.useState(false);
        const [data, setData] = React.useState([]);

        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                name: name,
                surname: surname,
                password: password
            }),
        };

        function ActiveButton() {
            if (email !== '' && name !== '' && surname !== '' && password !== '' && conpassword !== '') {
                if (PasswordsMatch(password, conpassword)) {
                    onChangeButton(true);
                }
            }
        }

        function DeactiveButton() {
            if (email === '' || name === '' || surname === '' || password === '' || conpassword === '' || !PasswordsMatch(password, conpassword)) {

                onChangeButton(false);
            }

        }

        function ButtonColor() {
            if (buttonActive)
                return '#022048'
            return '#a6a6a6'
        }

        function FieldErrorColor() {
            if (PasswordsMatch(password, conpassword)) {
                if (PasswordLength(password))
                    return '#a6a6a6';

            }

            return 'red';
        }

        function PasswordsMatch(password, conpassword) {
            if (password === conpassword)
                return true
            return false
        }

        function PasswordLength(password) {
            if (password.length >= 6 || password.length === 0) {
                return true;
            }
            return false;
        }

        if (!buttonActive) {
            ActiveButton();
        }
        if (buttonActive) {
            DeactiveButton();
        }

        function CheckResponse(response) {
            if (response === 'User Reigistration Successful') {
                navigation.goBack();
            }
            else {
                setErrorMessage(response)
            }
        }
        const postRegister = async (name, surname, email, password) => {
            setLoading(true);
            let link = 'http://192.168.15.4:5000/api/Client/register';
            try {
                const response = await fetch(link, requestOptions);
                const json = await response.json();
                setData(json);
                CheckResponse(json.message);
            }
            catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        return (
            <KeyboardAwareScrollView
                contentContainerStyle={styles.stylesRegister.containerLogin}
            >
                {isLoading ?
                    (<ActivityIndicator size={'large'} color={'#fff'} />) :
                    (<>
                        <TextInput
                            style={styles.stylesRegister.fieldEmail}
                            onChangeText={onChangeEmail}
                            value={email}
                            autoCapitalize='none'
                            placeholder="Email"
                        />
                        <TextInput
                            style={styles.stylesRegister.fieldUsername}
                            onChangeText={onChangeName}
                            value={name}
                            placeholder="Nome"
                        />
                        <TextInput
                            style={styles.stylesRegister.fieldName}
                            onChangeText={onChangeSurname}
                            value={surname}
                            placeholder="Sobrenome"
                        />
                        <TextInput
                            style={styles.stylesRegister.fieldSurame}
                            onChangeText={onChangePassword}
                            secureTextEntry={true}
                            value={password}
                            autoCapitalize='none'
                            placeholder="Senha"
                        />
                        <TextInput
                            style={[styles.stylesRegister.fieldPassword, { borderColor: FieldErrorColor() }]}
                            onChangeText={onChangeConPassword}
                            secureTextEntry={true}
                            autoCapitalize='none'
                            value={conpassword}
                            placeholder="Confirmar Senha"
                        />
                        <FeatherIcons.Mail stroke="#B5B5B5" style={styles.stylesRegister.mailIconStyle} />
                        <FeatherIcons.User stroke="#B5B5B5" style={styles.stylesRegister.userIconStyle} />
                        <FeatherIcons.User stroke="#B5B5B5" style={styles.stylesRegister.userIconNameStyle} />
                        <FeatherIcons.Lock stroke="#B5B5B5" style={styles.stylesRegister.userIconSurameStyle} />
                        <FeatherIcons.Lock stroke="#B5B5B5" style={styles.stylesRegister.lockIconStyle} />
                        <View style={styles.stylesRegister.loginWhite}>
                        </View>
                        <Image source={Images.logo} style={styles.stylesRegister.logo} />
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.stylesRegister.buttonLogin}>
                            <Text style={styles.stylesRegister.textLogin}>Entrar</Text>
                        </TouchableOpacity>
                        <Text style={styles.stylesRegister.textRegister}>Registrar</Text>
                        <TouchableOpacity onPress={() => postRegister(name, surname, email, password)} style={[styles.stylesRegister.buttonRegister, {
                            backgroundColor: ButtonColor()
                        }]} disabled={!buttonActive}>
                            <Text style={styles.stylesRegister.buttonRegisterText}>Registrar</Text>
                        </TouchableOpacity>
                        {!PasswordsMatch(password, conpassword) ? <Text style={styles.stylesRegister.passwordErrorText} >Senhas não coincidem!</Text> : null}
                        {!PasswordLength(password) && PasswordsMatch(password, conpassword) && password.length !== 0 ? <Text style={styles.stylesRegister.passwordErrorText} >Senha tem que ter no mínimo seis caracteres!</Text> : null}
                        {!PasswordLength(password) && !PasswordsMatch(password, conpassword) ? null : <Text style={styles.stylesRegister.passwordErrorText} >{errorMessage}</Text>}
                    </>)}
                <StatusBar style="auto" />
            </KeyboardAwareScrollView>
        )
    }
}

export default RegisterScreen;