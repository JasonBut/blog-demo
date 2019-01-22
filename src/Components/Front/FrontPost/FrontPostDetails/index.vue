<template>
  <DataDisplayHOC target="post">
    <template slot-scope="{ post }">
      <PostDetailsUI :details="post" />
    </template>
  </DataDisplayHOC>
</template>

<script>
export default {
  name: 'FrontPostDetails',
  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC'),
    PostDetailsUI: () => import('./FrontPostDetailsUI')
  }
};
</script>
