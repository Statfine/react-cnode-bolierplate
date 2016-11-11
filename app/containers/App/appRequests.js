/*
 * App request
 */

import { API_BASE } from 'common/constants';
import { request } from 'utils/request';
import { GLOBAL_ERRORS } from './errors';

const appRequest = {
  userinfoRequest() {
    return request(`${API_BASE}/user/info`)
      .then((data) => {
        const userInfo = data.data;
        delete userInfo.id;
        delete userInfo.watermarks;
        return userInfo;
      })
      .catch((err) => {
        throw new Error(GLOBAL_ERRORS[err.data.code]);
      });
  },
};

export default appRequest;
