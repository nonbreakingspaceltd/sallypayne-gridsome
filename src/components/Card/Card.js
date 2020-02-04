export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  computed: {
    imagePadding() {
      return this.content.featuredMedia ? (this.content.featuredMedia.mediaDetails.height / this.content.featuredMedia.mediaDetails.width) * 100 : 0;
    }
  }
};
