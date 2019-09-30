<template>
  <div class="tabbar">
    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(item, index) in tabBar"
        @click="ClickTab(item)"
        :key="index"
      >
        <span>{{ item.title }}</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? item.active : item.normal"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {
      tabBar: [
        {
          path: "/home",
          title: "首页",
          normal: "images/luobo1.png",
          active: "images/luobo2.png"
        },
        {
          path: "/active",
          title: "我的活动",
          normal: "images/huluo1.png",
          active: "images/huluo2.png"
        },
        {
          path: "/order",
          title: "我的订单",
          normal: "images/lajiao1.png",
          active: "images/lajiao2.png"
        },
        {
          path: "/product",
          title: "我的商品",
          normal: "images/yumi1.png",
          active: "images/yumi2.png"
        }
      ]
    };
  },
  computed: {
    active: {
      get() {
        if (this.$route.path == "/home") {
          return 0;
        }
        if (this.$route.path == "/active") {
          return 1;
        }
        if (this.$route.path == "/order") {
          return 2;
        }
        if (this.$route.path == "/product") {
          return 3;
        }
        return 0;
      },
      set() {}
    }
  },
  methods: {
    ClickTab(to) {
      if (to.path == this.$route.path) {
        return;
      }
      this.$router.push(to);
    }
  }
};
</script>

<style scoped lang="scss"></style>
