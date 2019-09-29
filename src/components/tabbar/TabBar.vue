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
      active: 0,
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
  mounted() {
    this.tabActive(this.$route);
  },
  methods: {
    tabActive(to) {
      if (to.path == "/home") {
        this.active = 0;
      }
      if (to.path == "/active") {
        this.active = 1;
      }
      if (to.path == "/order") {
        this.active = 2;
      }
      if (to.path == "/product") {
        this.active = 3;
      }
    },
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
