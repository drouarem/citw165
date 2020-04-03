
//hamburger menu logic
$(document).ready(function() {
	$("body").on('click', '.top', function() {
		$("nav.menu").toggleClass("menu_show");
	});
});


//Form Page


$().ready(function()
{
  $("#email_form").validate(
      {
        rules: { //rules start
            email: {
                
                required: true,
                email: true
			},
			email_confirm: {
                //requires a valid email
                required: true,
                //checks if it matches the original input
				equalTo: "#email"
			},  
          first_name: "required",
          last_name: "required",
          zip: {
            required: true,
            digits: true,
            minlength: 5,
            maxlength: 5
          }
        }, //rules end

        messages: 
        { //messages start
          email: 
          {
            required: "Please enter your email address."
          },
          email_confirm: 
          {
            required: "Please enter your email address again to confirm.",
            equalTo: "Emails do not match"
          },
          first_name:
          {
              required: "Please enter your name"
          },
          last_name:
          {
              required: "Please enter your last name"
          },
          zip:{
              required: "Please enter a valid zip code.",
              digits: "Zip code can only be numbers.",
              minlength: "Zip code is not 5 digits long.",
              maxlength: "Zip code is not 5 digits long."
          }
        
        }, //messages end

      });

});



/*Processing form info*/
//Reused from an earlier assignment
var decode = function ( text ) {
	text = text.replace(/\+/g, " ");
	text = text.replace(/%[a-fA-F0-9]{2}/g,
		function ( text ) {
			return String.fromCharCode( "0x" + text.substr(1,2));
		}
	);
	return text;
}

var display_data = function () {
  var url_parts = window.location.toString().split("?");
  if ( url_parts.length != 2 ) return;

  var fields = url_parts[1].split("&");

  if ( fields.length == 0 ) {
      document.write("<p>No data was submitted.</p>");
  } else {
      document.write("<dl class='desc'>");
      var field_parts;
      for ( var i in fields ) {
          field_parts = fields[i].split("=");
          field_parts[0] = decode( field_parts[0] );
          field_parts[1] = decode( field_parts[1] );
          document.write("<dt id='info-id'>" + field_parts[0] + "</dt>");
          document.write("<dd id='info'>" + field_parts[1] + "</dd>");
      }
      document.write("</dl>");
  }
}

