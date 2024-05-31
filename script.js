// Get the button
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ----------------------------------------------------------------------------
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("img-to-modal");
var modalImg = document.getElementById("img01");

document.querySelectorAll(".img-to-modal").forEach((element) => {
  element.addEventListener("click", () => {
    modal.style.display = "block";
    // modalImg.src = this.src;
    modalImg.src = element.src;
  });
});

// ----------------------------------------------------------------------------
// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");

// // var captionText = document.getElementById("caption");
// img.onclick = function () {
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   // captionText.innerHTML = this.alt;
// };

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// ----------------------------------------------------------------------------
