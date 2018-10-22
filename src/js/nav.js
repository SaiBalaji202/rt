import {navMenus, navMenu, modalWindow, backdrop} from './global_declaration.js';
import {closeModal} from './modal.js';



let navMenuClick = () => {
    if (!navMenus.style.display || navMenus.style.display === "none") {
        if (modalWindow.style.display === 'block') {
            closeModal();
        }
        backdrop.style.display = "block";
        navMenus.style.display = "flex";            
    } else {
        backdrop.style.display = "none";
        navMenus.style.display = "none";
    }    
}

export {
    navMenuClick
};

