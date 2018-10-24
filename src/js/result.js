import { navMenu, navMenus, backdrop } from './global_declaration'
import { iterateOverData, loadResult } from "./process_result";
import { hideModal } from './result_modal';

let totalQueries = iterateOverData(loadResult());

// navMenu.addEventListener('click', () => {
//     // alert('Clicked');
    
//         backdrop.style.display = "block";
//         navMenus.style.display = "flex";            
    
// });



backdrop.addEventListener('click', () => {
    hideModal();
});
