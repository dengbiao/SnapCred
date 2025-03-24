# 史诗-1: 核心平台开发

# 故事-4: 开发证件照规格数据库

## 故事

**作为** 快证先生(SnapCred)的用户  
**我希望** 系统提供全面准确的各类证件照规格信息  
**以便于** 能够生成符合特定要求的标准证件照

## 状态

待开始

## 背景

证件照规格数据库是快证先生平台的核心知识库，包含了各国各类证件照的尺寸、背景色、面部占比等技术规格和要求。准确的规格数据是确保用户能够生成符合官方标准的证件照的基础。该数据库需要覆盖常用证件类型（如护照、身份证、驾照等），并支持不同国家和地区的特定要求，同时提供用户友好的选择和筛选机制。

## 预估

故事点: 5

## 任务

1. - [ ] 收集和整理证件照规格数据

   1. - [ ] 研究并收集常见证件照类型的规格
   2. - [ ] 整理不同国家护照照片的标准
   3. - [ ] 整理不同国家签证照片的要求
   4. - [ ] 收集各类身份证和驾照照片规格
   5. - [ ] 整理工作证、学生证等其他证件照要求

2. - [ ] 设计并实现证件规格数据结构

   1. - [ ] 设计证件照类型数据模型
   2. - [ ] 实现规格数据的版本控制
   3. - [ ] 创建规格数据的国际化支持
   4. - [ ] 设计规格数据的扩展性方案
   5. - [ ] 实现规格数据的校验机制

3. - [ ] 开发证件类型选择界面

   1. - [ ] 设计证件类型列表/网格视图
   2. - [ ] 实现按类别和国家筛选功能
   3. - [ ] 创建证件类型详情展示
   4. - [ ] 开发搜索和快速筛选功能
   5. - [ ] 实现最近/常用类型记忆功能

4. - [ ] 将规格数据集成到处理流程

   1. - [ ] 实现基于选定类型的照片裁剪指南
   2. - [ ] 开发基于规格的人脸位置检测和验证
   3. - [ ] 集成规格信息到背景颜色选择
   4. - [ ] 实现基于规格的输出尺寸自动设置
   5. - [ ] 开发规格符合度检查和提示

5. - [ ] 测试和维护

   1. - [ ] 编写数据模型的单元测试
   2. - [ ] 验证各类规格数据的准确性
   3. - [ ] 测试规格集成流程的可靠性
   4. - [ ] 建立规格数据更新机制
   5. - [ ] 创建用户反馈收集渠道

## 约束条件

- 数据库必须包含至少 20 种常见证件照类型
- 护照和签证照片规格需覆盖主要国家和地区
- 规格数据必须来源可靠，优先使用官方文档
- 规格数据需支持中英文双语
- 界面需提供直观的视觉参考和说明
- 规格数据需定期验证和更新

## 数据模型/架构

### 证件照类型数据模型

```typescript
interface CredentialType {
  id: string; // 唯一标识符
  code: string; // 类型代码 (e.g., 'passport_cn')
  name: {
    zh: string; // 中文名称
    en: string; // 英文名称
  };
  category:
    | "passport"
    | "visa"
    | "id_card"
    | "driving_license"
    | "work_permit"
    | "other";
  country?: string; // ISO 国家代码 (可选，用于特定国家的证件)
  region?: string; // 地区/州/省 (可选)
  dimensions: {
    width: number; // 宽度 (mm)
    height: number; // 高度 (mm)
    dpi: number; // 分辨率 (DPI)
    pixelWidth: number; // 像素宽度
    pixelHeight: number; // 像素高度
  };
  background: {
    color: string; // 背景颜色 (hex)
    allowedColors?: string[]; // 允许的背景颜色列表
  };
  face: {
    proportion: number; // 人脸占照片高度的比例
    eyeLinePosition: number; // 眼睛位置占照片高度的比例
    minEyeDistance?: number; // 最小眼间距 (mm)
  };
  requirements: {
    allowGlasses: boolean; // 是否允许佩戴眼镜
    allowHeadwear: boolean; // 是否允许头饰
    allowSmile: boolean; // 是否允许微笑
    neutralExpression: boolean; // 是否要求中性表情
    faceDirectlyToCamera: boolean; // 是否要求正面朝向
    bothEarsVisible?: boolean; // 是否要求双耳可见
    shadowFree: boolean; // 是否要求无阴影
  };
  additionalNotes: {
    zh: string; // 中文附加说明
    en: string; // 英文附加说明
  };
  examples: string[]; // 示例图片URL
  lastUpdated: string; // 最后更新日期
  source: string; // 数据来源
}
```

### 证件类别数据模型

```typescript
interface CredentialCategory {
  id: string; // 类别ID
  name: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  icon: string; // 图标URL
  order: number; // 显示顺序
}
```

### 国家数据模型

```typescript
interface Country {
  code: string; // ISO国家代码
  name: {
    zh: string;
    en: string;
  };
  flag: string; // 国旗图标URL
  regions?: Array<{
    code: string;
    name: {
      zh: string;
      en: string;
    };
  }>;
}
```

## 结构

```
/src
├── /domain
│   ├── /models
│   │   ├── CredentialType.ts          // 证件类型模型
│   │   ├── CredentialCategory.ts      // 证件类别模型
│   │   └── Country.ts                 // 国家模型
│   ├── /repositories
│   │   └── CredentialRepository.ts    // 证件数据仓库
│   └── /services
│       └── CredentialService.ts       // 证件服务
├── /data
│   ├── /credentials
│   │   ├── passports.ts               // 护照数据
│   │   ├── visas.ts                   // 签证数据
│   │   ├── idCards.ts                 // 身份证数据
│   │   └── other.ts                   // 其他证件数据
│   ├── categories.ts                  // 类别数据
│   └── countries.ts                   // 国家数据
├── /presentation
│   ├── /components
│   │   └── /credentialSelector
│   │       ├── CredentialTypeList.tsx      // 证件类型列表
│   │       ├── CredentialTypeCard.tsx      // 证件类型卡片
│   │       ├── CredentialTypeFilter.tsx    // 筛选组件
│   │       ├── CredentialTypeSearch.tsx    // 搜索组件
│   │       └── CredentialTypeDetail.tsx    // 详情组件
│   └── /hooks
│       └── useCredentialTypes.ts           // 证件类型Hook
└── /utils
    └── credentialUtils.ts             // 证件类型工具函数
```
