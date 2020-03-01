<template>
  <div class="intro-container">
  <h2 style="text-align: center">个人简历</h2>
    <!--基本信息-->
    <title-container title="基本信息">
      <div class="basic-info">
        <div class="left-info">
          <li class="item-info" :key="index" v-for="(item, index) in basicInfo">
            <span class="title">{{item.label}}:</span>
            {{item.value}}
          </li>
        </div>
        <div class="right-img">
          <img :src="profile"/>
        </div>
      </div>
    </title-container>

    <!--专业技能-->
    <title-container title="专业技能">
      <div class="evaluation-info">
        <div class="item-info" :key="index" v-for="(item, index) in skillList">
          {{item}}
        </div>
      </div>
    </title-container>

    <!--自我评价-->
    <title-container title="自我评价">
      <div class="evaluation-info">
        <div class="item-info" :key="index" v-for="(item, index) in evaluationList">
          {{item}}
        </div>
      </div>
    </title-container>

    <!--工作经验-->
    <title-container title="工作经验">
      <div class="work-info">
        <el-timeline>
          <el-timeline-item
            placement="top"
            v-for="(activity, index) in workList"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.time">
            <div class="title">{{activity.company}}</div>
            <div class="title">{{activity.post}}</div>
          </el-timeline-item>
        </el-timeline>
      </div>
    </title-container>

    <!--项目经验-->
    <title-container title="项目经验">
      <div class="project-info">
        <div class="item-info" :key="index" v-for="(item, index) in projectList">
          <div class="project-title">
            <div class="dot"></div>
            {{item.projectName}}
          </div>
          <li class="project-content">项目时间：{{item.projectTime}}</li>
          <li class="project-content">项目规模：{{item.scale}}</li>
          <li class="project-content">前端技术：{{item.techniques}}</li>
          <li class="project-content">项目描述：{{item.projectDetail}}</li>
          <li class="project-content">责任描述：{{item.responsibility}}</li>
        </div>
      </div>
    </title-container>
  </div>
</template>

