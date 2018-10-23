import {backdrop, spinner} from './global_declaration.js';

let displayBackdrop = () => {
    backdrop.style.display = block;
};

let showSpinner = () => {
    spinner.style.display = block;
};

export {
    displayBackdrop, 
    showSpinner
};
