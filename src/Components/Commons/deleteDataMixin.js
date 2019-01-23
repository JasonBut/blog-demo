import { mapActions } from 'vuex';
import { requestFailed } from './';
export default {
  methods: {
    ...mapActions(['deleteData']),

    async handleDelete (payload) {
      try {
        await this.$confirm('确定要删除条目？', {
          type: 'error',
          center: true,
          title: '警告',
          confirmButtonText: '删除',
          cancelButtonText: '返回'
        });
        await this.deleteData({ ...payload, callback: requestFailed });
      } catch (e) {
        return false;
      }
    }
  }
};
