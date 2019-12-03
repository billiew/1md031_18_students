
function MenuItem(name, kcal, lactose, gluten,veg,p) {
  this.Name = name;
  this.Lactose = lactose;
  this.Gluten = gluten;
  this.kCal = kcal;
  this.Vegetarian = veg;
  this.price = p;
}
var olive = new MenuItem('Olive Or Let Die', '665', true, true, false,'89  SEK');
var chive = new MenuItem('Baby You Can Chive My car', '780', true, false, true,'79 SEK');
var kale = new MenuItem('If Looks Could Kale', '590', false, true, true,'69 SEK');

var burgers = new Vue({
    el: '#Olive',
    data: {
      burgers: [{name: olive.Name, Veg: olive.Vegetarian, Lac: olive.Lactose,
        Glu: olive.Gluten, kcal: olive.kCal+' kcal', pri: olive.price}],
      vegetarian: "Vegetarian",
      lactose: "Contains lactose",
      gluten: "Contains gluten"
    }
  })

new Vue({
  el: '#myID',
  data: {
    arbitraryVariableName: 'Select your burger'
  }
})


var burgerInfo = new Vue({
  el: '#checkbox',
  data: {
    checked: []
  }
})
