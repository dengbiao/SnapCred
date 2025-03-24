# 史诗-1: 核心平台开发

# 故事-2: 创建照片上传和基本处理功能

## 故事

**作为** 快证先生(SnapCred)的用户  
**我希望** 能够上传照片并进行基础的图像处理  
**以便于** 为证件照制作提供原始素材

## 状态

待开始

## 背景

照片上传功能是用户使用快证先生服务的第一步，需要提供简单直观的上传界面，支持多种方式上传照片（文件选择、拖放等）。基本处理功能包括预览上传的照片并进行初步的客户端处理，如图像格式验证、大小调整等。这是证件照处理流程的基础环节，用户体验直接影响后续步骤。

## 预估

故事点: 5

## 任务

1. - [ ] 设计和实现照片上传组件

   1. - [ ] 创建拖放区域组件
   2. - [ ] 实现文件选择功能
   3. - [ ] 添加上传进度显示
   4. - [ ] 设计上传错误处理和反馈机制
   5. - [ ] 实现文件类型和大小验证

2. - [ ] 开发照片预览功能

   1. - [ ] 创建照片预览组件
   2. - [ ] 实现图像缩放和移动功能
   3. - [ ] 添加基本的照片信息显示（尺寸、格式等）
   4. - [ ] 实现预览界面的响应式布局

3. - [ ] 实现基本的客户端图像处理

   1. - [ ] 创建图像处理服务
   2. - [ ] 实现基本的图像格式转换
   3. - [ ] 开发初步的图像大小调整功能
   4. - [ ] 添加简单的亮度/对比度调整

4. - [ ] 开发上传页面用户界面

   1. - [ ] 设计上传页面布局
   2. - [ ] 实现上传和预览区域之间的交互
   3. - [ ] 添加步骤指导和提示信息
   4. - [ ] 创建上传后的下一步导航

5. - [ ] 测试和优化

   1. - [ ] 编写上传组件的单元测试
   2. - [ ] 编写图像处理服务的单元测试
   3. - [ ] 进行不同浏览器和设备的兼容性测试
   4. - [ ] 优化上传和处理性能

## 约束条件

- 上传组件必须支持主流浏览器（Chrome、Firefox、Safari、Edge）
- 上传文件大小限制为 10MB
- 支持的图像格式应包括 JPG、PNG、HEIF 等常见格式
- 上传界面需要适配从 320px 到 2560px 的各种屏幕尺寸
- 客户端图像处理应考虑性能影响，避免过度消耗用户设备资源

## 数据模型/架构

### 上传文件数据模型

```typescript
interface UploadFile {
  id: string;
  file: File;
  preview: string; // Base64 或 URL
  status: "uploading" | "done" | "error";
  progress: number; // 上传进度 0-100
  error?: string; // 错误信息
  dimensions?: {
    width: number;
    height: number;
  };
  fileSize: number; // 字节数
  fileType: string; // MIME 类型
}
```

### 图像处理参数模型

```typescript
interface ImageProcessingParams {
  brightness: number; // -100 到 100
  contrast: number; // -100 到 100
  scale: number; // 缩放比例
  rotation: number; // 旋转角度
  flipHorizontal: boolean;
  flipVertical: boolean;
  format: "jpeg" | "png" | "webp";
  quality: number; // 1-100
}
```

## 结构

```
/src
├── /presentation
│   ├── /components
│   │   ├── /upload
│   │   │   ├── PhotoUpload.tsx        // 主上传组件
│   │   │   ├── DropZone.tsx           // 拖放区域组件
│   │   │   ├── FileSelector.tsx       // 文件选择组件
│   │   │   ├── UploadProgress.tsx     // 上传进度组件
│   │   │   └── ErrorMessage.tsx       // 错误消息组件
│   │   └── /preview
│   │       ├── PhotoPreview.tsx       // 照片预览组件
│   │       ├── ImageInfo.tsx          // 图像信息组件
│   │       └── ImageControls.tsx      // 图像控制组件
│   └── /hooks
│       ├── useFileUpload.ts           // 文件上传Hook
│       └── useImageProcessing.ts      // 图像处理Hook
├── /domain
│   └── /services
│       └── ImageProcessingService.ts  // 图像处理服务
├── /app
│   └── /pages
│       └── UploadPage.tsx             // 上传页面
└── /utils
    ├── imageUtils.ts                  // 图像处理工具函数
    └── fileUtils.ts                   // 文件处理工具函数
```
