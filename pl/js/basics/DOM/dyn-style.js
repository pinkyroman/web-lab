const style = document.createElement('style');
document.head.appendChild(style);
const stylesheet = style.sheet;
stylesheet.insertRule(`.new-box { 
    margin-top: 8px;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    padding: 16px;
    border: 1px dotted red;
    border-radius: 10px;
    text-align: center;
    text-shadow: 1px 1px 2px black;
}`);

const stylesheets = [...document.styleSheets].forEach(ss => {
    console.log(ss);
});

