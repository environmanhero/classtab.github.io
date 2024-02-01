// SignUp Modal Window

const btnSignup = document.getElementsByClassName('signup-button');
const signupModal = document.getElementById('signup-modal');

const signupOverlay = document.getElementById('signup-overlay');
const btnCloseSignup = document.getElementById('signup-btn-close');
const body = document.body;

let currentModal = null;

for (let i = 0; i < btnSignup.length; i++) {
    btnSignup[i].addEventListener('click', () => {
        if (currentModal !== null) {
            currentModal.classList.remove('active');
        }

        signupModal.classList.add('active');
        currentModal = signupModal;

        body.style.overflow = 'hidden';
    });
}

const closeSignupModal = () => {
    signupModal.classList.remove('active');
    body.style.overflow = 'auto';
};

signupOverlay.addEventListener('click', closeSignupModal);
btnCloseSignup.addEventListener('click', closeSignupModal);

// SignIn Modal Window

const btnSignin = document.getElementsByClassName('signin-button')
const signinModal = document.getElementById('signin-modal');

const signinOverlay = document.getElementById('signin-overlay');
const btnCloseSignin = document.getElementById('signin-btn-close');

for (let i = 0; i < btnSignin.length; i++) {
    btnSignin[i].addEventListener('click', () => {
        if (currentModal !== null) {
            currentModal.classList.remove('active');
        }

        signinModal.classList.add('active');
        currentModal = signinModal;

        body.style.overflow = 'hidden';
    });
}

const closesigninModal = () => {
    signinModal.classList.remove('active');
    body.style.overflow = 'auto';
};

signinOverlay.addEventListener('click', closesigninModal);
btnCloseSignin.addEventListener('click', closesigninModal);

// Menu Modal Window

const btnMenu = document.getElementById('header-menu-button');
const menuModal = document.getElementById('menu-modal');
const menuOverlay = document.getElementById('menu-modal');
const btnCloseMenu = document.getElementById('menu-btn-close');

btnMenu.addEventListener('click', () => {
    if (currentModal !== null) {
        currentModal.classList.remove('active');
    }

    menuModal.classList.add('active');
    currentModal = menuModal;

    body.style.overflow = 'hidden';
});

const closeMenuModal = () => {
    menuModal.classList.remove('active');
    body.style.overflow = 'auto';
};

menuOverlay.addEventListener('click', closeMenuModal);

// document.addEventListener("scroll", function() {
//     const header = document.getElementById("header");
//     const section1 = document.getElementById("second-section");
//     const section2 = document.getElementById("third-section");
//     const section3 = document.getElementById("fourth-section");

//     const headerHeight = 10;
//     const section1Position = section1.offsetTop - headerHeight * window.innerHeight / 100;
//     const section2Position = section2.offsetTop - headerHeight * window.innerHeight / 100;
//     const section3Position = section3.offsetTop - headerHeight * window.innerHeight / 100;
//     const scrollPosition = window.scrollY;

//     if (scrollPosition >= section1Position && scrollPosition < section2Position) {
//         header.classList.add("header-scrolled");
//     } else if (scrollPosition >= section2Position && scrollPosition < section3Position) {
//         header.classList.remove("header-scrolled");
//     } else if (scrollPosition >= section3Position) {
//         header.classList.add("header-scrolled");
//     } else {
//         header.classList.remove("header-scrolled");
//     }
// });