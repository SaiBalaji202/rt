import {
    modal, 
    modalHeader, 
    modalBody
} from './res_global_declaration';

import {
    backdrop
} from './global_declaration';

let showModal = () =>  {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
    modal.style.animation = 'slide-down 1s ease-in-out';
    backdrop.style.zIndex = 2;
    modal.style.zIndex = 3;
    backdrop.style.top = 0;
}


let hideModal = () => {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
    backdrop.style.zIndex = 1;
    backdrop.style.top = "50px";
}

let fillHeader = headerText => {
    let closeBtn = document.createElement('span');
    closeBtn.classList.add('closeBtn');
    closeBtn.textContent = 'x';
    closeBtn.addEventListener('click', () => {
        hideModal();
    });
    
    let h5 = document.createElement('h5');
    h5.textContent = headerText.toUpperCase();
    h5.style.display='inline-block';
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
    modalBody.style.overflowY = 'auto';
    modalBody.appendChild(ul);
};
let clearBody = () => {
    modalBody.innerHTML = '';
};

let centerModal = () => {
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.marginTop = `-${modal.offsetHeight / 2}px`;
    modal.style.marginLeft = `-${modal.offsetWidth / 2}px`;
}

export {
    showModal, 
    hideModal, 
    fillHeader, 
    clearHeader, 
    fillBody, 
    clearBody, 
    centerModal
};