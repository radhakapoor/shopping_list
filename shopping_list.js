var clickAddItem = function(event) {
	var form_input = $('#item').val();
	var purchased_button = '<input type="button" value="purchased" class="purchased"/>';
	var delete_button = '<input type="button" value="delete" class="delete"/>';
	var item = $('<li>'+form_input+' '+purchased_button+' '+delete_button+'<li>');
	$('#list').append('<br>');
	$('#list').append(item);
	$('#form')[0].reset();
};

var enterAddItem = function(event) {
	var form_input = $('#item').val();
	var purchased_button = '<input type="button" value="purchased" class="purchased"/>';
	var delete_button = '<input type="button" value="delete" class="delete"/>';
	var code = event.which;
	var item = $('<li>'+form_input+' '+purchased_button+' '+delete_button+'</li>');
	if (code==13) {
		$('#list').append('<br>');
		$('#list').append(item);
		$('#form')[0].reset();
		return false;
	}
};

var purchaseItem = function(event) {
	$(event.currentTarget).parent().wrap('<strike>');
};

var deleteItem = function(event) {
	$(event.currentTarget).parent().remove();
};

$(document).ready(function() {
	$('#submit').click(clickAddItem);
	$('#list').on('click', '.purchased', purchaseItem);
	$('#list').on('click', '.delete', deleteItem);
	$('#form').on('keydown', enterAddItem);
	$('#item').focus();
	$('#reset').click(function(){
		location.reload();
	});
});    


// error if add same item twice
// slide-up for deleted items
// slide down for added items 

// $('#clickme').click(function() {
// 	$('#book').fadeIn('slow', function() {
// 	});
// });

//checkfor emptry strings
//local storage for items
//loop through items to see if repeats
//change event handler to submit


	









