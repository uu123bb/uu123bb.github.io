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
  }
});
