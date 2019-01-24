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
        :visible.sync="editing"
        :close-on-click-modal="false"
        title="编辑评论"
        top="3em"
        lock-scroll
        center>
      <Editor
          id="comment-amend"
          :amend-value="amendValue"
          @on-cancel="editing = false"
          @on-submit="editing = false"
          comment
          amend
      />
    </el-dialog>
  </div>
</template>

<script>
import { DeleteDataMixin } from '@/Components/Mixins';
export default {
  name: 'BackComments',
  mixins: [ DeleteDataMixin ],
  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC'),
    BackCommentsUI: () => import('./BackCommentsUI'),
    Editor: () => import('@/Components/Commons/Editor'),
    Pagination: () => import('@/Components/Commons/Pagination')
  },

  data () {
    return {
      editing: false,
      amendValue: Object.create(null)
    };
  },

  methods: {
    handleEdit (comment) {
      this.editing = true;
      const { guestName, content, post: postId, id: commentId } = comment;
      this.$nextTick(() => {
        this.amendValue = { guestName, content, postId, commentId };
      });
    }
  }
};
</script>
