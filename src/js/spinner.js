import {spinner} from './app_global_declaration';

let showSpinner = () => spinner.style.display = 'block';
let hideSpinner = () => spinner.style.display = 'none';

export {
    showSpinner, 
    hideSpinner
};
