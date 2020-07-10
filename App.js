import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import NotificationScreen from './screens/Notifcation';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
	const Drawer = createDrawerNavigator();
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName='Home'>
				<Drawer.Screen icon='Home' name='Home' component={HomeScreen} />
				<Drawer.Screen name='Notifications' component={NotificationScreen} />
				<Drawer.Screen name='Login' component={LoginScreen} />
				<Drawer.Screen name='Register' component={RegisterScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
