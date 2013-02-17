
R.Model = R.Model || {};

(function(R, _, $, Backbone) {
  "use strict";

  R.Model.Profile = Backbone.Model.extend({
    initialize: function() {
      window.localStorage.setItem('sid', this.get('sessionId'));
      for (var key in localStorage) {
        this.set(key, window.localStorage.getItem(key));
      }
    },

    defaults: {
      current_weight: '',
      goal_weight: '',
      age: '',
      height: '',
      weeks_to_goal: '',
      gender: '',
      activity_level: ''
    },

    save: function(attrs, options) {
      this.set(attrs);

    }
  });

})(R, _, $, Backbone);