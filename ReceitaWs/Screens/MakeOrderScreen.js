import { TouchableOpacity, Image, Text, View, TextInput, ActivityIndicator, Modal } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles'
import * as FeatherIcons from 'react-native-feather'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import { Avatar } from 'react-native-elements';

const MakeOrderScreen = {
    MakeOrderScreen({ route, navigation }) {
        const [isLoading, setLoading] = React.useState(false);
        const [data, setData] = React.useState([]);
        const [id, setId] = React.useState('');
        const [cnpj, onChangeCnpj] = React.useState('');
        const [token, setToken] = React.useState('');
        const [retrievedUser, setRetrievedUser] = React.useState(false);

        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                cnpj: cnpj,
                clientId: id
            })
        };

        async function retrieveUser() {
            setLoading(true);
            setRetrievedUser(true);
            try {
                const user = await AsyncStorage.getItem('user');
                const json = JSON.parse(user);
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

        function FieldErrorColor() {
            // if (PasswordsMatch(password, conpassword)) {
            //     if (PasswordLength(password))
            //         return '#a6a6a6';

            // }

            return 'red';
        }

        async function SaveOrder(response) {
            try {
                await AsyncStorage.setItem('order', response);
                await AsyncStorage.setItem('orderCnpj', cnpj);
            } catch (error) {
                console.error(error);
            }
        }

        const postCreateOrder = async () => {
            setLoading(true);
            let link = 'http://192.168.15.4:5000/api/Client/create-order';
            try {
                const response = await fetch(link, requestOptions);
                console.debug(response);
                const json = await response.json();
                await SaveOrder(json.result);
                setData(json);
            }
            catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
                navigation.navigate('OrderDetail');
            }
        }

        return (
            <KeyboardAwareScrollView
                contentContainerStyle={styles.stylesMainMenu.containerMainMenu}
            >
                {isLoading ?
                    (<ActivityIndicator size={'large'} color={'#fff'} />) :
                    (<>
                        <Text style={styles.stylesEditProfile.screenName}>Fazer Pedido</Text>
                        <View style={styles.stylesEditProfile.mainMenuWhite}>
                        </View>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center', backgroundColor: 'black', bottom: '90%', right: '37%' }}>
                            <FeatherIcons.ArrowLeft stroke="#022048" width={'200%'} height={'200%'} style={styles.stylesEditProfile.backIconStyle} />
                            <Text></Text>
                        </TouchableOpacity>
                        <TextInput
                            style={styles.stylesRegister.fieldUsername}
                            onChangeText={onChangeCnpj}
                            value={cnpj}
                            autoCapitalize='none'
                            keyboardType='number-pad'
                            placeholder="CNPJ"
                        />
                        <Text style={styles.stylesEditProfile.cnpjDescription}>Insira o CNPJ da empresa desejada, apenas números.</Text>
                        <FeatherIcons.Hash stroke="#B5B5B5" style={styles.stylesRegister.userIconStyle} />
                        <TouchableOpacity onPress={() => postCreateOrder()} style={[styles.stylesEditProfile.buttonRegister, {
                            backgroundColor: '#022048'
                        }]}><Text style={styles.stylesRegister.buttonRegisterText}>Fazer Pedido</Text></TouchableOpacity>
                    </>)}
                <StatusBar style="auto" />
            </KeyboardAwareScrollView>
        )
    }
}

export default MakeOrderScreen;