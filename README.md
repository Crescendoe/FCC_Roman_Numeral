This project is a simple Roman numeral converter built using HTML, CSS, and JavaScript. It allows users to enter a number between 1 and 3999, and the script converts it to its equivalent Roman numeral representation.

Functionality:

    Users enter a number in the designated input field.
    Pressing the "Convert" button triggers the conversion.
    The script validates the input for valid range (1-3999) and prevents non-numeric characters.
    If the input is valid, the convertToRoman function calculates the Roman numeral representation and displays it in the output area.
    Error messages are displayed for invalid input or numbers outside the supported range.

Code Structure:

    index.html: This file contains the HTML structure of the application, including the input field, button, and output area. It also references the JavaScript file (script.js) and stylesheet (styles.css).
    script.js: This file contains the JavaScript code responsible for handling user interactions and the conversion logic. It includes:
        Event listeners for the "Enter" key press on the input field and clicks on the "Convert" button.
        Input validation to ensure the entered number is within the valid range and is a number.
        The convertToRoman function, which uses a lookup table of Roman numerals and their corresponding values to perform the conversion.
    styles.css: This file defines the styles for the application, including layout, fonts, colors, and formatting.

Running the Project:

    Save the code snippets provided above as separate files (index.html, script.js, styles.css) in a local directory.
    Open the index.html file in your web browser to run the application.
