import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Link} from 'react-router-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <Link to="/">
          <FontAwesome5 style={styles.icon} name={'home'} solid />
        </Link>
        <Link to="/logs">
          <FontAwesome5 style={styles.icon} name={'history'} solid />
        </Link>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          About
          <Text style={styles.boldText}>Intercom</Text>
        </Text>
        <Text style={styles.textContent}>
          SmartIntercom adalah sebuah alat dimana tamu dan pemilik rumah dapat
          melakukan interaksi (video call) melalui bell pintu, SmartIntercom
          dapat mengirimkan notifikasi kepada pemilik rumah jika tamu menekan
          tombol bell pintu.
        </Text>
        <Text style={styles.textContent}>
          Aplikasi ini dibuat oleh Muhaddisin sebagai tugas akhir pada program
          studi Teknomologi Informasi di Politeknik Aceh.
        </Text>
        <Text style={styles.textContent}>Telp: +62 822-6728-0676</Text>
      </View>
      <Text style={styles.footer}>Muhaddisin</Text>
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
  textContent: {
    textAlign: 'justify',
    marginVertical: 5,
    color: '#15375A',
  },
  title: {
    fontSize: 30,
    color: '#15375A',
    marginTop: 20,
    marginBottom: 40,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  footer: {
    color: '#15375A',
    textAlign: 'center',
    padding: 40,
  },
});

export default About;
