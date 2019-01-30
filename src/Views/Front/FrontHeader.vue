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

  h1{
    text-shadow: 0.2em 0.2em 0.2em $front-body-background-color;
    font-size: 3em;
    margin: 1% 0 3% 10%;
  }
}
</style>
