import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Menu from './Menu';

const Home = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.globologo}
        source={require('./images/_Export_globoticket-bug-black.png')}
      />

      <Text style={styles.title}>Welcome to GloboTicket</Text>
      <Text style={styles.subtitle}>{props.username}</Text>
      <Image style={styles.heroimage} source={require('./images/boxing.jpg')} />
      <View style={styles.textcontainer}>
        <Text style={styles.content}>{introText}</Text>
      </View>
      <View style={styles.menu}>
        <Menu />
      </View>
    </View>
  );
};

const introText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus.`;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
  },
  textcontainer: {
    padding: 20,
  },
  globologo: {
    height: 120,
    width: 150,
  },
  title: {
    fontFamily: 'Roboto-Bold',
  },
  subtitle: {
    paddingTop: 5,
    fontFamily: 'Roboto-Bold',
  },
  content: {
    fontFamily: 'Roboto-Light',
    fontWeight: '300',
  },
  heroimage: {
    height: 170,
    width: '100%',
  },
  menu: {
    position: 'absolute',
    bottom: 10,
  },
});

export default Home;
