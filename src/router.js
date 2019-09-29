import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Index",
      component: () => import("./views/Index.vue"),
      children: [
        {
          path: "/",
          name: "首页",
          component: () => import("./views/home")
        },
        {
          path: "/home",
          name: "首页",
          component: () => import("./views/home")
        },
        {
          path: "/active",
          name: "我的活动",
          component: () => import("./views/active")
        },
        {
          path: "/order",
          name: "我的订单",
          component: () => import("./views/order")
        },
        {
          path: "/product",
          name: "我的商品",
          component: () => import("./views/product")
        }
      ]
    },
    {
      path: "*", //路由重定向
      redirect: "/"
    }
  ]
});
