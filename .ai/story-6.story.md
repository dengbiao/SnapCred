# 史诗-1: 核心平台开发

# 故事-6: 开发证件照风格自定义功能

## 故事

**作为** 快证先生(SnapCred)的用户  
**我希望** 能够自定义我的证件照风格（滤镜、颜色调整、光线效果等）  
**以便于** 创建符合要求同时又具有专业品质的证件照

## 状态

待开始

## 背景

证件照风格自定义是提升证件照质量的关键功能。虽然大多数证件照有严格的规格要求，但适当的风格调整可以提高照片质量，确保照片满足标准的同时展现最佳效果。这包括调整亮度/对比度、应用适合的滤镜、调整肤色以及优化照片的整体色调和饱和度。这些调整对于确保照片在打印或数字使用时清晰可辨、符合要求而又美观至关重要。

## 预估

故事点: 6

## 任务

1. - [ ] 开发基础图像调整功能

   1. - [ ] 实现亮度调整控件
   2. - [ ] 实现对比度调整功能
   3. - [ ] 开发饱和度控制器
   4. - [ ] 创建色调/色温调整工具
   5. - [ ] 实现锐化和模糊滑块控件

2. - [ ] 开发预设滤镜系统

   1. - [ ] 创建基本滤镜集合（标准证件照、护照照、艺术风格等）
   2. - [ ] 实现滤镜预览功能
   3. - [ ] 开发滤镜强度调整
   4. - [ ] 创建自定义滤镜保存功能
   5. - [ ] 添加基于国家/地区的证件照滤镜推荐

3. - [ ] 实现高级色彩控制

   1. - [ ] 开发 RGB/CMYK 色彩通道调整
   2. - [ ] 实现色阶和曲线调整工具
   3. - [ ] 开发肤色优化功能
   4. - [ ] 创建背景色精确匹配工具
   5. - [ ] 实现选择性颜色调整

4. - [ ] 开发照明效果和阴影调整

   1. - [ ] 创建照明均衡化工具
   2. - [ ] 实现阴影和高光恢复功能
   3. - [ ] 开发面部光线优化
   4. - [ ] 添加渐变光效工具
   5. - [ ] 实现反光和眩光消除

5. - [ ] 实现风格预览和比较功能

   1. - [ ] 创建调整前/后对比视图
   2. - [ ] 开发多风格并排比较工具
   3. - [ ] 实现证件类型模拟预览
   4. - [ ] 添加打印效果预览
   5. - [ ] 开发数字使用效果预览

6. - [ ] 测试和优化

   1. - [ ] 进行各种光线条件下拍摄照片的测试
   2. - [ ] 测试不同肤色和肤质的效果
   3. - [ ] 执行风格调整的性能测试
   4. - [ ] 测试不同设备和屏幕上的显示效果
   5. - [ ] 为各调整功能编写单元测试

## 约束条件

- 所有调整必须保持照片符合证件规格要求
- 图像处理应在客户端完成，确保用户隐私
- 调整后的照片质量不应低于原始照片
- 界面应简洁直观，适合非专业用户
- 处理时间应控制在可接受范围内（每次调整不超过 1 秒响应）
- 所有滤镜和调整应提供实时预览

## 数据模型/架构

### 照片风格调整模型

