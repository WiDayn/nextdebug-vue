import request from '@/utils/request';

const sort = ({ type, from, to }) => request.post('list/sort_problem', { type, from, to });

const get = ({ originalID }) => request.get(`problems/${originalID}`, {});

const create = ({
  name, from, problemLink, description,
}) => request.post('problems', {
  name, from, problem_link: problemLink, description,
});

export default {
  sort,
  get,
  create,
};
