//declare document variables from html
var searchBtnEl = document.querySelector('#start');
var cityEl = document.querySelector('#search');
var container = document.querySelector('#container');
var futureDays = document.querySelector('#futuredays');
var date = dayjs().format('MM/DD/YYYY')
var currentWeather = document.querySelector('#current-weather')
console.log(date)

function getCityWeather(event) {
    event.preventDefault(); //does not refresh the page once the search button is initiated.
    var cityInput = cityEl.value; //targeting the cityEl which is whatever the user typed, hence the value after cityEl.
    fetchCityData(cityInput); //calling a function, with the cityInput value.
    //create function to create the history, local storage.
}
function fetchCityData(city) {
    var api = '8c99c2a4576e560d880726f5adda1776'
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&lastupdate&appid=' + api
    container.innerHTML = '' //once the search is complete, clear out the previous looked up city.
    futureDays.innerHTML = '' //same as line 18.
    fetch(requestUrl) //grabbing data from the requestURL variable which is the link
    .then(function(res){ //once data is fetched, then return it in a json(for humans to read) file
        return res.json();
    })
    .then (function(data){ //after the file is converted to human version, we name it "data" and want it to console.
        console.log('this is my city data',data);
        var cityName = document.createElement('h2');
        var temp = document.createElement('h3');
        var wind = document.createElement('p');
        var humidity = document.createElement('p');
        var iconValue = data.weather[0].icon;
        var icon = "http://openweathermap.org/img/wn/" + iconValue + ".png"
        var latitude = data.coord.lat;
        var longitude = data.coord.lon;



        cityName.textContent = data.name + ' ' + date
        currentWeather.prepend(cityName);
        currentWeather.setAttribute('class','test')

        
        currentDayIcon = document.createElement('img');
        currentDayIcon.setAttribute('src', icon)
        container.append(currentDayIcon);


        // container.append(icon);
        // console.log(iconValue);
    })
}

// console.log(cityEl)
// fetch("api.openweathermap.org/data/2.5/forecast?q=Boston&appid=8c99c2a4576e560d880726f5adda1776")
//  .then(function (response){
//     console.log(response);
//  })

// function startSearch () {
//     var weatherURL = "api.openweathermap.org/data/2.5/forecast?q=&appid"
//     const options = {
//         method: 'GET',
//         headers: {
//             'API-Key': '8c99c2a4576e560d880726f5adda1776'
//         }
//     }
//     console.log("api.openweathermap.org/data/2.5/forecast?q=Boston&appid=8c99c2a4576e560d880726f5adda1776")
//     console.log("api.openweathermap.org/data/2.5/forecast?q=&appid")
//     console.log(cityEl)
// }

// searchBtnEl.on('click', startSearch)

searchBtnEl.addEventListener('click',getCityWeather);