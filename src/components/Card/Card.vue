<template>
  <article class="sp-c-card" :class="modifierClass">
    <g-link :to="content.path" class="sp-c-card__link">
      <figure class="sp-c-card__media" v-if="imageSrc">
        <div class="sp-c-card__media__inner" :style="mediaPadding">
          <g-image :src="featuredImage" :alt="featuredImage.alt" class="sp-c-card__media__image" />
        </div>
      </figure>
      <div
        v-if="(content.title || content.excerpt) && renderTextContent"
        class="sp-c-card__content"
      >
        <h3 class="sp-c-card__title" v-if="content.title" v-html="title" />
        <div class="sp-c-card__body" v-if="content.price">
          &pound;{{ content.price }}
        </div>
        <div
          class="sp-c-card__body"
          v-if="content.excerpt"
          v-html="content.excerpt"
        />
      </div>
    </g-link>
  </article>
</template>

<script src="./Card.js"></script>

<style src="./Card.css"></style>
