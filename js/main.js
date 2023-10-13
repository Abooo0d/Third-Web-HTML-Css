// Adding Click Event On The OtherLinks button
//Creating The li & megamnue variables
let listButton = document.querySelector(".mega");
let megaMenu = document.querySelector(".mega-menu");
//Creating The Event To The ListItem
listButton.onclick = function () {

  megaMenu.classList.toggle("menu-active");
  megaMenu.classList.toggle("menu-disapled");

};
