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
    imageSrc() {
      let src = null;
      if (this.content.featuredMedia) {
        src =
          this.content.featuredMedia.mediaDetails.sizes &&
          this.content.featuredMedia.mediaDetails.sizes.mediumLarge &&
          this.content.featuredMedia.mediaDetails.sizes.mediumLarge.sourceUrl
            ? this.content.featuredMedia.mediaDetails.sizes.mediumLarge
                .sourceUrl
            : this.content.featuredMedia.sourceUrl;
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
      let metadata = {};
      if (this.content.featuredMedia) {
        metadata = this.content.featuredMedia.mediaDetails;
      } else if (this.content.images) {
        const image = this.content.images[1] || this.content.images[0];
        metadata = {
          width: image.full_width,
          height: image.full_height
        };
        console.log(image);
      }
      return {
        src: this.imageSrc,
        width: metadata.width,
        height: metadata.height,
        alt: this.imageAlt
      };
    }
  }
};
