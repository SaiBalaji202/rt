import {modalWindow, modalOpen, modalClose, backdrop} from './global_declaration.js';

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



export {
    openModal, 
    closeModal
};