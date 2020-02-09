<template>
  <Layout>
    <div class="sp-l-page sp-l-page--about">
      <div class="sp-l-page__section sp-l-page__section--0">
        <g-image src="~/assets/images/sally-office.jpg" alt="Sally's Office" />
      </div>
      <div class="sp-l-page__section sp-l-page__section--1">
        <h1 class="sp-o-pagetitle" v-html="$page.wordPressPage.title" />
        <div class="sp-o-pagecontent" v-html="$page.wordPressPage.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query About {
  wordPressPage (id: "7") {
    title
    content
  }
}
</page-query>

<script>
  export default {
    metaInfo: {
      title: `About`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Sally Payne is a freelance surface pattern designer and Illustrator with a primarily focus on designing for the kids market.`
        }
      ]
    }
  };
</script>
