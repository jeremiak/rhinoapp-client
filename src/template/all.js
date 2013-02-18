
R.Template = R.Template || {};

R.Template.Profile = {
  Update: ' \
  <h2> Enter your information: </h2> \
  <form id="personInput" class="clearfix"> \
    <label>Current weight</label> \
    <div class="right"> \
      <input type="text" name="current_weight" /><%= current_weight %> \
        <span> lbs.</span> \
    </div> \
    <label>Goal weight</label> \
    <div class="right"> \
      <input type="text" name="goal_weight" /><%= goal_weight %> \
        <span> lbs.</span><br> \
    </div> \
    <label>Weeks until goal</label> \
    <div class="right"> \
      <input type="text" name="weeks_to_goal" /><%= weeks_to_goal %> \
        <span> weeks</span><br> \
    </div> \
    <label>Age</label> \
    <div class="right"> \
      <input type="text" name="age" /><%= age %><span> yrs</span><br> \
    </div> \
    <label>Height</label> \
    <div class="right"> \
      <input type="text" name="height" /><%= height %><span> inches</span><br> \
    </div> \
    <label>Gender</label> \
    <div class="right"> \
      <select name="gender"> \
        <option value="male" <% (gender === "male") ? print("selected") : print(""); %> >Male</option> \
        <option value="female" <% (gender === "female") ? print("selected") : print(""); %> >Female</option> \
      </select> \
    </div> \
    <label>Activity Level</label> \
    <div class="right"> \
      <select name="activity_level"> \
        <option value="sedentary" <% (activity_level === "sedentary") ? print("selected") : print(""); %> >Sedentary</option> \
        <option value="lightly_active" <% (activity_level === "lightly_active") ? print("selected") : print(""); %>>Ligtly Active</option> \
        <option value="moderately_active" <% (activity_level === "moderately_active") ? print("selected") : print(""); %> >Moderately Active</option> \
        <option value="very_active" <% (activity_level === "very_active") ? print("selected") : print(""); %> >Very Active</option> \
      </select> \
    </div> \
    <% _.each(allergies, function(allergy) { %> \
      <label><%= allergy.display %></label> \
      <div class="right"> \
        <select name="<%= allergy.name %>"> \
          <option value="yes" <% (allergy.value === "yes") ? print("selected") : print(""); %> >Yes</option> \
          <option value="no" <% (allergy.value === "no") ? print("selected") : print(""); %> >No</option> \
        </select> \
      </div> \
    <% }); %> \
    <div class="centered"> \
      <a href="#" class="button submitForm">start</a> \
    </div> \
  </form> \
  '
};

R.Template.Product = {
  Search: ' \
  <h2>Find a product: </h2> \
  <form id="productSearch" class="clearfix"> \
    <label>Product UPC</label> \
    <div class="right"> \
      <input style="width:150px;" type="text" name="upc" /><span></span> \
    </div> \
    <div class="centered"> \
      <a href="#" class="button submitForm">start</a> \
    </div> \
  </form> \
  '
};
