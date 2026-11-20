import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './navigation/RootNavigation';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
          <RootNavigator />
      </NavigationContainer>
    </>
  );
}

