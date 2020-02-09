import mediumZoom from 'medium-zoom';

export default {
  props: {
    content: {
      type: Object,
      required: true
    },
    modifier: {
      type: String,
      default: null
    }
  },
  computed: {
    repeatImage() {
      return parseInt(this.content.repeatFeaturedImage, 10) === 1
        ? true
        : false;
    },
    mobile() {
      return this.windowWidth < 1024;
    }
  },
  data() {
    return {
      windowWidth: 1024,
      tick: null,
      zoom: null
    };
  },
  destroyed() {
    if (process.isClient) {
      window.removeEventListener('resize', this.handleResize);
    }
    if (this.zoom) {
      this.zoom.detach();
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.zoom = mediumZoom(this.$el.querySelector('img'));
  },
  watch: {
    windowWidth() {
      this.updateZoom();
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
    updateZoom() {
      if (!this.zoom) {
        return;
      }
      this.zoom.update({
        margin: this.mobile ? 8 : 32
      });
    }
  }
};
