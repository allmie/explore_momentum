const clock = document.querySelector(".clock > h1");

const loadTime = () => {
    const time = new Date();

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    
    clock.innerHTML = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds}`
}

const initClock = () => {
    loadTime();
    setInterval(loadTime, 1000);
};

initClock();