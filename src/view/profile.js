
R.View = R.View || {};

(function(R, _, $, Backbone) {
  "use strict";

  R.View.Profile = Backbone.View.extend({
    FORM: '#profileUpdate',

    template: _.template(R.Template.Profile.Update),

    initialize: function() {
      _.bindAll('render');
    },

    events: {
      'click .submitForm': 'submit'
    },

    render: function() {
      console.log(this.model);
      var jsonModel = this.model.toJSON();
      jsonModel.allergies = this.allergies;
      this.compiledHTML = this.template(jsonModel);
      this.$el.html(this.compiledHTML);

      return this;
    },

    submit: function(ev) {
      ev.preventDefault();
      var self = this,
          formData = {};
      $.each(this.$('#personInput').serializeArray(), function(i, field) {
          formData[field.name] = field.value;
      });
    },

    allergies: [
      {
        name: 'cereal_allergy',
        display: 'Cereal Allergy'
      },
      {
        name: 'coconut_allergy',
        display: 'Coconut Allergy'
      },
      {
        name: 'corn_allergy',
        display: 'Corn Allergy'
      },
      {
        name: 'egg_allergy',
        display:'Egg Allergy'
      },
      {
        name: 'fish_allergy',
        display: 'Fish Allergy'
      },
      {
        name: 'gluten_allergy',
        display: 'Gluten Allergy'
      },
      {
        name: 'lactose_allergy',
        display: 'Lactose Allergy'
      },
      {
        name: 'milk_allergy',
        display: 'Milk Allergy'
      },
      {
        name: 'peanuts_allergy',
        display: 'Peanuts Allergy'
      },
      {
        name: 'sesame_seed_allergy',
        display: 'Sesame Seed Allergy'
      },
      {
        name: 'shellfish_allergy',
        display: 'Shellfish Allergy'
      },
      {
        name: 'soybean_allergy',
        display: 'Soybean Allergy'
      },
      {
        name: 'sulfites_allergy',
        display: 'Sulfites Allergy'
      },
      {
        name: 'tree_nut_allergy',
        display: 'Tree Nut Allergy'
      },
      {
        name: 'wheat_allergy',
        display: 'Wheat Allergy'
      }
    ]

  });

})(R, _, $, Backbone);
