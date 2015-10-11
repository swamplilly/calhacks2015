var x = document.getElementById("geotest");
var lat, lon;

function getLocation()
{
	if (navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(showPosition, error);
	} else
	{ 
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

function showPosition(position)
{
	x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function error()
{}





