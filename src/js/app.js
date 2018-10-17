let navMenus = document.querySelector('.nav-menus');
let navMenu = document.querySelector('.nav-menu');
let nm = document.querySelector('#nav-menu-icon');
let backdrop = document.querySelector('.backdrop');

let modalWindow = document.querySelector('.modal');
let modalClose = document.querySelector('.closeBtn');
let modalOpen = document.querySelector('.modal-trigger');

let fileTest = document.querySelector('.file-input-test');

let fileInput = document.querySelector('#file-input-file');
let fileNameTxt = document.querySelector('#file-input-name');

let parseString = require('xml2js').parseString;

let strXMLFileContent = '';
let strJSONFileContent = '';
let arrInvalidQueries = [];
let arrJoinQueries = [];

// navMenus hide when click on the outside region of navMenu 
window.addEventListener("click", (e) => {
    if (window.innerWidth <= 600 && navMenu.style.display !== "none" && e.target !== nm) {
        backdrop.style.display = "none";
        navMenus.style.display = "none";
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
        navMenus.style.display = "flex";
    } else {
        navMenus.style.display = "none";
    }
});

// navMenus hide and show
navMenu.addEventListener('click', () => {
    if (!navMenus.style.display || navMenus.style.display === "none") {
        backdrop.style.display = "block";
        navMenus.style.display = "flex";            
    } else {
        backdrop.style.display = "none";
        navMenus.style.display = "none";
    }    
});

// open and close modal
let closeModal = () => {
    modalWindow.style.display = 'none';
    backdrop.style.display = 'none';
    backdrop.style.zIndex = 1;
    backdrop.style.top = "50px";
};

let openModal = () => {
    backdrop.style.display = 'block';
    modalWindow.style.display = 'block';
    backdrop.style.zIndex = 2;
    modalWindow.style.zIndex = 3;
    backdrop.style.top = 0;    
}

backdrop.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
modalOpen.addEventListener('click', openModal);

// Test the xml file
let readXMLFile = (e) => {
    fileNameTxt.value = e.target.files[0].name;
      var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
            strXMLFileContent = fileLoadedEvent.target.result;
        };
  fileReader.readAsText(e.target.files[0], "UTF-8");
};

fileInput.addEventListener('change', readXMLFile);

// Testing the Report

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

fileTest.addEventListener('click', convertToJSONFile);
