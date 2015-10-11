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
	}

	function error()
	{}


	function AJAX_JSON_Req( url )
	{
	    var AJAX_req = new XMLHttpRequest();
	    AJAX_req.open( "GET", url, true );
	    AJAX_req.setRequestHeader("Content-type", "application/json");
	 
	    AJAX_req.onreadystatechange = function()
	    {
	        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
	        {
	            var response = JSON.parse( AJAX_req.responseText );
	            document.write( response.name );
	        }
	    }
	    AJAX_req.send();
	}
	 
	AJAX_JSON_Req('coordinates.json');



}

