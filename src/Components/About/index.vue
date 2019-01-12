<template>
  <AboutUI
      :infos="myInfo"
  />
</template>

<script>
import { mapState } from 'vuex';
import { Constants } from '@/Store';

export default {
  name: 'About',
  components: {
    AboutUI: () => import('./AboutUI')
  },
  computed: {
    ...mapState({
      myInfo: Constants.myInfo
    })
  }
};
</script>
