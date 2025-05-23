# 贡献指南 🤝

感谢您对 SnapCred（快证先生）的关注！我们非常欢迎社区贡献，无论是修复错误、改进文档还是添加新功能。本指南将帮助您了解如何参与贡献。

## 目录

- [行为准则](#行为准则)
- [报告问题](#报告问题)
- [功能请求](#功能请求)
- [开发流程](#开发流程)
- [提交规范](#提交规范)
- [代码审查](#代码审查)
- [测试规范](#测试规范)
- [文档要求](#文档要求)
- [分支策略](#分支策略)
- [版本发布](#版本发布)

## 行为准则

参与本项目的每个人都应遵循以下基本原则：

- 尊重每一位贡献者，不论经验水平或背景
- 积极接受建设性批评和反馈
- 关注问题本身，避免人身攻击
- 在所有互动中保持专业和尊重

## 报告问题

如果您发现问题或缺陷，请遵循以下步骤：

1. 使用 GitHub Issues 系统 [创建新问题](https://github.com/yourusername/snapcred/issues/new)
2. 检查现有问题，确保没有重复报告
3. 使用清晰的标题和详细描述
4. 包含复现步骤和预期行为
5. 如果可能，添加错误截图
6. 提供环境信息（浏览器版本、操作系统等）
7. 使用适当的标签标记问题（bug、enhancement 等）

**问题模板**：

```
## 问题描述
[简要描述问题]

## 复现步骤
1. [步骤1]
2. [步骤2]
3. [...]

## 预期行为
[描述应该发生的事情]

## 实际行为
[描述实际发生的事情]

## 环境信息
- 浏览器: [例如 Chrome 96]
- 操作系统: [例如 Windows 10]
- 屏幕大小/设备: [例如 1920x1080桌面/iPhone 13]

## 其他信息
[任何可能有助于解决问题的其他信息]
```

## 功能请求

我们欢迎新功能的提议：

1. 使用 GitHub Issues 系统 [创建新功能请求](https://github.com/yourusername/snapcred/issues/new?template=feature_request.md)
2. 清晰描述您想要的功能
3. 解释为什么这个功能对项目有价值
4. 如果可能，提供实现思路或方案

## 开发流程

如果您想要贡献代码，请遵循以下步骤：

1. **Fork 仓库**：在 GitHub 上 fork 本仓库

2. **克隆代码**：

   ```bash
   git clone https://github.com/YOUR_USERNAME/snapcred.git
   cd snapcred
   ```

3. **添加上游远程仓库**：

   ```bash
   git remote add upstream https://github.com/original_owner/snapcred.git
   ```

4. **创建功能分支**：

   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **开发您的功能**：

   - 遵循 [TDD 原则](/src/__tests__/README.md#tdd-工作流程)
   - 确保代码符合项目的代码规范
   - 添加必要的测试
   - 保持提交信息清晰简洁

6. **保持分支最新**：

   ```bash
   git pull upstream main
   ```

7. **提交您的更改**：

   ```bash
   git commit -m "feat: 添加新功能X"
   ```

8. **推送到您的 fork**：

   ```bash
   git push origin feature/your-feature-name
   ```

9. **创建 Pull Request**：
   - 在 GitHub 上创建一个从您的分支到原仓库 main 分支的 Pull Request
   - 填写 PR 模板，详细描述您的更改

## 提交规范

我们使用 [约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)：

```
<类型>[可选的作用域]: <描述>

[可选的正文]

[可选的脚注]
```

类型包括：

- **feat**: 新功能
- **fix**: 修复错误
- **docs**: 文档更改
- **style**: 不影响代码功能的格式修改
- **refactor**: 既不修复错误也不添加功能的代码重构
- **perf**: 性能优化
- **test**: 添加或修改测试
- **chore**: 对构建过程或辅助工具的更改

示例：

```
feat(photo-editor): 添加背景颜色更改功能
```

## 代码审查

所有提交都需要通过代码审查：

- 审查者将关注代码质量、测试覆盖率和文档
- 请耐心等待反馈并及时回应
- 可能需要多次迭代才能合并

## 测试规范

- 所有新功能必须包含测试
- 所有修复必须包含证明修复有效的测试
- 参考 [测试文档](/src/__tests__/README.md) 了解更多细节

## 文档要求

- 为所有新功能添加文档
- 更新文档以反映任何更改
- 提供代码注释以解释复杂逻辑

## 分支策略

- `main`: 稳定的生产就绪代码
- `develop`: 开发中的代码，稳定但可能包含尚未发布的功能
- `feature/*`: 用于开发新功能
- `fix/*`: 用于修复错误
- `docs/*`: 用于文档更改

## 版本发布

我们使用 [语义化版本](https://semver.org/lang/zh-CN/) 进行版本控制：

- 主版本号（X.0.0）：不兼容的 API 更改
- 次版本号（0.X.0）：向后兼容的功能添加
- 修订号（0.0.X）：向后兼容的错误修复

---

再次感谢您的贡献！如有任何问题，请随时联系项目维护者。🙌
