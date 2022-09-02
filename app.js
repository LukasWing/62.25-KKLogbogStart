import {logs} from "./logs.js";
console.log(logs); 

for (let i = 0; i < logs.length; i++) {
    const logEntry = logs[i];
    let logDiv = document.createElement('div');
    document.getElementById('logs').appendChild(logDiv);
    displayLogEntry(logDiv, logEntry);
}
displayLogEntry(document.getElementById("modul3"), logs[0]);

function displayLogEntry(logElement, logEntry) {  
    logElement.innerHTML += `<h1>${logEntry.title}</h1>`;
    logElement.innerHTML += `<p>${logEntry.paragraph}<p>`;
    let ulElement = document.createElement('ul');
    logElement.appendChild(ulElement);
    populateList(logElement, logEntry.list);
}

function populateList(ulElement, logEntryList) {
    for (let index = 0; index < logEntryList.length; index++) {
        let newlistElement = document.createElement('li');
        newlistElement.innerText = logEntryList[index];
        ulElement.appendChild(newlistElement);
    }
}
