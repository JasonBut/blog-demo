<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
          v-for="item of breadList"
          :key="`${item}`"
          :to="{ path: item }"
      >
        {{ breadListFilters(item, $store) }}
      </el-breadcrumb-item>
    </el-breadcrumb>

    <transition
        name="el-zoom-in-left"
        mode="out-in"
    >
      <router-view :key="$route.path" />
    </transition>
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
