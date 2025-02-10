const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";
console.log('heyyyh')

const cityName = document.querySelector('.card-title')
const input = document.querySelector('#cityName')
const btn = document.querySelector('#search')

btn.addEventListener('click', (e) =>{
  e.preventDefault();
  cityName.textContent = input.value
  getData()
})


async function getData(){
try {
  const response = await fetch(apiUrl)
  const data = await response.json()
  console.log(data)
  
  const hour = data.hourly;
  const units = data.hourly_units
  console.log(hour)
  
  const temp = hour.temperature_2m
  const time = hour.time
  
  document.querySelector('#temp').textContent = temp[0]
  document.querySelector('#time').textContent = time[0]
  
  console.log(temp[0])
  console.log(time[0])
  
  document.querySelector('#tempFormet').textContent = units.temperature_2m
  document.querySelector('#timeFormet').textContent = units.time
  console.log(units.temperature_2m)
  console.log(units.time)
  
} catch (e) {
  console.log(e, 'Error')
}
}



/**
// Fetch data from the API
async function fetchWeatherData() {
  const apiUrl = "https://freetestapi.com/api/v1/weathers";

  try {
    // Sending API request
    const response = await fetch(apiUrl);

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // Convert response to JSON
    const data = await response.json();

    // Log the data
    console.log("Weather Data:", data);

    // Example: Show data on webpage
   const output = document.getElementById("output");
    output.innerHTML = JSON.stringify(data, null, 2);
   
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function
fetchWeatherData();



// Fetch data from the API
async function fetchWeatherData() {
  
  const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";

  try {
    // Sending API request
    const response = await fetch(apiUrl);

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
    }

    // Convert response to JSON
    const data = await response.json();

    // Log the data for debugging
    console.log("Weather Data:", data);

    // Example: Show data on webpage
    const output = document.getElementById("output");
    output.innerHTML = JSON.stringify(data, null, 2);

  } catch (error) {
    // Log error for debugging
    console.error("Error fetching data:", error);

    // Show error message on the webpage
    const output = document.getElementById("output");
    output.innerHTML = `<p style="color: red;">Failed to fetch weather data. Error: ${error.message}</p>`;
  }
}

// Call the function
fetchWeatherData();

**/