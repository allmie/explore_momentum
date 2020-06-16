const body = document.querySelector("body");

const num = 4;

const paintImg = (imgNum) => {
    const image = new Image();
    image.alt = "Background image";
    image.src = `img/${imgNum + 1}.jpg`;
    image.classList.add("bgImg");
    body.prepend(image);
};

const getRandom = () => Math.floor(Math.random() * num);

const initBackImg = () => {
    const randNum = getRandom();
    paintImg(randNum);
};

initBackImg();