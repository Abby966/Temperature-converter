document.getElementById('convertBtn').addEventListener('click', function() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const kelvin = parseFloat(document.getElementById('kelvin').value);

    if (!isNaN(celsius)) {
        document.getElementById('fahrenheit').value = (celsius * 9/5) + 32;
        document.getElementById('kelvin').value = celsius + 273.15;
    } else if (!isNaN(fahrenheit)) {
        document.getElementById('celsius').value = (fahrenheit - 32) * 5/9;
        document.getElementById('kelvin').value = (fahrenheit - 32) * 5/9 + 273.15;
    } else if (!isNaN(kelvin)) {
        document.getElementById('celsius').value = kelvin - 273.15;
        document.getElementById('fahrenheit').value = (kelvin - 273.15) * 9/5 + 32;
    } else {
        alert("Please enter a valid temperature value.");
    }
});