import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  history: {type: 'hash'},
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  antd: {},
  dva: {hmr: true},
});
