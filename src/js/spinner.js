import {spinner} from './global_declaration.js';

let showSpinner = () => spinner.style.display = 'block';
let hideSpinner = () => spinner.style.display = 'none';

export {
    showSpinner, 
    hideSpinner
};
