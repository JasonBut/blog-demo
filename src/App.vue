<template>
  <Front />
</template>

<script>
import '@/Assets/style/front.scss';
export default {
  name: 'app',
  components: {
    Front: () => import('./Components/Front')
  }
};
</script>
