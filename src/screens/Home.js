import React, {useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import {Link, useNavigate} from 'react-router-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {handleNotification} from '../utils/notificationHelper';
import {useRoomUpdate} from '../context/RoomContext';

const Home = () => {
  const navigator = useNavigate();
  const updateRoom = useRoomUpdate();

  const redirectToRoom = data => {
    console.log('naviagte to room', data);
    updateRoom(data);
    return navigator('/room');
  };

  useEffect(() => {
    handleNotification(redirectToRoom);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <Link to="/about">
          <FontAwesome5 style={styles.icon} name={'user'} solid />
        </Link>
        <Link to="/logs">
          <FontAwesome5 style={styles.icon} name={'history'} solid />
        </Link>
      </View>
      <View style={styles.content}>
        <Image
          source={require('../../assets/politeknik.png')}
          style={styles.image}
        />
        <Text style={styles.title}>
          Smart
          <Text style={styles.boldText}>Intercom</Text>
        </Text>
      </View>
      <Text style={styles.footer}>Muhaddisin</Text>
      <StatusBar style="auto" />
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
  image: {
    height: 60,
    width: 142,
    marginBottom: 80,
  },
  icon: {
    fontSize: 30,
    color: '#15375A',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  title: {
    fontSize: 30,
    color: '#15375A',
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

export default Home;
