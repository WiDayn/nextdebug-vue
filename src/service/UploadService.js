import request from '@/utils/request';

const uploadavatar = ({ context }) => request.post('upload/avatar', { context });

export default {
  uploadavatar,
};
