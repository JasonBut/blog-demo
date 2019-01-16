<template>
  <DataDisplayHOC target="post">
    <template slot-scope="scope">
      <PostDetailsUI :details="scope.post" />
    </template>
  </DataDisplayHOC>

</template>

<script>
export default {
  name: 'postDetails',
  components: {
    DataDisplayHOC: () => import('../../Commons/DataDisplayHOC'),
    PostDetailsUI: () => import('./PostDetailsUI')
  }

};
</script>
