const fs = require("fs");
const path = require("path");
const svg2img = require("svg2img");
const sharp = require("sharp");

// 路径定义
const svgPath = path.resolve(__dirname, "../public/images/favicon.svg");
const icoPath = path.resolve(__dirname, "../public/images/favicon.ico");
const pngPath = path.resolve(__dirname, "../public/images/favicon.png");

// 将SVG转换为PNG
console.log("正在将SVG转换为PNG...");
svg2img(
  fs.readFileSync(svgPath, "utf8"),
  { width: 256, height: 256 },
  (err, buffer) => {
    if (err) {
      console.error("SVG转PNG失败:", err);
      return;
    }

    // 保存PNG文件
    fs.writeFileSync(pngPath, buffer);
    console.log("已保存PNG文件到:", pngPath);

    // 将PNG转换为ICO
    console.log("正在将PNG转换为ICO...");
    sharp(pngPath)
      .resize(32, 32)
      .toFile(icoPath, (err) => {
        if (err) {
          console.error("PNG转ICO失败:", err);
          return;
        }
        console.log("已保存ICO文件到:", icoPath);
      });
  }
);
