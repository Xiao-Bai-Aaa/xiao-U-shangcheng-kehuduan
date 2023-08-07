<template>
  <div class="tabbar">
    <div class="tab">
      <router-link to="/">
        <img
          v-show="name != 'home'"
          src="@/assets/image/tabbar/home.png"
          alt=""
        />
        <img
          v-show="name == 'home'"
          src="@/assets/image/tabbar/homeFull.png"
          alt=""
        />
        <p>首页</p>
      </router-link>
    </div>
    <div class="tab">
      <router-link to="cate">
        <img
          v-show="name != 'cate'"
          src="@/assets/image/tabbar/cate.png"
          alt=""
        />
        <img
          v-show="name == 'cate'"
          src="@/assets/image//tabbar/cateFull.png"
          alt=""
        />
        <p>分类</p>
      </router-link>
    </div>
    <div class="tab">
      <router-link to="cart">
        <img
          v-show="name != 'cart'"
          src="@/assets/image/tabbar/shop.png"
          alt=""
        />
        <img
          v-show="name == 'cart'"
          src="@/assets/image/tabbar/shopFull.png"
          alt=""
        />
        <p>购物车</p>
      </router-link>
    </div>
    <div class="tab">
      <router-link to="my">
        <img
          v-show="name != 'my'"
          src="@/assets//image/tabbar/user.png"
          alt=""
        />
        <img
          v-show="name == 'my'"
          src="@/assets/image/tabbar/userFull.png"
          alt=""
        />
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "home",
    };
  },
  methods: {},
  computed: {},
  components: {},
  filters: {},
  watch: {
    $route: {
      handler() {
        this.name = this.$route.name;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.tabbar {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;

  > .tab {
    img {
      width: 40px;
      height: 40px;
    }
    p {
      font-size: 18px;
    }
  }
}
</style>
