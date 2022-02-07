HTMLElement.prototype.load = function load(url, callback) {
    function callback_wrapper(r) {
        if (callback) {
            const ok = r instanceof Response ? r.ok : false;
            callback(ok, r);
        }
    }

    fetch(url).then(response => {
        if (response.ok) {
            return response.text().then(text => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, "text/html");
                const $contents = doc.getElementsByTagName('body')[0];
                const $fragments = new DocumentFragment();
                
                $fragments.replaceChildren(...$contents.children);
                this.appendChild($fragments);

                callback_wrapper(response);
            });    
        }
        callback_wrapper(response);
    }).catch(error => {
        callback_wrapper(error);
    });    
};

function $(selector) {
    return document.querySelector(selector);
}

// $subPage = document.getElementById('sub-page');
// $subPage.load('http://127.0.0.1:5500/DOM/sub-page.html', (success, result) => {
//     if (success) {
//         console.log('load success: ', result);
//         return;
//     }
//     console.error('load error: ', result);
// });

$('#sub-page').load('http://127.0.0.1:5500/DOM/sub-page.html');