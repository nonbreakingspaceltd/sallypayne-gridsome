import DefaultLayout from '~/layouts/Default.vue'
import VueMasonry from 'vue-masonry-css'
import './assets/styles/main.css';

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueMasonry);
}
