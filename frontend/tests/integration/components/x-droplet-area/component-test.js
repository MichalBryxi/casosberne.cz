import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-droplet-area', 'Integration | Component | x droplet area', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{x-droplet-area}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#x-droplet-area}}
      template block text
    {{/x-droplet-area}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
