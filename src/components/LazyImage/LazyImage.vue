<template>
  <div class="c-lazy-image" :class="{ 'c-lazy-image--loaded' : loaded, 'c-lazy-image--loading' : loading }">
    <div class="c-lazy-image__container" :style="style">
      <img
        :data-src="image.src"
        :alt="image.alt"
        ref="image"
        :src="lqip"
        class="c-lazy-image__container__img"
      />
    </div>
    <noscript inline-template>
      <img
        :src="image.src"
        :alt="image.alt"
        class="c-lazy-image__fallback"
        loading="lazy"
      />
    </noscript>
  </div>
</template>

<script src="./LazyImage.js"></script>

<style src="./LazyImage.css"></style>