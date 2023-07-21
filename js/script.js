"use strict";


// AJAX (Asynchronous JavaScript and XML) - это подход к веб-разработке, который позволяет обновлять содержимое веб-страницы без необходимости полной её перезагрузки. Он основан на сочетании нескольких технологий, таких как JavaScript, XML (в прошлом) или более распространенный формат данных JSON (в настоящее время), HTML и CSS.

// С помощью AJAX можно асинхронно отправлять HTTP-запросы к серверу и получать ответы в фоновом режиме без прерывания работы пользователя на веб-странице. Затем полученные данные могут быть обработаны и обновлены на странице динамически, без перезагрузки всей страницы.

// Это позволяет создавать более интерактивные и отзывчивые веб-приложения, такие как динамические формы, автозаполнение полей, динамическая загрузка контента и другие функциональности, которые улучшают пользовательский опыт. AJAX широко используется в современной веб-разработке и стал одной из основных технологий взаимодействия с сервером на стороне клиента.

// const {
//     async
// } = require("q");

// const {
//     async
// } = require("q");

// const inputRub = document.querySelector("#rub"),
//     inputUsd = document.querySelector("#usd");

// inputRub.addEventListener("input", () => {
//     const request = new XMLHttpRequest();

//     // request.open(method, url, async, login, pass); - схема
//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('load', () => {
//         if (request.status === 200) {
//             const data = JSON.parse(request.response);
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//         } else {
//             inputUsd.value = "Что-то пошло не так";
//         }
//     });



const inputUzs = document.querySelector("#uzs"),
    inputUsd = document.querySelector("#usd");

inputUsd.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass);
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // Это старый метод
    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log(request.response);

    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = "Что то пошло не так";
    //     }
    // }); 
    // Это старый метод


    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUzs.value = (+inputUsd.value * data.current.uzs).toFixed(2);
        } else {
            inputUzs.value = "Что то пошло не так";
        }
    });


    // status
    // statusText
    // response
    // readyState



});

// status
// statusText
// response
// readyState

// });