//declare document variables from html
var searchBtnEl = $('#start');



function startSearch () {
    var weatherURL = "api.openweathermap.org/data/2.5/forecast?q=&appid=8c99c2a4576e560d880726f5adda1776"
    console.log("api.openweathermap.org/data/2.5/forecast?q=Boston&appid=8c99c2a4576e560d880726f5adda1776")
}

searchBtnEl.on('click', startSearch)