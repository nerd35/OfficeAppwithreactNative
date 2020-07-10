import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TopMenu from '../components/TopMenu';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TopMenu title='Home' navigation={navigation} />
			<View style={styles.homeContainer}>
				<Text style={styles.homeText}>HomeScreen</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FCFDFF'
	},
	homeContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	homeText: {
		fontWeight: '400',
		color: '#000',
		fontSize: 20
	}
});

export default HomeScreen;
