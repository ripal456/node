/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alert';

// type is either password or data
export const update = async (data, type) => {
  const url =
    type === 'your password'
      ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword'
      : 'http://127.0.0.1:3000/api/v1/users/updateMe';

  try {
    const res = await axios({
      method: 'PATCH',
      url,
      data
    });
    if (res.data.status === 'success') {
      showAlert('success', `${type} successfully update`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
