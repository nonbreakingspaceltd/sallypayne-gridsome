<template>
  <Layout>
    <div class="sp-l-page sp-l-page--work-detail">
      <div class="sp-l-page__inner">
        <Work :content="$page.wordPressWork" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query WordPressWork ($id: ID!) {
  wordPressWork(id: $id) {
    title,
    backgroundColor,
    featuredImageUrl
    featuredMedia {
      sourceUrl
      altText
      mediaDetails {
        sizes {
          full {
            sourceUrl
            width
            height
          }
        }
      }
    }
    lqip
    repeatFeaturedImage
    previous {
      slug
    },
    next {
      slug
    }
  }
}
</page-query>

<script>
  import decodeEntities from 'decode-entities';
  import Work from '~/components/Work';
  export default {
    components: {
      Work
    },
    metaInfo() {
      return {
        title: `${decodeEntities(this.$page.wordPressWork.title)} - Work`
      };
    }
  };
</script>
