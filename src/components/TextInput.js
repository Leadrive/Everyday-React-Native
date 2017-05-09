import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import globalStyles from '../styles';

class TextInputComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			placeholder: true
		};
	}



	render() {
		return (
			<TextInput 
				onChangeText={(text) => { 
					this.setState({ text, placeholder: text.length === 0 });
				}}
				style={[styles.textInput, this.state.placeHolder ? styles.placeholder : styles.text]} 
				placeholder="🔍 Search through your posts" 
				underlineColorAndroid='rgba(0,0,0,0)' />
		);
	}
	
}

const styles = StyleSheet.create({
	textInput: {
		borderRadius: 5, 
		backgroundColor: 'white', 
		padding: 5, 
		fontFamily: globalStyles.fonts.regular,
		textAlign: 'center',
	},

	placeHolder: {
		color: globalStyles.colors.lightGray,
	},

	text: {
		color: globalStyles.colors.gray,
	}
});

export default TextInputComponent;
