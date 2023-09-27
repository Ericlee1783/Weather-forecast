//declare document variables from html
var searchBtnEl = $('#start');
var cityEl = $('#search-form');

console.log(cityEl)
fetch("api.openweathermap.org/data/2.5/forecast?q=Boston&appid=8c99c2a4576e560d880726f5adda1776")
 .then(function (response){
    console.log(response);
 })

function startSearch () {
    var weatherURL = "api.openweathermap.org/data/2.5/forecast?q=&appid"
    const options = {
        method: 'GET',
        headers: {
            'API-Key': '8c99c2a4576e560d880726f5adda1776'
        }
    }
    console.log("api.openweathermap.org/data/2.5/forecast?q=Boston&appid=8c99c2a4576e560d880726f5adda1776")
    console.log("api.openweathermap.org/data/2.5/forecast?q=&appid")
    console.log(cityEl)
}

searchBtnEl.on('click', startSearch)