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

  head.htmlAttrs = {
    lang: 'en',
    dir: 'ltr',
    class: process.isClient ? 'js' : 'no-js',
  };

  head.script.unshift({
    innerHTML: `document.documentElement.className=document.documentElement.className.replace(/\\bno-js\\b/,'js')`
  });

  // This code will only run in IE11 because we test for d.currentScript:
  head.script.unshift({
    innerHTML: `
      !function(d) {
        if( !d.currentScript ){
          var s = d.createElement('script');
          s.src = 'https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.find';
          d.head.appendChild(s);
        }
      }(document)
    `.replace(/\s/g, '')
  });

  head.style.push({
    innerHTML: `
      @font-face {
        font-family: 'SketchySallySans';
        src: url('/fonts/sketchysallysans-regular-webfont.woff2') format('woff2'),
          url('/fonts/sketchysallysans-regular-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
    `
  });

  head.link.push({
    rel: `preload`,
    as: `font`,
    href: `/fonts/sketchysallysans-regular-webfont.woff2`,
  });

  head.link.push({
    rel: `preconnect`,
    href: `https://sallypayne-cms.spacedawwwg.com`,
  });
}
