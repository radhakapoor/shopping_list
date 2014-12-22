
// deleting items from the list - use hide() or fade

// $(document).ready(function() {
// 	$('#deletebutton').hide();
// })

$(document).ready(function() {
    $('#submit').click(function(){
    	var item = $('#item').val(); 
    	// var deletebutton = $('#deletebutton');   	
    	$('#list').append("<br>");
    	$('#list').append("<li>"+item+"</li>");	        
	    $('#form')[0].reset();	    	        
    })
});

$(document).ready(function() {
	$('#form').on('keydown', function(e) {
		var item = $('#item').val();
		var code = e.which;
		// var deletebutton = $('#deletebutton');  		
		if (code==13){
			$('#list').append("<br>");
			$('#list').append("<li>"+item+"</li>");					
			$('#form')[0].reset();
			return false;					
		}
	})
});

$(document).ready(function() {
	$('<li>').click(function() {
		$(this).hide();
	})
});

// #try a div which contains the item and <li>








