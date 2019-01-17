<template>
  <DataDisplayHOC target="all_posts">
    <template slot-scope="scope">
      <div>{{ scope.list }}</div>
    </template>
  </DataDisplayHOC>
</template>

<script>
export default {
  name: 'BackList',
  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC')
  }
};
</script>
