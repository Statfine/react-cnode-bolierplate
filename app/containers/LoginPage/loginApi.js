/**
 * Created by easub on 2016/12/3.
 */
import { API_BASE } from 'common/constants';
import { request } from 'utils/request';

function getError(err) {
  return new Error(err.data.error_msg);
}

const loginApi = {
  /*
   * 登录
   * accessToken
   */
  login(accesstoken) {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        accesstoken,
      }),
    };
    return request(`${API_BASE}/accesstoken`, options)
      .then((data) => data.data)
      .catch((err) => {
        throw getError(err);
      });
  },
};

export default loginApi;
