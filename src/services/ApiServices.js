import axios from 'react-native-axios';
import {BASE_URL} from '@env';
import Config from 'react-native-config';

export const postApiCall = (endPoint, data) => {
  // let baseURL = Config.ENV == 'lmdc' ? Config.BASE_URL : IMAGES.yesh_logo;
  console.log(Config.BASE_URL + `${endPoint}`);
  return new Promise((resolve, reject) => {
    let headers = {
      'Content-Type': 'application/json',
    };
    axios
      .post(Config.BASE_URL + `${endPoint}`, data, {headers: headers})
      .then(resp => {
        let response = resp.data;
        resolve(response);
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data.message);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(err);
        }
        reject(err);
      });
  });
};

export const postFileApiCall = (endPoint, data) => {
  return new Promise((resolve, reject) => {
    let headers = {
      'Content-Type': 'multipart/form-data',
    };
    axios
      .post(BASE_URL + `${endPoint}`, data, {headers: headers})
      .then(resp => {
        let response = resp.data;
        resolve(response);
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data.message);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(err);
        }
        reject(err);
      });
  });
};

export const getApiCall = (endPoint, data) => {
  return new Promise((resolve, reject) => {
    let headers = {
      'Content-Type': 'application/json',
    };
    axios
      .get(BASE_URL + `${endPoint}`, data, {headers: headers})
      .then(resp => {
        let response = resp.data;
        resolve(response);
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data.message);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log(err);
        }
        reject(err);
      });
  });
};
