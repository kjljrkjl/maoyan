<template>
  <div>
    <ul class="subline">
      <li>
        <a href="#">立即注册</a>
      </li>
      <li class="pull-right">
        <a href="#">找回密码</a>
      </li>
    </ul>
    <div class="service-tel" >
        <p>© 猫眼电影 客服电话：<span>400-670-5335</span> </p>
    </div>
  </div>
</template>


<script>
export default {

};
</script>



<style lang="scss" scoped>

.subline{
    padding: 14px 10px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    li{
        display: inline-block;
        a{
            color: #FD9616;
        }
    }
    .pull-right{
        float: right;
    }
}
.service-tel{
    width: 100%;
    p{
        text-align: center;
        span{
            color: #df2d2d;
        }
    }
}


</style>