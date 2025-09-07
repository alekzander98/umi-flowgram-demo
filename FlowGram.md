# FlowGram 功能文档

## 概述

FlowGram 是一个基于 React 和 TypeScript 的可视化流程图编辑器，它允许用户创建、编辑和运行复杂的流程图。FlowGram 提供了多种节点类型和插件，支持自定义节点和功能扩展。

## 核心组件

### 节点类型

FlowGram 支持多种节点类型，每种节点都有其特定的功能和用途：

1. **Start Node**: 流程的起始节点，用于定义流程的输入数据。
2. **End Node**: 流程的结束节点，用于定义流程的输出数据。
3. **Condition Node**: 条件节点，用于根据条件分支流程。
4. **Loop Node**: 循环节点，用于重复执行某个流程块。
5. **LLM Node**: 大语言模型节点，用于与 AI 模型交互。
6. **HTTP Node**: HTTP 请求节点，用于发送 HTTP 请求。
7. **Comment Node**: 注释节点，用于添加注释信息。
8. **Group Node**: 分组节点，用于将多个节点组合在一起。
9. **Code Node**: 代码节点，用于执行自定义代码。
10. **Break Node**: 中断节点，用于中断循环。
11. **Continue Node**: 继续节点，用于跳过当前循环的剩余部分。
12. **Variable Node**: 变量节点，用于定义和管理变量。

### 插件系统

FlowGram 提供了插件系统，允许开发者扩展编辑器的功能：

1. **Context Menu Plugin**: 右键菜单插件，提供节点和连线的上下文菜单。
2. **Runtime Plugin**: 运行时插件，用于执行流程图。
3. **Variable Panel Plugin**: 变量面板插件，用于管理和显示变量。

### 快捷键

FlowGram 支持多种快捷键操作，提高用户的操作效率：

- `Ctrl+C` / `Cmd+C`: 复制
- `Ctrl+V` / `Cmd+V`: 粘贴
- `Ctrl+X` / `Cmd+X`: 剪切
- `Ctrl+Z` / `Cmd+Z`: 撤销
- `Ctrl+Y` / `Cmd+Shift+Z`: 重做
- `Delete`: 删除选中的节点或连线
- `Ctrl+A` / `Cmd+A`: 全选
- `Ctrl+G` / `Cmd+G`: 分组
- `Ctrl+U` / `Cmd+U`: 取消分组
- `Ctrl+Shift+G` / `Cmd+Shift+G`: 展开分组
- `Ctrl+Shift+C` / `Cmd+Shift+C`: 折叠分组
- `+`: 放大
- `-`: 缩小
- `0`: 重置缩放

## 使用方法

1. **创建新节点**: 通过拖拽节点类型到画布上创建新节点。
2. **连接节点**: 通过拖拽节点的输出端口到另一个节点的输入端口来连接节点。
3. **编辑节点**: 双击节点可以编辑节点的属性和数据。
4. **运行流程**: 使用运行时插件来执行流程图。

## 开发指南

### 添加新节点类型

1. 在 `src/pages/FlowGram/nodes` 目录下创建新的节点类型文件夹。
2. 实现节点的注册信息和组件。
3. 在 `src/pages/FlowGram/nodes/index.ts` 中导出新的节点类型。

### 添加新插件

1. 在 `src/pages/FlowGram/plugins` 目录下创建新的插件文件夹。
2. 实现插件的功能。
3. 在 `src/pages/FlowGram/plugins/index.ts` 中导出新的插件。

## 总结

FlowGram 是一个功能强大的可视化流程图编辑器，支持多种节点类型和插件扩展。通过 FlowGram，用户可以轻松创建和管理复杂的流程图，提高工作效率。