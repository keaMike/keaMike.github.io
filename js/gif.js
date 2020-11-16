// Get the modal
const modal = document.getElementById('modal');
const modalImg = $("#modal-gif");
const modalBody = $("#modal-body");
let body;

// When gif is clicked
$('.gif').click(function(){
  // Get gif id, which contains id for the body
  let classid = ('.' + this.id);
  // Select the body
  body = document.querySelector(classid);
  // Set the gif src to the modal src
  let newSrc = this.src;
  // Append new content
  modalBody.append(body);
  // Set new src
  modalImg.attr('src', newSrc);
  // Show modal and body
  modal.style.display = "block";
  body.style.display = "unset";
});

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
  body.style.display = "none";
}
