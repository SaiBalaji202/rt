import {cards} from './res_global_declaration.js';
import {getJSONData} from './utils.js'

let totalQueries = 0;

let loadResult = () => {
    return getJSONData('result');
}

let getTotalQueries = obj => obj['queries'].count;

let iterateOverData = (obj) => {
    totalQueries = getTotalQueries(obj);
    for (let doc in obj) {
        if (doc.toUpperCase() !== 'QUERIES') {
            let cntQueries = obj[doc].count;
            console.log(doc.toUpperCase());
            console.log(getPercentage(totalQueries - cntQueries, totalQueries));
            createCard(doc, getPercentage(totalQueries - cntQueries, totalQueries));
        } 
    }
}

let createCard = (header, rankPercentage) => {
  let card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.appendChild(createCardHeader(header));
  card.appendChild(addCircularProgressBar(rankPercentage));
  cards.appendChild(card);
};

let createCardHeader = (headerText) => {
  let cardHeader = document.createElement('h4');
  let cardHeaderText = document.createTextNode(headerText.toUpperCase());
  cardHeader.appendChild(cardHeaderText);
  return cardHeader;
}


let addCircularProgressBar = (percentageValue) => {
    let progress = document.createElement('div');
    progress.classList.add('c100');
    // console.log(`p${percentageValue}`);
    progress.classList.add(`p${percentageValue}`);
    
    if(percentageValue >= 80)
        progress.classList.add('green');
    else if(percentageValue >= 50)
        progress.classList.add('orange');
    else if(percentageValue >= 10)
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

let getPercentage = (x, y) => Math.round(x / y * 100);

iterateOverData(loadResult());

// <div class="c100 p80 orange dark small">
//   <span>100%</span>
//       <div class="slice">
//          <div class="bar"></div>
//           <div class="fill"></div>
//       </div>
// </div>