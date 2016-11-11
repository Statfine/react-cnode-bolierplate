/**
 * Created by easub on 2016/11/1.
 */
import { API_BASE } from 'common/constants';
import { camelToSnake, get, request } from 'utils/request';

import { ERROR_CODE } from './error';

function getError(err) {
  let res;
  if (err && err.data) {
    res = ERROR_CODE[err.data.code];
  }
  return new Error(res || ERROR_CODE.unknown);
}

const libApi = {
  /*
   * 获取用户库和频道筛选列表 (新建视频,筛选)
   */
  getSelectlib() {
    const params = camelToSnake({
      include: 'channels',
    });
    return get(`${API_BASE}/libraries`, params)
      .then((data) => data.data)
      .catch((err) => {
        throw getError(err);
      });
  },

  /*
   *  创建库
   */
  creatLib(name) {
    if (!Boolean(name)) {
      throw new Error('新建库名不能为空');
    }
    const options = {
      method: 'POST',
      body: JSON.stringify({
        name,
        is_public: 1,
      }),
    };
    return request(`${API_BASE}/libraries`, options)
      .then((data) => data.data)
      .catch((err) => {
        throw getError(err);
      });
  },

  /*
   *  获取库列表
   */
  fetchLibList(name, page, pageSize = 10) {
    const params = camelToSnake({
      name,
      page,
      page_size: pageSize,
    });
    return get(`${API_BASE}/libraries/admin`, params)
      .then((data) => data)
      .catch((err) => {
        throw getError(err);
      });
  },

  /*
   *   删除库列表
   */
  deleteLibList(libId) {
    const options = {
      method: 'DELETE',
    };
    return request(`${API_BASE}/libraries/${libId}`, options)
      .then((data) => data.data)
      .catch((err) => {
        throw getError(err);
      });
  },

  /*
   *   修改库名称
   */
  editLib(libId, name) {
    const options = {
      method: 'PUT',
      body: JSON.stringify({
        name,
      }),
    };
    return request(`${API_BASE}/libraries/${libId}`, options)
      .then((data) => data.data)
      .catch((err) => {
        throw getError(err);
      });
  },

  /*
   *   获取库详情（频道列表）
   */
  fetchLib(libId) {
    const options = {
      method: 'GET',
    };
    return request(`${API_BASE}/libraries/${libId}`, options)
      .then((data) => data.data)
      .catch((err) => {
        throw getError(err);
      });
  },

  /*
   *  创建频道
   */
  creatChannel(libId, name) {
    if (!Boolean(name)) {
      throw new Error('新建频道名称不能为空');
    }
    const options = {
      method: 'POST',
      body: JSON.stringify({
        name,
      }),
    };
    return request(`${API_BASE}/libraries/${libId}/channels`, options)
      .then((data) => data.data)
      .catch((err) => {
        throw getError(err);
      });
  },

  /*
   *   删除频道
   */
  deleteChannel(libId, channelId) {
    const options = {
      method: 'DELETE',
    };
    return request(`${API_BASE}/libraries/${libId}/channels/${channelId}`, options)
      .then((data) => data.data)
      .catch((err) => {
        throw getError(err);
      });
  },

  /*
   *   修改频道名称
   */
  editChannel(libId, channelId, name) {
    const options = {
      method: 'PUT',
      body: JSON.stringify({
        name,
      }),
    };
    return request(`${API_BASE}/libraries/${libId}/channels/${channelId}`, options)
      .then((data) => data.data)
      .catch((err) => {
        throw getError(err);
      });
  },
};

export default libApi;
