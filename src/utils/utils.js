/*
 * 格式化时间
 * [param] 需格式化的时间
 * [noNeedTime] 返回格式是否需要 时分秒
 * */
export const formatTimes = (param, noNeedTime) => {
  if (!param) {
    return "";
  }
  let date = new Date(param),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  const _dateTime =
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  const _date = year + "-" + month + "-" + day;

  return noNeedTime ? _date : _dateTime;
};

/*
 * 文本超出以...显示
 * [params] 需截取的文本
 * [len] 需在何处截取
 * */
export const textLen = (params, len) => {
  if ((params ? params.length : 0) > len) {
    return params.substr(0, len) + "...";
  }
  return params;
};

/*
 * 计算文本字符长度
 * */
export const strlength = str => {
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      len++;
    } else {
      len += 2;
    }
  }
  return len;
};

/*
 * URL 取参
 * */
export const getUrlParam = name => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return decodeURIComponent(r[2]);
  return null; //返回参数值
};

/*
 * 去空格方法
 */
export const trim = str => {
  if (str) {
    return str.toString().replace(/(^\s+)|(\s+$)/g, "");
  }
};

/*
 *判断是否为微信浏览器
 */
export const isWechatBrowser = () => {
  var userA = window.navigator.userAgent.toLowerCase();
  if (userA.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
};

/*
 *判断手机类型
 */
export const isMobile = () => {
  let userAgentInfo = navigator.userAgent;
  let Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  ];
  let is_Mobile = false;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      is_Mobile = true;
      break;
    }
  }
  return is_Mobile;
};

/*
 * 对象转url
 */
export const setUrlSearch = obj => {
  let str = "?";
  Object.keys(obj).forEach((prop, index) => {
    if (index === 0) {
      str += `${prop}=${obj[prop]}`;
    } else {
      str += `&${prop}=${obj[prop]}`;
    }
  });
  return str;
};

/**
 * 包含天
 */
export const formatDayTime = Times => {
  let formatTimeObj = {
    DD: "00",
    HH: "00",
    mm: "00",
    ss: "00"
  };
  if (Times) {
    let day = Math.floor(Times / (24 * 60 * 60));
    let hour = Math.floor((Times - day * 24 * 3600) / 3600);
    let minute = Math.floor((Times - day * 24 * 3600 - hour * 3600) / 60);
    let second = Math.floor(
      Times - day * 24 * 3600 - hour * 3600 - minute * 60
    );
    return {
      DD: day < 10 ? "0" + day : day,
      HH: hour < 10 ? "0" + hour : hour,
      mm: minute < 10 ? "0" + minute : minute,
      ss: second < 10 ? "0" + second : second
    };
  } else {
    return formatTimeObj;
  }
};