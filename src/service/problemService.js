import request from '@/utils/request';

const sort = ({ type, from, to }) => request.post('list/sort_problem', { type, from, to });

const get = ({ id }) => request.get(`problems/${id}`, {});

export default {
  sort,
  get,
};
