<template lang="html">
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="登录 / 注册"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form
      ref="login-form"
      validate-first
      :show-error="false"
      :show-error-message="false"
      @submit="handleLogin"
      @failed="onFailed"
    >
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        name="mobile"
        placeholder="请输入手机号"
        :rules="formRules.mobile"
      />
      <van-field
        v-model="user.code"
        icon-prefix="toutiao"
        left-icon="yanzhengma"
        name="code"
        placeholder="请输入短信验证码"
        :rules="formRules.code"
      >
        <template #button>
          <van-count-down
            v-if="isShowCountDown"
            :time="time"
            format="ss s"
            @finish="isShowCountDown = false"
          />
          <van-button
            v-else
            @click="onSendCode"
            native-type="button"
            class="send-btn"
            size="mini"
            round
            :loading="isSendCodeLoading"
          >
            发送验证码
          </van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" type="info" size="large">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {
  login,
  sendCode
} from 'api/user'
import {
  rawType
} from 'utils/tools'
// import {
//   Toast
// } from 'vant'
export default {
  name: 'LoginIndex',
  data() {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      isShowCountDown: false,
      isSendCodeLoading: false,
      time: 60 * 1000,
      formRules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[34578]\d{9}$/,
          message: '手机号格式不正确'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码格式不正确'
        }]
      }
    }
  },
  methods: {
    async handleLogin() {
      this.$toast({
        type: 'loading',
        duration: 0,
        message: '登录中...',
        forbidClick: true
      })
      const ret = await login(this.user)
      if (Object.is(rawType(ret), 'Object')) {
        const {
          data
        } = ret.data
        this.$toast.success('登录成功')
        this.$store.commit('setToken', data)
      } else {
        this.$toast.fail('手机号或验证码不正确')
      }
    },
    onClickLeft() {},
    onFailed(_err) {
      const {
        errors
      } = _err
      this.$toast({
        position: 'top',
        message: errors[0].message
      })
    },
    async onSendCode() {
      try {
        await this.$refs['login-form'].validate('mobile')
        this.isSendCodeLoading = true
        await sendCode(this.user.mobile)
        this.isShowCountDown = true
      } catch (_err) {
        if (Object.is(rawType(_err), 'Error') && _err.response && Object.is(_err.response.status + '', '429')) {
          this.$toast({
            message: '验证码发送太频繁，请稍后再试',
            position: 'top'
          })
        } else if (Object.is(rawType(_err), 'Object') && _err.name === 'mobile') {
          this.$toast({
            message: _err.message,
            position: 'top'
          })
        } else {
          this.$toast({
            message: '验证码发送失败，请稍后再试',
            position: 'top'
          })
        }
      }
      this.isSendCodeLoading = false
      // this.isShowCountDown = false
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
    .login-btn-wrap {
        padding: 26px 16px;
        .login-btn {
            border: 0 none;
            background-color: #6db4fb;
        }
    }
    .send-btn {
        width: 76px;
        height: 23px;
        background-color: #ededed;
        .van-button__text {
            color: #666;
        }
    }
}
</style>
