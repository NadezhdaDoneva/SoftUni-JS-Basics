function rounding(number, precision){
    if (precision>15){
        precision=15
    }
    let fix = number.toFixed(precision)
    console.log(parseFloat(fix))
}
rounding(3.310739489934794844, 17)