import request from '@/utils/request';

const register = ({ Email, Name, Password }) => request.post('auth/register', { Email, Name, Password });

const login = ({ name, password }) => request.post('auth/login', { name, password });

const info = () => request.get('auth/info');

const userDetail = ({ Name }) => request.post('auth/userDetail', { Name });

export default {
  register,
  login,
  info,
  userDetail,
};
