<template>
  <Layout>
    <div class="sp-l-page sp-l-page--work">
      <div class="sp-l-page__inner">
        <h1 class="sp-o-pagetitle sp-u-sronly">
          Work
        </h1>
        <Masonry
          v-if="$page.allWordPressWork.edges"
          :items="$page.allWordPressWork.edges"
          :card-props="{ modifier: 'work', renderTextContent: false }"
        />
        <nav
          class="sp-c-pagination"
          v-if="$page.allWordPressWork.pageInfo.totalPages > 1"
        >
          <Pager :info="$page.allWordPressWork.pageInfo" />
        </nav>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Work ($page: Int) {
  allWordPressWork (page: $page, perPage: 16) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title
        path
        lqip
        featuredMedia {
          sourceUrl
          altText
          mediaDetails {
            sizes {
              squareLarge {
                sourceUrl
                height
                width
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
  import Masonry from '~/components/Masonry';

  export default {
    components: {
      Pager,
      Masonry
    },
    metaInfo: {
      title: 'Work',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Examples of Sally Payne's work. Illustrations, Surface Paterns, Books and more.`
        }
      ]
    }
  };
</script>
