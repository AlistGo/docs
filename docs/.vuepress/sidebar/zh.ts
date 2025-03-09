import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/zh/guide/": "structure",
  "/zh/config/": "structure",
  "/zh/faq/": "structure",
  "/zh/tool/": false,
  "/zh/": [
    "",
    {
      text: "使用指南",
      icon: "iconfont icon-creative",
      prefix: "guide/",
      children: ["api/", "install/", "drivers/", "advanced/"],
    },
    {
      text: "配置",
      icon: "iconfont icon-config",
      prefix: "config/",
      children: [
        "config",
      ],
    },
    {
      text: "常见问题",
      icon: "iconfont icon-question",
      prefix: "faq/",
      children: ["howto", "why"],
    },
  ],
});
