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
		lat = position.coords.latitude;
		lon = position.coords.longitude;
		x.innerHTML = "Latitude: " + lat + "<br>Longitude: " + lon;
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

	function getRandomColor()
	{
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++)
		{
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	function randomizeBGColor()
	{
		document.getElementById("bg").style.backgroundColor=getRandomColor();
	}

	function randomizeFontColor()
	{
		document.getElementById("t1").style.color=getRandomColor();
	}

	function waitForIt()
	{
		var a = document.getElementById("geotest");
		a.innerHTML = "Wait for it...";
	}

	function toggleKitty()
	{
		var kitties = 'abd'.split('');
		var pickone = "url(" + kitties[Math.floor(Math.random() * 3)] + ".png)";
		document.getElementById("sideB").style.background=pickone;
	}

	function togglePuppy()
	{
		var puppies = '124'.split('');
		var pickone = "url(" + puppies[Math.floor(Math.random() * 3)] + ".png)";
		document.getElementById("sideA").style.background=pickone;
	}

	document.getElementById("#zipcode").onkeypress = function(e)
	{
		if (!e) e = window.event;
		var keyCode = e.keyCode || e.which;
		if (keyCode == '13')
		{
			getLocation();
			randomizeBGColor();
			randomizeFontColor();
			waitForIt();
			toggleKitty();
			togglePuppy();
		}
	}
}

