$('.hero').first().addClass('shown');

var name = $('.shown').attr('alt');
$('h1.name').text(name);

$('button.next').on('click', function(){
	if(
		$('.shown').is(':last-child')){
			$('.shown').removeClass('shown');
			$('.hero').first().addClass('shown')}
	else	
			{
				$('.shown').removeClass('shown').next().addClass('shown');
			};
  
var name = $('.shown').attr('alt');
	$('h1.name').text(name);
});


$('button.prev').on('click', function(){
	if(
		$('.shown').is(':first-child'))
			{
				$('.shown').removeClass('shown');
				$('.hero').last().addClass('shown');
			}

	else	
			{
				$('.shown').removeClass('shown').prev().addClass('shown');
			};

	var name = $('.shown').attr('alt');
	$('h1.name').text(name);
});