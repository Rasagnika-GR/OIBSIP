const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convert-button");
const result = document.getElementById("result");

convertButton.addEventListener("click", function () {
    const inputValue = temperatureInput.value.trim();
    const unit = unitSelect.value;
    if (inputValue === "") {
        result.textContent = "Please enter a temperature.";
        return;
    }

    const temperature = Number(inputValue);
    if (!Number.isFinite(temperature)) {
    result.textContent = "Please enter a valid number.";
    return;
}
    if (
        (unit === "celsius" && temperature < -273.15) ||
        (unit === "fahrenheit" && temperature < -459.67) ||
        (unit === "kelvin" && temperature < 0)
    ) {
        result.textContent =
            "Temperature cannot be below absolute zero.";
        return;
    }
    let celsius;

    if (unit === "celsius") {
        celsius = temperature;
    } else if (unit === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } else {
        celsius = temperature - 273.15;
    }
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;
    result.innerHTML = `
        <strong>Converted Temperature</strong><br>
        Celsius: ${celsius.toFixed(2)} °C<br>
        Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
        Kelvin: ${kelvin.toFixed(2)} K
    `;
});
