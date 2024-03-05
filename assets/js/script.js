var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


$(function(){
// var titulo=$("h1");
// console.log(titulo);
$("h1").click(function() {
    $(this).css ("color","blueviolet")
 })
})