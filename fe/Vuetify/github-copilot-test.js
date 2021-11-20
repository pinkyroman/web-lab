function calculateDaysBetweenDates(begin, end) {
    const start = new Date(begin);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// find all files from a directory having a extenstion '*.txt'
// Language: javascript
function getFilesFromDirectory(dir, ext) {
    const fs = require('fs');
    const path = require('path');
    const files = fs.readdirSync(dir);
    const filteredFiles = files.filter(file => path.extname(file) === ext);
    return filteredFiles;
}

// create a Vue instance
// Language: javascript
function createVueInstance(el, data) {
    const Vue = require('vue');
    const vue = new Vue({
        el,
        data
    });
    return vue;
}
