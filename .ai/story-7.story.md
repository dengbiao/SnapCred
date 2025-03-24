# 史诗-1: 核心平台开发

# 故事-7: 实现证件照在线下载功能

## 故事

**作为** 快证先生(SnapCred)的用户  
**我希望** 能够方便地下载和分享我创建的证件照  
**以便于** 将照片用于证件申请、打印或发送给相关机构

## 状态

待开始

## 背景

证件照的下载和分享功能是用户工作流程的重要最后一步。在用户完成照片上传、调整和自定义后，他们需要以适当的格式和质量获取最终图像。这包括提供各种格式选项（如 JPEG、PNG 等）、不同尺寸选项、打印准备版本，以及电子提交所需的符合规格的文件。为了增强用户体验，该功能还应包括快速分享选项、保存到云存储的能力以及打印指南。

## 预估

故事点: 4

## 任务

1. - [ ] 开发基本下载功能

   1. - [ ] 实现单一证件照下载
   2. - [ ] 开发多种图像格式选项(JPEG, PNG, PDF)
   3. - [ ] 添加分辨率和质量选择
   4. - [ ] 实现文件命名约定
   5. - [ ] 创建下载历史记录

2. - [ ] 开发批量和特殊格式下载选项

   1. - [ ] 实现打印就绪格式(带裁剪标记)
   2. - [ ] 创建批量下载功能（多尺寸包）
   3. - [ ] 添加带水印/不带水印选项
   4. - [ ] 实现证件集打包下载(ZIP)
   5. - [ ] 开发标准化文件名规则

3. - [ ] 实现社交和云存储共享功能

   1. - [ ] 创建电子邮件共享选项
   2. - [ ] 实现社交媒体分享功能
   3. - [ ] 添加云存储集成(Google Drive, Dropbox 等)
   4. - [ ] 开发短链接/QR 码分享
   5. - [ ] 实现分享权限控制

4. - [ ] 开发打印和使用指南功能

   1. - [ ] 创建按国家/证件的打印指南
   2. - [ ] 实现照片规格合规性检查
   3. - [ ] 添加自动打印尺寸检测
   4. - [ ] 开发学习资源（如何使用照片）
   5. - [ ] 创建专业打印服务推荐

5. - [ ] 测试和优化

   1. - [ ] 测试各种浏览器的下载兼容性
   2. - [ ] 验证不同设备的下载性能
   3. - [ ] 测试大尺寸和高质量照片下载
   4. - [ ] 对所有下载功能进行单元测试
   5. - [ ] 进行用户体验测试和优化

## 约束条件

- 下载功能必须在所有主流浏览器中正常工作
- 高质量照片下载不应超过 5MB（除特殊需求外）
- 分享功能必须符合数据隐私法规
- 下载和分享操作必须有清晰的进度指示
- 云存储集成需获得用户授权
- 下载历史记录应仅保存在用户本地，除非明确同意云存储

## 数据模型/架构

### 下载选项模型

```typescript
interface DownloadOptions {
  format: "jpeg" | "png" | "pdf" | "zip";
  quality: number; // 1-100 范围
  size: {
    width: number;
    height: number;
    unit: "px" | "mm" | "in";
  };
  dpi: number; // 点每英寸，打印相关
  includeMetadata: boolean;
  includePrintMarks: boolean;
  includeWatermark: boolean;
  batchOptions?: {
    sizes: Array<{
      name: string;
      width: number;
      height: number;
      unit: "px" | "mm" | "in";
    }>;
    formats: Array<"jpeg" | "png" | "pdf">;
  };
  filename: string;
  namingPattern: string; // 例如: "{name}_{size}_{date}"
}

interface DownloadRecord {
  id: string;
  photoId: string;
  thumbnailUrl: string;
  timestamp: number;
  options: DownloadOptions;
  fileSize: number;
  status: "completed" | "failed";
  errorMessage?: string;
}
```

### 分享选项模型

```typescript
interface ShareOptions {
  method: "email" | "link" | "qrcode" | "social" | "cloud";
  format: "jpeg" | "png" | "pdf" | "zip";
  quality: number;
  size: {
    width: number;
    height: number;
  };
  expiration?: number; // 链接过期时间（秒）
  accessControl?: {
    requirePassword: boolean;
    password?: string;
    allowDownloads: boolean;
    trackViews: boolean;
  };
  socialTarget?: "facebook" | "twitter" | "linkedin" | "instagram";
  cloudTarget?: "google-drive" | "dropbox" | "onedrive" | "icloud";
  emailDetails?: {
    recipient: string;
    subject: string;
    message: string;
  };
}

interface ShareRecord {
  id: string;
  photoId: string;
  method: string;
  thumbnail: string;
  url: string;
  qrCode?: string;
  created: number;
  expires?: number;
  accessCount: number;
  downloadCount: number;
  status: "active" | "expired" | "revoked";
}
```

## 结构

```
/src
├── /presentation
│   ├── /components
│   │   └── /download
│   │       ├── DownloadPanel.tsx         // 下载面板主组件
│   │       ├── FormatSelector.tsx        // 格式选择器
│   │       ├── SizeSelector.tsx          // 尺寸选择器
│   │       ├── QualitySelector.tsx       // 质量选择器
│   │       ├── BatchDownload.tsx         // 批量下载组件
│   │       ├── DownloadHistory.tsx       // 下载历史记录
│   │       ├── ShareOptions.tsx          // 分享选项组件
│   │       ├── CloudStorageConnector.tsx // 云存储连接器
│   │       └── PrintingGuide.tsx         // 打印指南组件
│   └── /hooks
│       ├── useDownload.ts                // 下载功能Hook
│       ├── useShare.ts                   // 分享功能Hook
│       └── useDownloadHistory.ts         // 下载历史Hook
├── /domain
│   ├── /models
│   │   ├── DownloadModel.ts              // 下载选项模型
│   │   └── ShareModel.ts                 // 分享选项模型
│   └── /services
│       ├── DownloadService.ts            // 下载服务
│       ├── ShareService.ts               // 分享服务
│       ├── CloudStorageService.ts        // 云存储服务
│       └── PrintingService.ts            // 打印服务
├── /infrastructure
│   ├── /data
│   │   ├── printingGuides.json           // 打印指南数据
│   │   └── downloadTemplates.json        // 下载模板数据
│   └── /adapters
│       ├── CloudStorageAdapter.ts        // 云存储适配器
│       └── SocialSharingAdapter.ts       // 社交分享适配器
└── /utils
    ├── fileUtils.ts                      // 文件处理工具
    ├── imageExportUtils.ts               // 图像导出工具
    ├── printMarkupUtils.ts               // 打印标记工具
    └── imageCompressionUtils.ts          // 图像压缩工具
```
