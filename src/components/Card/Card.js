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
    },
    renderTextContent: {
      type: Boolean,
      default: true
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
