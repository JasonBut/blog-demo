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
    AboutUI: () => import('./AboutUI')
  },
  computed: {
    ...mapState({
      myInfo: 'myInfo'
    })
  }
};
</script>
