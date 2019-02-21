export default {
  myInfo: {
    personal: {
      name: '姓名：Jason But',
      sex: '性别：男',
      age: '年龄：27',
      edu: '学历：本科',
      phone: '电话：13650700330',
      graduation: '毕业学校：广东外语外贸大学',
      email: '邮箱：Jason.But@yahoo.com',
      github: `Github：<a href="https://github.com/JasonBut" rel="github">点解进入</a>`
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
        company: '深圳市软信通网络科技有限公司',
        title: 'Web前端开发',
        duration: '2017.12-2019.1',
        details: [
          '负责PC端和移动端的前端开发任务',
          '网站产品、项目、专题等所需页面的制作和前端效果的实现',
          '与产品配合，根据需求调整、修改、优化页面'
        ]
      }
    ],
    projects: [
      {
        name: `基于React的简易论坛程序`,
        git: `<a href="https://github.com/JasonBut/forum-demo" rel="forum-demo">https://github.com/JasonBut/forum-demo</a>`,
        deploy: `<a href="https://jasonbut.github.io/forum-demo/" rel="forum-deploy">https://jasonbut.github.io/forum-demo/</a>`,
        libs: [
          'React', 'Redux', 'React-Redux', 'Redux-Saga', 'React-Router', 'React-Loadable',
          'Reselect', 'Braft-Editor', 'Antd', 'Less', 'Axios', 'Animate.css'
        ],
        introduction: `
<p>
这是一个基于react-redux的简易论坛程序，是本人学习完react和redux系列技术栈后做的一个demo。Demo功能比较简单，数据库是简单的一个JSON文件，用json-server搭建的，主要用于演示功能，之后会尝试加入真正的数据库。
</p>
<p>
暂时实现的功能有以下几个：发帖、评论、编辑帖子、注册、登录等。
</p>`
      },
      {
        name: `基于Vue的博客程序`,
        git: `<a href="https://github.com/JasonBut/blog-demo" rel="blog-demo">https://github.com/JasonBut/blog-demo</a>`,
        deploy: `<a href="https://jasonbut.github.io/blog-demo/" rel="blog-deploy">https://jasonbut.github.io/blog-demo/</a>`,
        libs: [
          'Vue', 'Vuex', 'Vue-Router', 'Vue2Editor', 'Element', 'SCSS',
          'Normalize.css', 'Axios'
        ],
        introduction: `
Demo分成了前台和后台两个部分。虽然结构上是共用一个store，但已经为store中各自对应的部份分割成了不同的modules，可以按需引入；并且前后台两个部分不要求部署在同一个域中，可以分开部署；前台展示区的代码中也没有暴露跟后台有关的信息，只要两部分能连接到数据库就可以，实行前台展示与后台管理两个功能部分的分离。Demo实现了以下功能：
    <ul>
    <li>前台查看博文列表、博文详情及评论列表，并有发表评论的功能。</li>
    <li>后台除了具备前台的查看内容功能外，还增设了分类、文章和评论的增删改功能，并在各自对应的页面提供跳转并及平滑滑动功能。</li>
</ul>`
      }
    ]
  }
};
