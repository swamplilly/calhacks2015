$(document).ready(function()
{
	// $("#zipcode").bind("click",function()
	// {
	// 	alert("Hello");
	// }

	// $('.form').data('bgcolor', 'pink').hover(function()
	// {
	// 	 var $this = $(this);
 //    	var newBgc = $this.data('bgcolor');
 //    	$this.data('bgcolor', $this.css('background-color')).css('background-color', newBgc);
	// }

	// $("#geotest").hover(
	// function()
	// {
	// 	var $this = $(this);
	// 	$this.data("bgcolor", $this.css('background-color')).css('background-color', 'yellow');
	// },
	// function()
	// {
	// 	var $this = $(this);
	// 	$this.css('background-color'), $this.data('bgcolor'));
	// }

	$('#geotest').mouseenter(
		function()
	{
		var $this = $(this);
		$this.animate(
		{
			width: '+=20px'
		});
	});
}






