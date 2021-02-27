const data = [
    {
        img: "images/apartments__img1.png",
        title: "Апартаменты в «башне ОКО»",
        number: "Лот № 4536",
        price: "25 600 000 ₽",
        priceInfo: "365 714 ₽ за м²",
        area: "Площадь 70 м²",
        floor: "Этаж 52",
        btn: "Назначить просмотр",
    },
    {
        img: "images/apartments__img2.png",
        title: "Апартаменты в «башне Империя»",
        number: "Лот № 4547",
        price: "27 900 000 ₽",
        priceInfo: "420 000 ₽ за м²",
        area: "Площадь 62 м²",
        floor: "Этаж 35",
        btn: "Назначить просмотр",
    },
    {
        img: "images/apartments__img3.png",
        title: "Апартаменты в «Neva Towers»",
        number: "Лот № 4538",
        price: "19 000 000 ₽",
        priceInfo: "475 000 ₽ за м²",
        area: "Площадь 40 м²",
        floor: "Этаж 16",
        btn: "Назначить просмотр",
    },
    {
        img: "images/apartments__img4.png",
        title: "Апартаменты в «Федерация»",
        number: "Лот № 4539",
        price: "59 500 000 ₽",
        priceInfo: "540 909 ₽ за м²",
        area: "Площадь 110 м²",
        floor: "Этаж 84",
        btn: "Назначить просмотр",
    },
    {
        img: "images/apartments__img5.png",
        title: "Апартаменты в «башне ОКО»",
        number: "Лот № 4550",
        price: "234 900 000 ₽",
        priceInfo: "396 590 ₽ за м²",
        area: "Площадь 88 м²",
        floor: "Этаж 29",
        btn: "Назначить просмотр",
    },
    {
        img: "images/apartments__img6.png",
        title: "Апартаменты в «башне ОКО»",
        number: "Лот № 4536",
        price: "25 600 000 ₽",
        priceInfo: "365 714 ₽ за м²",
        area: "Площадь 70 м²",
        floor: "Этаж 52",
        btn: "Назначить просмотр",
    },
    {
        img: "images/apartments__img7.png",
        title: "Апартаменты в «башне ОКО»",
        number: "Лот № 4536",
        price: "25 600 000 ₽",
        priceInfo: "365 714 ₽ за м²",
        area: "Площадь 70 м²",
        floor: "Этаж 52",
        btn: "Назначить просмотр",
    },
    {
        img: "images/apartments__img8.png",
        title: "Апартаменты в «башне ОКО»",
        number: "Лот № 4536",
        price: "25 600 000 ₽",
        priceInfo: "365 714 ₽ за м²",
        area: "Площадь 70 м²",
        floor: "Этаж 52",
        btn: "Назначить просмотр",
    },
    {
        img: "images/apartments__img9.png",
        title: "Апартаменты в «башне ОКО»",
        number: "Лот № 4536",
        price: "25 600 000 ₽",
        priceInfo: "365 714 ₽ за м²",
        area: "Площадь 70 м²",
        floor: "Этаж 52",
        btn: "Назначить просмотр",
    },
    {
        img: "images/apartments__img10.png",
        title: "Апартаменты в «башне ОКО»",
        number: "Лот № 4536",
        price: "25 600 000 ₽",
        priceInfo: "365 714 ₽ за м²",
        area: "Площадь 70 м²",
        floor: "Этаж 52",
        btn: "Назначить просмотр",
    }
]

const appatmentBlocks = document.querySelector(".apartaments__blocks")

data.map(element => {
    appatmentBlocks.innerHTML += `<div class="apartament__item">
    <img src = "${element.img}" >
    <h3 class="item__title">${element.title}</h3>
    <p class="item__number">${element.number}</p>
    <div class="item__info">
        <div class="item__prices">
            <p class="item__price">${element.price}</p>
            <p class="item__priceInfo">${element.priceInfo}</p>
        </div>
        <div class="item__areas">
            <p class="item__area">${element.area}</p>
            <p class="item__floor">${element.floor}</p>
        </div>
    </div>
    <a href = "#" class="item__btn">${element.btn}</a>`
})

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

const aboutUsImg = document.querySelector(".aboutUs__img")
const aboutUsImages = document.querySelector(".aboutUs__images")

for(let i = 2; i <= 5; i++) {
    const newImg = document.createElement("img")
    newImg.setAttribute("src", "images/ourOffice__img" + i + ".png")
    aboutUsImages.appendChild(newImg)
    newImg.onclick = function(e) {
        aboutUsImg.src = e.target.src
    }
}