import request from '@/utils/request';

const sort = ({ type, from, to }) => request.post('list/sort_online_judge', { type, from, to });

const get = ({ id }) => request.get(`/online_judge/${id}`, {});

export default {
  sort,
  get,
};
