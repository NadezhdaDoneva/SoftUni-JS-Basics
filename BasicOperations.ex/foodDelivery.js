function foodDelivery(input){
    //needed stuff
    const chickenMenuPrice = 10.35
    const fishMenuPrice = 12.4
    const vegieMenuPrice = 8.15
    const deliveryPrice = 2.5
    //input from the user
    const chickenMenuCount = Number(input[0]);
    const fishMenuCount = Number(input[1]);
    const vegieMenuCount = Number(input[2]);
    //solution
    const chickenMealPrice = chickenMenuCount * chickenMenuPrice
    const fishMealPrice = fishMenuCount * fishMenuPrice
    const vegieMealPrice = vegieMenuCount * vegieMenuPrice
    const totalMealPrice = chickenMealPrice + fishMealPrice + vegieMealPrice
    const desertPrice = totalMealPrice*0.2
    const finalPrice = totalMealPrice + desertPrice + deliveryPrice
    console.log(finalPrice)
}
foodDelivery(["2", "4", "3"])