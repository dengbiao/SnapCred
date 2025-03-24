# 史诗-1: 核心平台开发

# 故事-5: 构建照片调整工具（裁剪、调整大小、旋转）

## 故事

**作为** 快证先生(SnapCred)的用户  
**我希望** 能够精确地调整我的照片（裁剪、缩放、旋转）  
**以便于** 制作符合特定证件要求的照片

## 状态

待开始

## 背景

照片调整工具是证件照制作流程中的核心功能，允许用户对上传的照片进行精确调整，以满足不同证件类型的规格要求。这包括裁剪功能（选择合适的区域）、调整大小（缩放到正确尺寸）和旋转功能（确保照片方向正确）。这些工具需要直观易用，同时提供足够的精度和灵活性，以满足专业证件照的严格要求。

## 预估

故事点: 5

## 任务

1. - [ ] 开发照片裁剪工具

   1. - [ ] 设计并实现可拖动裁剪框
   2. - [ ] 创建预设裁剪比例选项（方形、护照比例等）
   3. - [ ] 实现裁剪区域的自由调整
   4. - [ ] 添加基于人脸位置的智能裁剪建议
   5. - [ ] 开发裁剪预览和确认机制

2. - [ ] 实现照片缩放和调整大小功能

   1. - [ ] 创建直观的缩放控件（滑块或+/-按钮）
   2. - [ ] 实现拖动角落/边缘调整大小
   3. - [ ] 添加预设尺寸选项（基于常见证件类型）
   4. - [ ] 开发精确尺寸输入框（像素/毫米）
   5. - [ ] 实现等比例缩放锁定

3. - [ ] 开发照片旋转和翻转功能

   1. - [ ] 实现 90 度旋转按钮（顺/逆时针）
   2. - [ ] 创建自由旋转控制（旋转角度微调）
   3. - [ ] 添加水平和垂直翻转选项
   4. - [ ] 实现基于面部特征的自动旋转校正
   5. - [ ] 开发旋转格点参考线

4. - [ ] 实现辅助功能和增强

   1. - [ ] 添加证件照规格参考线
   2. - [ ] 实现操作撤销/重做功能
   3. - [ ] 创建重置到原始状态的选项
   4. - [ ] 开发调整历史记录
   5. - [ ] 实现快捷键支持

5. - [ ] 测试和优化

   1. - [ ] 编写裁剪工具的单元测试
   2. - [ ] 编写缩放与旋转功能的单元测试
   3. - [ ] 进行各种照片尺寸和格式的测试
   4. - [ ] 测试移动设备上的触摸交互
   5. - [ ] 性能优化和内存使用优化

## 约束条件

- 调整工具必须支持触摸屏和鼠标交互
- 界面应简洁直观，适合非专业用户使用
- 调整过程应为实时预览，无明显延迟
- 需支持高分辨率照片处理（至少 4000x3000 像素）
- 缩放和裁剪精度应满足证件照毫米级要求
- 所有操作应可撤销/重做

## 数据模型/架构

### 照片调整状态模型

```typescript
interface PhotoAdjustmentState {
  originalImage: {
    src: string;
    width: number;
    height: number;
    aspectRatio: number;
  };
  crop: {
    x: number; // 左上角X坐标 (百分比)
    y: number; // 左上角Y坐标 (百分比)
    width: number; // 宽度 (百分比)
    height: number; // 高度 (百分比)
    unit: "px" | "%"; // 单位
    aspect?: number; // 纵横比 (可选)
  };
  rotation: {
    angle: number; // 旋转角度 (度)
    flipHorizontal: boolean;
    flipVertical: boolean;
  };
  scale: {
    value: number; // 缩放比例
    targetWidth?: number; // 目标宽度 (像素)
    targetHeight?: number; // 目标高度 (像素)
    maintainAspectRatio: boolean;
  };
  history: Array<{
    timestamp: number;
    operation: "crop" | "rotate" | "scale" | "flip" | "reset";
    previousState: Partial<PhotoAdjustmentState>;
  }>;
  credentialGuides?: {
    type: string; // 证件类型ID
    facePosition: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    guidelines: Array<{
      type: "horizontal" | "vertical" | "rect";
      position:
        | number
        | { x: number; y: number; width: number; height: number };
      label?: string;
    }>;
  };
}
```

### 调整工具配置模型

```typescript
interface AdjustmentToolConfig {
  enabledTools: {
    crop: boolean;
    rotate: boolean;
    scale: boolean;
    flip: boolean;
  };
  cropOptions: {
    aspectRatios: Array<{
      label: string;
      value: number | null; // null代表自由比例
    }>;
    showGridLines: boolean;
    minWidth: number; // 最小裁剪宽度 (像素)
    minHeight: number; // 最小裁剪高度 (像素)
  };
  rotationOptions: {
    enableFreeRotation: boolean;
    rotationStep: number; // 自由旋转步长 (度)
    showGrid: boolean;
  };
  scaleOptions: {
    maxScale: number; // 最大缩放倍数
    minScale: number; // 最小缩放倍数
    scaleStep: number; // 缩放步长
  };
  presets: Array<{
    id: string;
    name: string;
    description: string;
    settings: Partial<PhotoAdjustmentState>;
  }>;
}
```

## 结构

```
/src
├── /presentation
│   ├── /components
│   │   └── /photoEditor
│   │       ├── PhotoEditor.tsx         // 照片编辑器主组件
│   │       ├── CropTool.tsx            // 裁剪工具组件
│   │       ├── RotateTool.tsx          // 旋转工具组件
│   │       ├── ScaleTool.tsx           // 缩放工具组件
│   │       ├── AdjustmentControls.tsx  // 调整控制面板
│   │       ├── EditorToolbar.tsx       // 编辑器工具栏
│   │       ├── GuideLines.tsx          // 参考线组件
│   │       └── AdjustmentHistory.tsx   // 历史记录组件
│   └── /hooks
│       ├── useCrop.ts                  // 裁剪功能Hook
│       ├── useRotate.ts                // 旋转功能Hook
│       ├── useScale.ts                 // 缩放功能Hook
│       └── useAdjustmentHistory.ts     // 历史记录Hook
├── /domain
│   └── /services
│       └── ImageAdjustmentService.ts   // 图像调整服务
└── /utils
    ├── imageTransformUtils.ts          // 图像变换工具函数
    └── canvasUtils.ts                  // Canvas工具函数
```
