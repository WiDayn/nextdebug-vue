import request from '@/utils/request';

const register = ({ Email, Name, Password }) => request.post('auth/register', { Email, Name, Password });

const login = ({ name, password }) => request.post('auth/login', { name, password });

const info = () => request.get('auth/info');

const userDetail = ({ ID }) => request.post('auth/userDetail', { ID });

export default {
  register,
  login,
  info,
  userDetail,
};
