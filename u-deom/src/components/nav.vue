<template>
  <div>
    <div class="nav">
      <span class="back" v-if="back" @click="goBacks">&lt;&nbsp;返回</span>
      <p>{{ title }}</p>
    </div>
    <div style="height: 40px"></div>
  </div>
</template>

<script>
export default {
  name: "navComp",
  props: {
    back: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    goBacks() {
      this.$router.go(-1);
    },
  },
  computed: {},
  components: {},
  filters: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100vw;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: #ff6040;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 30px;
  z-index: 100;
}
.back {
  position: absolute;
  left: 20px;
}
</style>
