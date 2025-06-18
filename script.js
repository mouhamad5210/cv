// Get the modal element
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("img01");

// Function to open the modal
function openModal(element) {
    modal.style.display = "block";
    modalImg.src = element.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the image, close the modal
modal.onclick = function(event) {
    // Check if the clicked area is the dark background itself (the modal)
    // and not the image or the close button
    if (event.target == modal) {
        modal.style.display = "none";
    }
}