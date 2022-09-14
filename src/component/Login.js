import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LIGHT_COLORS, DARK_COLORS } from './Theme';

const image = {
  uri: 'https://papik.pro/uploads/posts/2021-11/1636228837_60-papik-pro-p-kaspi-logotip-foto-68.jpg',
};
const Stack = createNativeStackNavigator();

export default function Login({ navigation }) {
  const [theme, setTheme] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setTheme(light => !light);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme ? LIGHT_COLORS.layout : DARK_COLORS.layout },
      ]}
    >
      <ImageBackground
        source={image}
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={styles.text}> Kaspi Bank </Text>
      </ImageBackground>

      <View>
        <View>
          <Switch
            trackColor={{
              false: 'black',
              true: 'green',
            }}
            thumbColor={isEnabled ? 'black' : 'red'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={theme}
          />
        </View>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#fff"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate('Glavnaya');
        }}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#0000ff',
    borderRadius: 30,
    width: '50%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 10,
  },

  loginBtn: {
    width: '30%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#0000ff',
  },
  loginText: {
    color: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'red',
    marginBottom: 10,
  },
});
