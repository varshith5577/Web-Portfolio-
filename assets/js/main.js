/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_c2pdoyx','template_9vswizp','#contact-form','pssA344ziCqfK6kzO')
    .then(()=>{
        contactMessage.textContent = 'Message sent successfully ✅'

        setTimeout(()=>{
            contactMessage.textContent = ''
        },5000)
        contactForm.reset()
    },()=>{
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })

}
contactForm.addEventListener('submit',sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
    const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const lightIcon = 'ri-sun-line';
const darkIcon = 'ri-moon-line';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Helper function to check and return theme state
const getIsDarkTheme = () => document.body.classList.contains(darkTheme);

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Toggle theme and icon classes
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(darkIcon);
  themeButton.classList.toggle(lightIcon); // Toggle both icon classes

  // Save the theme and icon based on current state
    const isDarkTheme = getIsDarkTheme();
    localStorage.setItem('selected-theme', isDarkTheme ? 'dark' : 'light');
    localStorage.setItem('selected-icon', isDarkTheme ? darkIcon : lightIcon);
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration:2500,
    delay:400,
})

sr.reveal('.home__perfil, .about__image, .contact__mail',{origin:'right'})
sr.reveal('.home__name, .home__info , .about__container .section__title1, .about__info, .contact__social,.contact__data',{origin:'left'})

sr.reveal('.services__card, .projects__card',{interval:100})
