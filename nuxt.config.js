import cheerio from 'cheerio'
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  // target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '景同舟',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '景同舟，整合国内众多优质大景区，推出景区大联盟年票产品，游客一票可无限次畅玩联盟景区。智慧景区平台为景区赋能，并通过智能化运营管理手段，解决传统景区的诸多困扰，便利消费者同时，助力联盟景区销售增长。',
      },
      {
        name: 'keywords',
        content:
          '景同舟 旅游年票 景区年票 景区联票 全国景区联票 旅游票打折 景区年卡 门票优惠',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '/js/flexible.js',
        type: 'text/javascript',
        charset: 'utf-8',
      },
      { src: 'https://hm.baidu.com/hm.js?6cea48c3f80744bd36e90de25cc171a8' },
      // {
      //   src: 'http://z1-pcok6.kuaishangkf.com/bs/ks.j?cI=365555&fI=152281',
      //   type: 'text/javascript',
      //   charset: 'utf-8',
      // },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['element-ui/lib/theme-chalk/index.css', 'swiper/dist/css/swiper.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/element-ui', ssr: true },
    { src: '@/plugins/vue-swiper', ssr: true },
    { src: '@/plugins/baiduGa.js', ssr: false },
    { src: '@/plugins/route.js', ssr: true },
  ],
  hooks: {
    // 'vue-renderer:ssr:context'(context) {
    //   console.log(context)
    //   const routePath = JSON.stringify(context.nuxt.routePath)
    //   console.log(routePath)
    //   context.nuxt = { serverRenderer: true, routePath }
    // },
    // 移除window.__nuxt__
    // 'render:route': (url, result) => {
    //   //  window.__nuxt__位于body中的第一个script中 移除了body中第一个脚本标签
    //   this.$ = cheerio.load(result.html, { decodeEntities: false })
    //   this.$(`body script`).eq(0).remove()
    //   result.html = this.$.html()
    // },
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    html: {
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    },
    transpile: [/^elememt-ui/],
    optimization: {
      runtimeChunk: {
        name: 'manifest',
      },
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            chunks: 'initial',
            priority: -10,
            reuseExistingChunk: false,
            test: /node_modules\/(.*)\.js/,
          },
          styles: {
            name: 'chunk-styles',
            test: /\.(less|css)$/,
            chunks: 'all',
            minChunks: 1,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      },
    },
    extractCSS: true,
    filenames: {
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : '[path][name].[ext]'),
    },
  },
  router: {
    // extendRoutes(routes, resolve) { 此处用于处理 找不到路由跳转方向
    //   routes.push({
    //     name: 'custom',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/404.vue'),
    //   })
    // },
    // base: '/',
    // middleware: ['metaTitle'],
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
  },
}
