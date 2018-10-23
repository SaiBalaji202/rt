import {backdrop, navMenu, modalOpen, modalClose, fileInput, fileTest} from './app_global_declaration';
import {winClick, winResize} from  './app_global_declaration';
import {openModal, closeModal} from './modal';
import {navMenuClick} from './nav';
import {readXMLFile, loadSpinnerAndInit} from './parser';

// Event Listners
window.addEventListener("click", winClick);
window.addEventListener("resize", winResize);
fileTest.addEventListener('click', loadSpinnerAndInit);
backdrop.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
modalOpen.addEventListener('click', openModal);
navMenu.addEventListener('click', navMenuClick);
fileInput.addEventListener('change', readXMLFile);