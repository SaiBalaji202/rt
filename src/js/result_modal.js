import {
    modal, 
    modalHeader, 
    modalBody, 
    modalFooter, 
    backdrop
} from './res_global_declaration';


let showModal = () =>  {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
    backdrop.style.zIndex = 2;
    modal.style.zIndex = 3;
    backdrop.style.top = 0;
}
let hideModal = () => {
    backdrop.style.display = "none";
    modal.style.display = "none";
}

let fillHeader = headerText => {
    
    let closeBtn = document.createElement('span');
    closeBtn.classList.add('closeBtn');
    closeBtn.textContent = 'x';
    
    let h5 = document.createElement('h5');
    h5.textContent = headerText.toUpperCase();
    modalHeader.appendChild(h5);
    modalHeader.appendChild(closeBtn);
}
let clearHeader = () => modalHeader.innerHTML = '';

let fillBody = queries => {
    let ul = document.createElement('ul');
    queries.forEach((query) => {
     let li = document.createElement('li');
     li.textContent = query;
     ul.appendChild(li);
    });
    modalBody.appendChild(ul);
};
let clearBody = () => {
    modalBody.innerHTML = '';
};

export {
    showModal, 
    hideModal, 
    fillHeader, 
    clearHeader, 
    fillBody, 
    clearBody
};