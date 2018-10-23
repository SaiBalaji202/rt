import {
    cards
} from './res_global_declaration';

let createCard = (header, rankPercentage, isTotQuery) => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.appendChild(createCardHeader(header));
    if (!isTotQuery)
        card.appendChild(addCircularProgressBar(rankPercentage));
    else
        card.appendChild(addQueryValueToCPB(rankPercentage));
    cards.appendChild(card);
};

let createCardHeader = (headerText) => {
    let cardHeader = document.createElement('h4');
    let cardHeaderText = document.createTextNode(headerText.toUpperCase());
    cardHeader.appendChild(cardHeaderText);
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
    progress.classList.add(`p${percentageValue}`);

    if (percentageValue >= 80)
        progress.classList.add('green');
    else if (percentageValue >= 50)
        progress.classList.add('orange');
    else if (percentageValue >= 10)
        progress.classList.add('red');
    else {
        progress.classList.add('red');
        progress.classList.add('dark');
    }

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

export {
    createCard, createCardHeader, addQueryValueToCPB, addCircularProgressBar
};