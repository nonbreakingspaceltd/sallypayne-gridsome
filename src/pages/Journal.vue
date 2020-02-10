<template>
  <Layout>
    <div class="sp-l-page sp-l-page--journal">
      <div class="sp-l-page__inner">
        <h1 class="sp-o-pagetitle sp-u-sronly">
          Journal
        </h1>
        <Masonry v-if="$page.allWordPressPost.edges" :items="$page.allWordPressPost.edges" card-modifier="journal" />
        <nav class="sp-c-pagination" v-if="$page.allWordPressPost.pageInfo.totalPages > 1">
          <Pager :info="$page.allWordPressPost.pageInfo" />
        </nav>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Journal ($page: Int) {
  allWordPressPost (page: $page, perPage: 24) @paginate {
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
        excerpt
        featuredMedia {
          sourceUrl
          altText
          mediaDetails {
            sizes {
              mediumLarge {
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
      title: 'Journal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Sally Payne's Journal is a place to share scribbles, illustrations and ideas.`
        }
      ]
    },
  };
</script>
