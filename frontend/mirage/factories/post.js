import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  body() { return faker.lipsum.sentence(); },
  avatar() { return faker.internet.avatar(); },
  createdAt() { return faker.date.recent(); }
});
