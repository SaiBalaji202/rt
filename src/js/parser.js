import {fileNameTxt} from './app_global_declaration';
import {parseString} from './app_global_declaration';
import {resultPage} from './global_declaration';
import {showSpinner, hideSpinner} from './spinner';
import {redirect} from './redirect';
import {saveJSONData} from './utils';


let strXMLFileContent = '';
let strJSONFileContent = '';
let arrQueries = [];
let arrInvalidQueries = [];
let arrUnionQueries = [];
let arrJoinQueries = [];
let arrOuterJoinQueries = [];


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
        convertToJSONFile();
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
                let result = {
                    queries: {
                       count: countQueries(), 
                       queries: arrQueries
                    },
                    'invalid query names': {
                        count: countInvalidQueries(), 
                        queries: arrInvalidQueries
                    }, 
                    union: {
                        count: countUnion(), 
                        queries: arrUnionQueries
                    }, 
                    join: {
                        count: countJoin(), 
                        queries: arrJoinQueries
                    }, 
                    'outer join': {
                        count: countOuterJoin(), 
                        queries: arrOuterJoinQueries
                    }
                };
                saveJSONData('result', result);
          }
      });  
    } else {
        alert('First Upload, then Test');
    }
};

let countUnion = () => {
    arrUnionQueries = [];
    
    let cnt = 0;
    var queries = strJSONFileContent.report.queries[0].query;
    
    queries.forEach((query) => {
        // console.log(query);
        if(query.source[0].hasOwnProperty('queryOperation') && query.source[0].queryOperation[0].$.hasOwnProperty('setOperation') && query.source[0].queryOperation[0].$.setOperation.trim().toUpperCase() === 'UNION') {
            ++cnt;
            arrUnionQueries.push(query.$.name);
        }
    });
    return cnt;
}

let countJoin = () => {
     arrJoinQueries = [];
    
     let cnt = 0;
     var queries = strJSONFileContent.report.queries[0].query;
     
     queries.forEach((query) => {
        if(query.source[0].hasOwnProperty('joinOperation')) {
            ++cnt;
            arrJoinQueries.push(query.$.name);
        }
    });  
    return cnt;
}

let countQueries = () => {
    arrQueries = [];
    let cnt = 0;
    var queries = strJSONFileContent.report.queries[0].query;
    
    queries.forEach((query) => {
        ++cnt;
        arrQueries.push(query.$.name);
    });
    return cnt;
}

let countInvalidQueries = () => {
    arrInvalidQueries = [];
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

// By GV
let countOuterJoin = () => {
    arrOuterJoinQueries = [];
    let cnt = 0;
    var queries = strJSONFileContent.report.queries[0].query;
    
    queries.forEach((query) => {
        if(query.source[0].hasOwnProperty('joinOperation')) {
            if(query.source[0].joinOperation[0].joinOperands[0].joinOperand[0].$.cardinality.includes("0")){
                arrOuterJoinQueries.push(query.$.name);
                ++cnt;
            }
        }
    });
    return cnt;
};

export {
    readXMLFile, 
    loadSpinnerAndInit
};