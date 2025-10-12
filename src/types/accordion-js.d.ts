declare module "accordion-js" {
  interface Options {
    duration?: number;

    showMultiple?: boolean;

    collapse?: boolean;

    openOnInit?: number[];

    [key: string]: any;
  }

  class Accordion {
    constructor(selector: string | Element, options?: Options);

    open(index: number): void;

    close(index: number): void;

    toggle(index: number): void;
  }

  export default Accordion;
}
