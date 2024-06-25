import {
    getCurrentDate,
    getCurrentWeatherData,
    getCurrentHour,
} from './ultils.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

class app {
    static renderBackground() {
        const root = $(':root');
        const hour = getCurrentHour();
        if (hour >= 19) root.style.setProperty('--primary', '#142255');
    }

    static renderWeatherDate() {
        const currentDate = getCurrentDate();
        let weatherDateEle = $('.weather-date');
        weatherDateEle.innerHTML += currentDate;
    }

    static async renderWeatherData() {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            console.log(lat, lon);
            const weatherData = await getCurrentWeatherData(lat, lon);

            const location = weatherData.name;
            let weatherLocationEle = $('.weather-location');
            weatherLocationEle.innerHTML += location;

            const temp = Math.floor(weatherData.main.temp);
            let weatherTempEle = $('.temperature');
            weatherTempEle.innerHTML = temp;

            const feelLike = Math.floor(weatherData.main['feels_like']);
            let weatherFeelEle = $('.temperature-feel');
            weatherFeelEle.innerHTML += feelLike;

            const status = weatherData.weather[0].main;
            let weatherStatusEle = $('.weather-status');
            weatherStatusEle.innerHTML = status;

            const statusCode = weatherData.weather[0].icon;
            let weatherStatusImgEle = $('.weather-status-img');
            weatherStatusImgEle.src = `https://openweathermap.org/img/wn/${statusCode}@2x.png`;
            $('.loadingTD').classList.remove('loadingTD');
        });
    }

    static async start() {
        this.renderBackground();
        this.renderWeatherDate();
        await this.renderWeatherData();
    }
}

app.start();

