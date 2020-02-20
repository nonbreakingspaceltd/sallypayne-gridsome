import '@gouch/to-title-case';

export default {
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
  data: () => ({
    blankImg:
      'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
  }),
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
    mediaPadding() {
      return `padding-top: ${(this.featuredImage.height /
        this.featuredImage.width) *
        100}%;`;
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
    lqip() {
      let image = this.blankImg;
      if (this.content.lqip) {
        image = this.content.lqip;
      } else if (this.content.images && this.content.images[0].lqip) {
        image = this.content.images[1].lqip || this.content.images[0].lqip;
      }
      return image;
    },
    featuredImage() {
      let metadata = {
        width: 1,
        height: 1
      };
      let image;
      if (this.content.featuredMedia) {
        image;
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
        image = this.content.images[1] || this.content.images[0];
        metadata = {
          width: image.full_width,
          height: image.full_height
        };
      }
      const imageObj = {
        src: this.imageSrc,
        width: metadata.width,
        height: metadata.height,
        alt: this.imageAlt,
        dataUri: this.lqip,
        size: { width: '100%' },
        srcset: [this.imageSrc]
      };
      return imageObj;
    }
  }
};
