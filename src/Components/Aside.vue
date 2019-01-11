<template>
  <div>
    <el-menu
        :default-active="$route.path"
        :router="true"
        mode="vertical"
        text-color="#0F192A"
    >
      <el-menu-item
          v-for="subject of splitSubjectName"
          :key="subject.path"
          :index="subject.path"
      >
        <template>
          <span>{{subject.first}}</span>
          <span>{{subject.last}}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Aside',

  computed: {
    ...mapGetters(['splitSubjectName'])
  }

};
</script>

<style lang="scss">
.aside-menu-item{
  background: rgba(11,133,204,0.35);
}

.el-menu{
  height: 53.5em;
  background: rgba(0,0,0,0.25);
  border: 0;
  text-align: right;
  font-weight: bold;

  .el-menu-item{
    background: rgba(0,0,0,0);

    span+span{
      color: rgb(11,133,204);
    }

    &:hover{
      @extend .aside-menu-item;
    }
    &:visited{
      @extend .aside-menu-item;
    }
  }
}
</style>
