<template>
<div class="back">
  <el-container v-if="withCredentials" >
    <el-container>
      <el-aside width="12em">
        <Aside />
      </el-aside>
      <el-main class="back-content">
        <Content />
      </el-main>
    </el-container>
    <el-footer>
      <Footer class="back-footer" />
    </el-footer>
  </el-container>
  <Auth v-else />
</div>
</template>

<script>
import { mapState } from 'vuex';
import '@/Assets/Styles/back.scss';
export default {
  name: 'Back',
  components: {
    Aside: () => import('./BackAside'),
    Footer: () => import('../Commons/Footer'),
    Content: () => import('./BackContent'),
    Auth: () => import('./Auth')
  },
  computed: {
    ...mapState('Back/Auth', ['withCredentials'])
  }
};
</script>
