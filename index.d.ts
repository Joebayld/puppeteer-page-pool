export = PagePool;

declare class PagePool {
  constructor(options?: PagePool.PagePoolOptions);

  async launch: void;

  async destroy: null;

  async process(callback: (page, data) => {}, args): void
}

declare namespace PagePool {
  export interface PagePoolOptions {
    poolOptions?: {

    }
    puppeteer?: any
    puppeteerOptions?: {

    }
    async onPageDestroy? (page)
    async onPageCreated? (page)
    async onValidate? (page)
  }
}
