let a = prompt("введіть перше число",  "");
let b = prompt("введіть друге число",  "");
while ( (a == "") || (isNaN(a)) ) {
    a = prompt("введіть перше число", a + "");
    b = prompt("введіть друге число", b + "");
}
const oper = prompt("введіть математичну операцію");
const divide =  (a, b) => {
    return a / b;
}
const multiple =  (a, b) => {
    return a * b;
}
const sub = (a, b) => {
    return a - b;     
}
const sum = (a, b) => {
    return a + b; 
    // document.write(`сума чисел: ${res}`);
}
const show = (callBackFinction, a, b) => {
    const result = callBackFinction(a, b);
    if (result == Infinity) {
        alert('Помилка');
    } else {
        document.write(result);
    }
}
if (oper == "/") {
    show(divide, a, b);
    if (b == 0) {
        alert(Помилка);
    }
    document.write(`<hr/>`);
}
if (oper == "*") {
    show(multiple, a, b);
    document.write(`<hr/>`);
}
if (oper == "-") {
    show(sub, a, b);
    document.write(`<hr/>`);
}
if (oper == "+") {
    show(sum, a, b);
    document.write(`<hr/>`);
}