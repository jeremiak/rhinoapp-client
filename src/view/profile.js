
R.View = R.View || {};

(function(R, _, $, Backbone) {
  "use strict";

  R.View.Profile = Backbone.View.extend({
    FORM: '#profileUpdate',

    template: _.template(R.Template.Profile.Update),

    initialize: function() {
      _.bindAll('render');
      console.log(this.model);
    },

    events: {
      'click .submitForm': 'submit'
    },

    render: function() {
      this.compiledHTML = this.template(this.model.toJSON());
      this.$el.html(this.compiledHTML);

      return this;
    },

    submit: function(ev) {
      ev.preventDefault();
      var self = this;
      var formData = {};
      $.each(this.$('#personInput').serializeArray(), function(i, field) {
          formData[field.name] = field.value;
      });
      formData['session_id'] = window.localStorage.getItem('sid');
      $.ajax({
        url: 'http://pacific-eyrie-4115.herokuapp.com/daily_limit',
        data: formData,
        type: 'POST',
        success: function(data) {
          var dailyLimit = data['limit'];
          $.totalStorage( 'limit', dailyLimit);
          R.main.trigger('product-search-page');
        }
      });
    }

  });

})(R, _, $, Backbone);
