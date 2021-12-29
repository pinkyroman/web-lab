export const Level = {
    CRITICAL: 0x01,
    MAJOR: 0x02,
    MINOR: 0x04,
    ERROR: 0x08,
    INFO: 0x10,
    WARNING: 0x20,
    DEBUG: 0x40,
    toString: (level) => getKey(Level, level),
};

function getKey(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
}

export const Category = {
    LOGIN: 1,
    ACCOUNT: 2,
    POLICY: 3,
    OPERATION: 4,
    SESSION: 5,
    DOCUMENT: 6,
    toString: (category) => getKey(Category, category),
};

const consoleLogger = {
    [Level.CRITICAL]: console.warn,
    [Level.MAJOR]: console.warn,
    [Level.MINOR]: console.warn,
    [Level.ERROR]: console.error,
    [Level.INFO]: console.info,
    [Level.WARNING]: console.warn,
    [Level.DEBUG]: console.debug,
};
console.log(consoleLogger);

export default (function () {
    function Logger(defaultMenu, defaultCategory = Category.OPERATION, defaultLevel = Level.INFO) {
        // private members
        let $menu = defaultMenu;
        let $level = defaultLevel;
        let $category = defaultCategory;
        let $enableConsoleOutput = true;

        // property accessors
        Object.defineProperties(this, {
            category: {
                get: () => $category,
                set: (value) => {
                    $category = value;
                },
            },
            level: {
                get: () => $level,
                set: (value) => {
                    $level = value;
                },
            },
            menu: {
                get: () => $menu,
                set: (value) => {
                    $menu = value;
                },
            },
        });

        // public instance methods (chainable)
        this.enableConsoleOutput = () => {
            $enableConsoleOutput = true;
            return this;
        };

        this.disableConsoleOutput = () => {
            $enableConsoleOutput = false;
            return this;
        };

        this.critical = (message, category = $category) => {
            let level = Level.CRITICAL;
            Object.getPrototypeOf(this).log(message, category, level, $menu);
            $consoleLog(message, category, level);
            return this;
        };

        this.major = (message, category = $category) => {
            let level = Level.MAJOR;
            Object.getPrototypeOf(this).log(message, category, level, $menu);
            $consoleLog(message, category, level);
            return this;
        };

        this.minor = (message, category = $category) => {
            let level = Level.MINOR;
            Object.getPrototypeOf(this).log(message, category, level, $menu);
            $consoleLog(message, category, level);
            return this;
        };

        this.error = (message, category = $category) => {
            let level = Level.ERROR;
            Object.getPrototypeOf(this).log(message, category, level, $menu);
            $consoleLog(message, category, level);
            return this;
        };

        this.info = (message, category = $category) => {
            let level = Level.INFO;
            Object.getPrototypeOf(this).log(message, category, level, $menu);
            $consoleLog(message, category, level);
            return this;
        };

        this.warning = (message, category = $category) => {
            let level = Level.WARNING;
            Object.getPrototypeOf(this).log(message, category, level, $menu);
            $consoleLog(message, category, level);
            return this;
        };

        this.debug = (message, category = $category) => {
            let level = Level.DEBUG;
            Object.getPrototypeOf(this).log(message, category, level, $menu);
            $consoleLog(message, category, level);
            return this;
        };

        // 기본 레벨 및 카테고리 설정을 기반으로 로깅
        this.log = (message, category = $category, level = $level) => {
            Object.getPrototypeOf(this).log(message, category, level, $menu);
            $consoleLog(message, category, level);
            return this;
        };

        // private methods
        function $consoleLog(message, category, level) {
            if ($enableConsoleOutput) {
                consoleLogger[level](`[${$menu}][${Category.toString(category)}:${Level.toString(level)}] ${message}`);
            }
        }
    }

    // public inheritable methods
    Logger.prototype.log = function (message, category, level, menu) {
        console.log(`[${menu}][${Category.toString(category)}:${Level.toString(level)}] ${message}`);
    };

    return Logger;
})();
