// ref: https://umijs.org/config/
export default {
  publicPath: './',
  dva: false,
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },

  exportStatic: {
    // htmlSuffix: true,
    dynamicRoot: true,
  },

  routes: [
    {
      base: './dist',
      path: './',
      component: '../layouts/index',
      routes: [{ path: './index.html', component: '../pages/home/index' }],
    },
  ],

  // mpa: {},
  theme: {
    '@primary-color': '#103648',
  },
};
