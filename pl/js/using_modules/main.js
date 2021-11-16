import { conHello, fnPlusNumbers } from './lib_a.js';
console.log(conHello, '이름으로 내보내기 입니다.');
console.log('1 + 2 = ', fnPlusNumbers(1, 2));

import * as myLib from './lib_b.js';
console.log(myLib.conHello, '*을 사용한 이름으로 내보내기 입니다.');
console.log('3 + 4 = ', myLib.fnPlustNumbers(3, 4));

import fnAdder from './lib_c.js';
console.log('안녕하세요! 기본으로 내보내기 입니다.');
console.log('5 + 6 = ', fnAdder(5, 6));
