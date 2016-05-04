import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  body() { return faker.lorem.sentence(); },
  image() { return faker.internet.avatar(); },
  createdAt() { return faker.date.recent(90); }
});
