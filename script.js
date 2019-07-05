//Collapsible Section code
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// var loc = [
//   {name: "dhaka"},
//   {name: "chittagong"},
//   {name: "sylhet"},
//   {name: "barisal"},
//   {name: "rajshahi"},
//   {name: "khulna"},
//   {name: "rangpur"},
//   {name: "mymensingh"},
// ];

$(document).ready(function(){
  $("select.district").change(function(){
      var selectedDistrict = $(this).children("option:selected").val();
      //alert("You have selected the district - " + selectedDistrict);
      console.log(selectedDistrict)
  });
});