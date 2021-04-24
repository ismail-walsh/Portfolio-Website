/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)


    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')
/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove Menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL AND REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*===== SCROLL HOME =====*/
sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__img',{delay: 400})
sr.reveal('.home__img2',{delay: 400})
sr.reveal('.home__social-icon',{interval: 200})


/*===== SCROLL ABOUT =====*/
sr.reveal('.about__img',{})
sr.reveal('.about__container',{})
sr.reveal('.about__container2',{})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})
sr.reveal('.about__social',{delay: 400})


/*===== SCROLL SKILLS =====*/
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 200})
sr.reveal('.skills__data',{interval: 200})
sr.reveal('.skills__img',{delay: 400})

/*===== SCROLL EDU =====*/
sr.reveal('.UoL__img',{})
sr.reveal('.UoY__img',{})
sr.reveal('.Udemy__img',{})
sr.reveal('.KE__img',{})
sr.reveal('.education__data',{})
sr.reveal('.education__data2',{})
sr.reveal('.education__uni1',{delay: 200})
sr.reveal('.education__dates',{delay: 200})
sr.reveal('.education__dates1',{delay: 200})
sr.reveal('.education__subject1',{delay: 200})
sr.reveal('.education__modules1',{delay: 200})
sr.reveal('.education__modulelist1',{delay: 200})
sr.reveal('.education__modulelist2',{delay: 200})
sr.reveal('.education__uni2',{delay: 200})
sr.reveal('.education__subject2',{delay: 200})
sr.reveal('.education__modules2',{delay: 200})

/*===== SCROLL WORK =====*/
sr.reveal('.work__img',{interval: 200})

/*===== SCROLL CONTACT =====*/
sr.reveal('.contact__input',{interval: 200})

/*=====SLIDESHOW BOXES =====*/
