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
    modifierClass() {
      let classes = '';
      if (this.modifier) {
        classes += ` sp-c-card--${this.modifier}`;
      }
      return classes;
    },
    imagePadding() {
      return this.content.featuredMedia
        ? (this.content.featuredMedia.mediaDetails.height /
            this.content.featuredMedia.mediaDetails.width) *
            100
        : 0;
    },
    imageSrc() {
      return this.content.featuredMedia.mediaDetails.sizes &&
        this.content.featuredMedia.mediaDetails.sizes.mediumLarge &&
        this.content.featuredMedia.mediaDetails.sizes.mediumLarge.sourceUrl
        ? this.content.featuredMedia.mediaDetails.sizes.mediumLarge.sourceUrl
        : this.content.featuredMedia.sourceUrl;
    },
    imageAlt() {
      return this.content.featuredMedia.alt
        ? this.content.featuredMedia.alt
        : this.content.title;
    }
  }
};
