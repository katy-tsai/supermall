import axios from 'axios';
export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  });
  //1.請求攔截
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  })
  //2. 響應攔截
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => console.log(err))
  return instance(config);
}
const cors = 'https://cors-anywhere.herokuapp.com/';

export function request1(config) {
  const instance = axios.create({
    baseURL: `${cors}https://www.lativ.com.tw/`,
    timeout: 5000
  });
  //1.請求攔截
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  })
  //2. 響應攔截
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => console.log(err))
  return instance(config);
}
