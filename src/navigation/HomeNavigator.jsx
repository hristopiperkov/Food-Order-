import { Pressable } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerRight: () => (
            <Pressable onPress={() => alert('Cart pressed!')}>
                <Ionicons name="menu" size={24} color="black" style={{ marginRight: 10 }} />
            </Pressable>
        ) }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Menu" }} />
        </Stack.Navigator>
    );
}