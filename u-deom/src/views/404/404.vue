<template>
  <div>
    <h1>404<a href="###" @click.prevent="next"></a></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    next() {
      this.$router.back();
    },
  },
  computed: {},
  components: {},
  filters: {},
  watch: {},
};
</script>

<style lang="scss" scoped></style>
