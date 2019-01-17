<template>
  <AboutUI
      :infos="myInfo"
  />
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'About',
  components: {
    AboutUI: () => import('./FrontAboutUI')
  },
  computed: {
    ...mapState({
      myInfo: 'myInfo'
    })
  }
};
</script>
