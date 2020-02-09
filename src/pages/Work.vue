<template>
  <Layout>
    <div class="sp-l-page sp-l-page--work">
      <div class="sp-l-page__inner">
        <h1 class="sp-o-pagetitle sp-u-sronly">
          Work
        </h1>
        <masonry
          :cols="masonryCols"
          :gutter="32"
          v-if="$page.allWordPressWork.edges"
        >
          <template v-for="{ node } in $page.allWordPressWork.edges">
            <Card :content="node" modifier="work" :key="node.id" />
          </template>
        </masonry>
        <nav class="sp-c-pagination">
          <Pager :info="$page.allWordPressWork.pageInfo" />
        </nav>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Work ($page: Int) {
  allWordPressWork (page: $page, perPage: 24) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        path
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
