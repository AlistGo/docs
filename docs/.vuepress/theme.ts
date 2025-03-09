import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme(
  {
    docsDir: "docs",
    logo: "/logo.svg",
    repo: "alist-org/docs",
    hostname: "https://alist.nn.ci",
    // 移动到 palette.scss 文件中
    // themeColor: {
    //   blue: "#2196f3",
    //   red: "#f26d6d",
    //   green: "#3eaf7c",
    //   orange: "#fb9b5f",
    // },

    author: {
      name: "Andy Hsu",
      url: "https://i.nn.ci",
    },

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    locales: {
      "/": {
        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,

        footer: `<a href="https://www.netlify.com"> <img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" /> </a>
      <script src="/adb.js" type="text/javascript"></script>
      `,

        displayFooter: true,
      },

      /**
       * Chinese locale config
       */
      "/zh/": {
        // navbar
        navbar: navbar.zh,

        // sidebar
        sidebar: sidebar.zh,

        footer: `<a href="https://www.netlify.com"> <img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" /> </a>
      <script src="/adb.js" type="text/javascript"></script>`,

        displayFooter: true,
      },
    },
    markdown: {
      imgMark: true,      //支持图片标记
      imgLazyload: true,  //支持图片懒加载
      // figure: true,       //支持图片描述
      imgSize: true,      //支持图片大小
      tabs: true,         //支持表格
      gfm: true,          //支持完整的 GFM 语法
      tasklist: true,     //支持任务列表
      include: true,      //支持 include 语法
      align: true,        //支持对齐
      mark: true,         //支持标记
      sub: true,          //支持下标
      sup: true,          //支持上标
      flowchart: true,    //支持流程图
      demo: true,         //支持 demo
      mermaid: true,      //支持 Mermaid
      chartjs: true,      //支持 Chart.js
      echarts: true,      //支持 ECharts
      plantuml: true,     //支持 PlantUML
      codeTabs: true,     //支持代码块分组
      // container: true,
    },
    plugins: {
      // 水印选项 
      // 参考配置：https://zhensherlock.github.io/watermark-js-plus/zh/config
      watermark:{
        enabled: false,
      },
      // 搜索从设置转移到主题
      docsearch:{
        appId: "ECAR405NMH",
        apiKey: "ef408b6afab61e0362a93af95ad18150",
        indexName: "alist",
      },
      // 目录的自动生成
      catalog: {
        frontmatter: () => ({
          toc: false,
        }),
      },
      // 
      components: {
        components: ["ArtPlayer", "BiliBili", "Badge", "VPCard"],
      },
      // 图标
      icon: {
        assets: [
          "//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",
          "https://npm.elemecdn.com/font6pro@6.4.0/css/fontawesome.min.css",
          "https://npm.elemecdn.com/font6pro@6.4.0/css/all.min.css",
        ]
      },
      comment: {
        /**
         * Using Giscus 评论
         */
        provider: "Giscus",
        repo: "AlistGo/docs",
        repoId: "R_kgDOHmaM-A",
        category: "Announcements",
        categoryId: "DIC_kwDOHmaM-M4CRRXl",

      },
      // 临时弹窗
      notice: [
        {
          path: "/",
          title: 'Kind tips',
          content: '<i class="fa-solid fa-light-emergency-on fa-bounce" style="color: #ff0000;"></i>&nbsp;<span style="color:rgb(255, 0, 0);font-weight:bold;">Please check the reminder content carefully</span><br/><br/>1.<span style="color:blue; font-weight:bold;">The new version v3.25.0 has updated the new password method, and the acquisition method has also been changed. For details, please refer to the documentation page of your own installation method</span><br/>2.v3.25.1 Aliyun_open can choose to mount the backup disk or resource library by itself, for details <a href="/guide/drivers/aliyundrive_open.html#drive-type">Click to view for details</a><br/>3.The new version of AList version greater than v3.22.1 adds single sign-on to automatically register as an AList account, click to view the <a href="/guide/advanced/sso.html#sso-automatically-registers-as-an-alist-account">detailed description</a><br/>4.<a href="/guide/drivers/139.html">139Cloud</a>and<a href="/guide/drivers/189.html">189Cloud</a>For details of changes, please view the document by yourself, respectively<br/>5.v3.20.1version Breaking Changes <a href="https://github.com/alist-org/alist/discussions/4702">View detailed description</a>, go to <a href="/config/configuration.html#scheme">Configure documentation page</a><br/>6. AList v3.30.0 will no longer support Win7/Server2008 because Go does not support it. <a href="https://github.com/golang/go/issues/64622">Click to view detailed instructions</a> .<br/>7.After adding the cloud disk, please configure [anti-theft/meta information] and other measures in time to prevent the account from being [frozen/disabled] due to malicious [access/sharing] by [crawlers/others].</span></span>',
          actions: [
            // {
            //   text: "Aliyun open",
            //   link: "/guide/drivers/aliyundrive_open",
            //   type: "primary",
            // },
            // {
            //   text: "GitHub",
            //   link: "https://github.com/alist-org/alist/discussions/4572",
            //   type: "primary",
            // },
            // {
            //   text: "Config",
            //   link: "/config/configuration",
            //   type: "primary",
            // },
          ],
          showOnce: true,
        },
        {
          path: "/zh",
          title: '温馨提示',
          content: '<i class="fa-solid fa-light-emergency-on fa-bounce" style="color: #ff0000;"></i>&nbsp;<span style="color:rgb(255, 0, 0);font-weight:bold;">请仔细查看弹窗提示内容</span><br/><br/>1.<span style="color:blue; font-weight:bold;">v3.25.1新版更新了新的密码方式,获取方式也进行了更改，详细说明请看自己安装方式的文档页面内</span><br/><br/>2.v3.25.1阿里云盘open可以自行选择挂载备份盘或者资源库，详情<a href="/zh/guide/drivers/aliyundrive_open.html#云盘类型">详情点击查看</a><br/><br/>3.AList版本大于v3.22.1,新版本新增单点登录自动注册为AList账户，点击查看<a href="/zh/guide/advanced/sso.html#单点登录自动注册为alist帐号">详细说明</a><br/><br/>4.<a href="/zh/guide/drivers/139.html">移动云盘</a>和<a href="/zh/guide/drivers/189.html">天翼云</a>分别有改动详情请自行查看文档<br/><br/>5.v3.20.1的版本破坏性更新<a href="https://github.com/alist-org/alist/discussions/4702">查看详细说明</a>，前往<a href="/zh/config/configuration.html#scheme">配置文档页面</a><br/><br/>6.AList v3.30.0版本开始将不再支持Win7/Server2008，因为Go不支持了,<a href="https://github.com/golang/go/issues/64622">点击查看详细说明</a>.<br/><br/><span style="color:rgb(255, 0, 0);font-weight:bold;">7.添加云盘后请及时配置[防盗/元信息]等措施，防止被[爬虫/其他人]恶意[访问/分享]导致帐号被[冻结/禁用].</span></span>',
          actions: [
            // {
            //   text: "阿里云open",
            //   link: "/zh/guide/drivers/aliyundrive_open",
            //   type: "primary",
            // },
            // {
            //   text: "GitHub",
            //   link: "https://github.com/alist-org/alist/discussions/4572",
            //   type: "primary",
            // },
            // {
            //   text: "配置",
            //   link: "/zh/config/configuration",
            //   type: "primary",
            // },
          ],
          showOnce: true,
        },
      ],
    },
  },
  {
    check: true,
    compact: true,
    custom: true,
    debug: false,
  }
);
