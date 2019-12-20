<template>
  <header class="navbar">
    <slot name="back" >
        
    </slot>

    <h1 class="nav-header">猫眼电影</h1>

  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.navbar {
  height: 50.5px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  display: flex;
  justify-content: center;
  align-items: center;
.nav-header{  
    line-height: 50.5px;
    display: block;
    font-size: 18px;
    font-weight: 700;
    flex: 1;
}
.icon-back {
    flex: 1;
    display: inline-block;
    width: 22.5px;
    height: 22.5px;
    vertical-align: middle;
    position: relative;
    margin-left: 20px;
}
.icon-back:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 16px;
    height: 16px;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    transform: rotate(45deg);
}


}

</style>