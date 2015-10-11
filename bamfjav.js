window.onload = function()
{
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
		var httpRequest = new XMLHttpRequest();
		// httpRequest.onreadystatechange = function()
		// {
		// 	if (httpRequest.readyState === 4)
		// 	{
		// 		alert("done");
		// 	}
		// };
		httpRequest.open('POST', "http://localhost/api", true);
		httpRequest.setRequestHeader('Content-Type', 'application/json');
		var coords = {lat: position.coords.latitude, lon: position.coords.longitude}
		httpRequest.send(JSON.stringify(coords));
		// alert(JSON.stringify(coords));
	}

	function error()
	{

	}

	document.getElementById("#zipcode").onkeypress = function(e)
	{
		if (!e) e = window.event;
		var keyCode = e.keyCode || e.which;
		if (keyCode == '13')
		{
			getLocation();
		}
	}
}

