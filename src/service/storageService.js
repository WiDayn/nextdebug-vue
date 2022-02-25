// 本地缓存服务

const PREFIX = 'nextdebug';

const USER_PREFIX = `${PREFIX}_user_`;
const USER_TOKEN = `${USER_PREFIX}token`;
const USER_INFO = `${USER_PREFIX}info`;

const clear = (key) => {
  localStorage.removeItem(key);
};

const set = (key, data) => {
  localStorage.setItem(key, data);
};

const get = (key) => localStorage.getItem(key);

export default {
  clear,
  set,
  get,
  USER_TOKEN,
  USER_INFO,
};
