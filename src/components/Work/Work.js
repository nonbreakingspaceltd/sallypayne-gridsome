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
    },
    imageSrc() {
      let src = null;
      if (this.content.featuredMedia) {
        if (this.content.featuredMedia.mediaDetails.sizes.squareLarge) {
          src = this.content.featuredMedia.mediaDetails.sizes.squareLarge
            .sourceUrl;
        } else if (this.content.featuredMedia.mediaDetails.sizes.mediumLarge) {
          src = this.content.featuredMedia.mediaDetails.sizes.mediumLarge
            .sourceUrl;
        }
      } else if (this.content.images) {
        const image = this.content.images[1] || this.content.images[0];
        src = image && image.url_570xN ? image.url_570xN : null;
      }
      return src;
    },
    imageAlt() {
      return this.content.featuredMedia && this.content.featuredMedia.alt
        ? this.content.featuredMedia.alt
        : this.content.title;
    },
    featuredImage() {
      let metadata = {
        width: 1,
        height: 1
      }
      if (this.content.featuredMedia) {
        let image;
        if (this.content.featuredMedia.mediaDetails.sizes.squareLarge) {
          image = this.content.featuredMedia.mediaDetails.sizes.squareLarge;
        } else if (this.content.featuredMedia.mediaDetails.sizes.mediumLarge) {
          image = this.content.featuredMedia.mediaDetails.sizes.mediumLarge;
        }
        metadata = {
          width: image.width,
          height: image.height
        };
      } else if (this.content.images) {
        const image = this.content.images[1] || this.content.images[0];
        metadata = {
          width: image.full_width,
          height: image.full_height
        };
      }
      return {
        src: this.imageSrc,
        width: metadata.width,
        height: metadata.height,
        alt: this.imageAlt
      };
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
