<template>
  <div class="profile-wrapper">
    <div class="profile-container">
      <router-link active-class="active" class="account" to="/index/profile/account">美团账号登录</router-link>
      <router-link active-class="active" class="phone" to="/index/profile/phone">手机验证登录</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>


<script>
export default {
  components: {
      
  }
};
</script>

<style lang="scss" scoped>
.profile-wrapper {
  background-color: #f8f8f8;
  .profile-container {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;

    .account,
    .phone {
      flex: 1;
      display: inline-block;
      text-align: center;
      font-size: 12px;
      color: #222222;
      text-decoration: none;
      line-height: 60px;
      font-family: PingFangSC-Medium;
      border-bottom: 4px solid #D6D6D6;
    }
    .active {
      border-bottom: 4px solid #ffc300;
    }
  }
}
</style>