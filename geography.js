const geography = document.querySelector(".geography");
const COORDS = "coords";
const api = "c456115766e253fa0378725ffeaa3402";

const saveCoords = (saveObj) => {
    localStorage.setItem(COORDS, JSON.stringify(saveObj));
};

const getWeather = (latitude, longitude) =>{
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api}&units=metric`
        ).then(response => {
            return response.json();
        }).then(json => {
            const {main:{temp}, sys:{country}, name:place} = json;
            geography.innerHTML = `${temp} @ ${country}.${place}`;
        });
}
const handleSuccess = (postiion) => {
    const {longitude, latitude}= postiion.coords;
    
    const coordsObj = {
        longitude,
        latitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
};
const handleFail = () => {
    console.log("fail")
};

const getCoords = () => {
    const parseCoords = JSON.parse(localStorage.getItem(COORDS));
    if(!parseCoords){
        navigator.geolocation.getCurrentPosition(handleSuccess, handleFail);
    }else{
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
};

const initGeo = () => {
    getCoords();
};

initGeo();