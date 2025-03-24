# SnapCred 测试文档 🧪

本目录包含 SnapCred 应用的所有测试。我们使用 Jest 和 React Testing Library 进行单元和集成测试，遵循 TDD（测试驱动开发）方法论。

## 📂 测试结构

测试目录结构与应用结构保持一致：

```
__tests__/
├── app/              # 应用组件测试
│   ├── components/   # 组件测试
│   ├── pages/        # 页面测试
│   └── routes/       # 路由测试
├── domain/           # 领域逻辑测试
│   └── models/       # 数据模型测试
├── presentation/     # 表现层测试
│   └── components/   # UI组件测试
├── utils/            # 工具函数测试
├── __mocks__/        # 模拟数据和函数
├── test-utils.tsx    # 测试工具函数
└── README.md         # 本文件
```

## ▶️ 运行测试

```bash
# 运行所有测试
npm test

# 开发模式下运行测试（监视文件变化）
npm run test:watch

# 生成测试覆盖率报告
npm run test:coverage
```

## 📝 测试指南

### 1. 组件测试

- 测试组件是否正确渲染
- 测试用户交互（点击、表单输入等）
- 测试组件响应式行为
- 模拟外部依赖和服务

```typescript
describe("PhotoEditor", () => {
  it("应该正确渲染照片编辑界面", () => {
    render(<PhotoEditor />);
    expect(screen.getByText("编辑照片")).toBeInTheDocument();
  });

  it("应该响应亮度调整", async () => {
    render(<PhotoEditor />);
    const slider = screen.getByLabelText("亮度");
    await userEvent.change(slider, { target: { value: "50" } });
    expect(mockUpdateImage).toHaveBeenCalledWith(
      expect.objectContaining({ brightness: 50 })
    );
  });
});
```

### 2. 数据模型测试

- 测试模型创建和验证
- 测试边界情况和异常处理
- 确保 100%覆盖率

```typescript
describe("CredentialType", () => {
  it("应该创建有效的证件类型", () => {
    const credential = new CredentialType({
      id: "passport",
      name: { zh: "护照", en: "Passport" },
      dimensions: { width: 35, height: 45 },
    });
    expect(credential.isValid()).toBe(true);
  });
});
```

### 3. 工具函数测试

- 测试所有边缘情况
- 测试有效和无效输入
- 确保高覆盖率

```typescript
describe("formatDimensions", () => {
  it("应该正确格式化尺寸", () => {
    expect(formatDimensions({ width: 35, height: 45 })).toBe("35mm × 45mm");
  });
});
```

## 🎯 命名约定

- 测试文件命名：`[组件/函数名].[test|spec].tsx`
- 使用描述性的 `describe` 和 `it` 块
- 测试用例应清晰表达预期行为

## 🛠️ 模拟数据

- 使用 `jest.mock()` 模拟外部依赖
- 使用 `jest.fn()` 创建函数模拟
- 在 `__mocks__` 目录中存放复杂模拟
- 保持模拟尽可能简单

```typescript
jest.mock("../../services/imageService", () => ({
  processImage: jest.fn(() => Promise.resolve("processed-image-data")),
  convertToJpeg: jest.fn((data) => `${data}-as-jpeg`),
}));
```

## ✅ 最佳实践

- 保持测试专注和隔离
- 使用 `afterEach()` 或 `afterAll()` 清理测试
- 优先使用语义化的选择器（如 `getByRole`, `getByLabelText`），尽量减少 `data-testid` 的使用
- 使用 `test-utils.tsx` 中的工具简化测试设置
- 针对复杂组件，优先测试用户行为而非实现细节

## �� 覆盖率目标

我们的目标是：

- 整体覆盖率 80% 以上
- 业务逻辑覆盖率 90% 以上
- UI 组件覆盖率 70% 以上
- 数据模型覆盖率 100%

当前覆盖率状态可通过 `npm run test:coverage` 查看。

## 📚 资源

- [Jest 文档](https://jestjs.io/docs/getting-started)
- [React Testing Library 文档](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)

## 🔄 TDD 工作流程

1. **编写失败测试**：先编写一个测试，定义预期功能
2. **实现功能代码**：编写最少量代码使测试通过
3. **重构**：优化代码，保持测试通过
4. **重复**：继续下一个功能点

遵循此流程可确保代码质量和可测试性。
