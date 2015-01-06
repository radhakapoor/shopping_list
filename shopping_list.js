var addItem = function(event) {
	var form_input = $('#item').val().trim();
	var purchased_button = '<input type="button" value="purchased" class="purchased"/>';
	var delete_button = '<input type="button" value="delete" class="delete"/>';
	var item = $('<li>'+form_input+' '+purchased_button+' '+delete_button+'</li>');

	if (form_input === '') {
		alert('Shopping item field is empty!');
		return false;
	}

	if(itemInList(form_input)) {
		alert('This item is already on your list: ' + form_input);
		$('#form')[0].reset();
		return false;
	} else {
		$('<br>').appendTo('#list');
		$(item).appendTo('#list').hide().fadeIn(1500);
    	event.preventDefault();
    	$('#form')[0].reset();
    	$('#item').focus();
	}
};

var purchaseItem = function(event) {
	$(event.currentTarget).parent().wrap('<strike>');
};

var deleteItem = function(event) {
	$(event.currentTarget).parent().remove();
};

// You can iterate using a for loop as below
var itemInList = function(form_input) {
	var found = false;
	var items = $('#list li');
	for(var i = 0; i < items.length; i++){
		if(items[i].textContent.trim().toLowerCase() == form_input.trim().toLowerCase()){
			found = true;
			break;
		}
	}
	return found;
};

// Or you can iterate using .each()
// var itemInList = function(form_input) {
// 	var found = false;
// 	$('#list li').each(function(index, item){
// 		if(item.textContent.trim().toLowerCase() == form_input.trim().toLowerCase()){
// 			found = true;
// 			return false; // I know this looks strange but it exits the loop, like break in 'normal' for loop
// 		}
// 	});
// 	return found;
// };

$(document).ready(function() {
	$('#form').submit(addItem);
	$('#list').on('click', '.purchased', purchaseItem);
	$('#list').on('click', '.delete', deleteItem);
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












