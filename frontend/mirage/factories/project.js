import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name() { return faker.company.companyName(); },
  description() { return faker.lorem.sentences(); },
  image() { return faker.internet.avatar(); },
  hashTag() { return faker.commerce.productAdjective(); },
  createdAt() { return faker.date.recent(); }
});
