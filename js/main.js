

$('.hero').first().addClass('shown');

$('h1.name').text($('.hero')
	.first()
	.addClass('shown')
	.attr('title'));

$('button.next').on('click', function(){

$('.shown')
.removeClass('shown')
.next()
.addClass('shown');

});
	
$('button.prev').on('click', function(){



if ($('.shown').is(':last-child')){

$('.shown')
.removeClass('shown')
.siblings('.hero')
.first()
.addClass('shown');

}

else { $('.shown')
.removeClass('shown')
.prev()
.addClass('shown');
};


var name = $('.shown').attr('title');
$('h1').text(name);

});
