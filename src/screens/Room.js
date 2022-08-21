import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNavigate} from 'react-router-native';
import {useRoom} from '../context/RoomContext';
import {BASE_URL, END_CALL_PATH} from '../utils/api';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';

const Room = () => {
  const {guestId} = useRoom();
  const navigator = useNavigate();

  useEffect(() => {
    const effect = async () => {
      await requestMultiple([
        PERMISSIONS.ANDROID.CAMERA,
        PERMISSIONS.ANDROID.RECORD_AUDIO,
      ]);
    };

    effect().catch(console.log);
  }, []);

  return (
    <WebView
      allowsInlineMediaPlayback={true}
      cacheEnabled={true}
      geolocationEnabled={false}
      javaScriptEnabled
      javaScriptEnabledAndroid={true}
      mediaPlaybackRequiresUserAction={false}
      mixedContentMode={'compatibility'}
      originWhitelist={['*']}
      scalesPageToFit
      source={{uri: BASE_URL + 'room/' + guestId}}
      startInLoadingState={true}
      useWebkit
      userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
      onNavigationStateChange={e => {
        if (e.url.includes(END_CALL_PATH)) {
          navigator('/');
        }
      }}
      onLoadEnd={({nativeEvent}) => {
        console.log('onLoadEnd', nativeEvent);
        if (nativeEvent.url === BASE_URL + END_CALL_PATH) {
          navigator('/');
        }
      }}
      onError={({nativeEvent}) => {
        Alert.alert('onError', nativeEvent);
      }}
    />
  );
};

export default Room;
