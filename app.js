import {logs} from "./logs.js";
displayAllLogs();

function displayAllLogs() {
    for (let i = 0; i < logs.length; i++) {
        const logEntry = logs[i];
        let logDiv = document.createElement('div');
        document.getElementById('logs').appendChild(logDiv);
        displayLogEntry(logDiv, logEntry);
    }
}

function displayLogEntry(logElement, logEntry) {  
    logElement.innerHTML += `<h1>${logEntry.title}</h1>`;
    logElement.innerHTML += `<p>${logEntry.paragraph}<p>`;
    let ulElement = document.createElement('ul');
    logElement.appendChild(ulElement);
    populateList(logElement, logEntry.list);
    displayLink(logEntry, logElement);
}

function displayLink(logEntry, logElement) {
    const linkElement = document.createElement('a');
    linkElement.innerText = "link";
    linkElement.setAttribute('href', logEntry.link);
    logElement.appendChild(linkElement);
}

function populateList(ulElement, logEntryList) {
    for (let index = 0; index < logEntryList.length; index++) {
        let newlistElement = document.createElement('li');
        newlistElement.innerText = logEntryList[index];
        ulElement.appendChild(newlistElement);
    }
}
