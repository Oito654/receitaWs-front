import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import MainMenuScreen from './MainMenuScreen';
import OrdersScreen from './OrdersScreen';
import { Edit } from 'react-native-feather';
import EditProfileScreen from './EditProfileScreen';
import OrdersDetailsScreen from './OrdersDetailsScreen';
import MakeOrderScreen from './MakeOrderScreen';

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen.LoginScreen} />
                <Stack.Screen
                    name='Register'
                    component={RegisterScreen.RegisterScreen}
                />
                <Stack.Screen
                    name='MainMenu'
                    component={MainMenuScreen.MainMenuScreen}
                />
                <Stack.Screen
                    name='EditProfile'
                    component={EditProfileScreen.EditProfileScreen}
                />
                <Stack.Screen
                    name='Orders'
                    component={OrdersScreen.OrdersScreen}
                />
                <Stack.Screen
                    name='OrderDetail'
                    component={OrdersDetailsScreen.OrdersDetailsScreen}
                />
                <Stack.Screen
                    name='MakeOrder'
                    component={MakeOrderScreen.MakeOrderScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ScreenStack;