<template>
  <el-card id="about" header="Profile">
    <div class="about-profile">
      <el-card shadow="hover">
        <h1>个人信息</h1>
        <p
            v-for="(info,index) of personalInfo"
            :key="`info_${index}`"
            v-html="info"
        >
        </p>
        <details>
          <summary>职业技能</summary>
          <ul>
            <li v-for="(cer,i) of certifications" :key="`cer_${i}`">{{cer}}</li>
          </ul>
        </details>
        <details>
          <summary>技术栈</summary>
          <ul>
            <li v-for="(skill,key) of skills" :key="`skill_${key}`">
              {{key}}：{{skill}}
            </li>
          </ul>
        </details>
      </el-card>
    </div>
    <div class="about-experience">
      <el-card shadow="always">
        <h1>工作经历：</h1>
        <el-card
            v-for="(job, index) of jobs"
            :key="`${job}_${index}`"
            shadow="hover"
        >
          <details>
          <summary>公司名称：{{job.company}}</summary>
            <p>职位名称：{{job.title}}</p>
            <p>在职时长：{{job.duration}}</p>
            <p>工作内容：</p>
            <ul>
              <li v-for="(details, i) of job.details" :key="`details_${i}`">{{details}}</li>
            </ul>
          </details>
        </el-card>
      </el-card>
      <el-card shadow="always">
        <h1>项目经验：</h1>
        <el-card
            v-for="(item, index) of projects"
            :key="`project_${index}`"
            shadow="hover"
        >
          <details>
            <summary>项目名称：{{item.name}}</summary>
            <p>项目仓库：<span v-html="item.git"></span></p>
            <p>在线演示：<span v-html="item.deploy"></span></p>
            <p>技术栈：</p>
            <ul>
              <li v-for="(lib, i) of item.libs" :key="`lib_${i}`">{{lib}}</li>
            </ul>
            <p>介绍：</p>
            <p v-html="item.introduction"></p>
          </details>
        </el-card>
      </el-card>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      personalInfo: {
        name: '姓名：Jason But',
        sex: '性别：男',
        age: '年龄：27',
        edu: '学历：本科',
        phone: '电话：13650700330',
        graduation: '毕业学校：广东外语外贸大学',
        email: '邮箱：Jason.But@yahoo.com',
        github: `Github：<a href="https://github.com/JasonBut" rel="github">https://github.com/JasonBut</a>`
      },
      certifications: [
        `会计从业资格证书`,
        `计算机技术与软件专业资格(中级)网络工程师`
      ],
      skills: {
        HTML5: `熟练`,
        CSS3: `熟练`,
        Javascript: `熟练`,
        Ajax: `熟悉`,
        React: `熟悉`,
        Vue: `熟悉`,
        Vuex: `熟悉`,
        Redux: `熟悉`,
        MobX: `熟悉`,
        Antd: `了解`,
        Element: `了解`
      },
      jobs: [
        {
          company: '汇丰环球客户服务(广东)有限公司',
          title: '金融客服经理',
          duration: '2013.3 - 2013.8',
          details: [
            '接受并回答客户通过电话途径对银行业务的咨询',
            '通过电话向客户提供帐户操作指引及安排预约等服务'
          ]
        },
        {
          company: '广州东昇纺织品公司',
          title: '经理助理',
          duration: '2013.9 - 2016.3',
          details: [
            '与客户洽谈业务，协调仓库的货物调度，根据公司当月要求完成销售任务',
            '根据客户提供的样板要求推荐最合适的产品',
            '对应聘人员进行面试，并对新入职员工进行职业培训'
          ]
        },
        {
          company: '花旗金融信息服务(中国)有限公司广州分公司',
          title: '信贷管理专员',
          duration: '2016.4 - 2017.8',
          details: [
            '根据公司提供的客户资料对客户的信贷记录进行评估',
            '电话通知客户的信用情况并作出相关改善建议'
          ]
        },
        {
          company: '深圳子辉(ZiHui)通讯公司',
          title: '自雇',
          duration: '2017.8-2018.8',
          details: [
            '从香港进口二手iPhone系列手机，并在深圳进行批发销售'
          ]
        }
      ],
      projects: [
        {
          name: `基于React的简易论坛程序`,
          git: `<a href="https://github.com/JasonBut/forum-demo" rel="forum-demo">https://github.com/JasonBut/forum-demo</a>`,
          deploy: `<a href="https://jasonbut.github.io/forum-demo/" rel="forum-deply">https://jasonbut.github.io/forum-demo/</a>`,
          libs: [
            'React', 'Redux', 'React-Redux', 'Redux-Saga', 'React-Router', 'React-Loadable',
            'Reselect', 'Braft-Editor', 'Antd', 'Less', 'Axios'
          ],
          introduction: `
<p>
  这是一个基于react-redux的简易论坛程序，是本人学习完react和redux系列技术栈后做的一个demo。Demo功能比较简单，数据库是简单的一个JSON文件，用json-server搭建的，主要用于演示功能，之后会尝试加入真正的数据库。
</p>
<p>
暂时实现的功能有意下几个：发帖、评论、编辑帖子、注册、登录等。
</p>`
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.about-common-style{
  float: left;
  margin: 0 0 5% 2%;
}
#about{
  margin: 5%;
  min-width: 12em;
  summary{
    outline:none;
    cursor: pointer;
  }
  a{
    color: #000000
  }
  .about-profile{
    width: 31%;
    min-width: 12em;
    @extend .about-common-style
  }
  .about-experience{
    width: 65%;
    @extend .about-common-style;
    >.el-card{
      margin-bottom: 2%;
    }
  }
}
</style>
