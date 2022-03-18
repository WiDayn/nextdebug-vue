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
    get(context, { originalID }) {
      return new Promise((resolve, reject) => {
        problemService.get({ originalID }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    create(context, {
      name, from, problemLink, description,
    }) {
      return new Promise((resolve, reject) => {
        problemService.create({
          name, from, problemLink, description,
        }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
  },
};

export default problemModule;
