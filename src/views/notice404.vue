<template>
  <div class="notice">
    <img class="image" src="/images/notice404.jpg" alt="" />
    <div class="gohome"><span @click="ClickGoHome">去首页逛逛</span></div>
  </div>
</template>

<script>
export default {
  name: "notice404",
  data() {
    return {};
  },
  methods: {
    ClickGoHome() {
      this.$router.push({ path: "/home" });
    }
  }
};
</script>

<style lang="scss" scoped>
.notice {
  position: relative;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .gohome {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 33%;
    span {
      font-size: 0.26rem;
      font-weight: 600;
      background: #01a5f7;
      color: white;
      padding: 0.16rem;
      -webkit-border-radius: 0.1rem;
      -moz-border-radius: 0.1rem;
      border-radius: 0.1rem;
    }
  }
}
</style>
