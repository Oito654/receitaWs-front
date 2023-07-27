import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../Styles'
import * as FeatherIcons from 'react-native-feather'
import AsyncStorage from '@react-native-community/async-storage';
import { FlatList } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';

const OrdersScreen = {
    OrdersScreen({ route, navigation }) {
        const [isLoading, setLoading] = React.useState(false);
        const [orders, setOrders] = React.useState([]);
        const [retrievedData, setRetrievedData] = React.useState(false);

        async function retrieveData() {
            setLoading(true);
            setRetrievedData(true);
            try {
                const orders = await AsyncStorage.getItem('orders');
                let convOrders = await JSON.parse(orders);
                setOrders(convOrders);
            }
            catch (e) {
                console.error(e);
            }
            finally {
                setLoading(false);
            }
        }
        if (!retrievedData) {
            retrieveData();
        }

        async function onClickFolder(orderCnpj) {
            let selectedOrder = orders.filter((x => x?.cnpj == orderCnpj))[0];

            await SaveOrder(selectedOrder.result, orderCnpj);

            navigation.navigate('OrderDetail');
        }

        async function SaveOrder(order, orderCnpj) {
            try {
                await AsyncStorage.setItem('order', order);
                await AsyncStorage.setItem('orderCnpj', orderCnpj);
            } catch (error) {
                console.error(error);
            }
        }

        const Item = ({ title }) => (
            <Card width={'43%'} containerStyle={{ borderColor: '#022048', borderRadius: 10 }}>
                <TouchableOpacity onPress={() => onClickFolder(title)}>
                    <Card.Title  >CNPJ</Card.Title>
                    <Card.Divider color={'#022048'} width={1} />
                    <Text style={styles.stylesFolderMenu.folderDescription}>{title}</Text>
                </TouchableOpacity>
            </Card>
        );

        return (
            <View
                contentContainerStyle={[styles.stylesFolderMenu.containerFolderMenu]}
            >
                <View style={{
                    backgroundColor: '#022048',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%'
                }}>
                    {isLoading ?
                        (<ActivityIndicator size={'large'} color={'#fff'} />) :
                        (<>
                            <View style={styles.stylesFolderMenu.folderWhite}>
                            </View>
                            <Text style={styles.stylesFolderMenu.screenName}>Pedidos</Text>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'center', backgroundColor: 'black', bottom: '87.5%', right: '37%' }}>
                                <FeatherIcons.ArrowLeft stroke="#022048" width={'200%'} height={'200%'} style={styles.stylesFolderMenu.backIconStyle} />
                                <Text></Text>
                            </TouchableOpacity>
                            <FlatList
                                data={orders}
                                style={styles.stylesFolderMenu.listStyle}
                                renderItem={({ item }) => <Item title={item.cnpj} />}
                                numColumns={2}
                                keyExtractor={item => item.id}
                            />

                        </>)}
                </View>
                <StatusBar style="auto" />
            </View>
        )
    }
}

export default OrdersScreen;