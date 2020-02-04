export default {
  data() {
    return {
      menuIn: false,
      windowWidth: 1024,
      tick: null
    };
  },
  created() {
    if (process.client) {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('resize', this.handleResize);
    }
  },
  computed: {
    smallscreen() {
      return this.windowWidth < 1024;
    },
    transitionName() {
      return this.smallscreen ? 'fade' : 'none';
    },
    transitionDuration() {
      return this.smallscreen ? 500 : 0;
    }
  },
  methods: {
    handleResize() {
      let tock = Date.now();
      this.tick = tock;
      setTimeout(() => {
        if (this.tick === tock) {
          this.windowWidth = window.innerWidth;
        }
      }, 100);
    },
    toggleMenu() {
      this.menuIn = !this.menuIn;
    }
  },
  watch: {
    $route() {
      const vm = this;
      setTimeout(() => {
        vm.menuIn = false;
      }, 300);
    }
  }
};
