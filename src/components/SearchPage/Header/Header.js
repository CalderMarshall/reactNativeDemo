/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import SearchForm from './SearchForm/SearchForm';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchForm />
        <Icon style={{ marginLeft: 15, position: 'absolute', right: 10, top: 104, zIndex: 100, backgroundColor: 'transparent' }} name="share" size={20} color="#02214B" />
        <View style={styles.formBottom}>
          <Text style={{ marginLeft: 8, flex: 1 }}>5 Results</Text>
          {/* TODO: Fix that borderLeftWidth & borderLeftColor */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#fff'
  },
  formBottom: {
    height: 30,
    width: 375,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

