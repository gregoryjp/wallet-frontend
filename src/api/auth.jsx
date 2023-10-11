import axios from './axios';

export const registerUser = (user) => axios.post(`/user/register`, user);
export const registerCompany = (company) =>
  axios.post(`/company/register`, company);
export const loginUser = (user) => axios.post(`/user/login`, user);
export const loginCompany = (company) => axios.post(`/company/login`, company);
export const accountUser = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get('/user/account', config);
};

export const depositUser = async (token, values) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.post('/user/transaction?type=deposit', values, config);
};

export const TransferUser = async (token, values) => {
  const email = values.to;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.post(
    `/user/transaction?type=transfer&to=${email}`,
    values,
    config,
  );
};

export const GetdepositUser = async (token, page) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get(
    `/user/get/transaction?type=deposit&page=${page}&limit=5`,
    config,
  );
};
