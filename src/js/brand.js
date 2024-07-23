const block = document.getElementById('border');
const first = document.getElementById('name');
const lastName = document.getElementById('last');
const bg = document.getElementById('back');

block.addEventListener('mouseover', () => {
   block.classList.add('brand__border_active');
   first.classList.add('brand__first_active');
   bg.classList.add('brand__lastBack_active');
   lastName.classList.add('brand__k_active');
   
});
block.addEventListener('mouseout', () => {
   block.classList.remove('brand__border_active');
   first.classList.remove('brand__first_active');
   bg.classList.remove('brand__lastBack_active');
   lastName.classList.remove('brand__k_active');
});

//$("#border").mouseover(function () {
//   $("#border").addClass("brand__border_active")
//});

//function changeClass() {
//    document.getElementById("border").className = "brand__border_active";
//}
//function change() {
//   document.getElementById("border").addClass = "brand__border_active";
//};
//$("#border").mouseover(function(){
//   $("#border").addClass("brand__border_active");
//})
console.log(2);

