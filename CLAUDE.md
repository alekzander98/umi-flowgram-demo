# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Umi.js and FlowGram.AI free layout demo project. It's a visual flowchart editor that allows users to create, edit, and run complex flowcharts.

Main technologies:
- **Umi.js**: React-based enterprise frontend application framework
- **FlowGram.AI**: Library for building visual flowcharts
- **React**: JavaScript library for building user interfaces
- **TypeScript**: JavaScript superset with static type definitions
- **Ant Design**: Enterprise UI design language and React component library

## Project Structure

```
src/
├── pages/
│   ├── FlowGram/       # Main flowchart editor implementation
│   ├── Home/           # Home page
│   ├── Access/         # Access control demo
│   └── Table/          # CRUD table demo
├── components/         # Reusable React components
├── services/           # Backend interaction layer
└── utils/              # Utility functions
```

The core functionality is in `src/pages/FlowGram/` which contains:
- Editor implementation with FlowGram components
- Node types (start, end, condition, loop, LLM, HTTP, etc.)
- Plugins for various features
- Custom components and utilities

## Common Development Commands

### Development
```bash
yarn dev     # Start development server
yarn start   # Alternative to start development server
```

### Building
```bash
yarn build   # Build production version
```

### Code Quality
```bash
yarn format  # Format code with Prettier
```

### Dependencies
```bash
yarn install # Install all dependencies
```

## High-Level Architecture

The application is built on Umi.js framework with a main FlowGram editor page that implements:

1. **Visual Editor**: Using `@flowgram.ai/free-layout-editor` for the main canvas
2. **Node System**: Custom nodes for different functionality (start, end, condition, loop, LLM, HTTP, etc.)
3. **Plugins**: Extensions for additional functionality (context menu, runtime, variable panel, etc.)
4. **Data Flow**: JSON-based flow document structure with nodes and edges
5. **Runtime**: Execution engine for running flowcharts

The FlowGram editor is initialized with default data containing various node types connected in a sample flowchart.