import storageService from '@/service/storageService';
import userService from '@/service/userService';
import uploadService from '@/service/uploadService';

const userModule = {
  namespaced: true,
  state: {
    token: storageService.get(storageService.USER_TOKEN),
    // eslint-disable-next-line max-len
    userInfo: storageService.get(storageService.USER_INFO) ? JSON.parse(storageService.get(storageService.USER_INFO)) : null,
  },

  mutations: {
    SET_TOKEN(state, token) {
      // 更新本地缓存
      storageService.set(storageService.USER_TOKEN, token);
      // 更新state
      state.token = token;
    },
    SET_USERINFO(state, userInfo) {
      storageService.set(storageService.USER_INFO, JSON.stringify(userInfo));
      state.userInfo = userInfo;
    },
  },

  actions: {
    register(context, { Email, Name, Password }) {
      return new Promise((resolve, reject) => {
        userService.register({ Email, Name, Password }).then((res) => {
          // 保存token
          context.commit('SET_TOKEN', res.data.data.token);
          return userService.info();
        }).then((res) => {
          // 保存用户信息
          context.commit('SET_USERINFO', res.data.data.user);
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    login(context, { name, password }) {
      return new Promise((resolve, reject) => {
        userService.login({ name, password }).then((res) => {
          // 保存token
          context.commit('SET_TOKEN', res.data.data.token);
          return userService.info();
        }).then((res) => {
          // 保存用户信息
          context.commit('SET_USERINFO', res.data.data.user);
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    logout({ commit }) {
      commit('SET_TOKEN', '');
      storageService.clear(storageService.USER_TOKEN);
      commit('SET_USERINFO', '');
      storageService.clear(storageService.USER_INFO);

      window.location.reload();
    },
    uploadavatar(contexts, { context }) {
      return new Promise((resolve, reject) => {
        uploadService.uploadavatar({ context }).then((res) => {
          contexts.commit('SET_USERINFO', res.data.data.user); // 注意这里的是contexts
          resolve(res);
          // 成功后刷新页面
          window.location.reload();
        }).catch((err) => {
          reject(err);
        });
      });
    },
    userDetail(context, { ID }) {
      return new Promise((resolve, reject) => {
        userService.userDetail({ ID }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
  },
};

export default userModule;
