<template>
  <asideUI
      :category="splitCategoryName"
      :path="$route.path"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import { Constants } from '@/Store';

export default {
  name: 'Aside',

  components: {
    asideUI: () => import('./asideUI')
  },

  computed: {
    ...mapGetters({
      splitCategoryName: Constants.splitCategoryName
    })
  }

};
</script>

<style lang="scss">
.el-menu{
  height: 53.5em;
  border: 0;
  text-align: right;
  font-weight: bold;
  @include opacity-background(0.25);
  @include opacity-border(0, 0, 3%);

  .el-menu-item{
    @include opacity-background(0);
    @include opacity-item-hover;
    @include opacity-border(0.9, 0.1em, 10%);

    span+span{
      color: rgb(11,133,204);
    }
  }
}
</style>
