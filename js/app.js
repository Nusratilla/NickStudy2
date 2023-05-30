// ----------Menu Bar---------- 

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bi-x');
    navbar.classList.toggle('active');
});


// -------Accordion FAQ -------------- 

const accordion = document.querySelectorAll('.contentBx')

for (i = 0; i<accordion.length; i++ ){
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

