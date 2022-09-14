import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import React from 'react';

const Settle = () => {
  const [isSettle, setIsSettle] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isSettle) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [isSettle]);
  return (
    <TouchableOpacity
      onPress={() => setIsSettle(true)}
      style={{
        marginVertical: 30,
        backgroundColor: '#DC143C',
        padding: 20,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color="#0000ff"
          style={{ marginHorizontal: 'auto', paddingVertical: 4 }}
        />
      ) : (
        <View>
          <Text style={styles.cardView}>
            {isSettle
              ? 'Ваша оплата прошла'
              : 'Нажмите если согласны отправить'}
          </Text>
          <View style={{ alignItems: 'flex-end' }}>
            {isSettle ? (
              <Entypo name="emoji-happy" size={24} color="black" />
            ) : (
              <View>
                <Text style={styles.textBalanceCard}>KZT: 25000</Text>
                <Text style={styles.cardMain}>Data: 14.09.2022</Text>
              </View>
            )}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardMain: {
    color: '#000',
    fontSize: 16,
    lineHeight: 16,
  },
  cardView: {
    color: '#000',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
  },
});

export default Settle;
