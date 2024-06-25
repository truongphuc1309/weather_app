const getApiURL = (lat, lon) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1c1ec9772733876e9ab31cfe91c4a195&units=metric`;
};

export { getApiURL };
