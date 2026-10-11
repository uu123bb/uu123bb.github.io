// cannot use path alias here because unocss can not resolve it
import { defineConfig } from "./toolkit/themeConfig";

export default defineConfig({
  siteName: "ReniOn's Blog",
  brand: {
    title: "ReniOn's Blog",
    subtitle: "",
    logo: "✨",
  },

  sidebar: {
    author: "玲音_ReniOn",
    social: {
      github: {
        url: "https://github.com/uu123bb",
        icon: "i-ri-github-fill",
      },
    },
  },

  nyxPlayer: {
    enable: true,
    urls: [
      {
        name: "我的歌单",
        url: "https://music.163.com/playlist?id=18413783347",
      },
    ],
  },

  copyright: {
    license: "CC-BY-NC-SA-4.0", // 主题默认
  },

  footer: {
    since: 2026, // 博客起始年份
    icp: {
      enable: false, // 启用 ICP 信息
      icpnumber: "", // 你的备案号
    },
  },
});
