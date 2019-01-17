<template>
  <DataDisplayHOC target="all_comments">
    <template slot-scope="scope">
      <div>{{ scope.list }}</div>
    </template>
  </DataDisplayHOC>
</template>

<script>
export default {
  name: 'BackComments',
  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC')
  }
};
</script>
