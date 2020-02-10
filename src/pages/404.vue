<template>
  <Layout>
    <div class="sp-l-page">
      <div class="sp-l-page__inner">
        <h1 class="sp-o-pagetitle">
          Oh dear. Sorry, but this page does not exist!
        </h1>
        <div class="sp-o-404-image">
          <g-image src="~/assets/images/lost-mouse.jpg" alt="Lost mouse" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: `404 - Page not found`
    }
  };
</script>

<style lang="postcss">
  .sp-o-404-image {
    max-width: 500px;
  }

  .sp-o-404-image img {
    width: 100%;
    height: auto;
    display: block;
  }
</style>
