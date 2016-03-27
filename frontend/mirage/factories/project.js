import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name() { return faker.company.name(); },
  description() { return faker.commerce.productName(); },
  image() { return faker.internet.avatar(); },
  hashTag() { return faker.commerce.productAdjective(); },
  createdAt() { return faker.date.recent(); }
});
