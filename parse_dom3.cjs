const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const babel = require('@babel/core');

function renderComponent(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    const dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"></div></body></html>');
    const document = dom.window.document;
    
    // We just want to parse the JSX to find elements matching the selector structure.
    // It's easier to just find the file that has 3 images inside section:nth(4).
    
}
