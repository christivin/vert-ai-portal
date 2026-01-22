# VERT.AI 门户网站

基于 React + TypeScript + Vite 技术栈开发的 VERT.AI 企业门户网站。

## 项目简介

VERT.AI 专注于 AI 驱动的垂直场景解决方案，提供 FDE 模式（咨询、研发、部署、运维）全系列服务。本项目参考观远数据网站的结构和设计风格，开发了完整的企业门户首页。

## 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **UI组件库**: Ant Design 5.x
- **样式方案**: CSS Modules + Ant Design主题定制
- **国际化**: react-i18next
- **动画库**: framer-motion
- **路由**: React Router v6
- **HTTP客户端**: Axios (用于Mock API调用)

## 功能特性

- ✅ 响应式设计（支持桌面端、平板端、移动端）
- ✅ 多语言支持（中文/英文）
- ✅ 深色模式切换
- ✅ 平滑滚动动画
- ✅ 完整的页面模块（Hero、产品、解决方案、FDE模式、客户案例、核心优势、资源中心、联系我们）

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
vert-ai-portal/
├── public/              # 静态资源
│   └── images/         # 图片资源
├── src/
│   ├── components/     # 组件
│   │   ├── Layout/     # 布局组件（Header、Footer、FloatingTools）
│   │   ├── Home/       # 首页模块组件
│   │   └── common/     # 通用组件
│   ├── config/         # 配置文件（主题、路由）
│   ├── i18n/           # 国际化
│   ├── hooks/          # 自定义Hooks
│   ├── pages/          # 页面组件
│   └── utils/          # 工具函数
└── package.json
```

## 开发说明

- 所有API调用使用Mock数据，真实API接口位置已在代码中预留注释
- 图片素材位于 `public/images/` 目录，部分为参考素材，正式上线前需替换为VERT.AI品牌素材
- 支持深色模式，可通过Header中的主题切换按钮切换

## License

Copyright © 2024 VERT.AI

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
