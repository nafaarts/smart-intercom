import React, {createContext, useContext, useState} from 'react';

const RoomContext = createContext();
const RoomUpdateContext = createContext();

const useRoom = () => {
  return useContext(RoomContext);
};

const useRoomUpdate = () => {
  return useContext(RoomUpdateContext);
};

const RoomProvider = ({children}) => {
  const [room, setRoom] = useState(null);

  const updateRoom = newRoom => {
    setRoom(newRoom);
  };

  return (
    <RoomContext.Provider value={room}>
      <RoomUpdateContext.Provider value={updateRoom}>
        {children}
      </RoomUpdateContext.Provider>
    </RoomContext.Provider>
  );
};

export {RoomProvider, useRoom, useRoomUpdate};
