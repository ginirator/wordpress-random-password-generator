<!-- Password Generator Form -->
<div id="password-generator-form">

	<div class="form-group">
		<!-- Label for the desired password length -->
		<label for="password-length" class="strong-label">Password Length:</label>

		<!-- Input field for the desired password length -->
		<input type="number" id="password-length" name="password-length" min="3" max="50" value="15">
	</div>

	<!-- Checkboxes for the desired characters to include in the password -->
	<div class="form-group character-settings">

		<label class="character-label strong-label">Characters used: </label>

		<div class="character-option">
			<input type="checkbox" id="uppercase" name="uppercase" checked>
			<label for="uppercase">ABC (uppercase)</label>
		</div>

		<div class="character-option">
			<input type="checkbox" id="lowercase" name="lowercase" checked>
			<label for="lowercase">abc (lowercase)</label>
		</div>

		<div class="character-option">
			<input type="checkbox" id="numbers" name="numbers" checked>
			<label for="numbers">123 (numbers)</label>
		</div>

		<div class="character-option">
			<input type="checkbox" id="symbols" name="symbols" checked>
			<label for="symbols">#$&amp; (symbols)</label>
		</div>

	</div>

	<!-- Button to generate password -->
	<button type="button" id="generate-password-btn" class="btn btn-primary">Generate Password</button>

</div>

<!-- Container for the generated password -->
<div id="generated-password-container" class="password-container">

	<!-- The generated password -->
	<p id="generated-password" class="password-text"></p>

	<!-- Button to copy the generated password -->
	<button id="password-copy-btn">Copy</button>

	<div class="popup-overlay">
        <div class="popup-message">Copy successful</div>
    </div>
</div>
