function triangleOfNumbers(num) {
    let str = ""
    for (i=1; i<=num; i++){
        for(j=1; j<=i; j++){
            str+= i + " "
        }
        console.log(str)
        str=""
    }
}
triangleOfNumbers(3)