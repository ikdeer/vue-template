import Vue from "vue";
import Router from "vue-router";

//对Router原型链上的push、replace方法进行重写,解决控制台看到未捕获的异常
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Index",
      component: () => import("../views/Index.vue"),
      children: [
        {
          path: "/",
          name: "首页",
          component: () => import("../views/home/index")
        },
        {
          path: "/home",
          name: "首页",
          component: () => import("../views/home/index")
        },
        {
          path: "/active",
          name: "我的活动",
          component: () => import("../views/active/index")
        },
        {
          path: "/order",
          name: "我的订单",
          component: () => import("../views/order/index")
        },
        {
          path: "/product",
          name: "我的商品",
          component: () => import("../views/product/index")
        }
      ]
    },
    {
      path: "/notice",
      name: "404",
      component: () => import("../views/notice404.vue")
    },
    {
      path: "*", //路由重定向
      redirect: "/notice"
    }
  ]
});

//导航守卫，路由鉴权
router.beforeEach((to, from, next) => {
  window.scroll(0, 0);
  if (to.path == "/order") {
    next({
      path: "/home"
    });
  } else {
    next();
  }
});
export default router;
