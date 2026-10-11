// cannot use path alias here because unocss can not resolve it
import { defineConfig } from "./toolkit/themeConfig";

export default defineConfig({
  siteName: "玲音的藏馆",
  brand: {
    title: "玲音的藏馆",
    subtitle: "",
    logo: "✨",
  },

  cover: {
    enable: true,
    preload: true,
    fixedCover: {
      enable: true,
      url: "https://furina.baigei.cc/pc/014.jpg",
    },
  },

  sidebar: {
    author: "玲音_Reni",
    social: {
      github: {
        url: "https://github.com/uu123bb",
        icon: "i-ri-github-fill",
      },
    },
  },

  copyright: {
    license: "CC-BY-NC-SA-4.0",
  },

  footer: {
    since: 2026, // 博客起始年份
    icp: {
      enable: false, // 启用 ICP 信息
      icpnumber: "", // 你的备案号
    },
  },
});
