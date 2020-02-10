<template>
  <Layout>
    <div class="sp-l-page sp-l-page--home">
      <div class="sp-l-page__inner">
        <h1 class="sp-u-sronly">
          Sally Payne
        </h1>
        <div class="sp-c-homecanvas">
          <div class="sp-c-homecanvas__inner">
            <transition name="fade">
              <div class="sp-c-homecanvas__lqip" aria-hidden="true" v-show="!loaded"></div>
            </transition>
            <transition name="fade">
              <iframe
                ref="animation"
                @load="load()"
                class="sp-c-homecanvas__iframe"
                src="/animations/home.html"
                scrolling="no"
                v-show="loaded"
                title="Homepage Animation"
              ></iframe>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: `Sally Payne - Illustration & Surface Pattern Design`,
      titleTemplate: '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Welcome to Sally Payne's world of illustration and surface pattern design`
        }
      ]
    },
    data() {
      return {
        loading: false,
        loaded: false,
        loadingTimeout: null
      };
    },
    mounted() {
      const vm = this;
      vm.loadingTimeout = setTimeout(() => {
        if (!vm.loaded) {
          vm.loading = true;
        }
        clearTimeout(vm.loadingTimeout);
      }, 1000);
    },
    methods: {
      load() {
        this.loaded = true;
        this.loading = false;
      }
    }
  };
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
    transition-delay: 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
