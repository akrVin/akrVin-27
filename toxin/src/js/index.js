const burger = document.querySelector('.burger');
const initUser = document.querySelector('.init__user');

if (burger) {
    const menu = document.querySelector('.menu__body');
    burger.addEventListener('click', function (activeBurger) {
        burger.classList.toggle('_active-burger');
    });
}

if (initUser) {
    const initButton = document.querySelector('.init__button');
    initUser.addEventListener('click', function (activeUser) {
        initUser.classList.toggle('_active-user');
    });
}

