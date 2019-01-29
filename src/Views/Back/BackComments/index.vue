<template>
  <div>
    <DataDisplayHOC target="all_comments">
      <template slot-scope="{ list, options, handleCurrentChange }">
        <BackCommentsUI
            :list="list"
            @on-delete="handleDelete"
            @on-edit="handleEdit"
        >
          <Pagination
              slot="pagination"
              :options="options"
              @on-current-change="handleCurrentChange"
          />
        </BackCommentsUI>
      </template>
    </DataDisplayHOC>

    <el-dialog
        :visible="editingArticle"
        :close-on-click-modal="false"
        :show-close="false"
        title="编辑评论"
        top="3em"
        lock-scroll
        center
    >
      <Editor
          id="comment-amend"
          :amend-value="amendValue"
          @on-cancel="handleCancel"
          @on-submit="handleSubmit"
          comment
          amend
      />
    </el-dialog>
  </div>
</template>

<script>
import { DeleteDataMixin, ArticleEdit } from '@/Assets/Mixins';
export default {
  name: 'BackComments',
  mixins: [ DeleteDataMixin, ArticleEdit('comment') ],
  components: {
    DataDisplayHOC: () => import('@/Components/DataDisplayHOC'),
    BackCommentsUI: () => import('./BackCommentsUI'),
    Editor: () => import('@/Components/Editor'),
    Pagination: () => import('@/Components/Pagination')
  }
};
</script>
