<div id="password-generator-form">
    <div class="form-group">
        <label for="password-length">Password Length:</label>
        <input type="number" id="password-length" name="password-length" min="3" max="50" value="15">
    </div>
    <div class="form-group character-settings">
        <label class="character-label">Characters used: </label>
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
    <button type="button" id="generate-btn" class="btn btn-primary">Generate Password</button>
</div>
<div id="generated-password-container" class="password-container">
    <p id="generated-password" class="password-text"></p>
    <button id="copy-btn" class="btn btn-secondary">Copy</button>
</div>
