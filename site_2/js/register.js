// Script - register.js
// This script validates a form.

// Function to validate individual fields as user types
function validateField(fieldId) {
	'use strict';

	var field = U.$(fieldId);
	var label = field.parentNode.getElementsByTagName('label')[0];
	var checkmark = U.$(fieldId + '-check');
	var isValid = false;

// Validate based on field
	switch(fieldId) {
		case 'fullName':
			isValid = /^[A-Z \.\-']{2,20}$/i.test(field.value);
			break;

		case 'email':
			if (field.value.length > 0) {
				isValid = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(field.value);
				if (!isValid) {
					
				}
			}
			break;

		case 'phone':
			isValid = /^(0|\+?61 ?)[2-478][ \-\.]?\d{4}[ \-\.]?\d{4}$/.test(field.value);
			break;

		case 'subject':
			isValid = /^[A-Z \.\-']{2,20}$/i.test(field.value);
			break;

		case 'message':
			isValid = /^[A-Z \.\-']{2,20}$/i.test(field.value);
			break;
	}

// Update label and checkmark based on validity
		if (isValid) {
			label.className = 'valid';
			if (checkmark) checkmark.style.display = 'inline';
			removeErrorMessage(fieldId);
		} else {
			label.className = '';
			if (checkmark) checkmark.style.display = 'none';
		}
}

// Function called when the form is submitted.
// Function validates the form data.
function validateForm(e) {
    'use strict';

    // Get the event object:
	if (typeof e == 'undefined') e = window.event;

    // Get form references:
	var firstName = U.$('fullName');
	var email = U.$('email');
	var phone = U.$('phone');
	var subject = U.$('subject');
	var message = U.$('message');
	var terms = U.$('terms');

	// Flag variable:
	var error = false;

	// Validate the full name:
	if (/^[A-Z \.\-']{2,20}$/i.test(fullName.value)) {
		removeErrorMessage('fullName');
		addSuccessMessage('fullName');
	} else {
		addErrorMessage('fullName', 'Please enter your full name.');
		removeSuccessMessage('fullName');
		error = true;
	}
	
	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
		addSuccessMessage('email');
	} else {
		addErrorMessage('email', 'Please enter your email address.');
		removeSuccessMessage('email');
		error = true;
	}
	
	// Validate the phone number:
	if (/^(0|\+?61 ?)[2-478][ \-\.]?\d{4}[ \-\.]?\d{4}$/.test(phone.value)) {
		removeErrorMessage('phone');
		addSuccessMessage('phone');
	} else {
		addErrorMessage('phone', 'Please enter your phone number.');
		removeSuccessMessage('phone');
		error = true;
	}

	// Validate the message subject:
	if (/^[A-Z \.\-']{2,20}$/i.test(subject.value)) {
		removeErrorMessage('subject'); 
		addSuccessMessage('subject');
	} else {
		addErrorMessage('subject', 'Please enter your message subject.');
		removeSuccessMessage('subject');
		error = true;
	}

	// Validate the message body:
	if (/^[A-Z \.\-']{2,20}$/i.test(message.value)) {
		removeErrorMessage('message'); 
		addSuccessMessage('message');
	} else {
		addErrorMessage('message', 'Please enter your message.');
		removeSuccessMessage('message');
		error = true;
	}

    // If an error occurred, prevent the default behavior:
	if (error) {

		// Prevent the form's submission:
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	    return false;
	} else {
		if (e.preventDefault) {
	        	e.preventDefault();
	    	} else {
	        	e.returnValue = false;
	    	}
		
		clearForm();
		alert('The form is succesfully submitted!');
		return false;
	}
    
} // End of validateForm() function.

// Function to clear the form
function clearForm() {
	'use strict';
	
	var form = U.$('theForm');
	
	// Reset all form fields
	form.reset();
	
	// Clear all validation messages and checkmarks
	var fields = ['fullName', 'email', 'phone', 'subject', 'message'];
	
	for (var i = 0; i < fields.length; i++) {
		removeErrorMessage(fields[i]);
		removeSuccessMessage(fields[i]);
		
		// Hide checkmarks
		var checkmark = U.$(fields[i] + '-check');
		if (checkmark) {
			checkmark.style.display = 'none';
		}
		
		// Reset label classes
		var field = U.$(fields[i]);
		if (field) {
			var label = field.parentNode.getElementsByTagName('label')[0];
			if (label) {
				label.className = '';
			}
		}
	}
	
	// Disable submit button again
	U.$('submit').disabled = true;
}

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';
    
	// Get a reference to the submit button:
	var submit = U.$('submit');
	
	// Toggle its disabled property:
	if (U.$('terms').checked) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
	
} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// The validateForm() function handles the form:
    U.addEvent(U.$('theForm'), 'submit', validateForm);

	// Disable the submit button to start:
	U.$('submit').disabled = true;

	// Watch for changes on the terms checkbox:
    U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// Enable tooltips on the phone number:
	U.enableTooltips('phone');

function handleBlur(e) {
    validateField(e.target.id);
}

function handleInput(e) {
    validateField(e.target.id);
}

function handleChange(e) {
    validateField(e.target.id);
}

	// Add real-time validation for all fields:
	var fieldList = ['fullName', 'email', 'phone', 'subject', 'message'];

	for (var i = 0; i < fieldList.length; i++) {
    	var fieldId = fieldList[i];
    	var field = U.$(fieldId);

    	if (!field) continue;

    	U.addEvent(field, 'blur', handleBlur);
    	U.addEvent(field, 'input', handleInput);

    	/*if (fieldId === 'state') {
        	U.addEvent(field, 'change', handleChange);
    	}*/
	}
};