$(document).ready(function () {
    $("#menuToggle").click(function () {
        $(this).toggleClass("is-active");
    });
});


const menuBurger = () => {
    const burger = document.getElementById('menuToggle');
    const nav = document.querySelector('nav');
    const navLink = document.querySelectorAll('.navLink');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    })


    navLink.forEach(function (i) {
        i.addEventListener('click', function (event) {
            console.log(i);
            nav.classList.toggle('active');
            // event.preventDefault();
        });

    })
}

menuBurger();
















