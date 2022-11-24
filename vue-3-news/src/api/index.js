import axios from 'axios';

function create(baseURL, options) {
  const instance = axios.create(Object.assign({ baseURL }, options));
  return instance;
}
const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
};
const url = config.baseUrl;

const fetch = create(`${url}`);
async function fetchList(path) {
  try {
    return await fetch.get(`${path}/1.json`);
  } catch (error) {
    console.log(error);
  }
}
function fetchUserInfo(payload) {
  try {
    return fetch.get(`/user/${payload}.json`);
  } catch (error) {
    console.log(error);
  }
}
function fetchItem(payload) {
  try {
    return fetch.get(`/item/${payload}.json`);
  } catch (error) {
    console.log(error);
  }
}

export { fetchList, fetchUserInfo, fetchItem };
