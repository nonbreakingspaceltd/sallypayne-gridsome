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
        <nav
          class="sp-c-pagination"
          v-if="$page.allEtsyProduct.pageInfo.totalPages > 1"
        >
          <Pager :info="$page.allEtsyProduct.pageInfo" />
        </nav>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Shop ($page: Int) {
  allEtsyProduct (filter:{ state: { eq:"active" } }, page: $page, perPage: 16) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
       node {
        id
        listingId
        title
        price
        currencyCode
        state
        images {
          hex_code
          url_fullxfull
          url_570xN
          full_height
          full_width
          lqip
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
