<template>
  <h1>Jason's Blog</h1>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss">
header{
  width: 90%;
  min-width: 40em;
  margin: 0.7em auto;
  @include opacity-border(0,0,3%);

  h1{
    color: #ffffff;
    font-size: 3em;
    margin: 1% 0 3% 10%;
  }
}
</style>
