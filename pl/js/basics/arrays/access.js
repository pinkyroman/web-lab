const samples = [1, 2, , , 5];
console.log(`samples: [${samples}]`);

// 인덱스를 이용한 접근
console.log(`samples[1]: ${samples[1]}`);
console.log(`samples[4]: ${samples[4]}`);

// 존재하지 않는 요소에 접금하면 undefined 반환
console.log(`samples[2]: ${samples[2]}`);
console.log(`samples[10]: ${samples[10]}`);

// 인덱스를 이용한 요소 추가
samples[2] = 3;
console.log(`samples[2] = 3: [${samples}]`);
samples[5] = 6;
console.log(`samples[5] = 6: [${samples}]`);
samples[9] = 10;
console.log(`samples[10] = 9: [${samples}]`);

// 양의 정수 이외의 인덱스 사용 시, 지정한 인덱스를 이름으로 하는 프로퍼티로 추가 되지만,
// length 프로퍼티에 영향을 주지 않음.
samples[-1] = -1;
console.log(`samples[-1] = -1: [${samples}], `, samples);

samples['hi'] = 'hi';
console.log(`samples['hi'] = 'hi': [${samples}], `, samples);

// 단, 양의 정수 값에 해당하는 문자열은 인덱스로 사용 가능.
samples['8'] = 9;
console.log(`samples['8'] = '9': [${samples}], `, samples);
samples['15'] = 16;
console.log(`samples['15'] = '16': [${samples}], `, samples);

// delete 연산자를 이용한 배열 요소 삭제
console.log(`before delete: [${samples}], ${samples.length} items.`);
console.log(`samples.length: ${samples.length}`);
delete samples[0];
console.log(`delete samples[0]: [${samples}], `, samples);
console.log(`samples.length: ${samples.length}`);
// delete 연산자는 객체의 프로퍼티를 삭제 하는 것.
// 따라서, 배열 요소의 인덱스에 해당하는 프로퍼티만 삭제하므로, length는 변함이 없음.
