function repainting(input){
    const nylonPerSqMeter = 1.5
    const paintPerLitre = 14.5
    const thinerPerLitter = 5;
    const extraPaintPercent=0.1
    const ExtraNylon = 2;
    const bagPrice = 0.4;
    const nylon = Number(input[0])
    const paint = Number(input[1])
    const thinner = Number (input[2])
    const workHours = Number(input[3])

    const nylonCost = (nylon+ExtraNylon)*nylonPerSqMeter
    const paintCost = (paint+ (paint*extraPaintPercent))*paintPerLitre
    const thinnerCost = thinner *thinerPerLitter
    const materialCost = nylonCost+ paintCost + thinnerCost + bagPrice
    const workerCostPerHour = materialCost*0.3
    const totalWorkCost = workHours*workerCostPerHour
    const totalCost = totalWorkCost + materialCost
    console.log(totalCost)
}
repainting(["10", "11", "4", "8"])