<script>
  import TitleContainer from '../../../components/TitleContainer/title-container'
  export default {
    name: 'introduction',
    components: { TitleContainer },
    data(){
      return {
        profile: require('../../../assets/img/profile.jpg'),
        basicInfo: [
          { label: '姓名', value: '卢娟' },
          { label: '性别', value: '女' },
          { label: '籍贯', value: '河南' },
          { label: '年龄', value: '27' },
          { label: '学历', value: '本科' },
          { label: '毕业院校', value: '郑州大学' },
          { label: '专业', value: '电子信息科学与技术' },
          { label: '工作年限', value: '4年' },
          { label: '联系方式', value: '18039510269' },
          { label: '电子邮箱', value: '18039510269@163.com' },
          { label: '求职意向', value: 'Web前端工程师' },
          { label: '期望薪资', value: '16-20K' },
        ],
        evaluationList: [
          '1、具备团队管理经验，具有良好的沟通能力、业务逻辑能力和解决问题的能力；',
          '2、具有丰富的前端设计和开发能力；',
          '3、精通Vue,对Vue框架和源码有深入理解， 熟悉小程序开发；',
          '4、具备一定的业务需求分析经验，能熟练运用相关软件进行原型设计，业务流程和功能设计;' ,
          '5、有较丰富的文档编写和专利撰写经验；',
          '6、具备丰富的产品和项目的研发经验，包含平台(云计算、大数据)、应用(智慧城市类)、工具(可视化工具)、和大屏开发经验，' +
          '有比较好的英文读写能力(通过CET-6)'
        ],
        skillList: [
          '1、精通web前端技术，如VueJs生态，JavaScript/HTML5/CSS3、ES6、jQuery、Bootstrap，熟悉Angular.js框架；',
          '2、擅长平台和可视化大屏开发，熟练运用常见可视化工具类库Echarts、D3、WebGL、Leaflet等；',
          '3、熟悉前端模块化构建工具Webpack、Gulp等； ',
          '4、熟悉小程序和移动端开发；',
          '5、熟练应用Node.js、C等开发语言，熟悉Windows平台下系统及应用开发;',
          '6、熟悉计算机网络相关知识，TCP/IP架构，HTTP原理; 熟悉数据库的应用开发，熟练运用Oracle、MySQL、SQL Server等关系型数据库软件;',
          '7、掌握规范化的软件开发流程及方法，精通Git、SVN等版本管理工具'
        ],
        workList: [
          {
            time: '2017.9-至今',
            company: '新华三大数据有限公司',
            post: 'Web前端开发工程师、应用与业务软件工程师',
            size: 'large',
            type: 'primary',
            icon: 'el-icon-more'
          },
          {
            time: '2016.7-2017.9',
            company: '浪潮信息',
            post: 'Web前端开发工程师',
            color: '#0bbd87'
          },
        ],
        projectList: [
          {
            projectName: '云上北疆数据服务门户（一期交付）',
            projectTime: '2019.5—至今',
            scale: '50人',
            techniques:'前端微服务、Vue-cli 3.0、ES6、JavaScript、HTML、CSS3、Echarts、axios、ElementUI等',
            projectDetail:'该项目主要为内蒙古大数据局提供从数据汇聚、数据融合、数据治理到数据服务的一站式数据全流程服务，' +
              '深度服务于自治区政府治理、公共事业与产业发展进程。系统采用微服务架构集成多个应用系统，主要由门户网站和个人控制台' +
              '两部分构成，前端采用Vue-cli 3.0 多页面实现。系统按照三级等保要求设计，通过单点登录实现权限统一认证，通过角色控制菜单、' +
              '数据和页面操作权限，实现应用、菜单和按钮的灵活可配，提供精细粒度的监控、审计、消息和审批等功能，同时兼容各大主流浏览器。',
            projectFuction: '',
            responsibility: '作为项目的核心成员，前期主要参与项目业务梳理、原型设计、主要功能开发，后期主要负责文档编写及对接工作。'
          },
          {
            projectName: '数字化智能引擎（上市）',
            projectTime: '2019.02-至今',
            scale: '30人',
            techniques:'Vue-cli 3.0、ES6、JavaScript、HTML、CSS3、Echarts、axios、ElementUI、WebSocket等',
            projectDetail:'该平台主要用于政务、教育等行业的统一业务融合系统，结合最新的Spring Boot技术, 基于RBAC模型的权限设计实现细粒度' +
              '的权限管理、角色分配，通过单点登录CAS认证、统一的用户信息管理和应用集成功能实现各个子系统的统一鉴权认证及无缝跳转，同时把各个' +
              '业务系统的消息和业务模块接入平台，为功能繁多的子系统提供统一的服务入口、消息处理和流程审批功能，平台同时支持多源异构系统的无缝集成。',
            projectFuction: '',
            responsibility: '作为项目的核心成员，参与项目从规划、立项、分析、设计、实施到上市的整个阶段，主要负责业务功能设计、技术调研、组件封装、主要功能开发、文档编写及对接工作。'
          },
          {
            projectName: '资源目录管理系统（上市）',
            projectTime: '2018.04-2019.02',
            scale: '18人',
            techniques:'Vue.js、ES6、JavaScript、HTML、CSS3、Echarts、axios、ElementUI，Leaflet等',
            projectDetail:'项目描述：该系统主要用于实现政府及企事业单位的信息资源共享、业务协同和数据开放，是各级部门之间信息共享及数据向社会开放的依据。' +
              '信息资源目录编制工作包括对政府及其他各类信息资源的分类、元数据描述、代码规划和目录编制，以及相关工作的组织、流程、要求等方面的内容。' +
              '目前该项目已产品化，并广泛应用于各地市政务、教育等行业，助力各级部门信息资源梳理及管理。',
            projectFuction: '',
            responsibility: '1. 前期作为项目前端负责人，负责搭建前端vue框架、业务功能设计、技术调研、组件封装、主要业务功能开发及文档编写工作；\n' +
              '2. 后期作为项目辅助人，主要指导其他同事开发。'
          },
          {
            projectName: '数据视觉引擎（DVE）产品',
            projectTime: '2017.09-2018.04',
            scale: '18人',
            techniques:'AngularJs、ES6、JavaScript、HTML、CSS3、Ajax、Echarts、jQuery、Bootstrap、WebGL、D3、Webpack等\n',
            projectDetail:'该产品是一款基于B/S架构的大数据可视化工具，提供多种样式的可视化组件、丰富的行业场景模板、多源的数据配置等功能，' +
              '帮助用户轻松构建自己的可视化应用。同时基于该产品为客户提供定制化大屏开发，如汉中市电子政务网络安全实时分析系统、汉中市税务及财政' +
              '大数据分析与决策系统、汉中市民政大数据分析展示系统、公安部网流分析管理大屏、郑州智慧高新可视化大屏等多个项目。',
            projectFuction: '',
            responsibility: '1. 前期作为项目主要研发人员，完成产品基础组件和组合主题功能设计与开发；\n' +
              '2.  主导产品定制开发方案设计实现、开发指南编写及产品需求收集等工作；\n' +
              '3.  后期作为大屏项目开发负责人，通过跨部门协作完成大屏设计、开发、部署和交付等工作。'
          },
          {
            projectName: '浪潮云海OS系统',
            projectTime: '2016.07-2017.09',
            scale: '100人',
            techniques:'JavaScript、HTML5、CSS3、jQuery、Bootstrap、Echarts、VueJs框架、WebSocket等前端相关技术等',
            projectDetail:'该系统主要基于OpenStack架构，面向私有云和混合云市场，提供开放、安全的企业级云数据中心运维管理能力；采用微服务架构，' +
              '支持Docker快速部署，实现用户业务的自动感知、资源的智能管理和服务的自动化交付；采用BS架构设计完成，兼容各大浏览器，可流畅运行于PC端或移动端。',
            projectFuction: '',
            responsibility: '作为项目研发人员，主要参与智能监控、运维管理两大模块功能开发，负责日常培训及专利撰写工作。' +
              '期间主要完成资源、节点、区域、业务、告警、性能、巡检、日志、资产、报表、业务流程审批、服务编排和系统设置等功能开发及维护。'
          }
        ]
      }
    }
  }
