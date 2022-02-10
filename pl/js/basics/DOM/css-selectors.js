// colors
const colors = {
    'box-red': {
        'color': '#F44336',
        'lighten1': '#EF5350',
        'lighten2': '#E57373',
        'lighten3': '#EF9A9A',
        'lighten4': '#FFCDD2',
        'lighten5': '#FFEBEE',
    },
    'box-purple': {
        'color': '#9C27B0',
        'lighten1': '#AB47BC',
        'lighten2': '#BA68C8',
        'lighten3': '#CE93D8',
        'lighten4': '#E1BEE7',
        'lighten5': '#F3E5F5',
    },
};

// style box class
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    const style = box.style;
    style.margin = '8px 4px';
    style.padding = '4px';
    style.border = '1px solid';
    style.borderRadius = '0px 10px';
});

const boxTitles = document.querySelectorAll('.box-title');
boxTitles.forEach(boxTitle => {
    const style = boxTitle.style;
    style.margin = '2px';
    style.padding = '4px';
    style.border = '1px solid';
    style.borderRadius = '0px 10px 0px 0px';

    style.fontSize = '1.2em';
    style.fontWeight = 'bold';
});

const boxContents = document.querySelectorAll('.box-content');
boxContents.forEach(boxContent => {
    const style = boxContent.style;
    style.margin = '4px 2px';
    style.padding = '8px';
    style.border = '1px solid';
    style.borderRadius = '0px 0px 0px 10px';
});

document.querySelectorAll('.box.box-red').forEach(box => {
    setBoxColor(box, 'box-red');
});

document.querySelectorAll('.box-red > .box-title').forEach(boxTitle => {
    setBoxTitleColor(boxTitle, 'box-red');
});

document.querySelectorAll('.box-red > .box-content').forEach(boxContent => {
    setBoxContentColor(boxContent, 'box-red');
});

document.querySelectorAll('.box.box-purple').forEach(box => {
    setBoxColor(box, 'box-purple');
});

document.querySelectorAll('.box-purple > .box-title').forEach(boxTitle => {
    setBoxTitleColor(boxTitle, 'box-purple');
});

document.querySelectorAll('.box-purple > .box-content').forEach(boxContent => {
    setBoxContentColor(boxContent, 'box-purple');
});

function setBoxColor(box, theme) {
    const c = colors[theme];
    const style = box.style;

    style.backgroundColor = c.lighten4;
    style.borderColor = c.color;
}

function setBoxTitleColor(boxTitle, theme) {
    const style = boxTitle.style;
    const c = colors[theme];
    
    style.color = 'white';
    style.backgroundColor = c.color;
    style.borderColor = c.color;
}

function setBoxContentColor(boxContent, theme) {
    const style = boxContent.style;
    const c = colors[theme];
    
    style.color = 'white';
    style.backgroundColor = c.lighten2;
    style.borderColor = c.lighten2;
}
