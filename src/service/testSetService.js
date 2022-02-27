import request from '@/utils/request';

const sort = ({ id }) => request.post('list/sort_test_set', { id });

const get = ({ id }) => request.get(`test_set/${id}`, {});

const create = ({
  name, from, problemLink, description,
}) => request.post('test_set', {
  name, from, problem_link: problemLink, description,
});

export default {
  sort,
  get,
  create,
};
