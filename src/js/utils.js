// Factory pattern
class DomElementsFactory {
  constructor() {
    this.tag = '';
  }
  create(optionsObject) {
    const element = document.createElement(this.tag);
    if (optionsObject) {
      const attributes = Object.keys(optionsObject);
      attributes.forEach((attr) => element.setAttribute(attr, optionsObject[attr]));
    }
    return element;
  }
}

// Prototype pattern
const factoryPrototype = new DomElementsFactory();

export const articleFactory = Object.create(factoryPrototype);
articleFactory.tag = 'article';

// Decorator pattern
class FactoryDecorator extends DomElementsFactory {
  constructor(domElementsFactory) {
    super();
    this.domElementsFactory = domElementsFactory;
  }
  create(optionsObject) {
    return this.domElementsFactory.create(optionsObject);
  }
}

export class LoggerDecorator extends FactoryDecorator {
  constructor(domElementsFactory) {
    super(domElementsFactory);
  }
  create(optionsObject) {
    console.info('Element created!');
    return super.create(optionsObject);
  }
}