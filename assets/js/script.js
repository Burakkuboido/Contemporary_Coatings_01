let galleryImage01 = document.getElementById("galleryImages01");
let galleryImage02 = document.getElementById("galleryImages02");
let galleryImage03 = document.getElementById("galleryImages03");
let galleryImage04 = document.getElementById("galleryImages04");
let galleryImage05 = document.getElementById("galleryImages05"); 
let galleryImage06 = document.getElementById("galleryImages06"); 
let galleryImage07 = document.getElementById("galleryImages07"); 
let galleryImage08 = document.getElementById("galleryImages08"); 
let galleryImage09 = document.getElementById("galleryImages09"); 
let galleryImage10 = document.getElementById("galleryImages10"); 
let galleryImage11 = document.getElementById("galleryImages11"); 
let galleryImage12 = document.getElementById("galleryImages12"); 
let galleryImage13 = document.getElementById("galleryImages13"); 
let galleryImage14 = document.getElementById("galleryImages14"); 
let galleryImage15 = document.getElementById("galleryImages15"); 

function showImages() {
    galleryImage01.style.display = "inline";
    galleryImage02.style.display = "inline";
    galleryImage03.style.display = "inline";
    galleryImage04.style.display = "inline";
    galleryImage05.style.display = "inline";
    galleryImage06.style.display = "inline";
    galleryImage07.style.display = "inline";
    galleryImage08.style.display = "inline";
    galleryImage09.style.display = "inline";
    galleryImage10.style.display = "inline";
    galleryImage11.style.display = "inline";
    galleryImage12.style.display = "inline";
    galleryImage13.style.display = "inline";
    galleryImage14.style.display = "inline";
    galleryImage15.style.display = "inline";
    }

function showInterior(){
    galleryImage01.style.display = "inline";
    galleryImage02.style.display = "inline";
    galleryImage03.style.display = "inline";
    galleryImage04.style.display = "none";
    galleryImage05.style.display = "none";
    galleryImage06.style.display = "none";
    galleryImage07.style.display = "none";
    galleryImage08.style.display = "none";
    galleryImage09.style.display = "none";
    galleryImage10.style.display = "none";
    galleryImage11.style.display = "none";
    galleryImage12.style.display = "none";
    galleryImage13.style.display = "none";
    galleryImage14.style.display = "none";
    galleryImage15.style.display = "none";
}

function showExterior(){
    galleryImage01.style.display = "none";
    galleryImage02.style.display = "none";
    galleryImage03.style.display = "none";
    galleryImage04.style.display = "inline";
    galleryImage05.style.display = "inline";
    galleryImage06.style.display = "inline";
    galleryImage07.style.display = "none";
    galleryImage08.style.display = "none";
    galleryImage09.style.display = "none";
    galleryImage10.style.display = "none";
    galleryImage11.style.display = "none";
    galleryImage12.style.display = "none";
    galleryImage13.style.display = "none";
    galleryImage14.style.display = "none";
    galleryImage15.style.display = "none";
}

function showFurniture(){
    galleryImage01.style.display = "none";
    galleryImage02.style.display = "none";
    galleryImage03.style.display = "none";
    galleryImage04.style.display = "none";
    galleryImage05.style.display = "none";
    galleryImage06.style.display = "none";
    galleryImage07.style.display = "inline";
    galleryImage08.style.display = "inline";
    galleryImage09.style.display = "inline";
    galleryImage10.style.display = "none";
    galleryImage11.style.display = "none";
    galleryImage12.style.display = "none";
    galleryImage13.style.display = "none";
    galleryImage14.style.display = "none";
    galleryImage15.style.display = "none";
}

function showSpraying(){
    galleryImage01.style.display = "none";
    galleryImage02.style.display = "none";
    galleryImage03.style.display = "none";
    galleryImage04.style.display = "none";
    galleryImage05.style.display = "none";
    galleryImage06.style.display = "none";
    galleryImage07.style.display = "none";
    galleryImage08.style.display = "none";
    galleryImage09.style.display = "none";
    galleryImage10.style.display = "inline";
    galleryImage11.style.display = "inline";
    galleryImage12.style.display = "inline";
    galleryImage13.style.display = "none";
    galleryImage14.style.display = "none";
    galleryImage15.style.display = "none";
}

function showWallpapering(){
    galleryImage01.style.display = "none";
    galleryImage02.style.display = "none";
    galleryImage03.style.display = "none";
    galleryImage04.style.display = "none";
    galleryImage05.style.display = "none";
    galleryImage06.style.display = "none";
    galleryImage07.style.display = "none";
    galleryImage08.style.display = "none";
    galleryImage09.style.display = "none";
    galleryImage10.style.display = "none";
    galleryImage11.style.display = "none";
    galleryImage12.style.display = "none";
    galleryImage13.style.display = "inline";
    galleryImage14.style.display = "inline";
    galleryImage15.style.display = "inline";
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;