function reverse(list) {
    var reversedList = [];
    for (var i = (list.length - 1); i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}
var letters = ['a', 'b', 'c', 'd'];
console.log(reverse(letters));
var numbers = [1, 2, 3, 4];
console.log(reverse(numbers));
