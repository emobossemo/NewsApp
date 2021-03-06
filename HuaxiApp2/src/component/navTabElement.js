import React, { Component } from 'react';
import { View, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import Styles from '../style/style.js';


const styles = StyleSheet.create(Styles);

export default class TabBarElement extends Component {
	render() {
		return (
	      <View style={[styles.tabs]}>
	        <TouchableOpacity onPress={() => this.props.goToPage(0)} style={styles.tab}>
	            <MaterialIcons name="library-books" size={30} color={this.props.activeTab === 0 ? 'rgb(255,255,255)' : 'rgb(206,206,206)'} />
	        </TouchableOpacity>
	        <TouchableOpacity onPress={() => this.props.goToPage(1)} style={styles.tab}>
	            <MaterialIcons name="person" size={30} color={this.props.activeTab === 1 ? 'rgb(255,255,255)' : 'rgb(206,206,206)'}/>
	        </TouchableOpacity>
	      </View>
	    )
	}
	
}