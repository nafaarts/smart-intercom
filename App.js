import React from 'react';

import {StatusBar} from 'react-native';
import {NativeRouter, Routes, Route} from 'react-router-native';
import {RoomProvider} from './src/context/RoomContext';

import Home from './src/screens/Home';
import About from './src/screens/About';
import Logs from './src/screens/Logs';
import Room from './src/screens/Room';

export default function App() {
  return (
    <RoomProvider>
      <NativeRouter>
        <StatusBar barStyle={'light-content'} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </NativeRouter>
    </RoomProvider>
  );
}
