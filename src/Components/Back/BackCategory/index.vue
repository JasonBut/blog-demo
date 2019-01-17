<template>
  <DataDisplayHOC target="categories">
    <template slot-scope="scope">
      <div>{{ scope.categories }}</div>
    </template>
  </DataDisplayHOC>
</template>

<script>
export default {
  name: 'BackCategory',
  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC')
  }
};
</script>
