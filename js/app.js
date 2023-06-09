// ---------------Menu Bar--------------- 

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bi-x');
    navbar.classList.toggle('active');
});


// ------------Accordion FAQ ------------------- 

const accordion = document.querySelectorAll('.contentBx');

for (i = 0; i<accordion.length; i++ ){
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    });
};

// ---------------Scroll Animation--------------- 

const hiddenElements = document.querySelectorAll('.animation-right, .animation-left, .animation-bottom, .animation-rotate');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show-animation', entry.isIntersecting);
        });
    },
    {
        threshold: .15,
    }
);

hiddenElements.forEach((el) => observer.observe(el));

// ---------------Pop Up Window--------------- 

function togglePopup(idname){
    document.getElementById(idname).classList.toggle("active");
};

// ---------------Dark Theme--------------- 

var iconMoon = document.querySelector('#icon-moon');

iconMoon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    iconMoon.classList.toggle('bi-sun-fill');
});
