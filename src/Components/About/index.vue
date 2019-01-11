<template>
  <aboutUI :infos="myInfo" />
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'About',
  components: {
    aboutUI: () => import('./aboutUI')
  },
  computed: {
    ...mapState(['myInfo'])
  }
};
</script>

<style lang="scss">
.about-common-style{
  float: left;
  margin: 0 0 5% 2%;
}
#about{
  margin: 5%;
  min-width: 12em;

  summary{
    outline:none;
    cursor: pointer;
  }

  a{
    color: #000000
  }

  ul{
    list-style-position: inside;
    list-style-type: square;
  }

  .about-profile{
    width: 31%;
    min-width: 12em;
    @extend .about-common-style
  }

  .about-experience{
    width: 65%;
    @extend .about-common-style;
    >.el-card{
      margin-bottom: 2%;
    }
  }
}
</style>
