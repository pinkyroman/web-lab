// property descriptor 를 사용하여 완전하게 복사 할 수 있을까 ... ?
export function clone(src) {
    // src 의 constructor 를 가져와서 새로운 객체를 생성한다. 
    let cloned = new src.constructor();

    /*
        for .. in 은 자신만의 고유 프로퍼티뿐 아니라, 상속받은 프로퍼티도 포함한다.
        따라서, 자신만의 프로퍼티인지 확인하는 코드가 추가될 수 있다.
        자신만의 프로퍼티에 대한 연산인 경우, Object.keys/values/entries 메서드를
        사용하는 것이 좋다.

        이 함수의 경우, 소스의 생성자를 이용해서 기본 인스턴스를 생성하고 있으므로,
        (즉, 상속 받아야 할 프로퍼티는 프로토타입을 통해 상속 받으므로)
        for .. in 을 사용해도 무방하다 (정말??? 메서드가 아닌 일반 값 속성의 경우에도 괜찮나?).
    */
    for (let prop in src) {
        if (src.hasOwnProperty(prop)) {
            if (typeof src[prop] === 'object') {
                cloned[prop] = clone(src[prop]);
            } else {
                cloned[prop] = src[prop];
            }
        }
    }
    return cloned;
}

export function equals(dest, src) {
    if (dest === src) {
        return true;
    }

    if (typeof dest !== typeof src) {
        return false;
    }

    if (typeof dest !== 'object') {
        return false;
    }

    if (dest.constructor !== src.constructor) {
        return false;
    }

    if (dest.length !== src.length) {
        return false;
    }

    for (let prop in dest) {
        if (dest.hasOwnProperty(prop)) {
            if (!equals(dest[prop], src[prop])) {
                return false;
            }
        }
    }
    return true;
}