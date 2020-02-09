import LazyImage from '../LazyImage';
import '@gouch/to-title-case';

export default {
  components: {
    LazyImage
  },
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
    title() {
      return this.content.title.toTitleCase();
    },
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
    },
    featuredImage() {
      if (!this.content.featuredMedia) {
        return null;
      }
      const featuredImageMetadata = this.content.featuredMedia.mediaDetails;
      return {
        src: this.imageSrc,
        width: featuredImageMetadata.width,
        height: featuredImageMetadata.height,
        alt: this.imageAlt,
        //lqip: featuredImageMetadata ? featuredImageMetadata.lqip : null
        //bgcolor: featuredImageMetadata ? featuredImageMetadata.palette.muted.background : null
      };
    }
  }
};
