import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Link} from 'react-router-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import {faker} from '@faker-js/faker';
import {getGuestLogs} from '../utils/api';

const Logs = () => {
  let [guestLogs, setGuestLogs] = useState([]);

  useEffect(() => {
    // setGuestLogs(getGuestLogs);
    getGuestLogs().then(data => {
      setGuestLogs(data.reverse());
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <Link to="/">
          <FontAwesome5 style={styles.icon} name={'home'} solid />
        </Link>
        <Link to="/about">
          <FontAwesome5 style={styles.icon} name={'user'} solid />
        </Link>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Guest Logs</Text>
        <ScrollView style={styles.scrollview}>
          {guestLogs.map(data => {
            return (
              <View style={styles.card} key={data._id}>
                <Text style={styles.timestamp}>{data.status}</Text>
                <Text style={styles.textContent}>
                  {new Date(data.timestamp).getDate()}/
                  {new Date(data.timestamp).getMonth() + 1}/
                  {new Date(data.timestamp).getFullYear()}{' '}
                  {new Date(data.timestamp).getHours()}:
                  {new Date(data.timestamp).getMinutes()}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 28,
    backgroundColor: '#DEDEDC',
  },
  navigator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  icon: {
    fontSize: 30,
    color: '#15375A',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 20,
    color: '#15375A',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 7,
    color: '#15375A',
  },
  textContent: {
    color: '#15375A',
    fontSize: 14,
  },
  timestamp: {
    color: '#15375A',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollview: {
    flex: 1,
    height: '100%',
    marginBottom: 40,
  },
});

export default Logs;
