import axios from 'axios';

const BASE_URL = 'https://icin.nafaarts.com/';
const END_CALL_PATH = 'finish.html';

const getDeviceToken = async () => {
  return axios
    .get(BASE_URL + 'get-devices')
    .then(({data}) => {
      return data;
    })
    .catch(err => {
      console.error('getDeviceToken Error : ', err);
    });
};

const addDeviceToken = async deviceToken => {
  return axios
    .post(BASE_URL + 'add-device', {
      deviceToken,
    })
    .then(({data}) => {
      return data;
    })
    .catch(err => {
      console.error('addDeviceToken Error : ', err);
    });
};

const getGuestLogs = async () => {
  return axios
    .get(BASE_URL + 'get-guest-logs')
    .then(({data}) => {
      return data;
    })
    .catch(err => {
      console.error('getGuestLogs Error : ', err);
    });
};

export {BASE_URL, END_CALL_PATH, getDeviceToken, addDeviceToken, getGuestLogs};
