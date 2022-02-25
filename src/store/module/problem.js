import problemService from '@/service/problemService';

const problemModule = {
  namespaced: true,
  actions: {
    sort(context, { type, from, to }) {
      return new Promise((resolve, reject) => {
        problemService.sort({ type, from, to }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    get(context, { id }) {
      return new Promise((resolve, reject) => {
        problemService.get({ id }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
  },
};

export default problemModule;
