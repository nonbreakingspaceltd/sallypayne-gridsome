import DefaultLayout from '~/layouts/Default.vue';
import VueMasonry from 'vue-masonry-css';
import VueMoment from 'vue-moment';
import VScrollLock from 'v-scroll-lock';

import './assets/styles/main.css';

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout);
  Vue.use(VueMasonry);
  Vue.use(VueMoment);
  Vue.use(VScrollLock);
}
