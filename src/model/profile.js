
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
      gender: 'male',
      activity_level: 'sedentary',
      cereal_allergy: 'no',
      coconut_allergy: 'no',
      corn_allergy: 'no',
      egg_allergy: 'no',
      fish_allergy: 'no',
      gluten_allergy: 'no',
      lactose_allergy: 'no',
      milk_allergy: 'no',
      peanuts_allergy: 'no',
      sesame_seed_allergy: 'no',
      shellfish_allergy: 'no',
      soybean_allergy: 'no',
      sulfites_allergy: 'no',
      tree_nut_allergy: 'no',
      wheat_allergy: 'no'
    },

    save: function(attrs, options) {
      if (attrs) {
        this.set(attrs);
      }

      for (attr in attrs) {
        window.localStorage.setItem(attr, this.get(attr));
      }

      Backbone.sync('update', this, {
        success: function(res) {
          this.set('daily_calorie_limit', res.daily_calorie_limit);
          options.success();
        },
        error: function() {
          options.error();
        }
      });
    }
  });

})(R, _, $, Backbone);