import {fileNameTxt} from './global_declaration.js';
import {parseString} from './global_declaration.js';
import {resultPage} from './global_declaration.js';
import {showSpinner, hideSpinner} from './spinner.js';
import {redirect} from './redirect.js';


let strXMLFileContent = '';
let strJSONFileContent = '';
let arrInvalidQueries = [];
let arrJoinQueries = [];

let readXMLFile = (e) => {
    fileNameTxt.value = e.target.files[0].name;
      var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
            strXMLFileContent = fileLoadedEvent.target.result;
        };
  fileReader.readAsText(e.target.files[0], "UTF-8");
};

let loadSpinnerAndInit = (e) => {
    showSpinner();
    setTimeout(() => {
        hideSpinner();
        redirect(resultPage);
    }, 3000);
}

let convertToJSONFile = (e) => {
    if (strXMLFileContent) {
      parseString(strXMLFileContent, (err, json) => {
          if (err) {
              alert(err);
          } else {
                strJSONFileContent = json;
                console.log(strJSONFileContent);  
                console.log(`No of Unions: ${countUnion()}`);
                console.log(`Invalid Query Count: ${checkQryNamingConv()}`);
                console.log(arrInvalidQueries);
                console.log(`No of Joins: ${countJoin()}`);
                console.log(arrJoinQueries);
          }
      });  
    } else {
        alert('First Upload, then Test');
    }
};

let countUnion = () => {
    let cnt = 0;
    var queries = strJSONFileContent.report.queries[0].query;
    for (var i = 0; i < queries.length; i++) {
        if(queries[i].source[0].hasOwnProperty('queryOperation')) {
            var query = queries[i].source[0].queryOperation;
            if(query[0].$.hasOwnProperty('setOperation')) {
                if (query[0].$.setOperation.trim() === 'UNION') {
                    ++cnt;
                }
            }
        }
        
    }
    return cnt;
}

let countJoin = () => {
     var queries = strJSONFileContent.report.queries[0].query;
     let cnt = 0;
     queries.forEach((query) => {
        if(query.source[0].hasOwnProperty('joinOperation')) {
            ++cnt;
            arrJoinQueries.push(query.$.name);
        }
    });  
    return cnt;
}

let checkQryNamingConv = () => {
    let cnt = 0;
    var queries = strJSONFileContent.report.queries[0].query;
    queries.forEach((query) => {
        const regex = /^[q|Q]ry_/gm;
        const str = query.$.name;
        if(!regex.test(str)){
            ++cnt;
            arrInvalidQueries.push(str);
        }
    });
    return cnt;
}

export {
    readXMLFile, 
    loadSpinnerAndInit, 
    // convertToJSONFile, 
    countUnion, 
    countJoin, 
    checkQryNamingConv
};