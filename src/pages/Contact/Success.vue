<template>
  <Layout>
    <div class="sp-l-page sp-l-page--contact">
      <div class="sp-l-page__section sp-l-page__section--0">
        <g-image src="~/assets/images/contact-pattern.jpg" alt="Animal pattern" />
      </div>
      <div class="sp-l-page__section sp-l-page__section--1">
        <h1 class="sp-o-pagetitle" v-html="$page.wordPressPage.title" />
        <div class="sp-o-pagecontent" v-html="$page.wordPressPage.content" />
        <p><g-link to="/contact/">Back to the contact page</g-link></p>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Contact {
  wordPressPage (id: "30042") {
    title
    content
  }
}
</page-query>

<script>
  export default {
    metaInfo: {
      title: `Message Sent`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Message successfully sent to Sally Payne`
        }
      ]
    }
  };
</script>
