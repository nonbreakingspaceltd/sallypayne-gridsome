import Card from '~/components/Card';
import imagesLoaded from 'imagesloaded';

export default {
  components: {
    Card
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    cardModifier: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      masonryEvents: ['load', 'resize'],
      classNames: {
        container: 'sp-c-masonry',
        item: 'sp-c-masonry__item',
        content: 'sp-c-masonry__item__content'
      }
    };
  },
  methods: {
    resizeMasonryItem(item) {
      var grid = this.$el,
        rowGap = parseInt(
          window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
        ),
        rowHeight = parseInt(
          window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
        );
      var rowSpan = Math.ceil(
        (item
          .querySelector(`.${this.classNames.content}`)
          .getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );
      item.style.gridRowEnd = 'span ' + rowSpan;
    },
    resizeAllMasonryItems() {
      var allItems = this.$el.querySelectorAll(`.${this.classNames.item}`);
      allItems.forEach(item => {
        this.resizeMasonryItem(item);
      });
    },
    waitForImages() {
      var allItems = this.$el.querySelectorAll(`.${this.classNames.item}`);
      allItems.forEach(item => {
        imagesLoaded(item, instance => {
          this.resizeMasonryItem(instance.elements[0]);
        });
      });
    }
  },
  mounted() {
    const vm = this;
    this.masonryEvents.forEach(event => {
      window.addEventListener(event, vm.resizeAllMasonryItems);
    });
    vm.resizeAllMasonryItems();
  },
  beforeDestroy() {
    const vm = this;
    if (process.isClient) {
      vm.masonryEvents.forEach(event => {
        window.removeEventListener(event, vm.resizeAllMasonryItems);
      });
    }
  }
};
