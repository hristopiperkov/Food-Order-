import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartNavigator from './CartNavigator';
import HomeNavigator from './HomeNavigator';
import InfoScreen from '../screens/InfoScreen';
import { Ionicons } from '@expo/vector-icons';

export default function RootNavigator() {
     const Tabs = createBottomTabNavigator();
    //const Tabs = createNativeBottomTabNavigator();
    
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Restaurants" component={HomeNavigator} options={{ headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> }} />
            <Tabs.Screen name="CartTab" component={CartNavigator} options={{ headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name="cart" size={size} color={color} /> }} />
            <Tabs.Screen name="Info" component={InfoScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" size={size} color={color} /> }} />
        </Tabs.Navigator>
    );
}