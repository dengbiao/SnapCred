# 史诗-1: 核心平台开发

# 故事-3: 实现面部检测和背景移除

## 故事

**作为** 快证先生(SnapCred)的用户  
**我希望** 系统能自动检测照片中的人脸并移除/替换背景  
**以便于** 快速获得符合证件照标准的图像

## 状态

待开始

## 背景

面部检测和背景移除是制作专业证件照的关键步骤。面部检测可以确定照片中人脸的位置、大小和角度，为后续的裁剪和调整提供依据；背景移除则能将用户的照片与标准背景（如白色、蓝色等）分离，创建符合官方要求的证件照。这些功能需要结合客户端和云端技术来实现最佳效果，在保证准确性的同时兼顾性能和用户体验。

## 预估

故事点: 8

## 任务

1. - [ ] 实现前端面部检测功能

   1. - [ ] 集成 TensorFlow.js 人脸检测模型
   2. - [ ] 开发面部特征检测组件（眼睛、嘴、鼻子等）
   3. - [ ] 实现人脸姿态评估（正面、侧面）
   4. - [ ] 添加人脸框选和调整功能
   5. - [ ] 开发面部检测结果可视化界面

2. - [ ] 开发背景移除功能

   1. - [ ] 调研并选择合适的背景分割算法
   2. - [ ] 实现基于 ML 模型的人像分割
   3. - [ ] 开发背景颜色替换工具
   4. - [ ] 实现背景模糊/平滑功能
   5. - [ ] 添加背景处理强度调节

3. - [ ] 创建用户界面和交互

   1. - [ ] 设计人脸检测和背景处理界面
   2. - [ ] 实现处理进度指示器
   3. - [ ] 开发处理前后对比预览
   4. - [ ] 添加处理参数调整界面
   5. - [ ] 设计错误处理和反馈机制

4. - [ ] 实现高级功能和优化

   1. - [ ] 添加多人脸检测和选择
   2. - [ ] 开发面部表情检测（微笑、眼睛睁闭等）
   3. - [ ] 实现处理结果的细节修复工具
   4. - [ ] 优化算法性能和准确度
   5. - [ ] 实现低端设备的降级处理方案

5. - [ ] 测试和质量保证

   1. - [ ] 编写面部检测单元测试
   2. - [ ] 编写背景处理单元测试
   3. - [ ] 创建多样化的测试图像集
   4. - [ ] 进行各种光照和背景条件下的测试
   5. - [ ] 进行不同肤色和人种的检测测试

## 约束条件

- 面部检测应在 95% 的清晰正面照片中准确工作
- 背景移除功能应支持常见的背景类型（单色、室内场景等）
- 处理速度应在中端设备上控制在 5 秒内完成
- 必须考虑隐私保护，图像处理应尽可能在客户端完成
- 需支持主流浏览器和设备
- 需考虑不同肤色和人种的适用性，避免算法偏见

## 数据模型/架构

### 面部检测结果模型

```typescript
interface FaceDetectionResult {
  confidence: number; // 检测置信度 0-1
  boundingBox: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  landmarks: {
    // 人脸关键点
    leftEye: [number, number];
    rightEye: [number, number];
    nose: [number, number];
    mouth: [number, number];
    leftEar: [number, number];
    rightEar: [number, number];
  };
  pose: {
    roll: number; // 左右倾斜角度
    pitch: number; // 上下点头角度
    yaw: number; // 左右摇头角度
  };
  faceAttributes: {
    expression: string;
    glasses: boolean;
    eyesOpen: boolean;
    quality: number; // 图像质量评分
  };
}
```

### 背景处理参数模型

```typescript
interface BackgroundProcessingParams {
  removeBackground: boolean;
  backgroundColor: string; // hex 颜色值
  backgroundBlurRadius: number;
  backgroundSmoothness: number;
  maskSoftness: number; // 边缘软化程度
  preserveHairDetails: boolean; // 是否保留发丝细节
  enhanceForeground: boolean; // 是否增强前景
  foregroundLightness: number; // 前景亮度调整
}
```

## 结构

```
/src
├── /domain
│   ├── /services
│   │   ├── FaceDetectionService.ts        // 人脸检测服务
│   │   └── BackgroundRemovalService.ts    // 背景移除服务
│   └── /models
│       ├── FaceDetection.ts               // 人脸检测模型
│       └── BackgroundProcessing.ts        // 背景处理模型
├── /infrastructure
│   └── /ml
│       ├── FaceDetectionModel.ts          // TensorFlow模型封装
│       └── SegmentationModel.ts           // 分割模型封装
├── /presentation
│   ├── /components
│   │   ├── /faceDetection
│   │   │   ├── FaceDetector.tsx           // 人脸检测组件
│   │   │   ├── FaceFrame.tsx              // 人脸框显示组件
│   │   │   └── FaceLandmarks.tsx          // 人脸特征点组件
│   │   └── /backgroundRemoval
│   │       ├── BackgroundRemover.tsx      // 背景移除组件
│   │       ├── ColorPicker.tsx            // 背景颜色选择器
│   │       └── MaskAdjuster.tsx           // 蒙版调整工具
│   └── /hooks
│       ├── useFaceDetection.ts            // 人脸检测Hook
│       └── useBackgroundRemoval.ts        // 背景移除Hook
└── /utils
    ├── imageProcessingUtils.ts            // 图像处理工具
    └── mlUtils.ts                         // 机器学习工具
```
