import {backdrop, navMenu, modalOpen, modalClose, fileInput, fileTest} from './global_declaration.js';
import {winClick, winResize} from  './global_declaration.js';
import {openModal, closeModal} from './modal.js';
import {navMenuClick} from './nav.js';
import {readXMLFile, loadSpinnerAndInit} from './parser.js';

// Event Listners
window.addEventListener("click", winClick);
window.addEventListener("resize", winResize);
fileTest.addEventListener('click', loadSpinnerAndInit);
backdrop.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
modalOpen.addEventListener('click', openModal);
navMenu.addEventListener('click', navMenuClick);
fileInput.addEventListener('change', readXMLFile);