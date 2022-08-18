function petShop(input){
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let priceCDog = dogFood*2.5;
    let priceCat = catFood*4;
    let total = priceCDog+priceCat;
    console.log(`${total} lv.`)
}
petShop(["2", "3"])