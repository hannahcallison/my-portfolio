var projectOne = document.getElementById("project-1")
var projectTwo = document.getElementById("project-2")
var projectThree = document.getElementById("project-3")

// Get the modal
var modalOne = document.getElementById("myModalOne");
var modalTwo = document.getElementById("myModalTwo");
var modalThree = document.getElementById("myModalThree");


// Get the <span> element that closes the modal
var spanOne = document.getElementsByClassName("close")[0];
var spanTwo = document.getElementById("spanTwo");
var spanThree = document.getElementById("spanThree");

// When the user clicks on the button, open the modal
projectOne.onclick = function () {
    modalOne.style.display = "block";
}

projectTwo.onclick = function () {
    modalTwo.style.display = "block";
}

projectThree.onclick = function () {
    modalThree.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
spanOne.onclick = function () {
    modalOne.style.display = "none";
}

spanTwo.onclick = function () {
    modalTwo.style.display = "none";
}

spanThree.onclick = function () {
    modalThree.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalOne) {
        modalOne.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modalTwo) {
        modalTwo.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modalThree) {
        modalThree.style.display = "none";
    }
}


