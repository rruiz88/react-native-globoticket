import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet, Alert} from 'react-native';

const Contact = ({navigation}) => {
  const [formName, setFormName] = useState('Enter Name');
  const [formEmail, setFormEmail] = useState('Enter Email');
  const [formNumber, setFormNumber] = useState('Enter phone number');
  const [formMessage, setFormMessage] = useState('Enter Message...');

  const submit = () => {
    if (!formName || !formEmail || !formMessage || !formNumber) {
      Alert.alert('All fields required.');
    } else {
      Alert.alert(`Thank you ${formName}`);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.labels}>Name: *required</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={name => setFormName(name)}
        value={formName}
        autoCapitalize="words"
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>Email: *required</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={email => setFormEmail(email)}
        value={formEmail}
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>Phone:</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={phone => setFormNumber(phone)}
        value={formNumber}
        selectTextOnFocus={true}
      />
      <Text style={styles.labels}>Message: *required</Text>
      <TextInput
        style={styles.multitextinput}
        onChangeText={message => setFormMessage(message)}
        value={formMessage}
        multiline={true}
        numberOfLines={3}
        selectTextOnFocus={true}
      />

      <Button title="Cont Us" color="#708090" onPress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    flexDirection: 'column',
    padding: 18,
  },
  textinput: {
    borderWidth: 1,
    fontFamily: 'Roboto-Light',
    width: '80%',
    paddingBottom: 15,
  },
  multitextinput: {
    borderWidth: 1,
    fontFamily: 'Roboto-Light',
    width: '90%',
    height: 120,
    marginBottom: 50,
  },
  labels: {
    fontFamily: 'Roboto-Light',
  },
});

export default Contact;
