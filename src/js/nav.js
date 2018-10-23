import {navMenus, modalWindow, backdrop} from './app_global_declaration';
import {closeModal} from './modal';

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

