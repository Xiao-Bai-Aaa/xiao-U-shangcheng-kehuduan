<template>
  <div class="login">
    <div>
      <img src="@/assets//image/logo/orange.png" alt="" />
      <van-form @submit="onSubmit">
        <van-field
          v-model="form.phone"
          name="手机号"
          label="手机号"
          clearable
          placeholder="手机号"
          :rules="[
            { required: true, message: '请填写手机号' },
            { pattern: /^1[0-9]{10}$/, message: '手机号格式错误' },
          ]"
        />
        <van-field
          v-model="form.sms"
          name="验证码"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          :rules="[{ required: true, message: '请填写短信验证码' }]"
        >
          <template #button>
            <van-button size="small" type="danger">获取验证码</van-button>
          </template>
        </van-field>
        <div style="margin: 16px">
          <van-button round block type="danger" native-type="submit"
            >点击登录</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        phone: "",
        sms: "",
      },
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
  computed: {},
  components: {},
  filters: {},
  watch: {},
  created() {
    console.log(this.$api);
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 95%;
    img {
      display: block;
      width: 60%;
      margin: 0 auto 40px;
    }
  }
}
</style>
