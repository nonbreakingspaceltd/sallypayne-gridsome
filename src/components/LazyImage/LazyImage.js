import lozad from 'lozad';

export default {
  name: 'LazyImage',
  props: {
    image: {
      type: Object,
      default: {
        src: {
          type: String,
          default: ''
        },
        alt: {
          type: String,
          default: ''
        },
        width: {
          type: Number,
          default: 100
        },
        height: {
          type: Number,
          default: 100
        },
        lqip: {
          type: String,
          default: null
        },
        bgcolor: {
          type: String,
          default: '#D7D7D7'
        }
      }
    }
  },
  data() {
    return {
      loading: false,
      loaded: false,
      blankImage:
        'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
      isLazy: false
    };
  },
  computed: {
    lqip() {
      return this.image.lqip ? this.image.lqip : this.blankImage;
    },
    aspectRatio() {
      return (this.image.height / this.image.width) * 100;
    },
    style() {
      return {
        paddingTop: `${this.aspectRatio}%`,
        backgroundColor: `${this.image.bgcolor}`
      };
    }
  },
  methods: {
    lazyLoadImage() {
      const vm = this;
      vm.isLazy = true;
      console.log('image', vm.$refs.image);
      this.loading = true;
      const observer = lozad(vm.$refs.image, {
        loaded: () => {
          vm.loaded = true;
        }
      });
      observer.observe();
    },
  },
  mounted() {
    const vm = this;
    if (window.caches) {
      window.caches
        .match(vm.image.src, {
          ignoreSearch: true,
          ignoreMethod: true,
          ignoreVary: true
        })
        .then(response => {
          if (response) {
            vm.$refs.image.setAttribute('src', vm.image.src);
            vm.loaded = true;
          } else {
            vm.lazyLoadImage();
          }
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      vm.lazyLoadImage();
    }
  },
};
