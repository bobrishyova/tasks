// Please provide several ways that a website or web application can determine the end-user location? 
// Given that you can inject a JavaScript code how can this information be modified 
// on the client-side to make the website detect a different location? Are there any technical limitations?

// Выводит местоположение:

let x = document.getElementById("test")
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition)
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser."
  }
}
function showPosition(position) {
	x.innerHTML = "Latitude: " + position.coords.latitude + 
  	"<br>Longitude: " + position.coords.longitude;
}
