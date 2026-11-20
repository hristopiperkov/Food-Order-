import HomeScreen from '../screens/HomeScreen';

export default function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}