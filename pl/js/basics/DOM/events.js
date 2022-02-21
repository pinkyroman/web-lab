document.addEventListener('DOMContentLoaded', function () {
    console.log('!!!!! DOMContentLoaded !!!!');

    const button = document.getElementById('btn-1');
    button.onclick = function () {
        console.log('handled by onclick property.');
    };
    button.addEventListener('click', function () {
        console.log('handled by addEventListener.');
        button.removeEventListener('click', arguments.callee);
        button.onclick = null;
        console.log('all event handlers removed.');
    });
});

document.addEventListener('readystatechange', function () {
    console.log('!!!!! readState changed to ' + document.readyState);
});

window.addEventListener('load', function () {
    alert('!!!!! load event fired.');
});

window.addEventListener('unload', function () {
    alert('!!!!! unload event fired.');
});



