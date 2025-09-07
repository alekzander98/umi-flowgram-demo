# 项目概述

这是一个基于 Umi.js 和 FlowGram.AI 的自由布局演示项目。该项目展示了一个可视化的流程图编辑器，用户可以在其中创建、编辑和运行复杂的流程图。

主要技术栈包括：
- **Umi.js**: 基于 React 的企业级前端应用框架。
- **FlowGram.AI**: 用于构建可视化流程图的库和插件。
- **React**: 用于构建用户界面的 JavaScript 库。
- **TypeScript**: JavaScript 的超集，添加了静态类型定义。
- **Ant Design**: 企业级 UI 设计语言和 React 组件库。

项目结构清晰，主要包含以下几个部分：
- `src/pages/FlowGram`: FlowGram 编辑器的核心实现。
- `src/components`: 通用的 React 组件。
- `src/services`: 与后端交互的服务层。
- `src/utils`: 工具函数。

# 构建和运行

## 安装依赖

```bash
yarn install
```

## 启动开发服务器

```bash
yarn dev
```

或者

```bash
yarn start
```

## 构建生产版本

```bash
yarn build
```

## 代码格式化

```bash
yarn format
```

# 开发约定

- **代码风格**: 使用 Prettier 进行代码格式化，配置文件为 `.prettierrc`。
- **代码检查**: 使用 ESLint 进行代码检查，配置文件为 `.eslintrc.js`。
- **提交钩子**: 使用 Husky 管理 Git 钩子，确保代码在提交前通过检查和格式化。
- **组件开发**: 遵循 React 和 TypeScript 的最佳实践，组件应具有清晰的接口和良好的类型定义。