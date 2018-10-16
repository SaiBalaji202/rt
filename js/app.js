let navMenus = document.querySelector('.nav-menus');
let navMenu = document.querySelector('.nav-menu');
let nm = document.querySelector('#nav-menu-icon');
let backdrop = document.querySelector('.backdrop');

let modalWindow = document.querySelector('.modal');
let modalClose = document.querySelector('.closeBtn');
let modalOpen = document.querySelector('.modal-trigger');

let fileTest = document.querySelector('.file-input-test');

let fileInput = document.querySelector('#file-input-file');
let fileNameTxt = document.querySelector('#file-input-name');

// navMenus hide when click on the outside region of navMenu 
window.addEventListener("click", (e) => {
    if (window.innerWidth <= 600 && navMenu.style.display !== "none" && e.target !== nm) {
        backdrop.style.display = "none";
        navMenus.style.display = "none";
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
        navMenus.style.display = "flex";
    } else {
        navMenus.style.display = "none";
    }
});

// navMenus hide and show
navMenu.addEventListener('click', () => {
    if (!navMenus.style.display || navMenus.style.display === "none") {
        backdrop.style.display = "block";
        navMenus.style.display = "flex";            
    } else {
        backdrop.style.display = "none";
        navMenus.style.display = "none";
    }    
});

// open and close modal
let closeModal = () => {
    modalWindow.style.display = 'none';
    backdrop.style.display = 'none';
    backdrop.style.zIndex = 1;
    backdrop.style.top = "50px";
};

let openModal = () => {
    backdrop.style.display = 'block';
    modalWindow.style.display = 'block';
    backdrop.style.zIndex = 2;
    modalWindow.style.zIndex = 3;
    backdrop.style.top = 0;    
}

backdrop.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
modalOpen.addEventListener('click', openModal);

// Test the xml file
let testReport = (e) => {
    fileNameTxt.value = e.target.files[0].name;
}

fileInput.addEventListener('change', testReport);
