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
		httpRequest.onreadystatechange = function()
		{
			if (httpRequest.readyState === 4)
			{
				alert("done");
			}
		};
		httpRequest.open('POST', "http://localhost/api", true);
		httpRequest.setRequestHeader('Content-Type', 'application/json');
		var coords = {lat: position.coords.latitude, lon: position.coords.longitude}
		httpRequest.send(JSON.stringify(coords));
		alert(JSON.stringify(coords));
	}

	function error()
	{

	}

	// function showError(error)
	// {
 //    	switch(error.code)
 //    	{
 //        	case error.PERMISSION_DENIED:
 //            	x.innerHTML = "User denied the request for Geolocation."
 //            	break;
 //     	   case error.POSITION_UNAVAILABLE:
 //        	    x.innerHTML = "Location information is unavailable."
 //        	    break;
 //      	  case error.TIMEOUT:
 //        	    x.innerHTML = "The request to get user location timed out."
 //            	break;
 //     	   case error.UNKNOWN_ERROR:
 //        	    x.innerHTML = "An unknown error occurred."
 //            	break;
 //    	}
	// }

	// document.getElementById("#btn").onclick = function()
	// {
	// 		getLocation();
	// }

	document.getElementById("#zipcode").onkeypress = function(e)
	{
		if (!e) e = window.event;
		var keyCode = e.keyCode || e.which;
		if (keyCode == '13')
		{
			getLocation();
		}
	}
	// document.getElementById("#form").onsubmit = function()
	// {
	// 		getLocation();
	// }
}

