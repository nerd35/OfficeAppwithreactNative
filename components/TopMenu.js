import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';

const TopMenu = ({ title, navigation }) => {
	return (
		<View style={styles.topmenuContainer}>
			<Entypo name='menu' size={50} color='#000' onPress={() => navigation.toggleDrawer()} />
			<Text style={styles.menuTitle}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	topmenuContainer: {
		flexDirection: 'row',
		height: 100,
		backgroundColor: '#F6F7FA',
		alignItems: 'flex-end',
		paddingHorizontal: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 9
		},
		shadowOpacity: 0.5,
		shadowRadius: 12.35,

		elevation: 19
	},
	menuTitle: {
		fontSize: 25,
		color: '#000',
		padding: 10,
		marginLeft: 30
	}
});

export default TopMenu;
