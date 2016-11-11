/**
 * Created by easub on 2016/11/2.
 */
import { API_BASE } from 'common/constants';
import { camelToSnake, get } from 'utils/request';

import { ERROR_CODE } from './error';

function getError(err) {
  let res;
  if (err && err.data) {
    res = ERROR_CODE[err.data.code];
  }
  return new Error(res || ERROR_CODE.unknown);
}

const videoApi = {
  /*
   * 获取视频列表
   * title 标题  libOrChannelId 库或者频道id   currentPage页码
   */
  fetchVideoList(title, libOrChannelId, currentPage) {
    const params = camelToSnake({
      title,
      library_id: libOrChannelId,
      channel_id: libOrChannelId,
      page: currentPage,
    });
    return get(`${API_BASE}/provider/videos`, params)
      .then((data) => data)
      .catch((err) => {
        throw getError(err);
      });
  },

  /*
   * 视频详情
   */
  fetchVideoInfo(videoId) {
    const params = camelToSnake({});
    return get(`${API_BASE}/provider/videos/${videoId}/statistics`, params)
      .then((data) => data.data)
      .catch((err) => {
        throw getError(err);
      });
  },

  /*
   * 视频分享统计
   */
  fetchVideoReport(videoId, beginDate, endDate, timeOrder, page) {
    const params = camelToSnake({
      begin_date: beginDate,
      end_date: endDate,
      time_order: timeOrder,
      page,
    });
    return get(`${API_BASE}/provider/videos/${videoId}/statistics/shared`, params)
      .then((data) => data)
      .catch((err) => {
        throw getError(err);
      });
  },
};

export default videoApi;
