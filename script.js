document.getElementById('number').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('convert-btn').click();
    }
});

document.getElementById('convert-btn').addEventListener('click', function() {
    const number = parseInt(document.getElementById('number').value, 10);
    if (isNaN(number)) {
        document.getElementById('output').textContent = "Please enter a valid number";
    } else if (number < 1) {
        document.getElementById('output').textContent = "Please enter a number greater than or equal to 1";
    } else if (number >= 4000) {
        document.getElementById('output').textContent = "Please enter a number less than or equal to 3999";
    } else {
        const roman = convertToRoman(number);
        document.getElementById('output').textContent = roman;
    }
});

function convertToRoman(num) {
    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];
    let result = '';
    for (const [roman, value] of romanNumerals) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }
    return result;
}