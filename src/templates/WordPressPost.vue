<template>
  <Layout>
    <h1 v-html="$page.wordPressPost.title" />
    <div v-html="$page.wordPressPost.content" />
  </Layout>
</template>

<page-query>
query WordPressPost ($id: ID!) {
  wordPressPost(id: $id) {
    title
    content
  }
}
</page-query>

<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.wordPressPost.title
      };
    }
  };
</script>
