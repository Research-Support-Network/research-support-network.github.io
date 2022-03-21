const Shuffle = window.Shuffle;

class Demo {
  constructor(element) {
    this.element = element;
    this.initShuffle();
    this.setupEvents();
    this.addSearchFilter();
    this.sortBy('random');
  }

  // Column width and gutter width options can be functions
  initShuffle() {
    this.shuffle = new Shuffle(this.element, {
      itemSelector: '.picture-item',
      speed: 250,
      easing: 'ease',
    });
  }

  setupEvents() {
    this.shuffle.element.addEventListener('click', this.onContainerClick.bind(this));

    // Show off some shuffle events
    this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
      console.log(data);
    });
  }

  sortBy(value) {
    let sortOptions;

    if (value === 'random') {
      sortOptions = { randomize: true };
    } else {
      sortOptions = {};
    }

    // Filter elements
    this.shuffle.sort(sortOptions);
  }

  addSearchFilter() {
    const searchInput = document.querySelector('.js-shuffle-search');
    if (!searchInput) {
      return;
    }
    searchInput.addEventListener('keyup', this._handleSearchKeyup.bind(this));
  }

  /**
   * Remove a shuffle item when it's clicked.
   * @param {Object} event Event object.
   */
  onContainerClick(event) {
    // Bail in older browsers. https://caniuse.com/#feat=element-closest
    if (typeof event.target.closest !== 'function') {
      return;
    }

    const element = event.target.closest('.card');
    if (element !== null) {
      this.shuffle.remove([element]);
    }
  }

  /**
   * Filter the shuffle instance by items with a title that matches the search input.
   * @param {Event} evt Event object.
   */
  _handleSearchKeyup(evt) {
    const searchText = evt.target.value.toLowerCase();
    this.shuffle.filter((element, shuffle) => {
      // If there is a current filter applied, ignore elements that don't match it.
      if (shuffle.group !== Shuffle.ALL_ITEMS) {
        // Get the item's groups.
        const groups = JSON.parse(element.getAttribute('data-groups'));
        const isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;
        // Only search elements in the current group
        if (!isElementInCurrentGroup) {
          return false;
        }
      }

      const titleText = element.getAttribute('data-title').toLowerCase().trim();
      return titleText.indexOf(searchText) !== -1;
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.demo = new Demo(document.getElementById('deck'));
});
