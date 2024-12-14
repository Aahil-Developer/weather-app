console.log("Wearher App");

const apikey = "4acf14d61938a97b1f1ddef2620462f3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=";

let searchBox = document.querySelector(".upper input");
let searchBtn = document.querySelector(".upper button");
let mainIcon = document.querySelector(".cloud  img");

async function checkWeather(city){
    const responce = await fetch(apiUrl + city +`&appid=${apikey}&units=metric` )
    var data = await responce.json()

    console.log(data);
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+"°C";
    document.querySelector(".city").innerHTML =data.name;
    document.querySelector("#humid-level").innerHTML =Math.round(data.main.humidity) + "%";
    document.querySelector("#wind-level").innerHTML =Math.round(data.wind.speed)+"Km/h";

    if(data.weather[0].main == "Clouds"){
        mainIcon.src="clouds.png";
    }else if(data.weather[0].main == "Clear"){
        mainIcon.src="clear.png";
    }else if(data.weather[0].main == "Rain"){
        mainIcon.src="rain.png";
    }else if(data.weather[0].main == "Mist"){
        mainIcon.src="mist.png";
    }else if(data.weather[0].main == "Drizzle"){
        mainIcon.src="drizzle.png";
    }else if(data.weather[0].main == "Snow"){
        mainIcon.src="snow.png";
    }else{
        mainIcon.src="mist.png";
    }
   
}



searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

})