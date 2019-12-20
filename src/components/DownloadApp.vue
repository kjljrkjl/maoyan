<template>
  <div class="download-app-bar">
    <img
      class="img noneBg logo"
      alt="logo"
      src="http://s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png"
      width="42"
      height="42"
    />
    <div class="app-name-desc">
      <div class="app-name">猫眼</div>
      <div class="app-desc">在线选座，热门影讯，爱上看电影</div>
    </div>
    <div class="btn-open-app">立即打开</div>
  </div>
</template>
<script>

export default {

};
</script>

<style lang="scss" scoped>
.download-app-bar {
  position: relative;
  height: 63px;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  font-family: PingFangSC-Regular, Hiragino Sans GB, sans-serif;
  img.logo {
    position: absolute;
    left: 15px;
    top: 11px;
    width: 44px;
    height: 44px;
  }
  .app-name-desc {
    position: absolute;
    left: 66px;
    top: 13px;
    .app-name {
      font-size: 17px;
      color: #222;
      line-height: 23px;
      font-weight: 400;
    }
    .app-desc {
      font-size: 12px;
      color: #999;
      line-height: 17px;
    }
  }
  .btn-open-app {
    position: absolute;
    right: 15px;
    top: 17px;
    width: 68px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #ef4238;
    border-radius: 3px;
    font-size: 13px;
    color: #fff;
  }
}
</style>