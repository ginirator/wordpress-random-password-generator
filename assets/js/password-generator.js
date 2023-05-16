(function($) {
	$(document).ready(function() {
		// Script for generating password
		function generatePassword() {
			const passwordLength = $("#password-length").val();
			const includeLowercase = $("#lowercase").is(':checked');
			const includeUppercase = $("#uppercase").is(':checked');
			const includeNumbers = $("#numbers").is(':checked');
			const includeSymbols = $("#symbols").is(':checked');
			let characters = "";

			// Add lowercase letters to the characters string if desired
			if (includeLowercase) {
				characters += "abcdefghijklmnopqrstuvwxyz";
			}

			// Add uppercase letters to the characters string if desired
			if (includeUppercase) {
				characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			}

			// Add numbers to the characters string if desired
			if (includeNumbers) {
				characters += "0123456789";
			}

			// Add symbols to the characters string if desired
			if (includeSymbols) {
				characters += "!@#$%^&*()_+-=[]{}|;':,.<>/?`~";
			}

			// Initialize the password with an empty string
			let password = "";

			// Loop through the desired password length
			for (let i = 0; i < passwordLength; i++) {
				const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
				password += randomCharacter;
			}

			// Set the generated password text to the generated password
			$("#generated-password").text(password);
		}

		// Function to copy the generated password to clipboard
		function copyToClipboard() {
			const passwordText = $("#generated-password").text(); // get the password text
			const $tempInput = $("<textarea>"); // create temporary input
			$("body").append($tempInput); // add to DOM
			$tempInput.val(passwordText).select(); // select the text
			document.execCommand("copy"); // copy to clipboard
			$tempInput.remove(); // remove from DOM
		}

		// Generate password on page load
		$("#generate-btn").on('click', function(e) {
			e.preventDefault(); // Prevent the default behavior of the button
			generatePassword(); // Generate password
		});

		// Copy password to clipboard
		$("#copy-btn").on('click', copyToClipboard); //	Add event listener to the copy password button
	});
})(jQuery);