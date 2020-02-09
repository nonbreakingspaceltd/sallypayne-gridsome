<template>
  <Layout>
    <div class="sp-l-page sp-l-page--work">
      <div class="sp-l-page__inner">
        <h1 class="sp-o-pagetitle sp-u-sronly">
          Shop
        </h1>
        <masonry
          :cols="masonryCols"
          :gutter="32"
          v-if="$page.allEtsyProduct.edges"
        >
          <template v-for="{ node } in $page.allEtsyProduct.edges">
            <Card :content="node" modifier="product" :key="node.id" />
          </template>
        </masonry>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Shop {
  allEtsyProduct(filter:{ state: { eq:"active" } } ) {
    edges {
       node {
        id
        listingId
        title
        price
        currencyCode
        state
        images {
          url_fullxfull
          url_570xN
          full_height
          full_width
        }
        path
        description
        url
      }
    }
  }
}
</page-query>

<script>
  import { Pager } from 'gridsome';
  import Card from '~/components/Card';
  export default {
    components: {
      Pager,
      Card
    },
    computed: {
      masonryCols() {
        return {
          default: 4,
          1280: 3,
          1024: 2,
          600: 1
        };
      }
    },
    metaInfo: {
      title: 'Shop',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Buy products from Sally Payne's Etsy shop.`
        }
      ]
    }
  };
</script>
