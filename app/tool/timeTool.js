/**
 * Created by easub on 2016/11/2.
 */
import { isNaN, isUndefined } from 'lodash';

const Tool = {
  /*
   *  时间戳转(13位)换北京时间
   *  2016-09-01T10:30:00+08:00
   */
  timeZone(time) {
    const setData = new Date(time);
    let day = setData.getDate();
    day = day < 10 ? `0${day}` : day;
    let hours = setData.getHours();
    hours = hours < 10 ? `0${hours}` : hours;
    let min = setData.getMinutes();
    min = min < 10 ? `0${min}` : min;
    return `${setData.getFullYear()}-${day}T${hours}:${min}:00+08:00`;
  },

  /*
   *  时间戳(13位)转换年-月-日
   *  2016-09-01
   */
  dataYearMonthDay(time) {
    const date = new Date(time);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;
    return `${year}-${month}-${day}`;
  },

  /*
   *  时间戳(13位)转换 月-日 小时:分之
   *  09-01 24:01
   */
  dataMonthDayHoursMin(time) {
    const setData = new Date(time);
    let month = setData.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = setData.getDate();
    day = day < 10 ? `0${day}` : day;
    let hours = setData.getHours();
    hours = hours < 10 ? `0${hours}` : hours;
    let min = setData.getMinutes();
    min = min < 10 ? `0${min}` : min;
    return `${month}-${day} ${hours}:${min}`;
  },

  /*
   *  字符串转时间格式 小时:分钟:秒
   *  01:01:54.123
   */
  stringToHourMinSec(timeLength, toFiexedFlag = true) {
    if (isNaN(timeLength) || isUndefined(timeLength) || timeLength === '') {
      return '';
    }
    let Ttime = Number(String(timeLength).split('.')[0]);
    const timeMS = toFiexedFlag ? Number((Number(timeLength) - Number(Ttime)).toFixed(3)) : 0;
    let min;
    let sec;

    if (Ttime < 60) {
      Ttime = toFiexedFlag ? (Ttime + timeMS).toFixed(3) : Ttime + timeMS;
      min = '00';
      sec = Ttime < 10 ? `0${Ttime}` : Ttime;
      return `${min}:${sec}`;
    } else if (Ttime === 60) {
      min = '01';
      sec = '00';
      return `${min}:${sec}`;
    } else if (Ttime > 60 && Ttime < 3600) {
      const timeMin = parseInt(Ttime / 60);
      const timeS = toFiexedFlag ? (parseInt(Ttime % 60) + timeMS).toFixed(3) : parseInt(Ttime % 60) + timeMS;
      min = timeMin < 10 ? `0${timeMin}` : timeMin;
      sec = timeS < 10 ? `0${timeS}` : timeS;
      return `${min}:${sec}`;
    }
    const timeHour = parseInt(Ttime / 3600);
    const timeMins = parseInt((Ttime % 3600) / 60);
    const timeS = toFiexedFlag ? (parseInt(Ttime % 3600 % 60) + timeMS).toFixed(3) : parseInt(Ttime % 3600 % 60) + timeMS;
    const hour = timeHour < 10 ? `0${timeHour}` : timeHour;
    min = timeMins < 10 ? `0${timeMins}` : timeMins;
    sec = timeS < 10 ? `0${timeS}` : timeS;
    return `${hour}:${min}:${sec}`;
  },

};

export { Tool };
