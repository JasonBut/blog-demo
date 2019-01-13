<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
          v-for="item of breadList"
          :key="item"
          :to="{ path: item }"
      >
        {{ breadListFilters(item) }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'Content',
  computed: {
    ...mapState(['breadList']),
    ...mapGetters(['breadListFilters'])
  }
};
</script>

<style lang="scss">
div{
  a{
    color: #ffffff;
  }
}
</style>
