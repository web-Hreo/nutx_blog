import cheerio from 'cheerio'
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  // target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Hhua_前端个人博客',
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
          '何华_前端工程师技术博客_是记录与分享我在各种互联网_前端_服务端技术工作以及学习经验的自媒体博客_作为一名开发工程师来说_拥有自己的博客网站_是一件很美好的事情_虽然工作中不是在改bug就是在改bug的路上_但是我一直认为我会成为一名优秀的前端开发工程师',
      },
      {
        name: 'keywords',
        content:
          '前端开发 web开发 大前端 服务端 程序员 vue flutter react ',
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

  components: true,
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
  ],
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  axios: {},

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
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
  },
}
