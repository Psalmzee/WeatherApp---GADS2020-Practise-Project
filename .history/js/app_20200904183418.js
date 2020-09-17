
// select elements
const nameVlue = document.querySelector("#name");
const latVlue = document.querySelector("#lat");
const lngVlue = document.querySelector('#lng');
const humidityVlue = document.querySelector('#humidity')




const GetWeather = (Location) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=914023c54fa48cb8be92d9179794a8ba`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

GetWeather("lagos");
