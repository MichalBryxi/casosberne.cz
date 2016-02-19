import DS from 'ember-data';
// import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/v1',
  host: config.APP.SERVER
  // authorizer: 'authorizer:devise'
});
