<template>
  <div>
    <router-view />
    <router-view name="admin" />
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
html,body {
  box-sizing: border-box;
  margin: 0 0 0 0;
  padding: 0;
  font-family: Tahoma, Arial, Helvetica, sans-serif,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
