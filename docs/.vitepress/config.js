const path = require("path");
const fs = require("fs");

const readFilesFromDir = (path) => {
  const files = fs.readdirSync(path);
  return files
    .filter((file) => file !== "index.md")
    .map((file) => file.slice(0, -3));
};

const getSidebars = (dir) => {
  const dirPath = path.join(__dirname, "..", dir);
  const files = readFilesFromDir(dirPath);
  return files.map((file) => ({
    text: file,
    link: `/${dir}/${file}.html`,
  }));
};

module.exports = {
  title: "Lim's Blog",
  themeConfig: {
    nav: [{ text: "首页", link: "/" }],
    sidebar: [{ text: "Web", link: "/Web/", children: getSidebars("Web") }],
  },
};
