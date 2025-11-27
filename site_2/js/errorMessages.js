// Script - errorMessages.js
// This script defines functions for adding and removing error messages.

// This function adds the error message.
// It takes two arguments: the form element ID and the message.
function addErrorMessage(id, msg) {
   	'use strict';
    
    // Get the form element reference:
    var elem = document.getElementById(id);
    var parent = elem.parentNode;
    var label = parent.querySelector("label");
    
    // Define the new span's ID value:
    var spanId = id + 'Error';
    
    // Check for the existence of the span:
    var span = document.getElementById(spanId);
    if (span) {
        span.textContext = msg; // Update existing
    } else { 
        // Create the span:
        span = document.createElement('span');
        span.id = spanId;
		span.className = 'error';
        span.textContent = msg;
        
        elem.parentNode.appendChild(span);
    }

    if (label) {
        label.classList.add("error");
    }
} 

// This function removes the error message.
// It takes one argument: the form element ID.
function removeErrorMessage(id) {
   	'use strict';

    // Get a reference to the span:
    var span = document.getElementById(id + 'Error');
	if (span) {
	    // Remove the class from the label:
	    var parent = span.parentNode;
        var label = parent.querySelector("label");

        if (label) {
            label.classList.remove("error");
        }

        parent.removeChild(span);

	} // End of IF.
    
} // End of removeErrorMessage() function.