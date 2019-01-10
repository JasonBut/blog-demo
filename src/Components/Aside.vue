<template>
  <div>
    <el-menu
        :default-active="$route.path"
        :router="true"
        mode="vertical"
        text-color="#0F192A"
    >
      <el-menu-item
          v-for="subject of splitSubjectName(subjectList)"
          :key="subject.path"
          :index="subject.path"
      >
        <template>
          <span>{{subject.first}}</span>
          <span>{{subject.last}}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
      subjectList: [
        {
          name: 'Programs',
          path: '/programs'
        },
        {
          name: 'Notes',
          path: '/notes'
        },
        {
          name: 'Daily',
          path: '/daily'
        },
        {
          name: 'About Me',
          path: '/about'
        }
      ]
    };
  },
  methods: {
    splitSubjectName (subjects) {
      return subjects.map((item) => {
        const name = item.name;
        const splitName = name.split('');
        const nameFirstPart = Number.parseInt(splitName.length / 2);
        const first = name.slice(0, nameFirstPart);
        const last = name.slice(nameFirstPart, splitName.length);
        return { ...item, first, last };
      });
    }
  }
};
</script>

<style lang="scss">
  .aside-menu-item{
    background: rgba(11,133,204,0.35);
  }

  .el-menu{
    height: 53.5em;
    background: rgba(0,0,0,0.25);
    border: 0;
    text-align: right;
    font-weight: bold;

    .el-menu-item{
      background: rgba(0,0,0,0);

      span+span{
        color: rgb(11,133,204);
      }

      &:hover{
        @extend .aside-menu-item;
      }
      &:visited{
        @extend .aside-menu-item;
      }
    }
  }
</style>
