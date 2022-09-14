import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
const currency = ['KZT', 'RUB', 'EUR'];
const baseCurEUR = { KZT: 470.52, RUB: 60.22, EUR: 1 };

function First({ value, onChangeNumber, changeCurrency, curren }) {
  return (
    <>
      {currency.map(item => {
        return (
          <TouchableHighlight
            style={{ backgroundColor: curren === item ? 'red' : null }}
            color="#841584"
            onPress={() => changeCurrency(item)}
          >
            <Text>{item}</Text>
          </TouchableHighlight>
        );
      })}
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="Введите цифру"
        value={value}
      />
    </>
  );
}

function Converter() {
  const [leftValue, setLeftValue] = useState();
  const [leftCurrency, setLeftCurrency] = useState('KZT');

  const [rightValue, setRightValue] = useState();
  const [rigthCurrency, setRightCurrency] = useState('RUB');

  useEffect(() => {
    if (leftValue) {
      const result =
        leftValue * (baseCurEUR[rigthCurrency] / baseCurEUR[leftCurrency]);
      setRightValue(result);
    }
  }, [leftValue, leftCurrency, rigthCurrency]);
  return (
    <View style={styles.app}>
      <First
        value={leftValue}
        onChangeNumber={setLeftValue}
        changeCurrency={setLeftCurrency}
        curren={leftCurrency}
      />
      <First
        value={rightValue}
        onChangeNumber={setRightValue}
        changeCurrency={setRightCurrency}
        curren={rigthCurrency}
      />
      <View style={styles.row}></View>
      <Text>{}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: 'auto',
    maxWidth: 500,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textAlign: 'end',
  },
  text: {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'end',
    backgraundColor: 'grey',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    padding: 10,
    width: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
});

export default Converter;
