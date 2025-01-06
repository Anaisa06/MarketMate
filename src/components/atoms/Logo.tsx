import React from 'react'
import { Image, StyleSheet, View } from 'react-native';

const image = require('../../assets/logos/logo-white-bc.png');

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image
                source={image}
                style={styles.image}
            />
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    image: {
      objectFit: 'scale-down',
      height: 110   ,
    },
  });
  