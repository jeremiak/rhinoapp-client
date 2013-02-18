
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
      var jsonModel = this.model.toJSON();
      jsonModel.allergies = this.getAllergies();;
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
      this.model.set(formData);
      this.model.save(null, {
        success: function(data) {
          R.main.navigate('product-search', {trigger: true});
        },
        error: function() {
          alert('There was an error connecting to the server');
        }
      });
    },

    getAllergies: function() {
      return [
        {
          name: 'cereal_allergy',
          display: 'Cereal Allergy',
          value: this.model.get('cereal_allergy')
        },
        {
          name: 'coconut_allergy',
          display: 'Coconut Allergy',
          value: this.model.get('coconut_allergy')
        },
        {
          name: 'corn_allergy',
          display: 'Corn Allergy',
          value: this.model.get('corn_allergy')
        },
        {
          name: 'egg_allergy',
          display:'Egg Allergy',
          value: this.model.get('egg_allergy')
        },
        {
          name: 'fish_allergy',
          display: 'Fish Allergy',
          value: this.model.get('fish_allergy')
        },
        {
          name: 'gluten_allergy',
          display: 'Gluten Allergy',
          value: this.model.get('gluten_allergy')
        },
        {
          name: 'lactose_allergy',
          display: 'Lactose Allergy',
          value: this.model.get('lactose_allergy')
        },
        {
          name: 'milk_allergy',
          display: 'Milk Allergy',
          value: this.model.get('milk_allergy')
        },
        {
          name: 'peanuts_allergy',
          display: 'Peanuts Allergy',
          value: this.model.get('peanuts_allergy')
        },
        {
          name: 'sesame_seed_allergy',
          display: 'Sesame Seed Allergy',
          value: this.model.get('sesame_seed_allergy')
        },
        {
          name: 'shellfish_allergy',
          display: 'Shellfish Allergy',
          value: this.model.get('shellfish_allergy')
        },
        {
          name: 'soybean_allergy',
          display: 'Soybean Allergy',
          value: this.model.get('soybean_allergy')
        },
        {
          name: 'sulfites_allergy',
          display: 'Sulfites Allergy',
          value: this.model.get('sulfites_allergy')
        },
        {
          name: 'tree_nut_allergy',
          display: 'Tree Nut Allergy',
          value: this.model.get('tree_nut_allergy')
        },
        {
          name: 'wheat_allergy',
          display: 'Wheat Allergy',
          value: this.model.get('wheat_allergy')
        }
      ];
    }

  });

})(R, _, $, Backbone);
