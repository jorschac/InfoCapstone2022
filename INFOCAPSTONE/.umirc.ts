import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  theme: {
    '@primary-color': '#a78cf2',
  },
  history: {type: 'hash'},
  routes: [
    { path: '/courseInfo', component: '@/layouts/index', 
      routes: [{path: '/courseInfo/detail', component: '@/pages/courseInfoPage/index'},
               {path: '/courseInfo/QA', component: '@/pages/QAPage/QAPage.tsx'}]
    },

    { path: '/', component: '@/pages/index', exact:true },
  ],
  fastRefresh: {},
  antd: {},
  dva: {hmr: true},
});
