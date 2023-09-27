//declare document variables from html
var searchBtnEl = $('#start');



function startSearch () {
    var weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'
}

searchBtnEl.on('click', startSearch)