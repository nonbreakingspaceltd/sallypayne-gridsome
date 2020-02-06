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
          v-if="$page.allWordPressEtsyProducts.edges"
        >
          <template v-for="{ node } in $page.allWordPressEtsyProducts.edges">
            <Card :content="node" modifier="product" :key="node.id" />
          </template>
        </masonry>
        <nav class="sp-c-pagination">
          <Pager :info="$page.allWordPressEtsyProducts.pageInfo" />
        </nav>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Shop ($page: Int) {
  allWordPressEtsyProducts (page: $page, perPage: 24) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        date
        dateGmt
        featuredMedia {
          sourceUrl
          altText
          mediaDetails {
            width
            height
            sizes {
              mediumLarge {
                sourceUrl
              }
            }
          }
        }
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
      title: 'Shop'
    }
  };
</script>
