<template>
  <aboutUI
      :infos="myInfo"
  />
</template>

<script>
import { mapState } from 'vuex';
import { Constants } from '@/Store';

export default {
  name: 'About',
  components: {
    aboutUI: () => import('./aboutUI')
  },
  computed: {
    ...mapState({
      myInfo: Constants.myInfo
    })
  }
};
</script>

<style lang="scss">
@mixin about-common-style{
  float: left;
  margin: 0 0 5% 2%;
}

#about{
  margin: 5%;
  min-width: 12em;
  @include opacity-background(0.25);

  ul{
    list-style-position: inside;
    list-style-type: square;
    li{
      margin-left: -2em
    }
  }

  .about-profile{
    width: 31%;
    min-width: 12em;
    @include about-common-style
  }

  .about-experience{
    width: 65%;
    @include about-common-style;
    >.el-card{
      margin-bottom: 2%;
    }
  }
}
</style>
