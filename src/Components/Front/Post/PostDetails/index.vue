<template>
  <DataDisplayHOC target="post">
    <template slot-scope="scope">
      <PostDetailsUI :details="scope.post" />
    </template>
  </DataDisplayHOC>

</template>

<script>
export default {
  name: 'FrontPostDetails',
  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC'),
    PostDetailsUI: () => import('./PostDetailsUI')
  }

};
</script>
