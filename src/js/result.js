import {navMenu, navMenus, backdrop} from './global_declaration'
import { iterateOverData, loadResult } from "./processResult";

let totalQueries = iterateOverData(loadResult());


navMenu.addEventListener('click', () => {
    // alert('Clicked');
    
        backdrop.style.display = "block";
        navMenus.style.display = "flex";            
    
});