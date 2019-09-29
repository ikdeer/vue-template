import TabBar from "./tabbar/TabBar";

const components = [TabBar];

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  TabBar
};
