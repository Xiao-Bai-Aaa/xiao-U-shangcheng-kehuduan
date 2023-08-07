<template>
  <div>
    我是全局挂载组件
    <button v-sss="colors" @click="a">111111</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: "purple",
    };
  },
  methods: {
    a() {
      this.colors = "red";
    },
  },
  computed: {},
  components: {},
  filters: {},
  watch: {},
  mounted() {
    console.log(this.$total(1, 100), this);
  },
};
</script>

<style lang="scss" scoped></style>
