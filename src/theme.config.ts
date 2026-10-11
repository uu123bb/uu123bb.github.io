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
    advancedCarousel: true,           // 启用高级轮播
    coverUrls: [
      "https://furina.baigei.cc/pc/014.jpg",
      "https://list.yppp.net/d/image/2025-12-fa65ad4b13d55e434c5c6737e4bd0bc6.jpeg",
      "https://t.alcy.cc/pic/pc/_-_.webp",
      "https://list.yppp.net/d/cos/image/2026-6-eddea4d005d4d676.jpg",
      "https://list.yppp.net/d/image/2025-11-fdc6e24eda486dc5260cfdf423cba0d4.png",
    ],
  },

  sidebar: {
    author: "玲音_Reni",
    description: "Forever",
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
