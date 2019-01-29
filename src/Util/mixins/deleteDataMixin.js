import { mapActions } from 'vuex';
import { RequestFailed } from '@/Util/mixins';
export default {
  methods: {
    ...mapActions('Back', ['deleteData']),

    async handleDelete (payload) {
      try {
        await this.$confirm('确定要删除条目？', {
          type: 'error',
          center: true,
          title: '警告',
          confirmButtonText: '删除',
          cancelButtonText: '返回'
        });
        await this.deleteData({ ...payload, callback: RequestFailed });
      } catch (e) {
        return false;
      }
    }
  }
};
