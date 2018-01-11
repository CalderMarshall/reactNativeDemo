import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const homes = [{
  address: '230 E Court Dr SW, Atlanta, GA 30331',
  photoUrl: '../../../assets/images/east-court-house.jpg',
  quote: '$392,000',
  desc: '5bd 4ba 2,871 sq ft'
}, {
  address: '205 Chemin Die Vie Atlanta, GA 30342',
  photoUrl: '../../../assets/images/chemin-die-vie.jpg',
  quote: '$410,000',
  desc: '3bd 3+ ba 1,882 sq ft'
}, {
  address: '5460 Browne Ct Atlanta, GA 30342',
  photoUrl: '../../../assets/images/chemin-die-vie.jpg',
  quote: '$300,000',
  desc: '3bd 2+ ba 1,584 sq ft'
}]

// TODO: Loop over these images
export default class DisplayHomes extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => Actions.productDetails()}>
            <Image
              style={styles.homeImg}
              source={require('../../../assets/images/east-court-house.png')}
            />
          </TouchableOpacity>
          <Image
            style={styles.homeImg}
            source={require('../../../assets/images/home-images-5.png')}
          />
          <Image
            style={styles.homeImg}
            source={require('../../../assets/images/home-images-6.png')}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  homeImg: {
    width: '100%',
    height: 300
  },
  homeTextContainer: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    zIndex: 100,
    backgroundColor: 'transparent'
  },
  homeText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 17
  }
});
