$(document).ready(function () {
    bookDiv = ''

    $('#submit').on('click', function () {
        var key = $('#search').val();
        ajax(key);
    });

    function ajax(key) {
        $.ajax({
            url: `http://api.openweathermap.org/geo/1.0/direct?q=${key}&limit=${1}&appid=7d07ad5ebc7660c2e5460ad864e52515`,
            dataType: 'json'
        }).done(function (data) {
            console.log(data)
            if(data.length > 0){
                ajaxWeather(data)
            } else error()
        })
    }

    function ajaxWeather(data){
        currentLat = data[0].lat.toFixed(2)
        currentLon = data[0].lon.toFixed(2)
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLon}&appid=7d07ad5ebc7660c2e5460ad864e52515&units=metric`,
            dataType: 'json'
        }).done(function(data){
            console.log(data)
            currentDate = new Date();
            currentDateForWeather = currentDate.toLocaleDateString()
            currentIconWeather = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png `

            bookDiv = `
            <div class="container" id="weather">

                <div class="header">
                    <div>${data.name}</div>
                    <div>${currentDateForWeather}</div>
                </div>

                <div id="weather-disc">${data.weather[0].main}</div>

                <div class="container-main">

                    <div class="main-icon">
                        <img src=${currentIconWeather}>
                        <div>${Math.round(data.main.temp)}°C</div>
                    </div>

                    <div class="temp">
                        <div>Min. temparature: ${Math.round(data.main.temp_min)}°C</div>
                        <div>Max. temparature: ${Math.round(data.main.temp_max)}°C</div>
                        <div>Wind speed(km/h): ${Math.round(data.wind.speed)} km/h</div>
                    </div>

                </div>

            </div>

            <div id="error" style="display: none">
                <p style="color:orange">404</p>
                <p>NOT FOUND</p>
                <p>Please enter a different city</p>
            </div>
            `;
            $('.container').empty().append(bookDiv);
        })
    }
    function error(){
        console.log('error')
        $('#weather').css('display', 'none')
        $('#error').css('display', 'block')
    }
})