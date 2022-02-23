const $button = document.querySelector('button');
const $normalMsg = document.querySelector('.normal-msg');
const $debounceMsg = document.querySelector('.debounce-msg');
const $throttleMsg = document.querySelector('.throttle-msg');

/*
    500ms 보다 짧은 간격으로 반복적으로 발생하는 동안에는 이벤트 핸들러를 호출하지 않는다.
    이벤트가 발생하고 500ms 지난 후까지 중복 이벤트가 발생하지 않으면 이벤트 핸들러 호출.
*/
const debounce = (callback, delay) => {
    let timerId;
    return event => {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(callback, delay, event);
    };
};

/*
    500ms 보다 짧은 간격으로 반복적으로 발생하는 동안 500ms 간격으로 이벤트 핸들러 호출.
    즉, 5초 동안 500ms 이하 간격으로 이벤트가 계속 발생 했다면, 10번 이벤트 핸들러 호출.
*/
const throttle = (callback, delay) => {
    let timerId;
    return event => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback(event);
            timerId = null;
        }, delay, event);
    };
};

$button.addEventListener('click', () => {
    $normalMsg.textContent = +$normalMsg.textContent + 1;    
});

$button.addEventListener('click', debounce(() => {
    $debounceMsg.textContent = +$debounceMsg.textContent + 1;
}, 500));


$button.addEventListener('click', throttle(() => {
    $throttleMsg.textContent = +$throttleMsg.textContent + 1;
}, 500));
