R.Router = R.Router || {};

(function(R, _, $, Backbone) {
  'use strict';

  R.Router.Main = Backbone.Router.extend({

    routes: {
      'login': 'login',
      'profile': 'updateProfilePage',
      'person-input': 'personInput',
      'person-input?*path': 'personInput',
      'product-search': 'productSearch',
      'product-page': 'productPage',
      '*path':  'start'
    },

    initialize: function() {
      var self = this;
      this.productModel = new R.Model.Product();
      this.bind('product-search-page', function() {
        self.navigate('product-search', {trigger: true});
      });
      this.bind('product-page', function() {
        self.navigate('product-page', {trigger: true});

      });
    },

    start: function() {
      var self = this;
      var sid = window.localStorage.getItem('sid');
      if(sid === null) {
        var url = 'http://pacific-eyrie-4115.herokuapp.com/create_food_api_session?uid=rhino_user&devid=rhino_device';        
        $.ajax({
           url: url,
               type: 'GET',
               success: function(data) {
                  console.log('session id successfully returned: ' + data)
                  self.profileModel = new R.Model.Profile({
                    sessionId: data.session_id
                  });
                  self.navigate('profile', {trigger: true});
               },
               error: function(data) {
                 window.alert('Could not connect to server, try again later');
               }
            });
      } else {
        self.profileModel = new R.Model.Profile({
          sessionId: data.session_id
        });
        this.navigate('product-search', {trigger: true});
      }
    },

    updateProfilePage: function() {
      $(R.Const.MAIN).empty();
      var profilePage = new R.Vew.Profile();

      $(R.Const.MAIN).append(profilePage.render().el);
    },


    productSearch: function() {
      $(R.Const.MAIN).empty();
      var productSearchView = new R.View.ProductSearch({
        model: this.productModel
      });
      $(R.Const.MAIN).append(productSearchView.render().el);
    },

    productPage: function() {
      $(R.Const.MAIN).empty();
      var productView = new R.View.Product({model: this.productModel});
      $(R.Const.MAIN).append(productView.render().el);
    }
  });

  $.url = function(name){
    var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
    if (results) {
      return results[1] || 0;
    } else { return 0; }
  }

  R.main = new R.Router.Main();
  Backbone.history.start({root: 'index.html'});

})(R, _, $, Backbone);
