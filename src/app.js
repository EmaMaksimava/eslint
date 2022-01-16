const a = 145;

function foo(name) {
    const firstName = name;
    return firstName;
}
console.log(window);
console.log(foo('emma'));
console.log(a);

function loopArray(arr) {
    arr.forEach((item) => console.log(item));
}

loopArray([1, 2, 3, 4, 5]);
loopArray([10, 20, 30, 40, 50]);
loopArray([100, 200, 300, 400, 500]);
