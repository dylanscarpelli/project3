$(document).ready(function(){

  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("submitBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var mR = "M.";



// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  if(document.getElementById('title_1').checked)
  {
    mR = "M."
  }
  else {
    mR = "Ms.";
  }
  $("#myModal .modal-content").text('Thanks for your purchase '+ mR + ' ' +$("#name").val());
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






  // $("button").click(function(){
  //   alert("Value: " + $("#number").val());
  // });
});
