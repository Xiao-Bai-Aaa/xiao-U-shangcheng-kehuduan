<template>
  <div>
    <nav-comp title="分类"></nav-comp>
    <div class="list">
      <div class="left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="(item, index) in list"
            :key="index"
            :title="item.catename"
          />
        </van-sidebar>
      </div>
      <div class="rigth">
        <van-grid :column-num="3">
          <van-grid-item
            v-for="item in list[activeKey]?.children"
            :key="item.id"
            :icon="per + item.img"
            :text="item.catename"
          />
        </van-grid>
      </div>
    </div>
    <tab-comp></tab-comp>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      activeKey: 0,
      per: process.env.VUE_APP_BASE_URL,
    };
  },
  methods: {
    getList() {
      this.$api.reqCates().then((res) => {
        console.log(res);
        this.list = res;
      });
    },
  },
  computed: {},
  components: {},
  filters: {},
  watch: {},
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss" scoped>
.list {
  height: 100vh;
  display: flex;
  > :nth-child(1) {
    width: 30%;
    height: 100%;
    background-color: #f7f8fa;
  }
  > :nth-child(2) {
    width: 70%;
    height: 100%;
  }
}
.van-sidebar {
  width: 100% !important;
  height: 100%;
}
</style>
