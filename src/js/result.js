import {getJSONData} from './utils.js'

let loadResult = () => {
    let data = getJSONData('result');
    console.log(data);
}

loadResult();