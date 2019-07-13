    
function reverseNumber(num) {
    let isNegative = Math.sign(num);
    num = Math.abs(num);
    num = num +'';
    let numStr = '';
    for (let i = num.length - 1; i >= 0; i--) {
        numStr += num[i];
    }
    return Number(numStr) * isNegative;
}
reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);