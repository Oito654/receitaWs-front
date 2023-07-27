import { TouchableOpacity, Text, View, ActivityIndicator, Modal } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles'
import * as FeatherIcons from 'react-native-feather'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import { Avatar } from 'react-native-elements';

const MainMenuScreen = {
    MainMenuScreen({ route, navigation }) {
        const [isLoading, setLoading] = React.useState(false);
        const [id, setId] = React.useState('');
        const [name, setName] = React.useState('');
        const [surname, setSurname] = React.useState('');
        const [token, setToken] = React.useState('');
        const [retrievedUser, setRetrievedUser] = React.useState(false);


        const getRequestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
        };

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            body: ('')
        };

        async function retrieveUser() {
            setLoading(true);
            setRetrievedUser(true);
            try {
                const user = await AsyncStorage.getItem('user');
                const json = JSON.parse(user);
                setName(json.name);
                setSurname(json.surname);
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

        async function SaveOrders(response) {
            try {
                await AsyncStorage.setItem('orders', response);
            } catch (error) {
                console.error(error);
            }
        }

        async function getOrders() {
            setLoading(true);
            let link = 'http://192.168.15.4:5000/api/Client/get-client-all-orders?id=' + id;
            try {
                const response = await fetch(link, getRequestOptions);
                const json = await response.json();

                SaveOrders(JSON.stringify(json));
            }
            catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
                navigation.navigate('Orders');
            }
        }

        async function logOut() {
            let link = 'http://192.168.15.4:5000/api/Client/logout?id=' + id;
            try {
                const response = await fetch(link, requestOptions);
            }
            catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
                navigation.replace('Login');
            }
        }

        return (
            <KeyboardAwareScrollView
                contentContainerStyle={styles.stylesMainMenu.containerMainMenu}
            >
                {isLoading ?
                    (<ActivityIndicator size={'large'} color={'#fff'} />) :
                    (<>
                        <Avatar containerStyle={styles.stylesMainMenu.defaultUser} rounded size={'xlarge'} title={name[0] + surname[0]} titleStyle={{ color: '#fff' }}>
                            <Avatar.Accessory size={34} onPress={() => navigation.navigate('EditProfile')} />
                        </Avatar>
                        <View style={styles.stylesMainMenu.mainMenuWhite}>
                        </View>
                        <Text style={styles.stylesMainMenu.userName}>{name + ' ' + surname}</Text>
                        <TouchableOpacity onPress={() => logOut()} style={{ alignSelf: 'center', backgroundColor: 'black', bottom: '87.5%', right: '37%' }}>
                            <FeatherIcons.LogOut stroke="#022048" width={'200%'} height={'200%'} style={styles.stylesFolderMenu.backIconStyle} />
                            <Text></Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => getOrders()} style={styles.stylesMainMenu.buttonCards}>
                            <FeatherIcons.List stroke="#FFFFFF" width={'130%'} height={'130%'} style={styles.stylesMainMenu.folderIconStyle} />
                            <Text style={styles.stylesMainMenu.buttonCardsText}>Pedidos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.stylesMainMenu.buttonMyCards} onPress={() => navigation.navigate('MakeOrder')}>
                            <FeatherIcons.Search stroke="#FFFFFF" width={'130%'} height={'130%'} style={styles.stylesMainMenu.folderIconStyle} />
                            <Text style={styles.stylesMainMenu.buttonMyCardsText}>Fazer Pedido</Text>
                        </TouchableOpacity>

                    </>)}
                <StatusBar style="auto" />
            </KeyboardAwareScrollView>
        )
    }
}

export default MainMenuScreen;