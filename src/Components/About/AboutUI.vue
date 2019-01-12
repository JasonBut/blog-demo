<template>
  <el-card id="about">

    <div class="about-profile">
      <el-card shadow="hover">
        <h1>个人信息</h1>
        <p
            v-for="(info,index) of infos.personal"
            :key="`info_${index}`"
            v-html="info"
        >
        </p>

        <el-collapse accordion>

          <el-collapse-item title="职业技能">
            <ul>
              <li v-for="(cer,i) of infos.certifications" :key="`cer_${i}`">{{cer}}</li>
            </ul>
          </el-collapse-item>

          <el-collapse-item title="技术栈">
            <ul>
              <li v-for="(skill,key) of infos.skills" :key="`skill_${key}`">
                {{key}}：{{skill}}
              </li>
            </ul>
          </el-collapse-item>

        </el-collapse>
      </el-card>
    </div>

    <div class="about-experience">

      <el-card shadow="hover">
        <h1>工作经历：</h1>

        <el-collapse accordion>
          <el-collapse-item
              v-for="(job, index) of infos.jobs"
              :key="`${job}_${index}`"
              :title="`公司名称：${job.company}`"
          >
            <p>职位名称：{{job.title}}</p>
            <p>在职时长：{{job.duration}}</p>
            <p>工作内容：</p>
            <ul>
              <li v-for="(details, i) of job.details" :key="`details_${i}`">{{details}}</li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </el-card>

      <el-card shadow="hover">
        <h1>项目经验：</h1>

        <el-collapse accordion>
          <el-collapse-item
              v-for="(item, index) of infos.projects"
              :key="`project_${index}`"
              :title="`项目名称：${item.name}`"
          >
            <p>项目仓库：<span v-html="item.git"></span></p>
            <p>在线演示：<span v-html="item.deploy"></span></p>
            <p>技术栈：</p>
            <ul>
              <li v-for="(lib, i) of item.libs" :key="`lib_${i}`">{{lib}}</li>
            </ul>
            <p>介绍：</p>
            <p v-html="item.introduction"></p>
          </el-collapse-item>
        </el-collapse>

      </el-card>
    </div>

  </el-card>
</template>

<script>
export default {
  name: 'aboutUI',
  props: {
    infos: Object
  }
};
</script>

<style lang="scss" scoped>
  @mixin about-common-style{
    float: left;
    margin: 0 0 5% 2%;
  }

  #about{
    min-width: 12em;
    @include opacity-background(0.25);
    @include content-el-card-margin();

    ul{
      list-style-position: inside;
      list-style-type: square;
      li{
        margin-left: -2em
      }
    }

    .about-profile{
      width: 31%;
      min-width: 12em;
      @include about-common-style
    }

    .about-experience{
      width: 65%;
      @include about-common-style;
      >.el-card{
        margin-bottom: 2%;
      }
    }
  }
</style>
