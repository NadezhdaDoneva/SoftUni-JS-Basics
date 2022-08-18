function solve(input){
    let numStr = input.toString()
    let sum=0

    for (let i=0; i<numStr.length; i++){
        let temp = Number(numStr[i]);
        sum+= temp
    }
    console.log(sum);
}
solve (32714)