import {
    cards
} from './res_global_declaration';
import {
    getJSONData
} from './utils';
import {
    showModal, 
    hideModal, 
    fillHeader, 
    clearHeader, 
    fillBody, 
    clearBody, 
    centerModal
} from './result_modal';

let createCard = (header, rankPercentage, isTotQuery) => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.appendChild(createCardHeader(header));
    if (!isTotQuery)
        card.appendChild(addCircularProgressBar(rankPercentage));
    else
        card.appendChild(addQueryValueToCPB(rankPercentage));
    card.addEventListener('click', cardClick, true);
    cards.appendChild(card);
};

let createCardHeader = (headerText) => {
    let cardHeader = document.createElement('h4');
    let cardHeaderText = document.createTextNode(headerText.toUpperCase());
    cardHeader.appendChild(cardHeaderText);
    cardHeader.addEventListener('click', headerClick);
    return cardHeader;
}

let addQueryValueToCPB = (queryCount) => {
    let progress = document.createElement('div');
    progress.classList.add('c100');
    // console.log(`p${percentageValue}`);
    progress.classList.add('p100');
    progress.classList.add('green');

    let progressSpan = document.createElement('span');
    let progressText = document.createTextNode(`${queryCount}Q`);
    progressSpan.appendChild(progressText);

    let progressSlice = document.createElement('div');
    progressSlice.setAttribute('class', 'slice');
    let progressBar = document.createElement('div');
    progressBar.setAttribute('class', 'bar');
    let progressFill = document.createElement('div');
    progressFill.setAttribute('class', 'fill');

    progressSlice.appendChild(progressBar);
    progressSlice.appendChild(progressFill);

    progress.appendChild(progressSpan);
    progress.appendChild(progressSlice);
    return progress;
};

let addCircularProgressBar = (percentageValue) => {
    let progress = document.createElement('div');
    progress.classList.add('c100');
    // console.log(`p${percentageValue}`);
    progress.classList.add(`p${100 - percentageValue}`);

    if (percentageValue >= 80){
        progress.classList.add('red');
        progress.classList.add('dark');
    }
    else if (percentageValue >= 40)
        progress.classList.add('orange');
    else
        progress.classList.add('green');

    let progressSpan = document.createElement('span');
    let progressText = document.createTextNode(`${percentageValue}%`);
    progressSpan.appendChild(progressText);

    let progressSlice = document.createElement('div');
    progressSlice.setAttribute('class', 'slice');
    let progressBar = document.createElement('div');
    progressBar.setAttribute('class', 'bar');
    let progressFill = document.createElement('div');
    progressFill.setAttribute('class', 'fill');

    progressSlice.appendChild(progressBar);
    progressSlice.appendChild(progressFill);

    progress.appendChild(progressSpan);
    progress.appendChild(progressSlice);
    return progress;
};

let cardClick = (e) => {
    e.stopPropagation();
   
    let card = e.target;
    while(!card.classList.contains('card')) {
        card = card.parentElement; 
    }


    let selectedCardName = card.children[0].textContent.toLowerCase();
    let resultObj = getJSONData('result');
    let queries = resultObj[selectedCardName].queries;
    console.log(queries);
    
    clearHeader();
    fillHeader(card.children[0].textContent);
    clearBody();
    fillBody(queries);
    showModal();
    centerModal();
    // console.log(queries);    
};

let headerClick = (e) => {
    alert('Header Clicked');
}

export {
    createCard, createCardHeader, addQueryValueToCPB, addCircularProgressBar, cardClick
};