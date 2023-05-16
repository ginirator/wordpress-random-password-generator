(function($) {
    $(document).ready(function() {
        function generatePassword() {
            const passwordLength = $("#password-length").val();
            const includeLowercase = $("#lowercase").is(':checked');
            const includeUppercase = $("#uppercase").is(':checked');
            const includeNumbers = $("#numbers").is(':checked');
            const includeSymbols = $("#symbols").is(':checked');
			let characters = "";
			if (includeLowercase) {
				characters += "abcdefghijklmnopqrstuvwxyz";
			}
			if (includeUppercase) {
				characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			}
			if (includeNumbers) {
				characters += "0123456789";
			}
			if (includeSymbols) {
				characters += "!@#$%^&*()_+-=[]{}|;':,.<>/?`~";
			}

			let password = "";

			for (let i = 0; i < passwordLength; i++) {
				const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
				password += randomCharacter;
			}

			$("#generated-password").text(password);
		}

		function copyToClipboard() {
			const passwordText = $("#generated-password").text();
			const $tempInput = $("<textarea>");
			$("body").append($tempInput);
			$tempInput.val(passwordText).select();
			document.execCommand("copy");
			$tempInput.remove();
		}

		$("#generate-btn").on('click', function(e) {
			e.preventDefault();
			generatePassword();
		});

		$("#copy-btn").on('click', copyToClipboard);
	});
})(jQuery);