```typescript
interface PhotoStyleAdjustments {
  // 基础调整
  brightness: number; // 亮度: -100 到 100
  contrast: number; // 对比度: -100 到 100
  saturation: number; // 饱和度: -100 到 100
  exposure: number; // 曝光: -100 到 100
  temperature: number; // 色温: -100 (冷) 到 100 (暖)
  tint: number; // 色调: -100 (绿) 到 100 (洋红)
  sharpness: number; // 锐化: 0 到 100
  blur: number; // 模糊: 0 到 100

  // 高级色彩调整
  colorBalance: {
    shadows: { r: number; g: number; b: number }; // 各 -100 到 100
    midtones: { r: number; g: number; b: number };
    highlights: { r: number; g: number; b: number };
  };
  levels: {
    input: { black: number; gamma: number; white: number }; // 0-255
    output: { black: number; white: number }; // 0-255
  };
  curves: Array<{
    channel: "rgb" | "r" | "g" | "b";
    points: Array<{ x: number; y: number }>; // 0-1 范围内的点
  }>;

  // 肤色调整
  skinTone: {
    enhancement: number; // 0 到 100
    smoothing: number; // 0 到 100
    evenness: number; // 0 到 100
  };

  // 光线与阴影
  shadows: number; // 阴影: -100 到 100
  highlights: number; // 高光: -100 到 100
  clarity: number; // 清晰度: -100 到 100
  dehaze: number; // 去雾: -100 到 100
  vignette: {
    amount: number; // -100 到 100
    radius: number; // 0 到 100
    feather: number; // 0 到 100
  };

  // 滤镜
  activeFilter: string | null; // 当前活动滤镜的ID
  filterIntensity: number; // 滤镜强度: 0 到 100

  // 调整历史记录
  history: Array<{
    timestamp: number;
    adjustmentType: string;
    previousValue: any;
    newValue: any;
  }>;
}

interface PhotoFilter {
  id: string;
  name: string;
  preview: string; // 预览图URL
  category: "document" | "passport" | "visa" | "id" | "artistic" | "custom";
  countryCode?: string; // 适用的国家代码
  credentialTypes?: string[]; // 适用的证件类型ID
  adjustments: Partial<PhotoStyleAdjustments>; // 此滤镜应用的调整
  recommended: boolean; // 是否为推荐滤镜
  description?: string; // 滤镜描述
}
```

### 风格编辑器配置

```typescript
interface StyleEditorConfig {
  availableAdjustments: string[]; // 可用调整项列表
  defaultValues: Partial<PhotoStyleAdjustments>; // 默认值
  filters: PhotoFilter[]; // 可用滤镜
  presets: {
    [credentialTypeId: string]: {
      recommendedFilters: string[]; // 推荐滤镜ID列表
      recommendedAdjustments: Partial<PhotoStyleAdjustments>; // 推荐调整值
    };
  };
  ui: {
    showHistogram: boolean;
    comparisonViewEnabled: boolean;
    advancedControlsEnabled: boolean;
    tooltipsEnabled: boolean;
  };
}
```

## 结构

```
/src
├── /presentation
│   ├── /components
│   │   └── /styleEditor
│   │       ├── StyleEditor.tsx          // 风格编辑器主组件
│   │       ├── BasicAdjustments.tsx     // 基础调整控件
│   │       ├── ColorControls.tsx        // 色彩控制组件
│   │       ├── FilterSelector.tsx       // 滤镜选择器
│   │       ├── LightingControls.tsx     // 光线控制组件
│   │       ├── ComparisonView.tsx       // 对比视图
│   │       ├── Histogram.tsx            // 直方图组件
│   │       ├── AdjustmentSlider.tsx     // 通用调整滑块
│   │       └── SavedStyles.tsx          // 已保存风格组件
│   └── /hooks
│       ├── useImageAdjustment.ts        // 图像调整Hook
│       ├── useColorManipulation.ts      // 颜色操作Hook
│       ├── useFilters.ts                // 滤镜应用Hook
│       └── useStyleHistory.ts           // 风格历史记录Hook
├── /domain
│   ├── /models
│   │   ├── PhotoStyle.ts                // 照片风格模型
│   │   └── FilterModel.ts               // 滤镜模型
│   └── /services
│       ├── ImageStyleService.ts         // 图像风格服务
│       ├── FilterService.ts             // 滤镜服务
│       └── StyleRecommendationService.ts // 风格推荐服务
├── /infrastructure
│   ├── /data
│   │   ├── filters.json                 // 预设滤镜数据
│   │   └── countryStyles.json           // 国家特定风格数据
│   └── /adapters
│       └── FilterAdapter.ts             // 滤镜数据适配器
└── /utils
    ├── imageFilterUtils.ts              // 图像滤镜工具
    ├── colorUtils.ts                    // 颜色工具函数
    └── histogramUtils.ts                // 直方图工具函数
```
