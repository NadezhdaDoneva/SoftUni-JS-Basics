function solve(fnum, operator, snum){
    let result =0
    switch (operator) {
        case '-':
            result=fnum-snum
            break;
        case '+':
            result=fnum+snum
            break;
        case '*':
            result=fnum*snum
            break;
        case '/':
            result=fnum/snum
            break;
    }
    console.log(result.toFixed(2))
}
solve(5, '+', 8)