import {
    getJSONData, 
    getPercentage
} from './utils';
import { createCard } from "./card";

let loadResult = () => {
    return getJSONData('result');
}

let getTotalQueries = obj => obj['queries'].count;

let iterateOverData = (obj) => {
    let totalQueries = getTotalQueries(obj);
    for (let doc in obj) {
        if (doc.toUpperCase() !== 'QUERIES') {
            let cntQueries = obj[doc].count;
            createCard(doc, getPercentage(cntQueries, totalQueries, false));
        } else {
            createCard(doc, obj[doc].count, true);
        }
    }
    return totalQueries;
}

export {
    loadResult, getTotalQueries, iterateOverData
}