<template>
  <Layout>
    <div class="sp-l-page sp-l-page--shop">
      <div class="sp-l-page__inner">
        <h1 class="sp-o-pagetitle sp-u-sronly">
          Shop
        </h1>
        <Masonry
          v-if="$page.allEtsyProduct.edges"
          :items="$page.allEtsyProduct.edges"
          :card-props="{ modifier: 'product' }"
        />
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
  import Masonry from '~/components/Masonry';

  export default {
    components: {
      Pager,
      Masonry
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
