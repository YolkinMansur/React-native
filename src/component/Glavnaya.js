import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Converter from './Converter';
import Settle from './Settle';

const Info = [
  {
    id: '1',
    title: 'Наш Банк',
  },
  {
    id: '2',
    title: 'Физ. лицам',
  },
  {
    id: '3',
    title: 'Юр. лицам',
  },
  {
    id: '4',
    title: 'Коммуникации',
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function loanInformationScreen({ navigation: { goBack } }) {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>
        Получение информации о сумме задолженности по кредитам{' '}
      </Text>
      <FlatList
        data={Info}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        title="Перейдите на главную страницу"
        onPress={() => navigation.navigate('Home')}
        style
      />
      <Button
        style={styles.button}
        title="Go to Home"
        onPress={() => goBack()}
      />
    </View>
  );
}
function currentAccountScreen({ navigation: { goBack } }) {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Текущий счёт</Text>
      <Settle />
      <Button
        title="Перейдите на главную страницу"
        onPress={() => navigation.navigate('Current')}
      />
      <Button
        style={styles.button}
        title="Go to Home"
        onPress={() => goBack()}
      />
    </View>
  );
}
function helpsScreen({ navigation: { goBack } }) {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Страница Помощи</Text>{' '}
      <FlatList
        data={Info}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        title="Перейдите на главную страницу"
        onPress={() => navigation.navigate('Current')}
      />
      <Button style={styles.button} title="Назад" onPress={() => goBack()} />
    </View>
  );
}
function transferScreen({ navigation: { goBack } }) {
  return (
    <View
      style={{
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={styles.text}>Ваши Переводы</Text>
      <Converter />
      <Button
        title="Перейдите на главную страницу"
        onPress={() => navigation.navigate('Transfer')}
      />
      <Button
        style={styles.button}
        title="Go to Home"
        onPress={() => goBack()}
      />
    </View>
  );
}
function HomeScreen({ navigation, text }) {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          gap: 10,
          width: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Text style={styles.text}>{text}</Text>
        <Button
          title="Go to Information page"
          onPress={() => navigation.navigate('Information')}
        />
        <Button
          title="Go to Current page"
          onPress={() => navigation.navigate('Current')}
        />
        <Button
          title="Go to Helps page"
          onPress={() => navigation.navigate('Helps')}
        />
        <Button
          title="Go to Transfer page"
          onPress={() => navigation.navigate('Transfer')}
        />
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function Glavnaya() {
  return (
    <View>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="Information"
          component={loanInformationScreen}
          options={{
            title: 'Go Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Current"
          component={currentAccountScreen}
          options={{
            title: 'Go Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Helps"
          component={helpsScreen}
          options={{
            title: 'Go Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Transfer"
          component={transferScreen}
          options={{
            title: 'Go Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,

    color: 'white',
  },
  text: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'red',
    marginBottom: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Glavnaya;
