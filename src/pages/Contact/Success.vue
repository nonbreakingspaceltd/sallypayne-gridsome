<template>
  <Layout>
    <div class="sp-l-page sp-l-page--contact">
      <div class="sp-l-page__section sp-l-page__section--0">
        <g-image src="~/assets/images/contact-pattern.jpg" alt="Animal pattern" />
      </div>
      <div class="sp-l-page__section sp-l-page__section--1">
        <h1 class="sp-o-pagetitle">
          Success!
        </h1>
        <p>Your message has been successfully sent!</p>
        <p><g-link to="/contact/">Back to the contact page</g-link></p>
      </div>
    </div>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: `Contact Success`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Contact Success Sally Payne`
        }
      ]
    }
  };
</script>
