import { TouchableOpacity, Image, Text, View, TextInput, ActivityIndicator, Modal } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles'
import * as FeatherIcons from 'react-native-feather'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import { Avatar } from 'react-native-elements';

const EditProfileScreen = {
    EditProfileScreen({ route, navigation }) {
        const [isLoading, setLoading] = React.useState(false);
        const [data, setData] = React.useState([]);
        const [id, setId] = React.useState(null);
        const [email, onChangeEmail] = React.useState('');
        const [name, onChangeName] = React.useState('');
        const [errorMessage, setErrorMessage] = React.useState('');
        const [surname, onChangeSurname] = React.useState('');
        const [password, onChangePassword] = React.useState('');
        const [conpassword, onChangeConPassword] = React.useState('');
        const [currentpassword, onChangeCurrentPassword] = React.useState('');
        const [token, setToken] = React.useState('');
        const [retrievedUser, setRetrievedUser] = React.useState(false);
        const [edit, setEdit] = React.useState(false);
        const [buttonActive, onChangeButton] = React.useState(false);
        const [alertModal, setAlertModalModal] = React.useState(false);


        const requestOptions = {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                id: id,
                email: email,
                name: name,
                surname: surname,
                password: password,
                currentpassword: currentpassword
            })
        };

        const requestOptionsDelete = {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token
            }
        };

        async function retrieveUser() {
            setLoading(true);
            setRetrievedUser(true);
            try {
                const user = await AsyncStorage.getItem('user');
                const json = JSON.parse(user);
                onChangeName(json.name);
                onChangeSurname(json.surname);
                onChangeEmail(json.email);
                setId(json.id);

                const token = await AsyncStorage.getItem('token');
                setToken(token);
            }
            catch (e) {
                console.error(e);
            }
            finally {
                setLoading(false);
            }
        }
        if (!retrievedUser) {
            retrieveUser();
        }

        function ActiveButton() {
            if (email !== '' && name !== '' && surname !== '') {
                if (PasswordsMatch(password, conpassword)) {
                    onChangeButton(true);
                }
            }
        }

        function DeactiveButton() {
            if (email === '' || name === '' || surname === '' || !PasswordsMatch(password, conpassword)) {

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

        async function SaveUser(response) {
            try {
                await AsyncStorage.setItem('user', response);
            } catch (error) {
                console.error(error);
            }
        }

        if (!buttonActive) {
            ActiveButton();
        }
        if (buttonActive) {
            DeactiveButton();
        }

        const putUpdateClient = async () => {
            setLoading(true);
            let link = 'http://192.168.15.4:5000/api/Client/update-client';
            try {
                const response = await fetch(link, requestOptions);
                const json = await response.json();
                await SaveUser(JSON.stringify(json));
                setData(json);
            }
            catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
                navigation.replace('MainMenu')
            }
        }

        const deleteClient = async () => {
            setLoading(true);
            let link = 'http://192.168.15.4:5000/api/Client/delete-client?id=' + id;
            try {
                const response = await fetch(link, requestOptionsDelete);
                setData(json);
            }
            catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
                navigation.replace('Login')
            }
        }

        return (
            <KeyboardAwareScrollView
                contentContainerStyle={styles.stylesMainMenu.containerMainMenu}
            >
                {isLoading ?
                    (<ActivityIndicator size={'large'} color={'#fff'} />) :
                    (<>

                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={alertModal}
                            statusBarTranslucent={true}>
                            <View style={styles.stylesMainMenu.modalView}>
                                <View style={{ width: '70%', height: '25%', backgroundColor: '#fff', borderRadius: 20, alignSelf: 'center' }}>
                                    <Text style={styles.stylesEditProfile.modalText}>Você tem certeza disso? Essa escolha é irreversível</Text>
                                    <TouchableOpacity style={{ width: '20%', height: '5%', alignContent: 'center', top: '75%', left: '10%' }}
                                        onPress={() => deleteClient()}>
                                        <View style={{ backgroundColor: 'red', borderRadius: 20, width: '150%', height: '350%' }}>
                                            <Text style={styles.stylesEditProfile.modalButtonYesText}> Sim </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: '20%', height: '5%', alignContent: 'center', top: '70%', left: '60%' }}
                                        onPress={() => setAlertModalModal(false)}>
                                        <View style={{ backgroundColor: 'green', borderRadius: 20, width: '150%', height: '350%' }}>
                                            <Text style={styles.stylesEditProfile.modalButtonYesText}> Não </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>

                        <Text style={styles.stylesEditProfile.screenName}>Editar Perfil</Text>
                        <Avatar containerStyle={styles.stylesEditProfile.defaultUser} rounded size={'xlarge'} title={name[0] + surname[0]} titleStyle={{ color: '#fff' }}>
                        </Avatar>
                        <View style={styles.stylesEditProfile.mainMenuWhite}>
                        </View>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center', backgroundColor: 'black', bottom: '90%', right: '37%' }}>
                            <FeatherIcons.ArrowLeft stroke="#022048" width={'200%'} height={'200%'} style={styles.stylesEditProfile.backIconStyle} />
                            <Text></Text>
                        </TouchableOpacity>
                        <TextInput
                            style={styles.stylesRegister.fieldEmail}
                            onChangeText={onChangeEmail}
                            value={email}
                            editable={edit}
                            autoCapitalize='none'
                            placeholder="Email"
                        />
                        <TextInput
                            style={styles.stylesRegister.fieldUsername}
                            onChangeText={onChangeName}
                            value={name}
                            editable={edit}
                            autoCapitalize='none'
                            placeholder="Nome"
                        />
                        <TextInput
                            style={styles.stylesRegister.fieldName}
                            onChangeText={onChangeSurname}
                            value={surname}
                            editable={edit}
                            placeholder="Sobrenome"
                        />
                        <TextInput
                            style={styles.stylesRegister.fieldSurame}
                            onChangeText={onChangeCurrentPassword}
                            value={currentpassword}
                            editable={edit}
                            placeholder="Senha Atual"
                        />
                        {edit ? <TextInput
                            style={styles.stylesRegister.fieldPassword}
                            onChangeText={onChangePassword}
                            value={password}
                            editable={edit}
                            placeholder="Nova Senha"
                        /> : <></>}
                        {edit ?
                            <TextInput
                                style={[styles.stylesRegister.fieldConPassword, { borderColor: FieldErrorColor() }]}
                                onChangeText={onChangeConPassword}
                                secureTextEntry={true}
                                autoCapitalize='none'
                                value={conpassword}
                                editable={edit}
                                placeholder="Confirmar Senha"
                            /> : <></>}
                        {edit ? <FeatherIcons.Lock stroke="#B5B5B5" style={styles.stylesRegister.lockIconConStyle} /> : <></>}
                        {edit ? <FeatherIcons.Lock stroke="#B5B5B5" style={styles.stylesRegister.lockIconStyle} /> : <></>}
                        <FeatherIcons.Mail stroke="#B5B5B5" style={styles.stylesRegister.mailIconStyle} />
                        <FeatherIcons.User stroke="#B5B5B5" style={styles.stylesRegister.userIconStyle} />
                        <FeatherIcons.User stroke="#B5B5B5" style={styles.stylesRegister.userIconNameStyle} />
                        <FeatherIcons.Lock stroke="#B5B5B5" style={styles.stylesRegister.userIconSurameStyle} />

                        {edit ? <TouchableOpacity onPress={() => putUpdateClient()} style={[styles.stylesEditProfile.buttonRegister, {
                            backgroundColor: ButtonColor()
                        }]} disabled={!buttonActive}>
                            <Text style={styles.stylesRegister.buttonRegisterText}>Salvar</Text>
                        </TouchableOpacity>
                            : <TouchableOpacity onPress={() => setEdit(true)} style={[styles.stylesEditProfile.buttonRegister]}>
                                <Text style={styles.stylesRegister.buttonRegisterText}>Editar</Text>
                            </TouchableOpacity>}

                        <TouchableOpacity onPress={() => setAlertModalModal(true)} style={[styles.stylesEditProfile.buttonDelete]}>
                            <Text style={styles.stylesRegister.buttonDeleteText}>Deletar Conta</Text>
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

export default EditProfileScreen;