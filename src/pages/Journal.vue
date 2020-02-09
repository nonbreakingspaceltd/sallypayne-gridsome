<template>
  <Layout>
    <div class="sp-l-page sp-l-page--journal">
      <div class="sp-l-page__inner">
        <h1 class="sp-o-pagetitle sp-u-sronly">
          Journal
        </h1>
        <masonry
          :cols="masonryCols"
          :gutter="32"
          v-if="$page.allWordPressPost.edges"
        >
          <template v-for="{ node } in $page.allWordPressPost.edges">
            <Card :content="node" modifier="journal" :key="node.id" />
          </template>
        </masonry>
        <nav class="sp-c-pagination">
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
      title: 'Journal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Sally Payne's Journal is a place to share scribbles, illustrations and ideas.`
        }
      ]
    }
  };
</script>
