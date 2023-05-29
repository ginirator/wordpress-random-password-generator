(function($) {
	$(document).ready(function() {
		// Script for generating password
		function wpGeneratePassword() {
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
		function wpCopyToClipboard() {
			// Get the button, popup overlay and popup message elements
			var button = $(this);
			var popupOverlay = button.parent().find('.popup-overlay');
			var popupMessage = popupOverlay.find('.popup-message');

			// Create a new textarea element and give it id='temp_element'
			var textarea = $('<textarea id="temp_element"></textarea>');

			// Optional step to make less noise on the page, if any!
			textarea.css({height: 0});

			// Now append it to your page somewhere, I chose <body>
			$('body').append(textarea);

			// Give our textarea a value of whatever inside the <code> element
			textarea.val(button.parent().find('#generated-password').text());

			// Now copy whatever inside the textarea to clipboard
			textarea.select();
			document.execCommand('copy');
			//navigator.clipboard.writeText(textarea.val());

			// Remove the textarea
			textarea.remove();

			// Display the popup overlay
			popupOverlay.fadeIn(300, function() {
				setTimeout(function() {
					popupOverlay.fadeOut(300);
					popupOverlay.css('display', 'flex');
				}, 900);
			});
		}

		// Generate password on page load
		$("#generate-password-btn").on('click', function(e) {
			e.preventDefault(); // Prevent the default behavior of the button
			wpGeneratePassword(); // Generate password
		});

		// Copy password to clipboard
		$("#password-copy-btn").on('click', wpCopyToClipboard); //	Add event listener to the copy password button
	});
})(jQuery);