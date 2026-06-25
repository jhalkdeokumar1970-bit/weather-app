const search=document.querySelector("input");
const but=document.getElementById("btn");

const rainy = document.getElementById("rainy");
 const sunny=document.getElementById("sunny");
const snow=document.getElementById("snow");
const errorsound=document.getElementById("error");
const er=document.getElementById("er");
const cloudy=document.getElementById("cloudy");
const tempe=document.querySelector(".tempe")
const descr=document.querySelector(".descr");
const humidity=document.getElementById("humidity");
const wind=document.getElementById("wind");
const weather_body=document.querySelector(".weather_body");


 async function checkweather(city){
const api_key="52ab9445a3826358fa136a38b15e33b3";


const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
const weather_data= await fetch(`${url}`).then(response =>response.json());
if(weather_data.cod===`404`){
  errorsound.play();
  er.style.display="flex";
  weather_body.style.display="none";
  return;
}
er.style.display="none";
  weather_body.style.display="flex";

tempe.innerHTML=`${ Math.round (weather_data.main.temp)}°C`;

descr.innerHTML=`${weather_data.weather[0].description}`;
wind.innerHTML=`${weather_data.wind.speed}Km/H`;
humidity.innerHTML=`${weather_data.main.humidity}%`;
switch(weather_data.weather[0].main){
  case 'Rain':
    rainy.src="./rainy.jpg";
    break;
    case 'Snow':
    rainy.src="./snow.jpg";
    break;
    case 'Clear':
    rainy.src="./sunny.jpg";
    break;
    case 'Clouds':
    rainy.src="./cloudy.jpg"
    break;
  
}

};
but.addEventListener("click",(e) => {
  e.preventDefault();
  
  if(search.value.trim()==""){
    alert("enter the city first !!!")
    return;
  }
checkweather(search.value);
});
