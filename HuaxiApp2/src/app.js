import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TopBarIconExample from './component/navTab.js';
// import TopBarIconExample from './component/tab.Test.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        return (
        	<TopBarIconExample />
        );
    }
}

export default App;
