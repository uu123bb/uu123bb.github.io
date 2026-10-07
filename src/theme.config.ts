// cannot use path alias here because unocss can not resolve it
import { defineConfig } from "./toolkit/themeConfig";

export default defineConfig({
  
  siteName: "ResTing's Blog",

  sidebar: {
    author: "琛婷_ResTing",
    description: "None",
    social: {
      github: {
        url: "https://github.com/uu123bb",
        icon: "i-ri-github-fill",
      },
  },

  copyright: {
    license: "CC-BY-NC-SA-4.0",  // 主题默认
  },
  
  footer: {
    since: 2026, // 博客起始年份
    icp: {
      enable: false, // 启用 ICP 信息
      icpnumber: "", // 你的备案号
    },
  },
});
