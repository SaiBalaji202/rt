let parseString = require('xml2js').parseString;


let modalWindow = document.querySelector('.modal');
let modalClose = document.querySelector('.closeBtn');
let modalOpen = document.querySelector('.modal-trigger');

let navMenus = document.querySelector('.nav-menus');
let navMenu = document.querySelector('.nav-menu');
let nm = document.querySelector('#nav-menu-icon');
let backdrop = document.querySelector('.backdrop');

let fileTest = document.querySelector('.file-input-test');
let fileInput = document.querySelector('#file-input-file');
let fileNameTxt = document.querySelector('#file-input-name');

let winResize = () => {
    if (window.innerWidth > 600) {
        navMenus.style.display = "flex";
    } else {
        navMenus.style.display = "none";
    }
};

let winClick = (e) => {
    if (window.innerWidth <= 600 && navMenu.style.display !== "none" && (e.target !== nm && e.target !== modalOpen)) {
        backdrop.style.display = "none";
        navMenus.style.display = "none";
    }
};



export {
    modalWindow, modalClose, modalOpen, navMenus, navMenu, nm, backdrop, fileTest, fileInput, fileNameTxt, winResize, winClick, parseString
}