<template>
  <postDetails />
</template>

<script>

export default {
  name: 'post',
  components: {
    postDetails: () => import('./PostDetails')
  }
};
</script>
