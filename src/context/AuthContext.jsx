import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  registerUser,
  registerCompany,
  loginUser,
  accountUser,
  depositUser,
  TransferUser,
  GetdepositUser,
} from '../api/auth';
import jwtDecode from 'jwt-decode';

export const AuthContext = createContext();

//hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [company, setCompany] = useState('');
  const [errors, setErrors] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dataToken, setDataToken] = useState({});

  const [isDeposit, setIsDeposit] = useState('');

  const registerContact = async (user) => {
    try {
      const res = await registerUser(user);
      setUser(res.data);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const registerCompanies = async (company) => {
    try {
      const res = await registerCompany(company);
      setCompany(res.data);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const login = async (user) => {
    try {
      const res = await loginUser(user);
      setIsAuthenticated(true);
      setUser(res.data);
      localStorage.setItem('token', res.data.token);
      const data = localStorage.getItem('token');
      const resToken = jwtDecode(data);
      setDataToken(resToken);
    } catch (error) {
      setErrors(error.response.data);
    }
  };
  const loginCompany = async (company) => {
    try {
      const res = await loginUser(company);
      setIsAuthenticated(true);
      setCompany(res.data);
      localStorage.setItem('token', res.data.token);
      const data = localStorage.getItem('token');
      const resToken = jwtDecode(data);
      setDataToken(resToken);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const account = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('no hay token');
      }
      const res = await accountUser(token);
      return res.data.wallet;
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const deposit = async (values) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('no hay token');
      }
      const res = await depositUser(token, values);
      setIsDeposit(res.data);
    } catch (error) {
      setErrors(error.response.data);
    }
  };
  const transfer = async (values) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('no hay token');
      }
      const res = await TransferUser(token, values);
      setIsDeposit(res.data);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const getDeposit = async (page) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('no hay token');
      }

      const res = await GetdepositUser(token, page);
      return res.data;
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  useEffect(() => {
    if (errors !== '') {
      const timer = setTimeout(() => {
        setErrors('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);
  return (
    <AuthContext.Provider
      value={{
        registerContact,
        user,
        errors,
        registerCompanies,
        company,
        login,
        isAuthenticated,
        dataToken,
        loginCompany,
        transfer,

        account,
        deposit,
        isDeposit,
        getDeposit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
