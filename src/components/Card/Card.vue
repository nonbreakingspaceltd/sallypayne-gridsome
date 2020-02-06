<template>
  <article class="sp-c-card" :class="modifierClass">
    <g-link :to="content.path" class="sp-c-card__link">
      <figure class="sp-c-card__media" v-if="content.featuredMedia">
        <div class="sp-c-card__media__inner" :style="`padding-top:${imagePadding}%;`">
          <img
            class="sp-c-card__media__image"
            :src="imageSrc"
            :alt="imageAlt"
            loading="lazy"
          />
        </div>
      </figure>
      <div v-if="content.title || content.excerpt" class="sp-c-card__content">
        <h3
          class="sp-c-card__title"
          v-if="content.title"
          v-html="content.title"
        />
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
