function solve(field) {
    let dayCounter=0;
    let totalSpice=0
    while(field>=100){
        totalSpice+=field
        if (totalSpice>=26){
            totalSpice=totalSpice-26
        }
        field=field-10
        dayCounter++
    }
    if (totalSpice>=26){
        totalSpice=totalSpice-26
    }
    console.log(dayCounter);
    console.log(totalSpice);
}
solve(450)