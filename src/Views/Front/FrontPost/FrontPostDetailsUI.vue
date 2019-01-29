<template>
  <el-card class="post-details" v-if="details.content" >
    <el-card><h1>{{  details.title  }}</h1></el-card>
    <el-card>
      <div v-html="details.content"></div>
      <p>最后更新：{{ details.date }}</p>
    </el-card>
  </el-card>

  <el-card class="post-details" v-else>
    <el-card>
      <p>文章不存在</p>
    </el-card>
  </el-card>
</template>

<script>
export default {
  name: 'PostDetailsUI',
  props: {
    details: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.post-details{
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

      &:first-child{
        margin: 0;
        font-size: 1em;
        text-align: center;
      }
    }

    &:nth-child(2){
      margin-top: 0.6em;
    }

    @include transparent-background(0.35);
    @include autoBreak;
  }
}
</style>
