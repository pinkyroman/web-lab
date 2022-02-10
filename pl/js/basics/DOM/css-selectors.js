// colors
const colors = {
    'theme-dark': {
        'color': '#212121',
        'lighten1': '#424242',
        'lighten2': '#616161',
        'lighten3': '#757575',
        'lighten4': '#BDBDBD',
        'lighten5': '#E0E0E0',
    },
    'theme-red': {
        'color': '#F44336',
        'lighten1': '#EF5350',
        'lighten2': '#E57373',
        'lighten3': '#EF9A9A',
        'lighten4': '#FFCDD2',
        'lighten5': '#FFEBEE',
    },
    'theme-purple': {
        'color': '#9C27B0',
        'lighten1': '#AB47BC',
        'lighten2': '#BA68C8',
        'lighten3': '#CE93D8',
        'lighten4': '#E1BEE7',
        'lighten5': '#F3E5F5',
    },
};

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

// style box class
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    const style = box.style;
    style.marginTop = '8px';
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

function appyTheme(theme) {
    document.querySelectorAll(`.box.${theme}`).forEach(box => {
        setBoxColor(box, theme);
    });
    
    document.querySelectorAll(`.${theme} > .box-title`).forEach(boxTitle => {
        setBoxTitleColor(boxTitle, theme);
    });
    
    document.querySelectorAll(`.${theme} > .box-content`).forEach(boxContent => {
        setBoxContentColor(boxContent, theme);
    });
}

document.getElementsByName('opt-box-theme').forEach(radio => {
    radio.addEventListener('click', function() {        
        if (this.checked) {
            const theme = this.value;
            document.querySelectorAll('.box').forEach(box => {
                box.classList.forEach(className => {
                    if (className.startsWith('theme-')) {
                        box.classList.remove(className);
                    }
                });
                box.classList.add(theme);                
            });
            appyTheme(theme);
        }
    });
});
