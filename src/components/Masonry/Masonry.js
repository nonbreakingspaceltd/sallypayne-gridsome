import Card from '~/components/Card';
import classNames from 'classnames';

export default {
  components: {
    Card
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    cardProps: {
      type: Object,
      default: {}
    },
    calculateRows: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      masonryEvents: ['load', 'resize'],
      classNames: {
        container: 'sp-c-masonry',
        item: 'sp-c-masonry__item',
        content: 'sp-c-masonry__item__content'
      },
      isActive: false
    };
  },
  watch: {
    items() {
      const vm = this;
      vm.$nextTick(() => {
        vm.resizeAllMasonryItems();
      });
    }
  },
  computed: {
    containerClassNames() {
      return classNames(
        this.classNames.container,
        { 'is-active': this.isActive },
        { 'is-calculated': this.calculateRows }
      );
    }
  },
  methods: {
    resizeMasonryItem(item) {
      const rowHeight = parseInt(
        window.getComputedStyle(this.$el).getPropertyValue('grid-auto-rows')
      );
      const rowGap = parseInt(
        window.getComputedStyle(this.$el).getPropertyValue('grid-row-gap')
      );
      const rowSpan = Math.ceil(
        (item
          .querySelector(`.${this.classNames.content}`)
          .getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );
      item.style.gridRowEnd = `span ${rowSpan}`;
    },
    resizeAllMasonryItems() {
      if (!this.calculateRows) {
        return;
      }
      var allItems = this.$el.querySelectorAll(`.${this.classNames.item}`);
      allItems.forEach(item => {
        this.resizeMasonryItem(item);
      });
    }
  },
  beforeMount() {
    const vm = this;
    vm.masonryEvents.forEach(event => {
      window.addEventListener(event, vm.resizeAllMasonryItems);
    });
  },
  mounted() {
    this.isActive = true;
    this.resizeAllMasonryItems();
    window.dispatchEvent(new Event('resize'));
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
