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
