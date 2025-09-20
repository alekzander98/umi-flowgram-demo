import { defineConfig } from '@umijs/max';

export default defineConfig({
  esbuildMinifyIIFE: true,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Umi x FlowGram',
  },
  history: {
    type: 'hash',
  },
  routes: [
    {
      path: '/',
      redirect: '/flowgram',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      hideInMenu: true,
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
      hideInMenu: true,
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
      hideInMenu: true,
    },
    {
      name: 'FlowGram',
      path: '/flowgram',
      component: './FlowGram',
      layout: false,
    },
    {
      name: 'Know-How生成',
      path: '/knowhow',
      component: './KnowHow',
      layout: false,
    },
  ],
  npmClient: 'yarn',
});
