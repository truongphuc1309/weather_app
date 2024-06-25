import { getApiURL } from './data.js';

const convertMonth = (month) => {
    switch (month) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
    }
};

const getCurrentWeatherData = async (lat, lon) => {
    const apiURL = getApiURL(lat, lon);
    let weatherData = await fetch(apiURL);
    weatherData = await weatherData.json();

    return weatherData;
};

const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = convertMonth(date.getMonth() + 1);
    const year = date.getFullYear();
    const currentDate = `${month} ${day}, ${year}`;

    return currentDate;
};

const getCurrentHour = () => {
    const date = new Date();
    const currentHour = date.getHours() + 1;

    return currentHour;
};

export { convertMonth, getCurrentDate, getCurrentHour, getCurrentWeatherData };

