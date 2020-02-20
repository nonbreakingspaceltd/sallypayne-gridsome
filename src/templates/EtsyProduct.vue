<template>
  <Layout>
    <div class="sp-l-page">
      <div class="sp-l-page__inner">
        <nav class="sp-o-backlink">
          <g-link class="sp-o-backlink__item" :to="`/shop`">
            <svg
              class="sp-c-work__nav__item__svg"
              viewBox="0 0 38 22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,12.6C0,12.8,0,12.9,0.1,13c0,0.1,0.1,0.1,0.2,0.2c0.7,0.5,1.3,1,1.9,1.5c0.9,0.8,1.9,1.4,3,2
    c0.9,0.6,1.8,1.2,2.7,1.8c0.2,0.1,0.3,0.3,0.5,0.1c0.1,0,0.1,0.1,0.1,0.2c0,0.1,0.1,0.2,0.1,0.3l0.8,0.6c1,0.5,1.9,1.1,2.8,1.7
    L13,22c0.2,0.2,0.3-0.1,0.4-0.4c0.3-0.8,0.5-1.6,0.6-2.4c0.1-0.3,0-0.7-0.2-1c-0.1-0.2-0.3-0.4-0.4-0.5c-0.9-0.8-2-1.5-3.1-2
    c-0.5-0.3-1-0.7-1.5-1.1c-0.5-0.4-1.1-0.8-1.7-1.2c0.2,0,0.4,0,0.5,0.1c0.3,0,0.7,0.1,1,0.1c1.9,0,3.7,0.1,5.6,0.1
    c1.8,0,3.6,0,5.4,0c0.7,0,1.4,0,2.2,0.2c0.4,0.1,0.9,0.1,1.3,0c3.5,0,8.6,0,12.1,0.1H37c0.2,0,0.4-0.2,0.6-0.4
    c0.2-0.2,0.3-0.5,0.3-0.7c0.2-0.8,0.2-1.6,0.1-2.3c-0.1-0.5-0.6-0.8-1.1-0.9c-0.3,0-0.7-0.1-1-0.1h-6.4V9.6h-4.5
    c-0.7,0-1.4-0.1-2.2-0.2c-0.4,0-0.8-0.1-1.2,0c-3.5,0-7-0.1-10.6-0.1c-1,0-2-0.1-3-0.2C7.5,9,7.2,9,6.8,9c0.3-0.2,0.6-0.4,1-0.6
    c0.4-0.2,0.7-0.5,1.1-0.8L11.2,6c0.2-0.1,0.3-0.2,0.4-0.4c0.1-0.1,0.2-0.2,0.4-0.2c0.1,0,0.1-0.1,0.2-0.1c0.6-0.5,1.2-0.9,1.8-1.4
    c0,0,0,0,0.1-0.1c0.1-0.2,0.1-0.3,0.1-0.5c0-0.1,0-0.2,0-0.4c-0.1-0.9-0.2-1.8-0.4-2.6c0-0.2-0.1-0.3-0.3-0.4
    c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.4,0.2-0.5,0.3c-0.9,0.7-1.7,1.3-2.7,1.9c-0.7,0.5-1.5,1-2.2,1.5c-0.8,0.6-1.6,1-2.4,1.6L3,7
    C2.5,7.4,1.9,7.8,1.3,8.2C1,8.4,0.8,8.6,0.5,8.8C0.3,9.1,0.2,9.5,0.1,9.9C0,10.6,0,11.4,0,12.2C0,12.2,0,12.4,0,12.6z"
              />
            </svg>
          </g-link>
        </nav>
        <article class="sp-c-product">
          <div class="sp-c-product__inner">
            <figure class="sp-c-product__media" v-if="$page.etsyProduct.images">
              <g-image :src="productImage" class="sp-c-product__media__image" />
            </figure>
            <div class="sp-c-product__details">
              <div class="sp-c-product__details__inner">
                <header class="sp-c-product__header">
                  <h1
                    class="sp-c-product__title"
                    v-html="$page.etsyProduct.title"
                  ></h1>
                  <p class="sp-c-product__price">
                    &pound;{{ $page.etsyProduct.price }}
                  </p>
                </header>
                <div
                  class="sp-c-product__content"
                  v-if="$page.etsyProduct.description"
                  v-html="$page.etsyProduct.description"
                ></div>
                <p>
                  <a
                    :href="$page.etsyProduct.url"
                    target="_blank"
                    class="sp-c-btn sp-c-btn--etsy"
                  >
                    <span class="sp-c-btn__label">
                      Buy now on
                    </span>
                    <svg
                      class="sp-c-btn__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44.7 21.2"
                    >
                      <path
                        d="M4.8 1.6v6s2.1 0 3.2-.1c.9-.2 1.1-.2 1.2-1.1l.3-1.3h1L10.4 8l.1 2.9h-1l-.2-1.2c-.3-.8-.6-.9-1.3-1-.8-.1-3.2-.1-3.2-.1v5c0 1 .5 1.4 1.6 1.4h3.4c1.1 0 2.1-.1 2.8-1.6l.9-2h.8c-.1.4-.5 4-.6 4.8 0 0-3.1-.1-4.4-.1H3.5l-3.5.1v-.9l1.1-.2c.9-.2 1.1-.4 1.1-1.1 0 0 .1-2.2.1-5.9 0-3.6-.1-5.8-.1-5.8 0-.7-.2-.9-1.1-1.1L0 1.1V.2l3.4.1h6.5c1.3 0 3.5-.2 3.5-.2s-.1 1.4-.2 4.6h-.9L12 3.5c-.3-1.5-.8-2.2-1.7-2.2H5.2c-.4 0-.4.1-.4.3zm13.1.7h1v3.4l3.3-.2L22 7l-3.2-.2v6c0 1.7.6 2.4 1.5 2.4s1.5-.5 1.8-.9l.5.6c-.5 1.1-1.9 1.7-3.2 1.7-1.6 0-2.9-1-2.9-2.8V6.9h-1.9v-.8c1.6-.2 2.9-1.2 3.3-3.8zm7 10.4l.6 1.5c.2.6.8 1.3 2.1 1.3 1.4 0 2-.7 2-1.6 0-2.8-5.4-2-5.4-5.7 0-2.1 1.7-3.1 3.9-3.1 1 0 2.4.2 3.2.5-.2.9-.3 1.9-.3 2.8l-.8.1-.6-1.6c-.2-.4-.8-.7-1.6-.7-1 0-2 .4-2 1.5 0 2.5 5.6 2 5.6 5.7 0 2.1-1.9 3.2-4.1 3.2-1.7 0-3.4-.7-3.4-.7.2-1 .1-2 0-3.1 0-.1.8-.1.8-.1zm6.4 7.8c.2-.9.4-2 .6-3.1l.9-.1.3 1.7c.1.4.3.7 1 .7 1.1 0 2.4-.6 3.7-2.9-.6-1.4-2.3-5.8-3.8-9.3-.4-.9-.5-1-1-1.1l-.4-.2v-.7l2.4.1 3-.2v.8l-.7.2c-.6.1-.8.4-.8.7 0 .1 0 .2.1.3.2.5 1.5 4.1 2.4 6.6.8-1.7 2.4-5.5 2.6-6.2.1-.3.2-.4.2-.6 0-.4-.2-.7-.8-.8l-.6-.2v-.8l2.3.1 2.1-.1v.8l-.4.3c-.9.4-1 .5-1.4 1.1L39.5 16c-2.1 4.8-4.3 5.2-5.9 5.2-1 0-1.7-.3-2.3-.7z"
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query EtsyProducts ($id: ID!) {
  etsyProduct(id: $id) {
    id
    listingId
    title
    price
    currencyCode
    state
    images {
      url_570xN
      lqip
    }
    slug
    description
    url
  }
}
</page-query>

<script>
  import decodeEntities from 'decode-entities';
  export default {
    metaInfo() {
      return {
        title: `${decodeEntities(this.$page.etsyProduct.title)} - Shop`
      };
    },
    computed: {
      productImage() {
        const images = this.$page.etsyProduct.images;
        const image = images[1] ? images[1] : images[0];
        return {
          src: image.url_570xN,
          width: image.width,
          height: image.height,
          alt: this.$page.etsyProduct.title,
          dataUri: image.lqip,
          size: { width: '100%' },
          srcset: [image.url_570xN]
        };
      }
    }
  };
</script>
