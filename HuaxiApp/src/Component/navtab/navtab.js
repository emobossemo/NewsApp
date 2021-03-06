import React, { Component } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import { TabViewAnimated, TabViewPage, TabBar } from 'react-native-tab-view';;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#212121',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class NavTab extends Component {
  static propTypes = {
    style: View.propTypes.style,
  };

  state = {
    index: 0,
    routes: [
      { key: '1' },
      { key: '2' },
      { key: '3' },
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({
      index,
    });
  };

  _renderIcon = ({ route }) => {
    switch (route.key) {
    case '1':
      return <Image source={require('../assets/tab-icon-1.png')} />;
    case '2':
      return <Image source={require('../assets/tab-icon-2.png')} />;
    case '3':
      return <Image source={require('../assets/tab-icon-3.png')} />;
    default:
      return null;
    }
  };

  _renderFooter = (props) => {
    return (
      <TabBar
        {...props}
        pressColor='rgba(0, 0, 0, .2)'
        renderIcon={this._renderIcon}
        style={styles.tabbar}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View style={[ styles.page, { backgroundColor: '#ff4081' } ]} />;
    case '2':
      return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]} />;
    case '3':
      return <View style={[ styles.page, { backgroundColor: '#4caf50' } ]} />;
    default:
      return null;
    }
  };

  _renderPage = (props) => {
    return <TabViewPage {...props} renderScene={this._renderScene} />;
  };

  render() {
    return (
      <View style={{flex: 1}}>
  			<TabViewAnimated
  				style={[ styles.container, this.props.style ]}
  				navigationState={this.state}
  				renderScene={this._renderPage}
  				renderFooter={this._renderFooter}
  				onRequestChangeTab={this._handleChangeTab}
  			/>
  		</View>
    );
  }
}