
var storage = []

var clickAddItem = function(event) {
	var form_input = $('#item').val();	
	var purchased_button = '<input type="button" value="purchased" class="purchased"/>';
	var delete_button = '<input type="button" value="delete" class="delete"/>';
	var item = $('<li>'+form_input+' '+purchased_button+' '+delete_button+'</li>');	
	if (form_input === '') {
		alert('Shopping item field is empty!');
		return false;	}
	$('<br>').appendTo('#list');
	storage.push(form_input);
	storage.sort();
	var last = storage[0];
	for (var i = 1; i < storage.length; i++) {
		if (storage[i] == last) alert('This item is already on your list: '+last);
		last = storage[i];
	}
	for (var i = 0; i < storage.length; i++) {
		console.log(storage[i]);
	}	
	$(item).appendTo('#list').hide().fadeIn(1500);	
	$('#form')[0].reset();
};

var enterAddItem = function(event) {
	var form_input = $('#item').val();
	var purchased_button = '<input type="button" value="purchased" class="purchased"/>';
	var delete_button = '<input type="button" value="delete" class="delete"/>';
	var code = event.which;
	var item = $('<li>'+form_input+' '+purchased_button+' '+delete_button+'</li>');	
	if (code==13) {
		if (form_input === '') {
		alert('Shopping item field is empty!');
		return false;   }
		$('<br>').appendTo('#list');
		storage.push(form_input);
		storage.sort();
		var last = storage[0];
		for (var i = 1; i < storage.length; i++) {
			if (storage[i] == last) alert('This item is already on your list: '+last);
			last = storage[i];
		}
		for (var i = 0; i < storage.length; i++) {
		console.log(storage[i]);
	    }			
		$(item).appendTo('#list').hide().fadeIn(1500);			
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

// checking for duplicate items in array:
// created a global array to store items
// write loop to check if there is a duplicate
// alert if there is a duplicate

// slide-up for deleted items
// slide down for added items 

//loop through items to see if repeats
//change event handler to submit


	









