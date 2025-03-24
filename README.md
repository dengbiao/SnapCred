# SnapCred - 快证先生 📸

一个专业的在线证件照制作平台，帮助用户轻松制作高质量的证件照。

## 🌟 项目概述

SnapCred（快证先生）是一个免费的在线证件照制作工具，旨在帮助用户快速创建符合各种标准的证件照片。无论是护照、身份证、驾照还是其他类型的证件，我们的平台都能提供专业的照片处理服务，确保照片符合官方要求。

## ✨ 核心功能

- **多种证件类型支持**：身份证、护照、驾照、签证、毕业证等多种证件照规格
- **智能照片编辑**：自动调整大小、背景色和亮度
- **专业照片处理**：裁剪、旋转、对比度和亮度调整等功能
- **即时预览**：实时查看编辑效果
- **快速下载**：高质量图片立即下载，无水印
- **完全免费**：所有核心功能免费使用
- **隐私保护**：所有照片处理在本地完成，不会上传服务器

## 🔧 技术栈

- **前端**：React 18, TypeScript, SCSS
- **路由**：React Router 6
- **测试**：Jest, React Testing Library
- **构建工具**：Webpack 5
- **样式**：SCSS 模块化设计
- **图标**：React Icons
- **代码质量**：ESLint, TypeScript 严格模式

## 📋 项目结构

```
/src
├── /app                 # 应用层，包括页面和路由
│   ├── /pages           # 页面组件
│   └── /routes          # 路由配置
├── /domain              # 领域层，包括模型和业务逻辑
│   └── /models          # 数据模型定义
├── /presentation        # 表现层，包括 UI 组件
│   ├── /components      # 可复用组件
│   └── /hooks           # 自定义 Hooks
├── /utils               # 工具函数
└── /styles              # 全局样式和主题
```

## 🚀 快速开始

### 前提条件

- Node.js 16.x 或更高版本
- npm 8.x 或更高版本

### 安装步骤

1. 克隆仓库

```bash
git clone https://github.com/yourusername/snapcred.git
cd snapcred
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm start
```

应用将在 `http://localhost:8080` 启动。

### 构建生产版本

```bash
npm run build
```

## 🧪 测试

项目使用 Jest 和 React Testing Library 进行测试：

```bash
# 运行所有测试
npm test

# 查看测试覆盖率
npm run test:coverage

# 监视模式下运行测试
npm run test:watch
```

## 📱 支持的浏览器

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## 📝 开发规范

- 使用 TypeScript 进行静态类型检查
- 遵循 TDD（测试驱动开发）流程
- 使用 SCSS 模块化样式
- 响应式设计，支持从 320px 到 2560px 的各种屏幕尺寸

## 🔒 隐私政策

SnapCred 重视用户隐私：

- 所有照片处理均在用户浏览器本地完成
- 不会将用户照片上传至任何服务器
- 不保存任何用户照片或个人信息

## 🤝 贡献指南

欢迎贡献代码、报告问题或提出功能请求！请先阅读我们的贡献指南。

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解更多详情。

## 👥 团队

SnapCred 由一支热爱技术和创新的团队开发，致力于提供高质量的免费工具，帮助用户解决实际问题。

## 📮 联系我们

如有任何问题或建议，请通过以下方式联系我们：

- 电子邮件：contact@snapcred.com
- GitHub Issues：[提交问题](https://github.com/yourusername/snapcred/issues)

---

🚀 快证先生 - 让每个人都能轻松制作专业证件照！