</script>
<style scoped lang="stylus">
  .intro-container{
    width 100%
    height:100%
    padding 20px 15%
    .content-wrapper{
      width: 100%
      height: auto
    }
    .basic-info{
      width: 100%;
      height: auto;
      padding 20px
      display: flex;
      align-items center;
      justify-content start;
      .left-info{
        width: 70%
        display: flex;
        flex-wrap wrap;
        align-items center;
        justify-content start;
        .item-info{
          width: 50%
          height: 34px
          align-self center
          .title{
            font-size 14px
            line-height 2
          }
        }
      }
      .right-img{
        width: 300px
        text-align right
        img{
          width 50%;
          height: 40%
        }
      }
    }
    .evaluation-info{
      width 100%
      height: auto
      padding 20px
      .item-info{
        font-size: 14px
        line-height 2
      }
    }
    .work-info{
      width 100%
      height: auto
      padding 20px 0
      .title{
        font-size 14px
        line-height 2
      }
    }
    .project-info{
      width 100%
      height: auto
      padding 20px
      .item-info{
        margin-bottom 10px
        .project-title{
          font-size 16px
          font-weight bold
          line-height 2
          .dot{
            display inline-block
            width: 7px;
            height: 7px;
            background white
            transform rotate(45deg)
            border 1px #666 solid
            margin-right 10px
          }
        }
        .project-content{
          margin-left: 20px;
          font-size 14px;
          line-height 2
          color #333
        }
      }
    }
  }
</style>
