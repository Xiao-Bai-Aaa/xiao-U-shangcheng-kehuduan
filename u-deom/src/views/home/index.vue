<template>
  <div style="width: 100%; height: 100%">
    <nav-comp :title="'首页'"></nav-comp>
    <div class="top">
      <van-icon name="location-o" />
      <img src="@/assets//image/pic/logo/white.png" alt="" />
      <div class="input">
        <van-field
          clearable
          left-icon="search"
          placeholder="请输入搜索关键词"
        />
      </div>
      <van-icon name="shop-o" />
    </div>
    <div class="tab">
      <div style="width: 85%">
        <van-tabs
          v-model="active"
          background="#ff6040"
          title-inactive-color="#ded4d2"
          title-active-color="#fff"
          color="#fff"
          :ellipsis="false"
        >
          <van-tab
            v-for="(item, index) in cates"
            :key="index"
            :title="item.catename"
          ></van-tab>
        </van-tabs>
      </div>
      <div><van-icon name="bars" /> 分类</div>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <img width="100%" height="200px" :src="per + item.img" alt="" />
      </van-swipe-item>
    </van-swipe>
    <img width="100%" src="@/assets/image/pic/1.png" alt="" />
    <div class="sekill">
      <div class="left">
        <div>
          <h3>限时秒杀</h3>
          <span>查看更多 ></span>
        </div>
        <van-count-down :time="time">
          <template #default="timeData">
            <span class="block">{{ timeData.days }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </div>
      <div class="rigth">
        <div>
          <h3>品牌上新</h3>
          <span>9点整,抢大牌</span>
          <button>疯抢红包 ></button>
        </div>
        <div>
          <h3>日用好物</h3>
          <span>愿君多采颉</span>
          <button>塞满奖劵 ></button>
        </div>
      </div>
    </div>
    <img width="100%" src="@/assets/image/pic/2.png" alt="" />
    <div>
      <van-tabs type="card">
        <van-tab title="热门推荐">
          <van-card
            v-for="(item, index) in hortGoods[0]?.content"
            :key="index"
            tag="热门推荐"
            :price="item.price"
            :title="item.goodsname"
            :thumb="per + item.img"
            :origin-price="item.market_price"
          >
            <template #num>
              <van-button type="danger" size="mini">立即抢购</van-button>
            </template>
          </van-card>
        </van-tab>
        <van-tab title="上新推荐">
          <van-card
            v-for="(item, index) in hortGoods[1]?.content"
            :key="index"
            tag="上新推荐"
            :price="item.price"
            :title="item.goodsname"
            :thumb="per + item.img"
            :origin-price="item.market_price"
          >
            <template #num>
              <van-button type="danger" size="mini">立即抢购</van-button>
            </template>
          </van-card></van-tab
        >
        <van-tab title="所有商品">
          <van-card
            v-for="(item, index) in hortGoods[2]?.content"
            :key="index"
            tag="所有商品"
            :price="item.price"
            :title="item.goodsname"
            :thumb="per + item.img"
            :origin-price="item.market_price"
          >
            <template #num>
              <van-button type="danger" size="mini">立即抢购</van-button>
            </template>
          </van-card></van-tab
        >
      </van-tabs>
    </div>
    <tab-comp></tab-comp>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      banner: [],
      cates: [],
      sekill: [],
      hortGoods: [],
      per: process.env.VUE_APP_BASE_URL,
      time: 0,
    };
  },
  methods: {},
  computed: {},
  components: {},
  filters: {},
  watch: {},
  mounted() {
    Promise.all([
      this.$api.reqBanner(),
      this.$api.reqCates(),
      this.$api.reqSekill(),
      this.$api.reqHortGoods(),
    ]).then((res) => {
      console.log(res);
      [this.banner, this.cates, this.sekill, this.hortGoods] = res;
      this.time = this.sekill[0].endtime / 800;
    });
  },
};
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 80px;
  background-color: #ff6040;
  color: #fff;
}
.top img {
  width: 140px;
  height: 45px;
}
.input {
  display: flex;
  align-items: center;
  width: 45%;
  height: 60px;
  border-radius: 15px;
  overflow: hidden;
}
.tab {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  background-color: #ff6040;
  color: #fff;
  padding: 0 15px;
}
.sekill {
  display: flex;
  background-color: #eeeeee;
  height: 380px;
  padding: 10px;
  justify-content: space-between;
  .left {
    width: 49%;
    background-color: red;
    background: url("@/assets/image/pic/plate/index/kingkong/big.png") no-repeat
      center center / 100% 100%;
    padding: 20px;
    > :nth-child(1) {
      display: flex;
      justify-content: space-between;
      h3 {
        color: #5c7d36;
        font-size: 30px;
      }
      span {
        font-size: 18px;
        line-height: 55px;
      }
    }
  }
  .rigth {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 49%;
    background-color: aqua;
    h3 {
      font-size: 30px;
      color: #ff6d50;
    }
    span {
      font-size: 18px;
      color: #ff6d50;
    }
    button {
      display: block;
      width: 150px;
      height: 40px;
      line-height: 40px;
      outline: 0;
      border: 0;
      border-radius: 0 30px 30px 0;
      background-color: #ff6d4d;
      color: #fff;
      font-size: 20px;
    }
    > :nth-child(1) {
      padding: 20px;
      height: 49%;
      background-color: blue;
      background: url("@/assets/image/pic/plate/index/kingkong/small.png")
        no-repeat center center / 100% 100%;
    }
    > :nth-child(2) {
      padding: 20px;
      height: 49%;
      background-color: green;
      background: url("@/assets/image/pic/plate/index/kingkong/02.png")
        no-repeat center center / 100% 100%;
      h3 {
        color: #b54eff;
      }
      span {
        color: #b54eff;
      }
      button {
        color: #fff;
        background-color: #e277ff;
      }
    }
  }
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  padding: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #91a878;
}
</style>
