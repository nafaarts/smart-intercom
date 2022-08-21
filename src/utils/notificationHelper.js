import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
import {addDeviceToken, getDeviceToken} from './api';

const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  return (
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL
  );
};

const showAlert = (title, body, callback, data) => {
  return Alert.alert(
    title,
    body,
    [
      {
        text: 'Terima',
        onPress: () => {
          return data.status === 'waiting' ? callback(data) : false;
        },
      },
      {
        text: 'Tolak',
        onPress: () => {
          Alert.alert('ditolak');
          return false;
        },
      },
    ],
    {cancelable: false},
  );
};

export const handleNotification = callback => {
  if (requestUserPermission()) {
    messaging()
      .getToken()
      .then(token => {
        // console.log('FCM Token : ', token);
        let devices_token = getDeviceToken();
        devices_token.then(data => {
          let tokendata = data.filter(item => item.deviceToken === token);
          if (tokendata.length === 0) {
            addDeviceToken(token).then(data => {
              console.log('registered', data);
            });
          }
        });
      });
  } else {
    console.log('Permission not granted');
  }

  messaging().onMessage(async remoteMessage => {
    console.log(remoteMessage);
    showAlert(
      remoteMessage.notification.title,
      remoteMessage.notification.body,
      callback,
      remoteMessage.data,
    );
  });

  messaging().onNotificationOpenedApp(async remoteMessage => {
    if (remoteMessage) {
      showAlert(
        remoteMessage.notification.title,
        remoteMessage.notification.body,
        callback,
        remoteMessage.data,
      );
    } else {
      console.log('No initial notification');
    }
  });

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    showAlert(
      remoteMessage.notification.title,
      remoteMessage.notification.body,
      callback,
      remoteMessage.data,
    );
  });
};
