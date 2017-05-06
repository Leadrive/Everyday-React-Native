import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

class SplashScreen extends Component {
	render() {
		const { iconStyle, imageHolderStyle, titleStyle, subtitleStyle, textHolderStyle } = styles;

		return (
			<View style={{ flex: 1 }}>
				<View style={imageHolderStyle}>
					<Image 
						source={require('../../assets/images/app_icon.png')}
						style={{ width: 96, height: 96 }}
					/>
				</View>
				<View style={textHolderStyle}>
					<Text style={titleStyle}>E V E R Y D A Y</Text>
					<Text style={subtitleStyle}>Memories jotted down</Text>
				</View>
			</View>
		);
	}
}

const styles = {
	imageHolderStyle: {
		flex: 3, 
		justifyContent: 'center', 
		alignItems: 'center'
	},

	titleStyle: {
		fontSize: 24,
		color: '#666666'
		//letterSpacing: 10
	},

	subtitleStyle: {
		color: '#666666'
	},

	textHolderStyle: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center'
	}
}

export default SplashScreen;