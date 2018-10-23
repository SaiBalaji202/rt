import {localStoragePrefix as lsp} from './global_declaration.js';

let saveJSONData = (key, value) => window.localStorage.setItem(lsp+key.charAt(0).toUpperCase()+key.substr(1), JSON.stringify(value));
let saveData = (key, value) => window.localStorage.setItem(lsp+key.charAt(0).toUpperCase()+key.substr(1), value);

let getJSONData = key => JSON.parse(window.localStorage.getItem(lsp+key.charAt(0).toUpperCase()+key.substr(1)));
let getData = key => window.localStorage.setItem(lsp+key.charAt(0).toUpperCase()+key.substr(1));

export {
    saveJSONData, 
    saveData, 
    getJSONData, 
    getData
}

    // queries.forEach((query) => {
    //     if(query.source[0].hasOwnProperty('queryOperation')) {
    //         if(query.source[0].queryOperation.hasOwnProperty('setOperation')) {
    //             if (query.source[0].queryOperation.setOperation.trim() === 'UNION') {
    //                 ++cnt;
    //                 arrUnionQueries.push(query.$.name);
    //             }
    //         }
    //     }
    // });