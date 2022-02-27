import testSetService from '@/service/testSetService';

const testSetModule = {
  namespaced: true,
  actions: {
    sort(context, { id }) {
      return new Promise((resolve, reject) => {
        testSetService.sort({ id }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    get(context, { id }) {
      return new Promise((resolve, reject) => {
        testSetService.get({ id }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    create(context, {
      ProblemID, Uploader, Input, Output,
    }) {
      return new Promise((resolve, reject) => {
        testSetService.create({
          ProblemID, Uploader, Input, Output,
        }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
  },
};

export default testSetModule;
