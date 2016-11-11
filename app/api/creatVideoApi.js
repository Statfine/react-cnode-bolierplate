/**
 * Created by easub on 2016/11/1.
 */
import { API_BASE } from 'common/constants';
import { request } from 'utils/request';

import { ERROR_CODE } from './error';

function getError(err) {
  let res;
  if (err && err.data) {
    res = ERROR_CODE[err.data.code];
  }
  return new Error(res || ERROR_CODE.unknown);
}

const creatVideo = {
  /*
   * 新建视频
   * title 标题  libOrChannelId 库或者频道id   videoId 获取上传地址回调id
   */
  creat(title, libOrChannelId, videoId) {
    if (!Boolean(title)) {
      throw new Error('标题不能为空');
    }

    if (!Boolean(libOrChannelId)) {
      throw new Error('请选择库或者频道');
    }

    if (!Boolean(videoId)) {
      throw new Error('请先上传视频');
    }
    const options = {
      method: 'PUT',
      body: JSON.stringify({
        title, library_id: libOrChannelId, channel_id: libOrChannelId,
      }),
    };
    return request(`${API_BASE}/provider/videos/${videoId}`, options)
      .then((data) => data.data)
      .catch((err) => {
        throw getError(err);
      });
  },
};

export default creatVideo;
