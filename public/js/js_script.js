function MenuItem(name, kcal, lactose, gluten, veg, p) {
  this.Name = name;
  this.Lactose = lactose;
  this.Gluten = gluten;
  this.kCal = kcal;
  this.Vegetarian = veg;
  this.price = p;
}
var olive = new MenuItem('Olive Or Let Die', '665', true, true, false,'89  SEK');
var chive = new MenuItem('Baby You Can Chive My Car', '780', true, false, true,'79 SEK');
var kale = new MenuItem('If Looks Could Kale', '590', false, true, true,'69 SEK');


var txt = document.createTextNode(olive.Name);
var title = document.getElementById("olive-title");
title.appendChild(txt);


var burgers = [chive, kale];
for (i in burgers)
{
    var myElement = document.getElementById(burgers[i].Name);
    if (burgers[i].Vegetarian)
      {
        var listItem = document.createElement("li");
        var listValue = document.createTextNode("Vegetarian");
        listItem.appendChild(listValue);
        myElement.appendChild(listItem);
      }
      else{}
    if (burgers[i].Lactose)
    {
        var listItem = document.createElement("li");
        var listValue = document.createTextNode("Contains lactose");
        listItem.appendChild(listValue);
        myElement.appendChild(listItem);
    }

    if (burgers[i].Gluten)
    {
        var listItem = document.createElement("li");
        var listValue = document.createTextNode("Contains gluten");
        listItem.appendChild(listValue);
        myElement.appendChild(listItem);
    }
        var listItem = document.createElement("li");
        var listValue = document.createTextNode(burgers[i].kCal + ' kcal' );
        listItem.appendChild(listValue);
        myElement.appendChild(listItem);

        var listItem = document.createElement("li");
        var listValue = document.createTextNode(burgers[i].price);
        listItem.appendChild(listValue);
        myElement.appendChild(listItem);
  }

function getGender()
{
    var radioButtons = document.getElementsByName("g");
    for(var i = 0; i < radioButtons.length; i++)
    {
        if(radioButtons[i].checked == true)
        {
          return radioButtons[i].value;
        }
    }
}

function getBurgers(){
  var burgerOrder = "";
  var burgerInfo = document.getElementsByName("check");
  for(var i = 0; i < burgerInfo.length; i++){
    if(burgerInfo[i].checked == true){
      burgerOrder = burgerOrder + burgerInfo[i].value + ", ";
    }
  }
  return burgerOrder}

function getTextFields(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pay = document.getElementById("pay").value;
  var gender = getGender();
  return [name, email, pay, gender]
}
