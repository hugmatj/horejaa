// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Buefy from 'buefy'
import '~/style/main.scss'

export default function (Vue, { router, head, isClient }) {
  Vue.use(Buefy)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Sora:wght@400;500;700&display=swap',
    rel: 'stylesheet'
  })
}
