<template>
  <div class="login-container">
    <form action>
      <div class="login-register">
        <div class="username">
          <input type="text" placeholder="账户名/手机号/Email" />
        </div>
        <div class="password">
          <input type="text" placeholder="请输入您的密码" />
        </div>
      </div>

      <div class="btn-wrapper">
        <button class="btn" type="submit">登录</button>
      </div>
    </form>

    <Footer></Footer>

  </div>




</template>

<script>

import Footer from "./Footer"


export default {
    components:{
        Footer
    }
};
</script>


<style lang="scss" scoped>
.login-container {
    
  .login-register {
    margin-top: 4px;
    padding: 0px 10px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: #fff;
    .username {
      padding-right: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      input {
        width: 100%;
        height: 30px;
        outline: none;
        border: none;
        border-bottom: 1px solid #d6d6d6;
        // background-color: #ececec;
        border-radius: 5px;
        padding-left: 10px;
      }
    }
    .password {
      padding-right: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      input {
        width: 100%;
        height: 30px;
        outline: none;
        border: none;
        border-bottom: 1px solid #d6d6d6;
        // background-color: #ececec;
        padding-left: 10px;
      }
    }
    input::placeholder {
      color: #757575;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
  }
  .btn-wrapper {
    margin: 10px 6px;
    
    .btn {
      width: 100%;
      display: inline-block;
      margin: 0;
      text-align: center;
      height: 30px;
      padding: 5px;
      border-radius: 5px;
      color: #fff;
      border: 0;
      background-color: #df2d2d;
      font-size: 12px;
      vertical-align: middle;
      line-height: 12px;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
</style>