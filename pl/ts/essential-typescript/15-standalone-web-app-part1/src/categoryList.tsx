import { createElement } from './tools/jsxFactory';

export class CategoryList {
  props: {
    categories: string[];
    selectedCategory: string;
    callback: (selected: string) => void;
  };

  getContent(): HTMLElement {
    return (
      <div>
        {['ALL', ...this.props.categories].map((category) =>
          this.getCategoryButton(category)
        )}
      </div>
    );
  }

  getCategoryButton(category?: string): HTMLElement {
    let selected =
      this.props.selectedCategory === undefined
        ? 'ALL'
        : this.props.selectedCategory;
    let btnClass = selected === category ? 'btn-primary' : 'btn-secondary';
    return (
      <button
        className={`btn btn-block ${btnClass}`}
        onclick={() => this.props.callback(category)}
      >
        {category}
      </button>
    );
  }
}
