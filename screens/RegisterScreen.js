import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import TopMenu from '../components/TopMenu';

const RegisterScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TopMenu title='Sign up' navigation={navigation} />
			<View style={styles.notificationContainer}>
				<Text style={styles.notificationText}>Sign up</Text>
				<Text style={styles.SubTitle}>Sign up to get started</Text>
				<View style={styles.form}>
					<View>
						<Text style={{ fontSize: 16 }}>Name</Text>
						<TextInput style={styles.input} placeholder=' Enter Full Name' />
					</View>
					<View style={{ marginTop: 12 }}>
						<Text style={{ fontSize: 16 }}>Email</Text>
						<TextInput style={styles.input} placeholder=' Email@email.com' />
					</View>
					<View style={{ marginTop: 12 }}>
						<Text style={{ fontSize: 16 }}>Password</Text>
						<TextInput style={styles.input} secureTextEntry={true} placeholder=' password' />
					</View>
					<View>
						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>Register</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ paddingHorizontal: 10, alignItems: 'center' }}>
					<Text style={styles.signText}>
						Don't have an account? <Text style={{ color: '#191970', fontWeight: 'bold' }}>Sign up</Text>
					</Text>
				</View>
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
		paddingHorizontal: 22
	},
	notificationText: {
		fontWeight: '600',
		color: '#000',
		fontSize: 30,
		paddingHorizontal: 20,
		marginTop: 40
	},
	SubTitle: {
		color: '#ccc',
		fontSize: 16,
		fontWeight: 'bold',
		paddingHorizontal: 20,
		marginBottom: 40
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#191970',
		borderRadius: 40,
		color: '#f194ff',
		marginTop: 40,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 9
		},
		shadowOpacity: 0.5,
		shadowRadius: 12.35,

		elevation: 4
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		marginVertical: 5,
		fontSize: 20
	},
	sectionText: {
		paddingHorizontal: 23,
		fontSize: 16,
		color: '#a9a9a9',
		fontWeight: '500',
		marginBottom: 12
	},
	form: {
		paddingVertical: 20,
		paddingHorizontal: 20
	},
	input: {
		width: 280,
		height: 40,
		borderColor: '#ccc',
		borderBottomWidth: 1,
		fontSize: 15
	},
	signText: {
		justifyContent: 'center',
		fontSize: 13,
		fontWeight: 'bold',
		color: '#a9a9a9'
	}
});

export default RegisterScreen;
