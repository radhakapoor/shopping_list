var clickAddItem = function(event) {
    var form_input = $('#item').val();
    var delete_button = '<input type="button" value="delete" class="delete"/>';
    var item = $('<li>'+form_input+' '+delete_button+'</li>');
    $('#list').append('<br>');
    $('#list').append(item);
    $('#form')[0].reset();
};

var enterAddItem = function(event) {
    var form_input = $('#item').val();
        var delete_button = '<input type="button" value="delete"  class="delete"/>';
        var code = event.which;
        var item = $('<li>'+form_input+' '+delete_button+'</li>');
        if (code==13) {
            $('#list').append('<br>');
            $('#list').append(item);
            $('#form')[0].reset();
            return false;
        }
};

// could merge the above two by handling form submit rather than
// click on submit button and keyboard enter as distinct events

var deleteItem = function(event) {
    $(event.currentTarget).parent().wrap('<strike>');
};

$(document).ready(function() {
    $('#submit').click(clickAddItem);
    $('#list').on('click', '.delete', deleteItem);
    $('#form').on('keydown', enterAddItem);
    $('#item').focus();
    $('#reset').click(function(){
        location.reload();
    });
});


// // #this fires upon click of 'li' element, should really be on click of the deletebutton'
// $(document).ready(function() {
// 	// var delete_button = $('<input type="button" value="delete"/>');
// 	$('#list').on('click', 'li', function() {
// 		$(this).remove();
// 	})
// });

// error if add same item twice
// slide-up for deleted items










