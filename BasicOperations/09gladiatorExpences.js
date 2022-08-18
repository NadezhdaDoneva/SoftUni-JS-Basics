function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let everySecond = Math.floor(lostFights/2)
    let everyThird =  Math.floor(lostFights/3)
    let everySixth =  Math.floor(lostFights/6)
    let everySecondSecond = Math.floor(everySixth/2)

    let helmetMoney = everySecond*helmetPrice
    let swordMoney = everyThird*swordPrice
    let shieldMoney = everySixth*shieldPrice
    let armorMoney = everySecondSecond*armorPrice

    let total = helmetMoney+swordMoney+shieldMoney+armorMoney

    console.log(`Gladiator expenses: ${(total).toFixed(2)} aureus`);
}
solve(7,2,3,4,5 )