import { TouchableOpacity, Text, View, TextInput, ActivityIndicator, Modal } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles'
import * as FeatherIcons from 'react-native-feather'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import { Avatar } from 'react-native-elements';

const OrdersDetailsScreen = {
    OrdersDetailsScreen({ route, navigation }) {
        const [isLoading, setLoading] = React.useState(false);
        const [email, onChangeEmail] = React.useState('');
        const [name, onChangeName] = React.useState('');
        const [telephone, onChangeTelephone] = React.useState('');
        const [cnpj, onChangeCnpj] = React.useState('');
        const [retrievedOrder, setRetrievedOrder] = React.useState(false);

        async function retrieveOrder() {
            setLoading(true);
            setRetrievedOrder(true);
            try {
                const order = await AsyncStorage.getItem('order');
                const orderCnpj = await AsyncStorage.getItem('orderCnpj');
                const json = JSON.parse(order);
                onChangeName(json.nome);
                onChangeTelephone(json.telefone);
                onChangeEmail(json.email);
                onChangeCnpj(orderCnpj);
            }
            catch (e) {
                console.error(e);
            }
            finally {
                setLoading(false);
            }
        }

        if (!retrievedOrder) {
            retrieveOrder();
        }

        return (
            <KeyboardAwareScrollView
                contentContainerStyle={styles.stylesMainMenu.containerMainMenu}
            >
                {isLoading ?
                    (<ActivityIndicator size={'large'} color={'#fff'} />) :
                    (<>
                        <Text style={styles.stylesEditProfile.screenName}>Pedido</Text>
                        <Avatar containerStyle={styles.stylesEditProfile.defaultUser} rounded size={'xlarge'} title={name[0]} titleStyle={{ color: '#fff' }}>
                        </Avatar>
                        <View style={styles.stylesEditProfile.mainMenuWhite}>
                        </View>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center', backgroundColor: 'black', bottom: '90%', right: '37%' }}>
                            <FeatherIcons.ArrowLeft stroke="#022048" width={'200%'} height={'200%'} style={styles.stylesEditProfile.backIconStyle} />
                            <Text></Text>
                        </TouchableOpacity>
                        <TextInput
                            style={styles.stylesRegister.fieldEmail}
                            onChangeText={onChangeCnpj}
                            value={cnpj}
                            editable={false}
                            autoCapitalize='none'
                            placeholder="CNPJ"
                        />
                        <TextInput
                            style={styles.stylesRegister.fieldUsername}
                            onChangeText={onChangeName}
                            value={name}
                            editable={false}
                            autoCapitalize='none'
                            placeholder="Nome"
                        />
                        <TextInput
                            style={styles.stylesRegister.fieldName}
                            onChangeText={onChangeEmail}
                            value={email}
                            editable={false}
                            placeholder="Email"
                        />
                        <TextInput
                            style={styles.stylesRegister.fieldSurame}
                            onChangeText={onChangeTelephone}
                            value={telephone}
                            editable={false}
                            placeholder="Telephone"
                        />
                        {/* <FeatherIcons.Mail stroke="#B5B5B5" style={styles.stylesRegister.mailIconStyle} />
                        <FeatherIcons.User stroke="#B5B5B5" style={styles.stylesRegister.userIconStyle} />
                        <FeatherIcons.User stroke="#B5B5B5" style={styles.stylesRegister.userIconNameStyle} />
                        <FeatherIcons.Lock stroke="#B5B5B5" style={styles.stylesRegister.userIconSurameStyle} /> */}
                    </>)}
                <StatusBar style="auto" />
            </KeyboardAwareScrollView>
        )
    }
}

export default OrdersDetailsScreen;