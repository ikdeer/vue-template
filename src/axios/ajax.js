import axiosInstance from "./axiosInstance";
class AjaxClass {
  constructor(url, data, config) {
    this.url = url;
    this.data = data;
    this.config = config;
  }

  initAxios() {
    return axiosInstance(this.url, this.data, this.config);
  }

  static get(url = "", data = {}, config = {}) {
    config = Object.assign(config, {
      method: "get"
    });

    return axiosInstance(url, data, config);
  }

  static post(url = "", data = {}, config = {}) {
    config = Object.assign(config, {
      method: "post"
    });
    return axiosInstance(url, data, config);
  }
}

function Ajax(url = "", data = {}, config = {}) {
  return new AjaxClass(url, data, config).initAxios();
}

Ajax.get = AjaxClass.get;
Ajax.post = AjaxClass.post;

export default Ajax;
