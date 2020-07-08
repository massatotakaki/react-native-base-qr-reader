import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRCodeScreen extends Component {
  handleButton = () => {
    this.scanner.reactivate();
  };
  onSuccess = async e => {
    console.log(e.data);
    this.success = true;
    //TODO: redirect the data to specific flow of Stoque suport
   // this.scanner.reactivate(); // Massato: Instruction to test read any QR in sequence
  };

  render() {
    return (
      <View style={styles.container}>
        <QRCodeScanner
          onRead={this.onSuccess}
          showMarker={true}
          checkAndroid6Permissions={true}
          ref={elem => {
            this.scanner = elem;
          }}
          cameraStyle={styles.cameraContainer}
          bottomContent={
            <View style={styles.touchable}>
              <Text style={styles.text} />
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },

  touchable: {
    padding: 16,
  },

  text: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  cameraContainer: {
    height: Dimensions.get('window').height,
  },
});
