<template>
  <el-card class="post-details" >
    <el-card><h1>{{  details.title  }}</h1></el-card>

    <el-card>
      <div v-html="details.content"></div>
      <p>发表日期：{{ details.date }}</p>
    </el-card>

  </el-card>
</template>

<script>
export default {
  name: 'PostDetailsUI',
  props: {
    details: Object
  }
};
</script>

<style lang="scss" scoped>
.post-details{
  @include opacity-border(1,1px,8%);
  margin: 0;
  .el-card{
    margin: 0;

    h1{
      font-size: 1.6em;
      padding: 0;
      margin: 0;
    }

    div{
      font-size: 1em;
      padding: 0.5em;
    }

    p{
      text-align: right;
      font-size: 0.5em;
      margin-top: 3em;
    }

    &:nth-child(2){
      margin-top: 0.6em;
    }

    @include opacity-background(0.35)
  }
}
</style>
