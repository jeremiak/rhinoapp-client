
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

    url: R.Const.SERVER + '/set_profile',

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

      for (attr in attrs) {
        window.localStorage.setItem(attr, this.get(attr));
      }

      Backbone.sync('update', this, {
        success: function(res) {
          this.set('daily_calorie_limit', res.daily_calorie_limit);
        },
        error: function() {
          options.error();
        }
      });
    }
  });

})(R, _, $, Backbone);