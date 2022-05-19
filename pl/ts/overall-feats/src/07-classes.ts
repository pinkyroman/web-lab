// Constructors
class Album {
    constructor(private artist: string, private title: string) { // Album class will have a private artist and title properties automatically.
    }

    play() {
        console.log(`Playing ${this.title} by ${this.artist}`);
    }
}

// Properties
interface StockItem {
    description: string;
    asin: string;
}

class WharehouseLocation {
    private _stockItem: StockItem;

    constructor(public aisle: number, public slot: string) {
    }

    // get stockItem(): StockItem {
    //     return this._stockItem;
    // }
    get stockItem() {
        return this._stockItem;
    }

    set stockItem(value: StockItem) {
        this._stockItem = value;
    }
}


// Implementing Interfaces and extending Classes
interface Audio {
    play(): any;
}

class Song implements Audio {
    constructor(private artist: string, private title: string) {
    }

    play(): void {
        console.log(`Playing ${this.title} by ${this.artist}`);
    }

    static Comparer(a: Song, b: Song) {
        if (a.title === b.title) {
            return 0;
        }
        return a.title < b.title ? -1 : 1;
    }
}

class Playlist {
    constructor(public songs: Song[]) {
    }

    play() {
        const song = this.songs.pop();
        song?.play();
    }

    sort() {
        this.songs.sort(Song.Comparer);
    }
}

class RepeatingPlaylist extends Playlist {
    private songIndex = 0;

    constructor(songs: Song[]) {
        super(songs);
    }

    play() {
        this.songs[this.songIndex].play();
        this.songIndex++;
        if (this.songIndex >= this.songs.length) {
            this.songIndex = 0;
        }
    }
}

// ABSTRACT CLASSES
abstract class Logger {
    abstract notify(message: string): void;

    protected getMessage(message: string): string {
        return `Information: ${new Date().toUTCString()} ${message}`;
    }
}

class ConsoleLogger extends Logger {
    notify(message: string): void {
        console.log(this.getMessage(message));
    }
}

let logger: Logger;

// Error: Cannot create an instance of an abstract class
// logger = new Logger();

logger = new ConsoleLogger();
logger.notify('Hello World');


////////////////////////////////////////////////////////////////////////////////
// SCOPE
/*
    이벤트에서 클래스 메서드를 호출하거나, 클래스 메서드를 콜백으로 사용하면, 
    메서드의 원래 컨텍스트가 손실되어 인스턴스 메서드 및 인스턴스 속성을 사용하는 데 
    문제가 발생할 수 있다. 컨텍스트가 바뀌면, this 키워드의 값이 변경되기 때문이다.

    이런 경우, 클래스를 수정하지 말고, 콜백을 설정할 때 스코프를 유지하도록 하는 것이 좋다.
*/

/* 컨텍스트가 변경되는 예제

class ClickCounter {
    private count = 0;

    registerClick() {
        this.count++;
        console.log(this.count);
    }
}

const clickCounter = new ClickCounter();

decodeURIComponent.getElementById('target').onclick = clickCounter.registerClick;
*/

// 이와 같은 문제를 해결하기 위한 방법 몇 가지가 있다

/* (1) 메서드 대신 속성 및 화살표 함수 사용하기
    반드시 이벤트 혹은 콜백에서 사용된다는 보장이 있다면 유용한 방법.
    하지만, 그 외 언제든 다른 곳에서도 사용될 수 있다면, 추천되지 않는다.
    또한, 클래스의 인스턴스가 수백, 수천 개 생성되어야 한다면, 이 방법은 좋지 않다(인스턴스 마다 생성되기 때문).

class ClickCounter {
    private count = 0;

    registerClick = () => { // registerClick 은 속성. 값은 화살표 함수. 
        this.count++;
        console.log(this.count);
    }
}
*/

/* (2) 호출 시점에 함수로 래핑
    클래스는 손대지 않고 싶다면, 인스턴스 메서드에 대한 호출을 함수 내에서 래핑하여 클로저를 생성하도록 할 수 있다.

document.getElementById('target').onclick = function () {
    clickCounter.registerClick();
};
*/

/* (3) ECMAScript 5 Bind Function
    클래스를 손대지 않는 또 다른 방법은 ECMAScript 5 혹은 그 이상의 JavaScript에서 제공하는 bind() 함수를 사용하는 것.
    bind() 함수는 메서드에 대한 컨텍스트를 설정한다.

    const clickHandler = clickCounter.registerClick.bind(clickCounter);
    document.getElementById('target').onclick = clickHandler;
*/

/* (4) 이벤트 캡처 (Event Capturing)
    이벤트 매개변수를 사용해야 하는 경우, 다음과 같이 화살표 함수를 사용한다.

class ClickCounter {
    private count = 0;

    registerClick(id: string) {
        this.count++;
        console.log(this.count);
    }
}

const clickCounter = new ClickCounter();
document.getElementById('target').onClick = (e) => {
    const target = <Element>e.target || e.srcElement;
    clickCounter.registerClick(target.id);
};

*/


// instanceof 연산자: 클래스 인스턴스의 타입을 테스트 (clickCounter instanceof ClickCounter)

// in 연산자: 프로퍼티가 있는지 확인 (예: 'id' in clickCounter)

// 런타임 타입 이름 가져오기: clickCOunter.constructor.name

