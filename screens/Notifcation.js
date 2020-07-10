import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TopMenu from '../components/TopMenu';

const NotificationScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TopMenu title='Notifications' navigation={navigation} />
			<View style={styles.notificationContainer}>
				<Text style={styles.notificationText}>NotificationScreen</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FCFDFF'
	},
	notificationContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	notificationText: {
		fontWeight: '400',
		color: '#000',
		fontSize: 20
	}
});

export default NotificationScreen;
