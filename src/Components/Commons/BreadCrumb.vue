<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <ListFadeIn name="el-zoom-in-left" :duration="600">
      <el-breadcrumb-item
          v-for="item of breadList"
          :key="`${item}`"
          :to="{ path: item }"
      >
        {{ breadListFilters(item, $store) }}
      </el-breadcrumb-item>
    </ListFadeIn>
  </el-breadcrumb>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'BreadCrumb',

  components: {
    ListFadeIn: () => import('./ListFadeIn')
  },

  computed: {
    ...mapState(['breadList']),
    ...mapGetters(['breadListFilters'])
  }
};
</script>
