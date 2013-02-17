
R.Model = R.Model || {};

(function(R, _, $, Backbone) {
  "use strict";

  R.Model.Profile = Backbone.Model.extend({
    initialize: function() {
      window.localStorage.setItem('sid', this.get('sessionId'));
    },

    defaults: {

    },

    save: function(attrs, options) {
      this.set(attrs);

    }
  });

})(R, _, $, Backbone);