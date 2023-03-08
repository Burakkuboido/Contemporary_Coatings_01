filterSelection("all");
function filterSelection(c) {
  var x = i;
    x = document.getElementsByClassName("column");
  if (c == "all") {
    c = "";
  }
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 51.14027671951293, lng: 0.8386892717134317 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;






  let width = screen.width;

// Get the Navigation Bar
let navBar = document.getElementById("navBar");

// When the user scrolls down 20px from the top of the document, hide the Navigation Bar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navBar.style.opacity = "0.1";
    navBar.style.transition = "1000ms"
  } else {
    navBar.style.opacity = "1";
  }
}



// When the user moves the mouse onto the navigation bar, show the Navigation Bar
function highOpacity(x) {
  x.style.opacity = "1";
}

// If the user moves their mouse away from the navigation bar AND they are not at the top of the page, hide the Navigation Bar
function lowOpacity(x) {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  x.style.opacity = "0.1";
  }
}


// The code below was taken from https://www.w3schools.com/howto/howto_js_lightbox.asp.

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// function to calculate the result of the survey
function tabulateAnswers() {
  // initialize variables for each choice's score
  var a1score = 0;
  var a2score = 0;
  var a3score = 0;
  var a4score = 0;

  var b1score = 0;
  var b2score = 0;
  var b3score = 0;
  var b4score = 0;

  var c1score = 0;
  var c2score = 0;
  var c3score = 0;
  var c4score = 0;

  
  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<=3; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'a1') {
        a1score = a1score + 1;
      }
      if (choices[i].value == 'a2') {
        a2score = a2score + 1;
      }
      if (choices[i].value == 'a3') {
        a3score = a3score + 1;
      }
      if (choices[i].value == 'a4') {
        a4score = a4score + 1;
      }
    }
  }

  for (i=4; i<=7; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'b1') {
        b1score = b1score + 1;
      }
      if (choices[i].value == 'b2') {
        b2score = b2score + 1;
      }
      if (choices[i].value == 'b3') {
        b3score = b3score + 1;
      }
      if (choices[i].value == 'b4') {
        b4score = b4score + 1;
      }
    }
  }

  for (i=7; i<=10; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'c1') {
        c1score = c1score + 1;
      }
      if (choices[i].value == 'c2') {
        c2score = c2score + 1;
      }
      if (choices[i].value == 'c3') {
        c3score = c3score + 1;
      }
      if (choices[i].value == 'c4') {
        c4score = c4score + 1;
      }
    }
  }
  
  // Find out which choice got the highest score.
  var maxscore = Math.max(a1score,a2score,a3score,a4score);
  var q1a1 = document.getElementById("firstAnswer").innerHTML;
  var q1a2 = document.getElementById("secondAnswer").innerHTML;
  var q1a3 = document.getElementById("thirdAnswer").innerHTML;
  var q1a4 = document.getElementById("fourthAnswer").innerHTML;

  var maxscore1 = Math.max(b1score,b2score,b3score,b4score);
  var q2a1 = document.getElementById("q2FirstAnswer").innerHTML;
  var q2a2 = document.getElementById("q2SecondAnswer").innerHTML;
  var q2a3 = document.getElementById("q2ThirdAnswer").innerHTML;
  var q2a4 = document.getElementById("q2FourthAnswer").innerHTML;

  var maxscore2 = Math.max(c1score,c2score,c3score,c4score);
  var q3a1 = document.getElementById("q3FirstAnswer").innerHTML;
  var q3a2 = document.getElementById("q3SecondAnswer").innerHTML;
  var q3a3 = document.getElementById("q3ThirdAnswer").innerHTML;
  var q3a4 = document.getElementById("q3FourthAnswer").innerHTML;
  
  // Display answer corresponding to that choice
  var answerbox = document.getElementById('answer');
  if (a1score == maxscore) { // If user chooses the first choice, this outcome will be displayed.
    var q1answer = q1a1;
  }
  if (a2score == maxscore) { // If user chooses the second choice, this outcome will be displayed.
    var q1answer = q1a2;
  }
  if (a3score == maxscore) { // If user chooses the third choice, this outcome will be displayed.
    var q1answer = q1a3;
  }
  if (a4score == maxscore) { // If user chooses the fourth choice, this outcome will be displayed.
    var q1answer = q1a4;
  }

  if (b1score == maxscore1) { // If user chooses the first choice, this outcome will be displayed.
    var q2answer = q2a1;
  }
  if (b2score == maxscore1) { // If user chooses the second choice, this outcome will be displayed.
    var q2answer = q2a2;
  }
  if (b3score == maxscore1) { // If user chooses the third choice, this outcome will be displayed.
    var q2answer = q2a3;
  }
  if (b4score == maxscore1) { // If user chooses the fourth choice, this outcome will be displayed.
    var q2answer = q2a4;
  }

  if (c1score == maxscore2) { // If user chooses the first choice, this outcome will be displayed.
    var q3answer = q3a1;
  }
  if (c2score == maxscore2) { // If user chooses the second choice, this outcome will be displayed.
    var q3answer = q3a2;
  }
  if (c3score == maxscore2) { // If user chooses the third choice, this outcome will be displayed.
    var q3answer = q3a3;
  }
  if (c4score == maxscore2) { // If user chooses the fourth choice, this outcome will be displayed.
    var q3answer = q3a4;
  }

  answerbox.innerHTML = "<b>You have chosen the following:<br></b>" + q1answer + "<br>" + q2answer + "<br>" + q3answer;

  event.preventDefault();
  event.stopPropagation();
}


// program the reset button
function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Your result will show up here!";
}