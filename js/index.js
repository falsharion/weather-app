const search = document.querySelector('.search');
const cityName = document.querySelector('.search input');
const cityUpdateName = document.querySelector('.city-name p');
const weatherInfo = document.querySelector('#des');
const degreeCel = document.querySelector('#degr');
let clouds = document.querySelector('.clouds');
let humid = document.querySelector('.humid');
let feels= document.querySelector('.feels');
let pressure = document.querySelector('.pressure');

updateData= (city) => {
    cityUpdateName.textContent = city.name;
    console.log(city)
    weatherInfo.textContent = city.weather[0].description;

    var temp = city.main.temp;
    var feelsLike = city.main.feels_like;
    var humidityV = city.main.humidity;
    var pressureV = city.main.pressure;
    var day = city.weather[0].icon;

    degreeCel.innerHTML = convertC(temp);
    humid.innerHTML = `${humidityV}%`;
    feels.innerHTML = convertC(feelsLike);
    pressure.innerHTML = `${pressureV} hPa`
    dayNight(day);

}
function convertC(num) {
   let x = num - 273.15
   let v = x.toFixed(2) + '&#8451;'
    return v;
};

function dayNight(numm) {
    if (numm.includes('d')) {
        clouds.src='./img/cloudy-day.png'
    } else if (numm.includes('n')) {
        clouds.src='./img/cloudy-night.png'
    } else {
        console.log('error fix me')
    }
}

search.addEventListener('submit', event => {
    event.preventDefault();
    const searched = cityName.value.trim()
    console.log(searched);
    search.reset();
    
    requestCity(searched)
    .then((answer) => {
        updateData(answer);
    })
    .catch((error) => { console.log(error)});
})