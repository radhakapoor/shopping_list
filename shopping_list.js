
$(document).ready(function() {
    $('#submit').click(function(){
    	var item = $('#item').val();
    	var delete_button = '<input type="button" value="delete"/>';
    	var item = $('<li>'+item+' '+delete_button+'</li>');   	  	
    	$('#list').append("<br>");
    	$('#list').append(item);	        
	    $('#form')[0].reset();	    	        
    })
});

$(document).ready(function() {
	$('#form').on('keydown', function(e) {
		var item = $('#item').val();
		var delete_button = '<input type="button" value="delete"/>';
		var code = e.which;
		var item = $('<li>'+item+' '+delete_button+'</li>');		 		
		if (code==13){
			$('#list').append("<br>");			
			$('#list').append(item);										
			$('#form')[0].reset();
			return false;					
		}		
	})
});

// #this fires upon click of 'li' element, should really be on click of the button
$(document).ready(function() {	
	// var delete_button = $('<input type="button" value="delete"/>');
	$('#list').on('click', 'li', function() {		
		$(this).remove();
	})
});
	









