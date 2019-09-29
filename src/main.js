import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import UI from "./components/index";

//750px下rem布局
(function(doc) {
  var docEl = doc.documentElement,
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = clientWidth / 7.5 + "px";
    };
  if (!doc.addEventListener) return;
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);

Vue.use(Vant);
Vue.use(UI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
