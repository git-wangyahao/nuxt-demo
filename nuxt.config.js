
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'http://at.alicdn.com/t/font_2061186_ay9y664t14j.css' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    // 项目里要使用的 SCSS 文件
    '@/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {
      src: '~plugins/vue-concise-slider',
      ssr: false,
      mode: 'client'
    },
    {
      src: '~plugins/element-ui',
    }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@gauseen/nuxt-proxy"
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  /**
   * pxoxy 
   */
  proxyTable:{
    /**
     * 代理
     */
      "/Api": {
        target: "http://mengxuegu.com:7300/mock/5e96c2c62a2f716419f88ac4/example",//测试服务器
        // target: "http://192.168.x.xxx:8008",//xxx
        changeOrigin: true,
        pathRewrite: {
          "^/Api": ""
        }
      },
      // "/mock": {
      //   target:'http://39.97.xxx.xxx:8095/mock/21',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/mock": ""
      //   }
      // },
    },
}
