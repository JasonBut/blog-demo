<template>
  <div>
    <p>404 ：页面不存在</p>
    <p>即将<router-link :to="{ name: 'home'}">返回首页</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  mounted () {
    setTimeout(() => {
      this.$router.replace({ name: 'home' });
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
div{
  margin: 15% auto;
  p{
    font-size: 2.5em;
    font-weight: bold;
    text-align: center;
  }
}
</style>
