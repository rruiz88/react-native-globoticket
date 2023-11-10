import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import globoTickets from './TicketsDB';

const TicketPurchase = ({route, navigation}) => {
  const [ticketQty, setTicketQty] = useState('1');
  const {tickId} = route.params;

  const selectedEvent = globoTickets.find(
    tickets => tickets.eventId === tickId,
  );

  const purchase = () => {
    let price = selectedEvent.price * ticketQty;

    Alert.alert(`Your total is ${price}`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedEvent.event}</Text>
      <Image style={styles.ticketimage} source={selectedEvent.image} />
      <Text style={styles.shortDescription}>
        {selectedEvent.shortDescription}
      </Text>
      <Text style={styles.description}>{selectedEvent.description}</Text>
      <View style={styles.purchaserow}>
        <Text style={styles.qtyinput}>Quantity: </Text>
        <TextInput
          style={styles.qtyinput}
          onChangeText={qty => setTicketQty(qty)}
          value={ticketQty}
          selectTextOnFocus={true}
          keyboardType="numberic"
        />
      </View>

      <Text style={styles.price}>
        Total Price: ${selectedEvent.price * ticketQty}
      </Text>

      <TouchableOpacity onPress={purchase} style={styles.button}>
        <Text style={styles.buttontext}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
  },
  purchaserow: {
    flexDirection: 'row',
  },
  button: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: '60%',
  },
  title: {
    fontFamily: 'Roboto-Light',
    paddingBottom: 10,
  },
  ticketimage: {
    height: 180,
    width: '100%',
  },
  shortDescription: {
    fontFamily: 'Roboto-Light',
    paddingTop: 5,
    textAlignVertical: 'center',
  },
  description: {
    textAlign: 'left',
    fontFamily: 'Roboto-Light',
    fontWeight: '600',
    padding: 10,
  },
  price: {
    fontFamily: 'Roboto-Light',
    paddingTop: 5,
    paddingBottom: 10,
  },
  buttontext: {
    fontFamily: 'Roboto-Light',
    textAlign: 'center',
    padding: 5,
  },
  qtyinput: {
    borderWidth: 1,
    fontFamily: 'Roboto-Light',
    height: 38,
    width: 40,
    marginLeft: 25,
  },
});

export default TicketPurchase;
