
// let btn = document.querySelector(".the-btn");
// let thepopup = document.querySelector(".thepopup");

// btn.addEventListener("click", function(){
//     thepopup.classList.toggle("thepopup")
// })

// let themodal = document.querySelector(".modal-overlay");

// let modalbtn = document.querySelector(".modal-btn");
// let closebtn = document.querySelector(".close-btn");

// modalbtn.addEventListener("click", function(){
//     themodal.classList.add("open-modal")
// })

// closebtn.addEventListener("click", function(){
//     themodal.classList.remove("open-modal")
// })


const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});