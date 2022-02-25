import onlineJudgeService from '@/service/onlineJudgeService';

const onlineJudgeModule = {
  namespaced: true,
  actions: {
    sort(context, { type, from, to }) {
      return new Promise((resolve, reject) => {
        onlineJudgeService.sort({ type, from, to }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    get(context, { id }) {
      return new Promise((resolve, reject) => {
        onlineJudgeService.get({ id }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
  },
};

export default onlineJudgeModule;
